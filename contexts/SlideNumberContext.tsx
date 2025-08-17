"use client";

import React, { createContext, useContext, ReactNode } from 'react';

interface SlideNumberContextType {
  slideNumber: number;
}

const SlideNumberContext = createContext<SlideNumberContextType | undefined>(undefined);

interface SlideNumberProviderProps {
  children: ReactNode;
  slideNumber: number;
}

export function SlideNumberProvider({ children, slideNumber }: SlideNumberProviderProps) {
  const value: SlideNumberContextType = {
    slideNumber
  };

  return (
    <SlideNumberContext.Provider value={value}>
      {children}
    </SlideNumberContext.Provider>
  );
}

export function useSlideNumber(): number {
  const context = useContext(SlideNumberContext);
  if (context === undefined) {
    // If no context, return 1 as default
    return 1;
  }
  return context.slideNumber;
}