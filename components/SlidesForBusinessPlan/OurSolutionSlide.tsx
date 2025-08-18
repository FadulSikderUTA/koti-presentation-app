"use client";

import { motion } from "framer-motion";
import { useSlideTitle } from '@/hooks/useSlideTitle';

interface OurSolutionSlideProps {
  version?: string;
  date?: string;
}

export default function OurSolutionSlide({ 
  version = "V1", 
  date = "08/11" 
}: OurSolutionSlideProps) {
  // Register slide title dynamically
  useSlideTitle("Our Solution");
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

        {/* Main Content - Better Spaced Layout */}
        <div className="h-full w-full flex px-12 py-20">
          
          {/* Left Content Area - Expanded */}
          <div className="w-[65%] pr-8 flex flex-col justify-center">
            
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
                OUR SOLUTION
              </h1>
              <p className="text-xl text-white/90 font-medium">
                From Data Chaos to Financial Clarity
              </p>
            </motion.div>

            {/* Solution Points - Compact Layout */}
            <div className="space-y-6">
              
              {/* Unified Platform */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-start space-x-4"
              >
                <div className="w-4 h-4 rounded-full bg-blue-400 mt-2 flex-shrink-0 shadow-lg"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Unified Intelligence Platform
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    We're building the foundational data rails for Bangladesh's economy. Our secure API platform, developed in partnership with Yeeld, aggregates disconnected data from banks, MFIs, mobile financial services, and utilities to create a single, trusted source of truth for the entire lending ecosystem.
                  </p>
                </div>
              </motion.div>

              {/* AI Scoring */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-start space-x-4"
              >
                <div className="w-4 h-4 rounded-full bg-purple-400 mt-2 flex-shrink-0 shadow-lg"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Universal & Inclusive Scoring
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    Our proprietary AI engine fairly scores the entire population. We use the Koti Pro Score for traditional borrowers and the revolutionary Koti New Score to make the "credit invisible" visible by analyzing alternative data, ensuring everyone has a path to financial identity.
                  </p>
                </div>
              </motion.div>

              {/* Ecosystem Tools */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-start space-x-4"
              >
                <div className="w-4 h-4 rounded-full bg-orange-400 mt-2 flex-shrink-0 shadow-lg"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Ecosystem Empowerment Tools
                  </h3>
                  <div className="text-white/90 text-base leading-relaxed space-y-2">
                    <p className="text-sm">
                      <strong className="text-white">For Lenders:</strong> Real-time risk, fraud, and automated decisioning tools to drive faster, safer, and more profitable lending.
                    </p>
                    <p className="text-sm">
                      <strong className="text-white">For Consumers:</strong> A mobile Credit Hub offering direct score access, personalized AI-driven guidance, and financial education for true empowerment.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Right Content Area - Compact Credit Score Mockup */}
          <div className="w-[35%] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="relative"
            >
              {/* Credit Score Card */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-sm">
                
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-gray-800 font-bold text-lg">KOTI CREDIT SCORE</h3>
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    New Score Available
                  </span>
                </div>

                {/* Score Display */}
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-green-600 mb-2">720</div>
                  <div className="text-gray-600 font-medium">Excellent Credit</div>
                </div>

                {/* Score Range Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>300</span>
                    <span>850</span>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 to-green-600 rounded-full relative">
                    <div className="absolute w-3 h-3 bg-green-600 rounded-full -top-0.5 transform -translate-x-1.5" style={{ left: '76%' }}></div>
                  </div>
                </div>

                {/* Score Factors */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-green-600 font-bold text-lg">+40</div>
                    <div className="text-xs text-gray-600">Payment History</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-600 font-bold text-lg">+25</div>
                    <div className="text-xs text-gray-600">Credit Usage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-600 font-bold text-lg">+18</div>
                    <div className="text-xs text-gray-600">Account Age</div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded"></div>
                    <span className="text-gray-700">Real-time monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded"></div>
                    <span className="text-gray-700">Detailed reports</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded"></div>
                    <span className="text-gray-700">AI-powered insights</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded"></div>
                    <span className="text-gray-700">Fraud protection</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-4">
                  <div className="bg-orange-500 text-white text-center py-2 px-4 rounded-lg text-sm font-medium">
                    💡 Tip: Pay on time to improve
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer - Page Title and Number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-0 left-0 right-0"
        >
          <div className="bg-white/10 backdrop-blur-sm border-t border-white/20 px-12 py-4">
            <div className="flex justify-between items-center text-sm text-white font-semibold">
              <span>Our Solution</span>
              <span>04</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
