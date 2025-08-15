"use client";

import { motion } from "framer-motion";

interface TitleSlideProps {
  companyName?: string;
  tagline?: string;
  version?: string;
  date?: string;
}

export default function TitleSlide({ 
  companyName = "Koti", 
  tagline = "",
  version = "V1",
  date = "08/11"
}: TitleSlideProps) {
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
        {/* Main Content - Centered Layout */}
        <div className="h-full flex flex-col items-center justify-center px-8 py-16">
          
          {/* Company Name & Subtitle - More Prominent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-6 leading-tight">
              Koti
            </h1>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-white mb-4">
              Credit Bureau
            </h2>
            <p className="text-xl lg:text-2xl text-white font-semibold opacity-90">
              Bangladesh's First Digital Credit Scoring Platform
            </p>
          </motion.div>

          {/* Company Motto - Two Lines with Refined Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center max-w-4xl space-y-3"
          >
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
              Your Credit, Your Power
            </h3>
            <p className="text-lg lg:text-xl xl:text-2xl text-white/90 font-medium leading-relaxed">
              Turn everyday small choices into big economic impact
            </p>
          </motion.div>

          {/* Clean spacing for professional look */}
          <div className="flex-1"></div>
        </div>

        {/* Footer - Page Title and Number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-0 left-0 right-0"
        >
          <div className="bg-white/10 backdrop-blur-sm border-t border-white/20 px-12 py-4">
            <div className="flex justify-between items-center text-sm text-white font-semibold">
              <span>Introduction</span>
              <span>01</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}