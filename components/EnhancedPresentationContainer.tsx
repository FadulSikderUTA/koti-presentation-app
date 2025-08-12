"use client";

import { useRef, useState, useEffect, Children } from "react";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import PresentationNavigation from "./PresentationNavigation";

interface EnhancedPresentationContainerProps {
  children: React.ReactNode;
  showHomeButton?: boolean;
}

export default function EnhancedPresentationContainer({ 
  children,
  showHomeButton = false
}: EnhancedPresentationContainerProps) {
  const presentationRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Convert children to array to count slides
  const slides = Children.toArray(children);
  const totalSlides = slides.length;

  // Initialize slide navigation
  const { goToSlide, goNext, goPrev, canGoNext, canGoPrev } = useSlideNavigation({
    totalSlides,
    currentSlide,
    onSlideChange: setCurrentSlide,
    containerRef: presentationRef
  });

  // Handle scroll events to update current slide
  useEffect(() => {
    const container = presentationRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const slideHeight = window.innerHeight;
      const newSlide = Math.round(scrollTop / slideHeight);
      
      if (newSlide !== currentSlide && newSlide >= 0 && newSlide < totalSlides) {
        setCurrentSlide(newSlide);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentSlide, totalSlides]);


  return (
    <div className="relative h-screen overflow-hidden">

      {/* Presentation Container with Scroll Snap */}
      <div 
        ref={presentationRef}
        className="h-full overflow-y-scroll snap-y snap-mandatory"
        style={{
          scrollBehavior: 'smooth',
          scrollSnapType: 'y mandatory'
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="snap-start"
            style={{
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always'
            }}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Presentation Navigation */}
      <PresentationNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onSlideChange={goToSlide}
        onPrevious={goPrev}
        onNext={goNext}
        canGoPrev={canGoPrev}
        canGoNext={canGoNext}
        showHomeButton={showHomeButton}
      />
    </div>
  );
}