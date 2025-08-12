"use client";

import { ChevronLeft, ChevronRight, Home, SquareArrowOutUpRight, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface PresentationNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
  showHomeButton?: boolean;
}

export default function PresentationNavigation({
  currentSlide,
  totalSlides,
  onSlideChange,
  onPrevious,
  onNext,
  canGoPrev,
  canGoNext,
  showHomeButton = false
}: PresentationNavigationProps) {
  const [isActive, setIsActive] = useState(true);
  const [lastActivity, setLastActivity] = useState(Date.now());

  // Auto-hide functionality
  useEffect(() => {
    const handleActivity = () => {
      setLastActivity(Date.now());
      setIsActive(true);
    };

    const checkActivity = () => {
      const now = Date.now();
      const timeSinceLastActivity = now - lastActivity;
      
      // Hide navigation after 4 seconds of inactivity
      if (timeSinceLastActivity > 4000) {
        setIsActive(false);
      }
    };

    // Add event listeners for user activity
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('scroll', handleActivity);
    window.addEventListener('touchstart', handleActivity);

    // Check activity every second
    const interval = setInterval(checkActivity, 1000);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
      clearInterval(interval);
    };
  }, [lastActivity]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <>
      {/* Navigation Controls - Bottom Center */}
      <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-50 bg-black/60 backdrop-blur-md rounded-lg px-6 py-3 transition-all duration-500 ${
        isActive ? 'opacity-100' : 'opacity-20'
      }`}>
        {/* Previous Button */}
        <button
          onClick={onPrevious}
          disabled={!canGoPrev}
          className="p-2 text-white hover:text-green-400 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors duration-200"
          title="Previous slide (Arrow Left/Up)"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        {/* Slide Indicators */}
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => onSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-green-500 scale-125' 
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
              title={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={!canGoNext}
          className="p-2 text-white hover:text-green-400 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors duration-200"
          title="Next slide (Arrow Right/Down)"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Counter - Top Right */}
      <div className={`fixed top-6 right-6 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-medium z-50 transition-all duration-500 ${
        isActive ? 'opacity-100' : 'opacity-20'
      }`}>
        {currentSlide + 1} / {totalSlides}
      </div>

      {/* Controls - Top Left */}
      <div className={`fixed top-6 left-6 flex gap-2 z-50 transition-all duration-500 ${
        isActive ? 'opacity-100' : 'opacity-20'
      }`}>
        {/* Home Button - Return to Landing Page */}
        {showHomeButton && (
          <Link href="/">
            <button
              className="p-2 bg-black/50 backdrop-blur-md text-white hover:text-green-400 rounded-lg transition-colors duration-200"
              title="Back to home"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          </Link>
        )}
        
        {/* Go to First Slide Button */}
        <button
          onClick={() => onSlideChange(0)}
          className="p-2 bg-black/50 backdrop-blur-md text-white hover:text-green-400 rounded-lg transition-colors duration-200"
          title="Go to first slide (Home)"
        >
          <Home className="w-4 h-4" />
        </button>
        
        {/* Fullscreen Toggle */}
        <button
          onClick={toggleFullscreen}
          className="p-2 bg-black/50 backdrop-blur-md text-white hover:text-green-400 rounded-lg transition-colors duration-200"
          title="Toggle fullscreen (F11)"
        >
          <SquareArrowOutUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Keyboard Shortcuts Help - Bottom Right */}
      <div className={`fixed bottom-6 right-6 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-2 rounded-lg z-50 transition-all duration-500 ${
        isActive ? 'opacity-60 hover:opacity-100' : 'opacity-10'
      }`}>
        <div className="text-center">
          <div>↑↓ ←→ Space</div>
          <div className="text-gray-300">Navigate</div>
        </div>
      </div>
    </>
  );
}