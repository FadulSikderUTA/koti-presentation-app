import { useEffect, MutableRefObject, useCallback } from 'react';

interface UseSlideNavigationProps {
  totalSlides: number;
  currentSlide: number;
  onSlideChange: (index: number) => void;
  containerRef: MutableRefObject<HTMLElement | null>;
}

export const useSlideNavigation = ({
  totalSlides,
  currentSlide,
  onSlideChange,
  containerRef
}: UseSlideNavigationProps) => {
  
  const goToSlide = useCallback((index: number) => {
    if (containerRef.current && index >= 0 && index < totalSlides) {
      const slideHeight = window.innerHeight;
      containerRef.current.scrollTo({
        top: index * slideHeight,
        behavior: 'smooth'
      });
      onSlideChange(index);
    }
  }, [containerRef, totalSlides, onSlideChange]);
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Prevent default behavior for presentation navigation keys
      switch (event.key) {
        case 'ArrowDown':
        case 'ArrowRight':
        case ' ': // Spacebar
          event.preventDefault();
          if (currentSlide < totalSlides - 1) {
            const nextSlide = currentSlide + 1;
            goToSlide(nextSlide);
          }
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          event.preventDefault();
          if (currentSlide > 0) {
            const prevSlide = currentSlide - 1;
            goToSlide(prevSlide);
          }
          break;
        case 'Home':
          event.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          event.preventDefault();
          goToSlide(totalSlides - 1);
          break;
        case 'Escape':
          event.preventDefault();
          // Optional: Exit fullscreen or presentation mode
          if (document.fullscreenElement) {
            document.exitFullscreen();
          }
          break;
      }
    };

    // Add keyboard event listener
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide, totalSlides, goToSlide]);

  const goNext = () => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  };

  const goPrev = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  };

  return { 
    goToSlide, 
    goNext, 
    goPrev,
    canGoNext: currentSlide < totalSlides - 1,
    canGoPrev: currentSlide > 0
  };
};