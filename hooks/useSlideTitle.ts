"use client";

import { useEffect } from 'react';
import { useSlideTitleContext } from '@/contexts/SlideTitleContext';
import { useSlideNumber } from '@/contexts/SlideNumberContext';

/**
 * Hook to register a slide title with the SlideTitleContext
 * Automatically registers/unregisters the title when component mounts/unmounts
 * 
 * @param title - The title of the slide
 */
export function useSlideTitle(title: string) {
  const { registerSlideTitle, unregisterSlideTitle } = useSlideTitleContext();
  const slideNumber = useSlideNumber();

  useEffect(() => {
    // Register the slide title when component mounts
    registerSlideTitle(slideNumber, title);

    // Cleanup: unregister when component unmounts
    return () => {
      unregisterSlideTitle(slideNumber);
    };
  }, [slideNumber, title, registerSlideTitle, unregisterSlideTitle]);

  return slideNumber;
}