"use client";

import React, { ReactElement } from 'react';
import { SlideNumberProvider } from '@/contexts/SlideNumberContext';

interface SlideWrapperProps {
  children: ReactElement;
  slideNumber: number;
}

export default function SlideWrapper({ children, slideNumber }: SlideWrapperProps) {
  return (
    <SlideNumberProvider slideNumber={slideNumber}>
      {children}
    </SlideNumberProvider>
  );
}