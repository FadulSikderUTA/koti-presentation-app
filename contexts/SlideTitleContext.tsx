"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';

export interface SlideTitle {
  slideNumber: number;
  title: string;
}

interface SlideTitleContextType {
  slideTitles: SlideTitle[];
  registerSlideTitle: (slideNumber: number, title: string) => void;
  unregisterSlideTitle: (slideNumber: number) => void;
  getSlideTitleByNumber: (slideNumber: number) => string | null;
  getAllSlideTitles: () => SlideTitle[];
}

const SlideTitleContext = createContext<SlideTitleContextType | undefined>(undefined);

export function SlideTitleProvider({ children }: { children: React.ReactNode }) {
  const [slideTitles, setSlideTitles] = useState<SlideTitle[]>([]);

  const registerSlideTitle = useCallback((slideNumber: number, title: string) => {
    setSlideTitles(prev => {
      // Remove existing entry for this slide number and add new one
      const filtered = prev.filter(item => item.slideNumber !== slideNumber);
      const newEntry = { slideNumber, title };
      
      // Insert in correct position to maintain order
      const newArray = [...filtered, newEntry];
      return newArray.sort((a, b) => a.slideNumber - b.slideNumber);
    });
  }, []);

  const unregisterSlideTitle = useCallback((slideNumber: number) => {
    setSlideTitles(prev => prev.filter(item => item.slideNumber !== slideNumber));
  }, []);

  const getSlideTitleByNumber = useCallback((slideNumber: number): string | null => {
    const found = slideTitles.find(item => item.slideNumber === slideNumber);
    return found ? found.title : null;
  }, [slideTitles]);

  const getAllSlideTitles = useCallback((): SlideTitle[] => {
    return [...slideTitles].sort((a, b) => a.slideNumber - b.slideNumber);
  }, [slideTitles]);

  const value: SlideTitleContextType = {
    slideTitles,
    registerSlideTitle,
    unregisterSlideTitle,
    getSlideTitleByNumber,
    getAllSlideTitles
  };

  return (
    <SlideTitleContext.Provider value={value}>
      {children}
    </SlideTitleContext.Provider>
  );
}

export function useSlideTitleContext(): SlideTitleContextType {
  const context = useContext(SlideTitleContext);
  if (context === undefined) {
    throw new Error('useSlideTitleContext must be used within a SlideTitleProvider');
  }
  return context;
}