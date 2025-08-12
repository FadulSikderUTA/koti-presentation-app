"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import CryptoJS from 'crypto-js';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  checkSession: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Get configuration from environment variables
const getEncryptedPassword = () => {
  const envPassword = process.env.NEXT_PUBLIC_ENCRYPTED_PASSWORD;
  
  // Fallback to hardcoded hash of "koti2025" for development if env var is missing
  const fallbackPassword = CryptoJS.SHA256('koti2025').toString();
  
  if (!envPassword) {
    console.warn('⚠️ NEXT_PUBLIC_ENCRYPTED_PASSWORD environment variable not found. Using development fallback.');
    return fallbackPassword;
  }
  
  return envPassword;
};

const getSessionDuration = () => {
  const envDuration = process.env.NEXT_PUBLIC_SESSION_DURATION_MINUTES;
  const minutes = envDuration ? parseInt(envDuration, 10) : 30; // Default to 30 minutes
  return minutes * 60 * 1000; // Convert to milliseconds
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if session is valid
  const checkSession = () => {
    if (typeof window === 'undefined') return false;
    
    const sessionTimestamp = localStorage.getItem('sessionTimestamp');
    if (sessionTimestamp) {
      const now = new Date().getTime();
      const sessionDuration = getSessionDuration();
      const isValid = now - parseInt(sessionTimestamp) < sessionDuration;
      
      if (isValid) {
        // Update session timestamp to extend session
        localStorage.setItem('sessionTimestamp', now.toString());
        return true;
      } else {
        // Session expired, clear it
        localStorage.removeItem('sessionTimestamp');
        return false;
      }
    }
    return false;
  };

  // Update session timestamp
  const updateSessionTimestamp = () => {
    if (typeof window === 'undefined') return;
    const now = new Date().getTime();
    localStorage.setItem('sessionTimestamp', now.toString());
  };

  // Login function
  const login = (password: string): boolean => {
    const enteredPasswordHash = CryptoJS.SHA256(password).toString();
    const expectedPasswordHash = getEncryptedPassword();
    
    if (enteredPasswordHash === expectedPasswordHash) {
      updateSessionTimestamp();
      setIsAuthenticated(true);
      console.log('✅ Authentication successful');
      return true;
    }
    
    console.warn('❌ Authentication failed - incorrect password');
    return false;
  };

  // Logout function
  const logout = () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('sessionTimestamp');
    setIsAuthenticated(false);
  };

  // Check session on component mount and set up periodic session checks
  useEffect(() => {
    if (checkSession()) {
      setIsAuthenticated(true);
    }

    // Set up periodic session validation (every minute)
    const interval = setInterval(() => {
      if (isAuthenticated && !checkSession()) {
        setIsAuthenticated(false);
      }
    }, 60 * 1000); // Check every minute

    return () => clearInterval(interval);
  }, [isAuthenticated]);

  const value = {
    isAuthenticated,
    login,
    logout,
    checkSession
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}