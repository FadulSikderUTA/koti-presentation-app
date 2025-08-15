"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DataCoverageSourceSlide() {
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
        <div className="h-full flex flex-col px-6 py-14 pb-40">
          {/* Title Section */}
          <motion.div
            className="text-center mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-1">DATA COVERAGE</h1>
            <p className="text-lg opacity-90">Data Source Architecture & Consumer Ecosystem</p>
          </motion.div>

          {/* Single Large Image Layout - 15% Bigger */}
          <div className="flex-1 flex items-center justify-center">
            
            {/* Main Data Source Diagram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full h-full bg-white rounded-xl p-3 shadow-lg border border-white/20"
            >
              <div className="h-full w-full relative">
                <Image
                  src="/References/Screenshots/Data source.png"
                  alt="Data Source Architecture & Consumer Ecosystem"
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
            className="mt-2 bg-white/10 rounded-lg p-2 border border-white/20"
          >
            <div className="grid grid-cols-3 gap-4 text-center text-xs">
              <div>
                <div className="font-bold text-blue-400">Multiple Credit Bureaus</div>
                <div className="text-white/80">Distributed data registry & classification systems</div>
              </div>
              <div>
                <div className="font-bold text-green-400">Consumer Integration</div>
                <div className="text-white/80">Banks, Non-regulated institutions, Credit card issuers</div>
              </div>
              <div>
                <div className="font-bold text-purple-400">Comprehensive Services</div>
                <div className="text-white/80">Credit scoring, Anti-fraud, Portfolio management</div>
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
              <span>15</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}