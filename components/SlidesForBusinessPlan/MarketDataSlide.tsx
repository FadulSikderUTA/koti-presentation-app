"use client";

import { motion } from "framer-motion";
import { useSlideNumber } from '@/contexts/SlideNumberContext';
import { useSlideTitle } from '@/hooks/useSlideTitle';

interface MarketDataSlideProps {
  version?: string;
  date?: string;
  slideNumber?: number;
}

export default function MarketDataSlide({ 
  version = "V1", 
  date = "08/11",
  slideNumber
}: MarketDataSlideProps) {
  const dynamicSlideNumber = useSlideNumber();
  useSlideTitle("Market Data");
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
        <div className="h-full w-full flex flex-col px-12 py-20">
          {/* Title - Centered and positioned lower */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              MARKET DATA
            </h1>
          </motion.div>

          {/* Data Visualizations - Better Space Filling Layout */}
          <div className="flex-1 relative w-full h-full">
            
            {/* LEFT CLUSTER - Problems */}
            
            {/* Large Primary - 90% Credit Invisible (top-left) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-[5%] left-[10%]"
            >
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex flex-col items-center justify-center shadow-2xl drop-shadow-xl hover:shadow-[0_20px_60px_rgba(16,185,129,0.4)] transition-shadow duration-300 cursor-pointer">
                <div className="text-7xl font-bold text-white mb-2">90%</div>
                <div className="text-sm font-semibold text-white/95 text-center px-4 leading-tight">
                  of the population<br />
                  with thin credit visibility
                </div>
              </div>
            </motion.div>

            {/* Supporting - 40M+ Microfinance (bottom-left, slightly overlapping) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-[15%] left-[8%]"
            >
              <div className="w-52 h-52 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex flex-col items-center justify-center shadow-2xl drop-shadow-xl hover:shadow-[0_20px_60px_rgba(20,184,166,0.4)] transition-shadow duration-300 cursor-pointer">
                <div className="text-5xl font-bold text-white mb-1">40M+</div>
                <div className="text-sm font-semibold text-white/95 text-center px-3 leading-tight">
                  microfinance borrowers<br />
                  potential market
                </div>
              </div>
            </motion.div>

            {/* CENTER - Bridge Elements */}
            
            {/* NPL Rate - 16.9% (upper-center) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute top-[12%] left-[40%]"
            >
              <div className="w-44 h-44 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex flex-col items-center justify-center shadow-2xl drop-shadow-xl hover:shadow-[0_20px_60px_rgba(248,113,113,0.4)] transition-shadow duration-300 cursor-pointer">
                <div className="text-4xl font-bold text-white mb-1">16.9%</div>
                <div className="text-xs font-semibold text-white/95 text-center px-2 leading-tight">
                  NPL rate challenges<br />
                  in banking
                </div>
              </div>
            </motion.div>

            {/* Critical Gap - 0% Coverage (center-middle) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute top-[45%] left-[45%] transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex flex-col items-center justify-center shadow-2xl drop-shadow-xl border-2 border-white/20 hover:shadow-[0_20px_60px_rgba(244,63,94,0.4)] transition-shadow duration-300 cursor-pointer">
                <div className="text-3xl font-bold text-white mb-1">0%</div>
                <div className="text-xs font-semibold text-white/95 text-center px-2 leading-tight">
                  credit bureau<br />
                  coverage today
                </div>
              </div>
            </motion.div>

            {/* RIGHT CLUSTER - Opportunities */}
            
            {/* Market Opportunity - $2.8B SME Gap (top-right) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="absolute top-[8%] right-[12%]"
            >
              <div className="w-56 h-56 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex flex-col items-center justify-center shadow-2xl drop-shadow-xl hover:shadow-[0_20px_60px_rgba(251,191,36,0.4)] transition-shadow duration-300 cursor-pointer">
                <div className="text-5xl font-bold text-white mb-1">$2.8B</div>
                <div className="text-sm font-semibold text-white/95 text-center px-3 leading-tight">
                  SME financing gap<br />
                  constraining growth
                </div>
              </div>
            </motion.div>

            {/* Infrastructure - 238M Mobile Accounts (bottom-right) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute bottom-[18%] right-[10%]"
            >
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex flex-col items-center justify-center shadow-2xl drop-shadow-xl hover:shadow-[0_20px_60px_rgba(168,85,247,0.4)] transition-shadow duration-300 cursor-pointer">
                <div className="text-4xl font-bold text-white mb-1">87M</div>
                <div className="text-xs font-semibold text-white/95 text-center px-2 leading-tight">
                  active MFS<br />
                  accounts
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bangladesh Flag Icon - Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"
          >
            <div className="w-32 h-32 rounded-full bg-green-600 relative opacity-10">
              <div className="w-20 h-20 rounded-full bg-red-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </motion.div>
        </div>

        {/* Footer - Page Title and Number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="absolute bottom-0 left-0 right-0"
        >
          <div className="bg-white/10 backdrop-blur-sm border-t border-white/20 px-12 py-4">
            <div className="flex justify-between items-center text-sm text-white font-semibold">
              <span>Market Data</span>
              <span>{(slideNumber || dynamicSlideNumber).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
