"use client";

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { SlideMetadata } from '@/lib/slideMetadata';
import { useSlideTitleContext } from '@/contexts/SlideTitleContext';

interface SlideNavigationPanelProps {
  isOpen: boolean;
  onToggle: () => void;
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (index: number) => void;
  slideMetadata: SlideMetadata[];
}

export default function SlideNavigationPanel({
  isOpen,
  onToggle,
  currentSlide,
  totalSlides,
  onSlideChange,
  slideMetadata
}: SlideNavigationPanelProps) {
  // Get dynamic slide titles
  const { getAllSlideTitles } = useSlideTitleContext();
  const dynamicTitles = getAllSlideTitles();
  const panelRef = useRef<HTMLDivElement>(null);
  const currentSlideRef = useRef<HTMLButtonElement>(null);

  // Auto-scroll current slide into view when panel opens
  useEffect(() => {
    if (isOpen && currentSlideRef.current) {
      currentSlideRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [isOpen, currentSlide]);

  // Handle click outside to close panel
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onToggle();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onToggle]);

  // Handle ESC key to close panel
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onToggle();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isOpen, onToggle]);

  const handleSlideClick = (index: number) => {
    onSlideChange(index);
    onToggle(); // Auto-close panel after navigation
  };

  return (
    <>
      {/* Toggle Button - Always visible */}
      <motion.button
        onClick={onToggle}
        className={`fixed top-6 left-52 z-[60] p-3 rounded-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-white text-gray-800 shadow-lg' 
            : 'bg-black/50 backdrop-blur-md text-white hover:bg-black/70'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title={isOpen ? 'Close slide navigation' : 'Open slide navigation'}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[50]"
          />
        )}
      </AnimatePresence>

      {/* Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -400, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-white/95 backdrop-blur-md shadow-2xl z-[55] border-r border-gray-200"
          >
            {/* Panel Header */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Slide Navigation
              </h2>
              <p className="text-sm text-gray-600">
                {currentSlide + 1} of {totalSlides} slides
              </p>
            </div>

            {/* Slide List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2 max-h-[calc(100vh-120px)]">
              {Array.from({ length: totalSlides }, (_, index) => {
                const isActive = index === currentSlide;
                
                // Get title from dynamic titles or fallback to static metadata
                const dynamicTitle = dynamicTitles.find(dt => dt.slideNumber === index + 1)?.title;
                const staticTitle = slideMetadata[index]?.title;
                const slideTitle = dynamicTitle || staticTitle || `Slide ${index + 1}`;
                const slideNumber = index + 1;
                
                return (
                  <motion.button
                    key={index}
                    ref={isActive ? currentSlideRef : null}
                    onClick={() => handleSlideClick(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 group ${
                      isActive
                        ? 'bg-green-500 text-white shadow-lg scale-[1.02]'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-md'
                    }`}
                    whileHover={{ scale: isActive ? 1.02 : 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3">
                          <span
                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                              isActive
                                ? 'bg-white/20 text-white'
                                : 'bg-green-100 text-green-600'
                            }`}
                          >
                            {slideNumber}
                          </span>
                          <span className="font-medium text-sm truncate">
                            {slideTitle}
                          </span>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isActive
                            ? 'text-white/80'
                            : 'text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1'
                        }`}
                      />
                    </div>
                    
                    {/* Active slide indicator */}
                    {isActive && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        className="h-1 bg-white/30 rounded-full mt-2"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Panel Footer */}
            <div className="p-4 border-t border-gray-200 bg-gray-50/50">
              <p className="text-xs text-gray-500 text-center">
                Click any slide to navigate • Press ESC to close
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}