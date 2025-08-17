"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Briefcase, 
  Target,
  CheckCircle,
  AlertTriangle,
  XCircle,
  ArrowDown,
  FileText,
  Search,
  TrendingUp,
  TrendingDown,
  Minus
} from "lucide-react";
import { useSlideNumber } from '@/contexts/SlideNumberContext';

interface RiskAssessmentSlideProps {
  slideNumber?: number;
}

export default function RiskAssessmentSlide({ 
  slideNumber 
}: RiskAssessmentSlideProps) {
  const dynamicSlideNumber = useSlideNumber();

  const inputCategories = [
    {
      icon: <Briefcase className="w-4 h-4 text-blue-600" />,
      title: "Employment Status",
      options: "Employed • Self-employed • Unemployed • Student • Retired",
      purpose: "Assess financial background & capacity"
    },
    {
      icon: <Target className="w-4 h-4 text-green-600" />,
      title: "Account Purpose",
      options: "Browse credit cards • Compare loan products • Secure lending • Financial planning",
      purpose: "Validate intent & typical use cases"
    },
    {
      icon: <TrendingUp className="w-4 h-4 text-purple-600" />,
      title: "Income & Spending",
      options: "Declared income level • Expected spending patterns • Financial obligations",
      purpose: "Enable appropriate product recommendations"
    }
  ];

  const validationProcesses = [
    {
      icon: <FileText className="w-4 h-4 text-orange-600" />,
      title: "Cross-Reference with KYC",
      description: "Compare questionnaire responses with Proof of ID and Proof of Address data"
    },
    {
      icon: <Search className="w-4 h-4 text-teal-600" />,
      title: "Pattern Analysis",
      description: "Analyze consistency between declared information and typical behavioral patterns"
    },
    {
      icon: <AlertTriangle className="w-4 h-4 text-red-600" />,
      title: "Discrepancy Detection",
      description: "Flag discrepancies between declared and observed activity for review"
    }
  ];

  const riskCategories = [
    {
      level: "LOW RISK",
      icon: <CheckCircle className="w-5 h-5 text-green-600" />,
      description: "Consistent data across all sources • Standard monitoring",
      color: "green",
      bgColor: "bg-green-50",
      borderColor: "border-green-500",
      textColor: "text-green-700",
      percentage: "70%"
    },
    {
      level: "MEDIUM RISK", 
      icon: <Minus className="w-5 h-5 text-yellow-600" />,
      description: "Minor inconsistencies detected • Enhanced monitoring",
      color: "yellow",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-500", 
      textColor: "text-yellow-700",
      percentage: "25%"
    },
    {
      level: "HIGH RISK",
      icon: <XCircle className="w-5 h-5 text-red-600" />,
      description: "Significant discrepancies • Manual review required",
      color: "red",
      bgColor: "bg-red-50",
      borderColor: "border-red-500",
      textColor: "text-red-700",
      percentage: "5%"
    }
  ];

  const complianceFramework = [
    {
      icon: <Users className="w-4 h-4 text-white" />,
      title: "KYC Compliance",
      description: "Know Your Customer regulations"
    },
    {
      icon: <AlertTriangle className="w-4 h-4 text-white" />,
      title: "AML Monitoring", 
      description: "Anti-Money Laundering detection"
    },
    {
      icon: <Search className="w-4 h-4 text-white" />,
      title: "Ongoing Assessment",
      description: "Continuous risk profiling"
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
        <div className="h-full flex flex-col px-4 py-16 pb-44">
          {/* Title Section */}
          <motion.div
            className="text-center mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-2">RISK ASSESSMENT & ACCOUNT PURPOSE</h1>
            <p className="text-base opacity-90">Questionnaire-Based Risk Profiling with KYC/AML Compliance</p>
          </motion.div>

          {/* Funnel Process Layout - Improved Alignment */}
          <div className="flex-1 flex flex-col">
            
            {/* Top Section - INPUT STAGE */}
            <div className="mb-4">
              <h3 className="text-sm font-bold text-white text-center mb-4">INPUT STAGE</h3>
              
              <div className="grid grid-cols-3 gap-3">
                {inputCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    className="bg-white border-l-4 border-blue-500 rounded-lg p-2 shadow-lg"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-50 rounded-lg flex items-center justify-center mr-2 flex-shrink-0">
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-gray-800 mb-1">{category.title}</h4>
                        <p className="text-[10px] text-gray-600 mb-1 leading-tight">{category.options}</p>
                        <div className="text-[10px] font-medium text-blue-700 bg-blue-100 px-1 py-0.5 rounded">
                          {category.purpose}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Middle Section - VALIDATION STAGE */}
            <div className="mb-4 flex justify-center">
              <div className="w-3/4">
                <h3 className="text-sm font-bold text-white text-center mb-4">VALIDATION STAGE</h3>
                
                <motion.div
                  className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-xl p-3 relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="grid grid-cols-3 gap-3">
                    {validationProcesses.map((process, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-white/20 p-1 rounded-lg mb-1 mx-auto w-fit">
                          {process.icon}
                        </div>
                        <h4 className="text-xs font-bold text-white mb-1">{process.title}</h4>
                        <p className="text-[10px] text-gray-300 leading-tight">{process.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Funnel Visual Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-600/20 to-gray-800/40 rounded-xl pointer-events-none" />
                </motion.div>
              </div>
            </div>

            {/* Bottom Section - OUTPUT STAGE */}
            <div>
              <h3 className="text-sm font-bold text-white text-center mb-4">OUTPUT STAGE</h3>
              
              <div className="grid grid-cols-3 gap-3">
                {riskCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    className={`${category.bgColor} ${category.borderColor} border-l-4 rounded-lg p-2 shadow-lg`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  >
                    <div className="text-center">
                      <div className={`w-7 h-7 ${category.bgColor} rounded-lg flex items-center justify-center mx-auto mb-1`}>
                        {category.icon}
                      </div>
                      <div className="flex items-center justify-center mb-1">
                        <h4 className={`text-xs font-bold ${category.textColor} mr-2`}>{category.level}</h4>
                        <span className={`text-base font-bold ${category.textColor}`}>{category.percentage}</span>
                      </div>
                      <p className="text-[10px] text-gray-700 leading-tight">{category.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Compliance Framework */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl p-2 shadow-lg mt-2"
          >
            <div className="flex justify-center items-center gap-6">
              <div className="text-center">
                <h4 className="text-xs font-bold text-white mb-0.5">Compliance Framework</h4>
                <p className="text-[10px] text-indigo-200">Regulatory adherence & ongoing monitoring</p>
              </div>
              
              {complianceFramework.map((framework, index) => (
                <div key={index} className="flex items-center bg-white/10 rounded-lg px-2 py-1">
                  <div className="mr-1">{framework.icon}</div>
                  <div>
                    <div className="text-[10px] font-semibold text-white">{framework.title}</div>
                    <div className="text-[9px] text-indigo-200">{framework.description}</div>
                  </div>
                </div>
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
              <span>Risk Assessment & Account Purpose</span>
              <span>{(slideNumber || dynamicSlideNumber).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}