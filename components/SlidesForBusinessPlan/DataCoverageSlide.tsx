"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSlideNumber } from '@/contexts/SlideNumberContext';
import { useSlideTitle } from '@/hooks/useSlideTitle';
import Image from "next/image";
import { getImagePath } from "@/lib/image-utils";

interface DataCoverageSlideProps {
  slideNumber?: number;
}

export default function DataCoverageSlide({ slideNumber }: DataCoverageSlideProps) {
  const dynamicSlideNumber = useSlideNumber();
  useSlideTitle("Data Coverage");
  return (
    <div className="presentation-slide presentation-gradient">
      <div className="pdf-container text-white relative">
        {/* Header - Top Left Company Name */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-8 left-12 text-white/80 text-sm font-medium"
        >
          Koti Credit Bureau
        </motion.div>
        
        {/* Header - Top Right Website URL */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-8 right-12 text-white/80 text-sm font-medium"
        >
          www.kotibd.com
        </motion.div>

        {/* Main Content */}
        <div className="h-full flex flex-col px-2 py-14 pb-32">
          {/* Title Section */}
          <motion.div
            className="text-center mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-1">DATA COVERAGE</h1>
            <p className="text-lg opacity-90">Comprehensive Data Flow & Processing Architecture</p>
          </motion.div>

          {/* Single Large Image Layout - 15% Bigger on Left, Right, Bottom */}
          <div className="flex-1 flex items-center justify-center -mx-2">
            
            {/* Main Data Flow Diagram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full h-full bg-white rounded-xl p-1 shadow-lg border border-white/20"
            >
              <div className="h-full w-full relative">
                <Image
                  src={getImagePath("/data-flow.png")}
                  alt="Comprehensive Data Flow Architecture Diagram"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Key Information Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-1 bg-white/20 backdrop-blur-md rounded-lg p-3 border border-white/30 shadow-lg -mx-2"
          >
            <div className="grid grid-cols-3 gap-4 text-center text-xs">
              <div>
                <div className="font-bold text-blue-contrast mb-1 header-with-background">Multi-Source</div>
                <div className="text-white text-readable-background-sm">Central Bank, Banks, NBFIs, Public Domain</div>
              </div>
              <div>
                <div className="font-bold text-green-contrast mb-1 header-with-background">Real-Time Processing</div>
                <div className="text-white text-readable-background-sm">Daily data updates & automated scoring</div>
              </div>
              <div>
                <div className="font-bold text-purple-contrast mb-1 header-with-background">Comprehensive Coverage</div>
                <div className="text-white text-readable-background-sm">Individual & corporate credit assessment</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer - Page Title and Number */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="absolute bottom-0 left-0 right-0"
        >
          <div className="bg-white/10 backdrop-blur-sm border-t border-white/20 px-12 py-4">
            <div className="flex justify-between items-center text-sm text-white font-semibold">
              <span>Data Coverage</span>
              <span>{(slideNumber || dynamicSlideNumber).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}