"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, AlertCircle, Database, Brain, LineChart, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ScoringComponentSlideProps {
  version?: string;
  date?: string;
}

export default function ScoringComponentSlide({ 
  version = "V1", 
  date = "08/11" 
}: ScoringComponentSlideProps) {
  // Five-phase methodology data
  const phases = [
    {
      number: 1,
      title: "Business Objectives",
      icon: Users,
      description: "Establish goals aligned with Bangladesh Bank regulations",
      color: "bg-blue-500"
    },
    {
      number: 2,
      title: "Target Definition",
      icon: AlertCircle,
      description: "Define default criteria and performance windows",
      color: "bg-purple-500"
    },
    {
      number: 3,
      title: "Data Collection",
      icon: Database,
      description: "Gather traditional and alternative data sources",
      color: "bg-green-500"
    },
    {
      number: 4,
      title: "Model Development", 
      icon: Brain,
      description: "Build separate models for thick-file and thin-file",
      color: "bg-orange-500"
    },
    {
      number: 5,
      title: "Implementation",
      icon: LineChart,
      description: "Deploy with continuous monitoring and governance",
      color: "bg-red-500"
    }
  ];

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
        <div className="h-full flex flex-col px-8 py-16 pb-40">
          
          {/* Title Section */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-2">SCORING COMPONENT</h1>
            <p className="text-lg opacity-90">Trinity Scoring App • Powering Financial Inclusion Through AI</p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="flex-1 grid grid-cols-3 gap-6">
            
            {/* Left Column - Five-Phase Framework */}
            <motion.div 
              className="col-span-2 space-y-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-xl font-bold text-white mb-3">Five-Phase Methodology Framework</h2>
              
              {/* Compact Phase Grid */}
              <div className="grid grid-cols-1 gap-3">
                {phases.map((phase, index) => (
                  <motion.div
                    key={phase.number}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
                  >
                    {/* Compact Phase Icon */}
                    <div className={`${phase.color} rounded-lg p-2 flex items-center justify-center shadow-md min-w-[40px] h-10`}>
                      <span className="text-white font-bold text-xs mr-1">{phase.number}</span>
                      <div className="text-white">
                        <phase.icon size={16} />
                      </div>
                    </div>
                    
                    {/* Compact Phase Content */}
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-white leading-tight">
                        {phase.title}
                      </h3>
                      <p className="text-white/80 text-xs leading-tight">
                        {phase.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Compact Segmentation Section */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              >
                <h3 className="text-sm font-bold text-white mb-3">Market Challenge & Solution</h3>
                <div className="flex items-center justify-center space-x-4">
                  <div className="bg-white border-2 border-white/30 rounded-md p-2 text-center flex-1 shadow-lg">
                    <p className="text-red-600 text-xs font-medium">CHALLENGE</p>
                    <p className="text-gray-800 text-xs font-bold mt-1">Limited Credit Data</p>
                  </div>
                  <ArrowRight className="text-white/60" size={16} />
                  <div className="bg-gradient-to-r from-green-500 to-green-600 border-2 border-green-400/30 rounded-md p-2 text-center flex-1 shadow-lg">
                    <p className="text-green-200 text-xs font-medium">SOLUTION</p>
                    <p className="text-white text-xs font-bold mt-1">Segmented Approach</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Scoring Systems */}
            <motion.div 
              className="flex flex-col space-y-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-bold text-white text-center">Two-Score System</h3>
              
              {/* Compact Koti Pro Score Card */}
              <div className="bg-white rounded-lg p-4 shadow-xl border-2 border-blue-500">
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    THICK-FILE
                  </div>
                  <div className="text-blue-600 font-bold">PRO</div>
                </div>
                <h4 className="text-blue-700 font-bold text-sm mb-1">Koti Pro Score</h4>
                <p className="text-gray-700 text-xs mb-2 leading-tight">
                  For borrowers with substantial credit history (2+ years, multiple accounts)
                </p>
                <div className="bg-blue-50 rounded p-1 text-center">
                  <span className="text-blue-700 text-xs font-bold">Range: 300-850</span>
                </div>
              </div>

              {/* Compact Koti New Score Card */}
              <div className="bg-white rounded-lg p-4 shadow-xl border-2 border-teal-500">
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-teal-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    THIN-FILE
                  </div>
                  <div className="text-teal-600 font-bold">NEW</div>
                </div>
                <h4 className="text-teal-700 font-bold text-sm mb-1">Koti New Score</h4>
                <p className="text-gray-700 text-xs mb-2 leading-tight">
                  For borrowers with limited/no formal credit history using alternative data
                </p>
                <div className="bg-teal-50 rounded p-1 text-center">
                  <span className="text-teal-700 text-xs font-bold">Range: 300-850</span>
                </div>
              </div>

              {/* Compact Interactive Demo Link */}
              <Link href="/credit-scoring" className="block">
                <motion.div 
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-3 text-center shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer border border-purple-400/50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <ExternalLink size={16} className="text-white mr-2" />
                    <span className="text-white font-bold text-sm">Interactive Demo</span>
                  </div>
                  <p className="text-purple-100 text-xs mb-2">
                    Explore the complete Credit Scoring Methodology
                  </p>
                  <div className="flex items-center justify-center text-purple-200 text-xs font-medium">
                    <span>View Full Framework</span>
                    <ArrowRight size={12} className="ml-1" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Footer - Page Title and Number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-0 left-0 right-0"
        >
          <div className="bg-white/10 backdrop-blur-sm border-t border-white/20 px-12 py-4">
            <div className="flex justify-between items-center text-sm text-white font-semibold">
              <span>Scoring Component</span>
              <span>20</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}