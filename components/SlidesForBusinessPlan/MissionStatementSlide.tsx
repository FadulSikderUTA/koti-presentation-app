"use client";
import { motion } from 'framer-motion';

interface MissionStatementSlideProps {
  version?: string;
  date?: string;
}

export default function MissionStatementSlide({ 
  version = "V1",
  date = "08/11"
}: MissionStatementSlideProps) {
  const missionText = "To empower individuals and businesses across Bangladesh with accessible, transparent, and data-driven credit insights, fostering financial inclusion and responsible lending through innovation and collaboration.";

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
        <div className="h-full flex items-center justify-center px-8 py-16">
          {/* Centered Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-12 tracking-wide">
              MISSION STATEMENT
            </h1>
            <p className="text-xl lg:text-2xl xl:text-3xl text-white/90 leading-relaxed font-medium">
              {missionText}
            </p>
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
              <span>Mission Statement</span>
              <span>02</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}