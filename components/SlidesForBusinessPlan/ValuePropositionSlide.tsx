"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Brain,
  BarChart3,
  LineChart,
  Smartphone,
  Code2,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function ValuePropositionSlide() {
  const valuePropositions = [
    {
      id: 1,
      icon: <Brain className="w-5 h-5 text-green-600" />,
      title: "AI-Powered Credit Scoring",
      description: "Dynamic scores for thin & thick files via Koti New/Pro",
      style: "white"
    },
    {
      id: 2,
      icon: <BarChart3 className="w-5 h-5 text-white" />,
      title: "Comprehensive Credit Reports",
      description: "Complete borrower picture—individual & business",
      style: "gradient"
    },
    {
      id: 3,
      icon: <LineChart className="w-5 h-5 text-green-600" />,
      title: "Custom Analytics & Risk Insights",
      description: "Fraud detection, portfolio risk, tailored dashboards",
      style: "white"
    },
    {
      id: 4,
      icon: <Smartphone className="w-5 h-5 text-white" />,
      title: "Consumer Dashboard",
      description: "Know your score; improve with AI guidance",
      style: "gradient"
    },
    {
      id: 5,
      icon: <Code2 className="w-5 h-5 text-green-600" />,
      title: "Open Banking Infrastructure",
      description: "Secure APIs for banks, MFIs, fintechs",
      style: "white"
    },
    {
      id: 6,
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      title: "Regulatory & Data Compliance",
      description: "BB rules, AML, data localization by design",
      style: "gradient"
    }
  ];

  const proofPoints = [
    "BB-ready",
    "Consent-first", 
    "API-first"
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
            <h1 className="text-3xl font-bold mb-2">VALUE PROPOSITION</h1>
            <p className="text-lg opacity-90">Real-time, inclusive credit intelligence—one platform, multiple beneficiaries</p>
          </motion.div>

          {/* Value Proposition Grid - 2x3 */}
          <div className="flex-1 grid grid-cols-3 gap-4 mb-6">
            {valuePropositions.map((prop, index) => (
              <motion.div
                key={prop.id}
                className={`relative ${
                  prop.style === 'white' 
                    ? 'bg-white border-2 border-white/30' 
                    : 'bg-gradient-to-br from-green-500 to-green-600'
                } rounded-xl p-4 shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 ${
                  prop.style === 'white' ? 'bg-green-100' : 'bg-white/20'
                } rounded-lg flex items-center justify-center mb-3`}>
                  {prop.icon}
                </div>
                
                {/* Title */}
                <h3 className={`text-sm font-bold mb-2 ${
                  prop.style === 'white' ? 'text-gray-800' : 'text-white'
                }`}>{prop.title}</h3>
                
                {/* Description */}
                <p className={`text-xs leading-tight ${
                  prop.style === 'white' ? 'text-gray-600' : 'text-white/80'
                }`}>{prop.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Proof Strip */}
          <motion.div 
            className="flex justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {proofPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <CheckCircle2 className="w-4 h-4 text-green-300" />
                <span className="text-sm font-medium text-white">{point}</span>
              </motion.div>
            ))}
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
              <span>Value Proposition</span>
              <span>06</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}