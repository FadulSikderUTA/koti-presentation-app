"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Handshake, 
  Rocket, 
  CheckCircle, 
  BarChart3, 
  Users, 
  TrendingUp, 
  Layers, 
  Target,
  ArrowRight
} from "lucide-react";

export default function TimelineSlide() {
  const phases = [
    {
      id: 1,
      title: "Foundation & Pilot",
      timeframe: "Months 1-12",
      style: "white",
      badge: "Foundation",
      milestones: [
        {
          icon: Shield,
          title: "Provisional License",
          detail: "Q1 2026 - BB Approval",
          metric: "Regulatory Green Light"
        },
        {
          icon: Handshake, 
          title: "Anchor Partners",
          detail: "3-5 Tier-1 Institutions",
          metric: "Data Pipeline Established"
        },
        {
          icon: Rocket,
          title: "Pilot Launch",
          detail: "Q3 2026 - Live Testing",
          metric: "Proof of Value"
        }
      ]
    },
    {
      id: 2,
      title: "Commercial Launch",
      timeframe: "Months 13-30", 
      style: "gradient",
      badge: "Scale",
      milestones: [
        {
          icon: CheckCircle,
          title: "Full License",
          detail: "Q4 2026 - BB Final Approval",
          metric: "Commercial Ready"
        },
        {
          icon: BarChart3,
          title: "National Rollout", 
          detail: "60+ Banks & NBFIs",
          metric: "10M+ Profiles"
        },
        {
          icon: Users,
          title: "Consumer Portal",
          detail: "Direct-to-Consumer Access",
          metric: "Mass Adoption"
        }
      ]
    },
    {
      id: 3,
      title: "Diversification",
      timeframe: "Months 31-36",
      style: "white",
      badge: "Profitability",
      milestones: [
        {
          icon: TrendingUp,
          title: "Break-Even",
          detail: "Q2 2028 - Operational Profitability", 
          metric: "Sustainable Growth"
        },
        {
          icon: Layers,
          title: "Premium Analytics",
          detail: "Value-Added Services",
          metric: "Revenue Diversification"
        },
        {
          icon: Target,
          title: "Market Leadership",
          detail: "15-20% Market Penetration",
          metric: "Category Dominance"
        }
      ]
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
        <div className="h-full flex flex-col px-8 py-16 pb-32">
          {/* Title Section */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-3">36-MONTH EXECUTION TIMELINE</h1>
            <p className="text-lg opacity-90">Phase-Gated Roadmap to Market Leadership</p>
          </motion.div>

          {/* Timeline Connector */}
          <motion.div 
            className="relative mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/30 transform -translate-y-1/2"></div>
            <div className="flex justify-between items-center">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.id}
                  className="w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Phase Cards Grid */}
          <div className="flex-1 grid grid-cols-3 gap-6 mb-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                className={`relative ${
                  phase.style === 'white' 
                    ? 'bg-white border-2 border-white/30' 
                    : 'bg-gradient-to-br from-green-500 to-green-600'
                } rounded-xl p-6 shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                {/* Phase Badge */}
                <div className={`absolute -top-2 -right-2 ${
                  phase.style === 'white' ? 'bg-green-500' : 'bg-white/20'
                } backdrop-blur-sm rounded-full px-3 py-1`}>
                  <span className={`text-xs font-bold ${
                    phase.style === 'white' ? 'text-white' : 'text-white'
                  }`}>{phase.badge}</span>
                </div>

                {/* Phase Header */}
                <div className="mb-4">
                  <h3 className={`text-lg font-bold mb-1 ${
                    phase.style === 'white' ? 'text-gray-800' : 'text-white'
                  }`}>{phase.title}</h3>
                  <p className={`text-sm ${
                    phase.style === 'white' ? 'text-gray-600' : 'text-white/80'
                  }`}>{phase.timeframe}</p>
                </div>

                {/* Milestones */}
                <div className="space-y-4">
                  {phase.milestones.map((milestone, milestoneIndex) => (
                    <motion.div
                      key={milestoneIndex}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.2 + milestoneIndex * 0.1 }}
                    >
                      <div className={`p-2 rounded-lg ${
                        phase.style === 'white' ? 'bg-green-100' : 'bg-white/20'
                      }`}>
                        <milestone.icon className={`w-4 h-4 ${
                          phase.style === 'white' ? 'text-green-600' : 'text-white'
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`text-sm font-semibold mb-1 ${
                          phase.style === 'white' ? 'text-gray-800' : 'text-white'
                        }`}>{milestone.title}</h4>
                        <p className={`text-xs mb-1 ${
                          phase.style === 'white' ? 'text-gray-600' : 'text-white/80'
                        }`}>{milestone.detail}</p>
                        <span className={`text-xs font-medium px-2 py-1 rounded ${
                          phase.style === 'white' 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-yellow-400/20 text-yellow-200'
                        }`}>
                          {milestone.metric}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Phase Connector Arrow */}
                {index < phases.length - 1 && (
                  <motion.div
                    className="absolute -right-3 top-1/2 transform -translate-y-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.2 }}
                  >
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-3 h-3 text-white" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Key Success Metrics */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">3-5</div>
                <div className="text-xs opacity-80">Anchor Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">10M+</div>
                <div className="text-xs opacity-80">Profile Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">17</div>
                <div className="text-xs opacity-80">Total Institutions</div>
              </div>
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
              <span>36-Month Execution Timeline</span>
              <span>12</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}