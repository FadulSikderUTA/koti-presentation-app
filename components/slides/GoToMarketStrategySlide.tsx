"use client";
import { motion } from "framer-motion";
import { Building2, Users, Smartphone, Shield, TrendingUp, Globe, Handshake, BookOpen } from "lucide-react";

interface GoToMarketStrategySlideProps {
  companyName?: string;
}

export default function GoToMarketStrategySlide({ 
  companyName = "Koti" 
}: GoToMarketStrategySlideProps) {
  const penetrationStrategies = [
    {
      id: 1,
      icon: <Building2 className="w-5 h-5 text-green-600" />,
      title: "Anchor Partnership Strategy",
      description: "Form consortium with 3-5 tier-1 lenders for validated market entry, mirroring India's CIBIL success model.",
      metrics: "62 banks + 35 NBFIs + 731 MFIs",
      timeline: "Wave 1 (0-6m): 3-5 pilots"
    },
    {
      id: 2,
      icon: <Smartphone className="w-5 h-5 text-green-600" />,
      title: "API-First Embedded Services", 
      description: "Integrate directly into loan origination systems as backend credit intelligence engine.",
      metrics: "239.3M MFS accounts data source",
      timeline: "Wave 2 (6-18m): 15-20 banks + MFS"
    },
    {
      id: 3,
      icon: <Users className="w-5 h-5 text-green-600" />,
      title: "Data Reciprocity Program",
      description: "Freemium model for MFIs: free services for data contributions, accelerating coverage.",
      metrics: "40.86M MFI borrowers coverage",
      timeline: "Wave 3 (18-36m): Category leadership"
    }
  ];

  const ecosystemStrategies = [
    {
      id: 1,
      icon: <Shield className="w-5 h-5 text-white" />,
      title: "Regulatory Alignment",
      description: "Position as Bangladesh Bank strategic partner for financial stability and inclusion goals.",
      validation: "BB Circular 05/2024 policy greenlight",
      kpi: "-100-200 bps NPL reduction"
    },
    {
      id: 2,
      icon: <BookOpen className="w-5 h-5 text-white" />,
      title: "Financial Literacy Campaigns",
      description: "Nationwide Bengali education creating consumer demand following India/Kenya playbook.", 
      validation: "85% informal economy opportunity",
      kpi: ">15M adult profiles"
    },
    {
      id: 3,
      icon: <Globe className="w-5 h-5 text-white" />,
      title: "Targeted Content & Digital Outreach",
      description: "Digital-first marketing with ROI case studies for C-suite, SME guides, and targeted campaigns for urban professionals.",
      validation: "Multi-segment engagement",
      kpi: "30-50% adult coverage"
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
            <h1 className="text-3xl font-bold mb-2">GO-TO-MARKET STRATEGY</h1>
            <p className="text-lg opacity-90">Two-Pronged Approach to Market Domination</p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="flex-1 flex gap-6">
            
            {/* Left Column - Market Penetration */}
            <motion.div 
              className="w-1/2 flex flex-col"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center mb-5">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-xl font-bold">Market Penetration Strategy</h2>
              </div>

              <div className="space-y-3 flex-1">
                {penetrationStrategies.map((strategy, index) => (
                  <motion.div
                    key={strategy.id}
                    className="bg-white border-2 border-white/30 rounded-xl p-3 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                  >
                    <div className="flex items-start mb-3">
                      <div className="bg-green-100 p-2 rounded-lg mr-3 flex-shrink-0">
                        {strategy.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-gray-800 mb-2">{strategy.title}</h3>
                        <p className="text-xs text-gray-600 leading-relaxed mb-2">
                          {strategy.description}
                        </p>
                        <div className="flex justify-between items-center gap-2">
                          <div className="text-[10px] text-green-600 font-semibold">
                            {strategy.metrics}
                          </div>
                          <div className="text-[10px] text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded">
                            {strategy.timeline}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Ecosystem Building */}
            <motion.div 
              className="w-1/2 flex flex-col"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center mb-5">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <Handshake className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-xl font-bold">Ecosystem Building Strategy</h2>
              </div>

              <div className="space-y-3 flex-1">
                {ecosystemStrategies.map((strategy, index) => (
                  <motion.div
                    key={strategy.id}
                    className="bg-gradient-to-r from-green-500 to-green-600 border-2 border-green-400/30 rounded-xl p-3 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                  >
                    <div className="flex items-start mb-3">
                      <div className="bg-white/20 p-2 rounded-lg mr-3 flex-shrink-0">
                        {strategy.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-white mb-2">{strategy.title}</h3>
                        <p className="text-xs text-white opacity-90 leading-relaxed mb-2">
                          {strategy.description}
                        </p>
                        <div className="flex justify-between items-center gap-2">
                          <div className="text-[10px] text-white font-semibold bg-white/20 px-2 py-1 rounded">
                            {strategy.validation}
                          </div>
                          <div className="text-[10px] text-yellow-300 font-semibold bg-black/20 px-2 py-1 rounded">
                            {strategy.kpi}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
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
              <span>Go-to-Market Strategy</span>
              <span>11</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}