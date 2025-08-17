"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Database, 
  Brain, 
  BarChart3,
  TrendingUp,
  CreditCard,
  MapPin,
  Zap,
  Eye,
  ArrowRight,
  Cpu,
  PieChart,
  DollarSign,
  Calendar,
  Target
} from "lucide-react";
import { useSlideNumber } from '@/contexts/SlideNumberContext';

interface OpenBankingEnrichmentSlideProps {
  slideNumber?: number;
}

export default function OpenBankingEnrichmentSlide({ 
  slideNumber 
}: OpenBankingEnrichmentSlideProps) {
  const dynamicSlideNumber = useSlideNumber();

  const rawDataTypes = [
    {
      icon: <Database className="w-4 h-4 text-blue-600" />,
      title: "Account Details",
      description: "Basic account information & balances"
    },
    {
      icon: <ArrowRight className="w-4 h-4 text-blue-600" />,
      title: "Transaction History",
      description: "Daily/weekly/monthly transaction patterns"
    },
    {
      icon: <Calendar className="w-4 h-4 text-blue-600" />,
      title: "Regular Payments",
      description: "Standing orders & direct debits (SO & DD)"
    },
    {
      icon: <MapPin className="w-4 h-4 text-blue-600" />,
      title: "Geographic Data",
      description: "Location-based spending patterns"
    }
  ];

  const aiProcesses = [
    {
      icon: <Cpu className="w-4 h-4 text-purple-600" />,
      title: "Pattern Recognition",
      description: "Identify income, benefits, loans, subscriptions"
    },
    {
      icon: <Brain className="w-4 h-4 text-purple-600" />,
      title: "Behavioral Analysis",
      description: "Monitor deposits/withdrawals & engagement"
    },
    {
      icon: <Target className="w-4 h-4 text-purple-600" />,
      title: "Predictive Modeling",
      description: "Future projections & savings growth potential"
    },
    {
      icon: <Zap className="w-4 h-4 text-purple-600" />,
      title: "Real-time Processing",
      description: "Continuous data enrichment & updates"
    }
  ];

  const userInsights = [
    {
      icon: <PieChart className="w-4 h-4 text-green-600" />,
      title: "Smart Budgeting",
      description: "26 category budget suggestions",
      detail: "Automated categorization across spending types"
    },
    {
      icon: <TrendingUp className="w-4 h-4 text-green-600" />,
      title: "Financial Projections",
      description: "Monthly commitment tracking",
      detail: "Long-term investment growth visualization"
    },
    {
      icon: <DollarSign className="w-4 h-4 text-green-600" />,
      title: "Cashback Predictions",
      description: "Earning opportunity analysis",
      detail: "Koti card vs competitor comparisons"
    },
    {
      icon: <BarChart3 className="w-4 h-4 text-green-600" />,
      title: "Interactive Charts",
      description: "User-friendly visualizations",
      detail: "Spending, saving & investment trends"
    }
  ];

  const dataFlow = [
    { stage: "Bank APIs", color: "blue", width: "20%" },
    { stage: "Raw Data", color: "indigo", width: "15%" },
    { stage: "AI Engine", color: "purple", width: "30%" },
    { stage: "Enriched Data", color: "teal", width: "20%" },
    { stage: "User Insights", color: "green", width: "15%" }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-500",
      indigo: "bg-indigo-500", 
      purple: "bg-purple-500",
      teal: "bg-teal-500",
      green: "bg-green-500"
    };
    return colorMap[color as keyof typeof colorMap];
  };

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
            <h1 className="text-3xl font-bold mb-2">OPEN BANKING INTEGRATION & DATA ENRICHMENT</h1>
            <p className="text-base opacity-90">AI-Powered Financial Insights from Raw Banking Data to Predictive Analytics</p>
          </motion.div>

          {/* Data Flow Pipeline Ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-4"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
              <div className="flex items-center justify-between">
                {dataFlow.map((stage, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`${getColorClasses(stage.color)} text-white px-3 py-2 rounded-lg text-xs font-bold ${stage.width} text-center`}>
                      {stage.stage}
                    </div>
                    {index < dataFlow.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-white/60 mx-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Three-Column Data Processing Layout */}
          <div className="flex-1 flex gap-3">
            
            {/* Left Column - Raw Data Sources */}
            <div className="w-1/3 space-y-2">
              <h3 className="text-sm font-bold text-white text-center mb-2">Raw Banking Data</h3>
              
              {rawDataTypes.map((dataType, index) => (
                <motion.div
                  key={index}
                  className="bg-white border-l-4 border-blue-500 rounded-lg p-2 shadow-lg"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-50 rounded-lg flex items-center justify-center mr-2 flex-shrink-0">
                      {dataType.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-gray-800 mb-1">{dataType.title}</h4>
                      <p className="text-[10px] text-gray-700 leading-tight">{dataType.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Data Frequency Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-blue-600 text-white rounded-lg p-2 text-center"
              >
                <div className="text-xs font-bold">Frequencies</div>
                <div className="text-[10px] opacity-90">Daily • Weekly • Monthly • Quarterly</div>
              </motion.div>
            </div>

            {/* Center Column - AI Enrichment Engine */}
            <motion.div 
              className="w-1/3 bg-gradient-to-b from-purple-500 to-purple-600 rounded-xl p-3 text-white shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-sm font-bold text-center mb-3 flex items-center justify-center">
                <Brain className="w-4 h-4 mr-2" />
                AI Enrichment Engine
              </h3>

              <div className="space-y-2">
                {aiProcesses.map((process, index) => (
                  <div key={index} className="bg-purple-400/30 rounded-lg p-2">
                    <div className="flex items-start">
                      <div className="bg-white/20 p-1 rounded mr-2 flex-shrink-0">
                        {process.icon}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold mb-1">{process.title}</h4>
                        <p className="text-[10px] opacity-90 leading-tight">{process.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Training Data Note */}
              <div className="mt-3 pt-2 border-t border-purple-300/30">
                <div className="text-center">
                  <div className="text-xs font-bold flex items-center justify-center">
                    <Eye className="w-3 h-3 mr-1" />
                    Data Display Balance
                  </div>
                  <div className="text-[10px] opacity-90">
                    User insights vs AI training data separation
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - User Insights */}
            <div className="w-1/3 space-y-2">
              <h3 className="text-sm font-bold text-white text-center mb-2">User Insights</h3>
              
              {userInsights.map((insight, index) => (
                <motion.div
                  key={index}
                  className="bg-white border-l-4 border-green-500 rounded-lg p-2 shadow-lg"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-50 rounded-lg flex items-center justify-center mr-2 flex-shrink-0">
                      {insight.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-gray-800 mb-1">{insight.title}</h4>
                      <p className="text-[9px] text-gray-700 mb-1 leading-tight">{insight.description}</p>
                      <div className="text-[8px] font-medium text-green-700 bg-green-50 px-1 py-0.5 rounded">
                        {insight.detail}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Insight Categories Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-green-600 text-white rounded-lg p-2 text-center"
              >
                <div className="text-xs font-bold">26 Categories</div>
                <div className="text-[10px] opacity-90">Comprehensive spending analysis</div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl p-3 shadow-lg mt-3"
          >
            <div className="flex justify-center items-center gap-6">
              <div className="text-center">
                <h4 className="text-sm font-bold text-white">Smart Financial Insights</h4>
                <p className="text-xs text-emerald-200">From raw banking data to actionable intelligence</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-white/10 rounded-lg px-3 py-2 text-center">
                  <div className="text-xs font-bold text-white">Real-time</div>
                  <div className="text-[10px] text-emerald-200">Processing</div>
                </div>
                <div className="bg-white/10 rounded-lg px-3 py-2 text-center">
                  <div className="text-xs font-bold text-white">Predictive</div>
                  <div className="text-[10px] text-emerald-200">Analytics</div>
                </div>
                <div className="bg-white/10 rounded-lg px-3 py-2 text-center">
                  <div className="text-xs font-bold text-white">User-Friendly</div>
                  <div className="text-[10px] text-emerald-200">Interface</div>
                </div>
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
              <span>Open Banking Integration & Data Enrichment</span>
              <span>{(slideNumber || dynamicSlideNumber).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}