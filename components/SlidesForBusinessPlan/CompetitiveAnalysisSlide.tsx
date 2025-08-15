"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  Building2, 
  Brain,
  Shield,
  Globe,
  Target,
  Zap,
  UserCheck,
  BarChart3
} from "lucide-react";

export default function CompetitiveAnalysisSlide() {
  const strategicPillars = [
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Dual B2B + B2C Ecosystem",
      description: "While competitors focus solely on B2B reports, we build consumer trust and lender intelligence simultaneously through our Credit Hub app and API platform.",
      highlight: "Two-sided flywheel effect"
    },
    {
      icon: <Brain className="w-6 h-6 text-green-600" />,
      title: "Inclusive Hybrid Scoring",
      description: "Koti Pro Score for traditional borrowers + Koti New Score using alternative data to make 90% credit-invisible population visible for the first time.",
      highlight: "Universal coverage strategy"
    }
  ];

  const matrixData = [
    {
      position: { x: "25%", y: "25%" },
      label: "Traditional Bureau\n(B2B Only)",
      style: "competitor",
      size: "small"
    },
    {
      position: { x: "75%", y: "25%" },
      label: "Alt-Data Only\n(B2B Focus)",
      style: "competitor", 
      size: "small"
    },
    {
      position: { x: "25%", y: "75%" },
      label: "Consumer-Only\n(Limited Scope)",
      style: "competitor",
      size: "small"
    },
    {
      position: { x: "75%", y: "75%" },
      label: "KOTI",
      style: "koti",
      size: "large"
    }
  ];

  const executionAdvantages = [
    {
      icon: <UserCheck className="w-5 h-5 text-white" />,
      title: "World-Class Team",
      description: "Local expertise + international finance experience",
      style: "gradient"
    },
    {
      icon: <Zap className="w-5 h-5 text-green-600" />,
      title: "Yeeld Partnership", 
      description: "Technology acceleration and global credibility",
      style: "white"
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
            className="text-center mb-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-2">COMPETITIVE ANALYSIS</h1>
            <p className="text-lg opacity-90">Strategic Differentiation in a Category-Creating Market</p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="flex-1 flex gap-6">
            
            {/* Left Column - Strategic Narrative */}
            <motion.div 
              className="w-1/2 flex flex-col"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-xl font-bold">Our Competitive Edge</h2>
              </div>

              <div className="space-y-4 flex-1">
                {strategicPillars.map((pillar, index) => (
                  <motion.div
                    key={index}
                    className="bg-white border-2 border-white/30 rounded-xl p-4 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                  >
                    <div className="flex items-start mb-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        {pillar.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{pillar.title}</h3>
                        <p className="text-sm text-gray-600 leading-snug mb-2">{pillar.description}</p>
                        <div className="inline-block">
                          <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded">
                            {pillar.highlight}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Strategic Matrix */}
            <motion.div 
              className="w-1/2 flex flex-col"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-xl font-bold">Strategic Positioning</h2>
              </div>

              {/* Matrix Container */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex-1 relative border border-white/20">
                {/* Axis Labels */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white/80">
                  Scoring Approach: Traditional → Hybrid Alt-Data
                </div>
                <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs text-white/80 whitespace-nowrap">
                  Market Coverage: Enterprise → Two-Sided
                </div>

                {/* Matrix Grid */}
                <div className="w-full h-full relative">
                  {/* Grid Lines */}
                  <div className="absolute inset-0">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20"></div>
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-white/20"></div>
                  </div>

                  {/* Matrix Points */}
                  {matrixData.map((point, index) => (
                    <motion.div
                      key={index}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                        point.style === 'koti' 
                          ? 'bg-green-400 text-gray-900 font-bold text-sm' 
                          : 'bg-white/20 text-white/60 text-xs'
                      } ${
                        point.size === 'large' ? 'w-16 h-16' : 'w-12 h-12'
                      } rounded-full flex items-center justify-center text-center leading-tight`}
                      style={{ 
                        left: point.position.x, 
                        top: point.position.y 
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    >
                      {point.label.split('\n').map((line, lineIndex) => (
                        <div key={lineIndex} className={point.size === 'large' ? 'text-xs' : 'text-xs'}>
                          {line}
                        </div>
                      ))}
                    </motion.div>
                  ))}
                </div>

                {/* Legend */}
                <div className="absolute -bottom-12 right-0 flex items-center space-x-4 text-xs">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white/20 rounded-full mr-1"></div>
                    <span className="text-white/60">Expected Competitors</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-1"></div>
                    <span className="text-white">Koti Position</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Execution Advantages */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h3 className="text-lg font-bold mb-3 text-center">Execution Advantages</h3>
            <div className="grid grid-cols-2 gap-4">
              {executionAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  className={`${
                    advantage.style === 'white' 
                      ? 'bg-white border-2 border-white/30' 
                      : 'bg-gradient-to-r from-green-500 to-green-600'
                  } rounded-xl p-4 shadow-lg`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  <div className="flex items-center">
                    <div className={`w-10 h-10 ${
                      advantage.style === 'white' ? 'bg-green-100' : 'bg-white/20'
                    } rounded-lg flex items-center justify-center mr-3`}>
                      {advantage.icon}
                    </div>
                    <div>
                      <h4 className={`font-bold text-sm ${
                        advantage.style === 'white' ? 'text-gray-800' : 'text-white'
                      }`}>{advantage.title}</h4>
                      <p className={`text-xs ${
                        advantage.style === 'white' ? 'text-gray-600' : 'text-white/80'
                      }`}>{advantage.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              <span>Competitive Analysis</span>
              <span>21</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}