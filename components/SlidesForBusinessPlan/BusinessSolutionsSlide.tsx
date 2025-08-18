"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSlideNumber } from '@/contexts/SlideNumberContext';
import { useSlideTitle } from '@/hooks/useSlideTitle';
import { 
  TrendingUp, 
  Shield, 
  Brain, 
  Wallet, 
  GraduationCap, 
  Code2, 
  LineChart, 
  ShieldCheck,
  Smartphone,
  Monitor,
  ArrowRight,
  CheckCircle2,
  Activity,
  Lock,
  BookOpen,
  CreditCard,
  MessageCircle,
  BarChart3,
  Home,
  User,
  Settings
} from "lucide-react";

interface BusinessSolutionsSlideProps {
  slideNumber?: number;
}

export default function BusinessSolutionsSlide({ slideNumber }: BusinessSolutionsSlideProps) {
  const dynamicSlideNumber = useSlideNumber();
  
  // Register this slide's title for dynamic navigation
  useSlideTitle("Business Solutions");
  const solutions = [
    {
      icon: TrendingUp,
      title: "Credit Hub",
      description: "Real-time monitoring"
    },
    {
      icon: Brain,
      title: "Risk Intelligence",
      description: "94% ML accuracy"
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Market insights"
    },
    {
      icon: Wallet,
      title: "Money Mgmt",
      description: "BNPL & budgeting"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Financial literacy"
    },
    {
      icon: Code2,
      title: "Developer API",
      description: "Easy integration"
    },
    {
      icon: ShieldCheck,
      title: "Fraud Detection",
      description: "Advanced security"
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

        {/* Main Content - Better Spaced */}
        <div className="h-full flex flex-col px-8 py-16 pb-24">
          {/* Title Section - Smaller */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-2">COMPREHENSIVE SOLUTIONS</h1>
            <p className="text-base opacity-90">AI-Powered Credit Intelligence for Bangladesh</p>
          </motion.div>

          {/* Main Content Area - Optimized for Wider Elements */}
          <div className="flex-1 flex items-center justify-between gap-6 mb-4 px-2">
            {/* Consumer Solutions - Mobile Mockup */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Phone Frame - More Realistic */}
                <div className="relative w-60 h-[360px] bg-gray-900 rounded-[2rem] p-2 shadow-2xl">
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-gray-900 rounded-full"></div>
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                    {/* App Screen - Credit Hub Tab */}
                    <div className="p-3 bg-gradient-to-b from-green-500 to-green-600 text-white">
                      <div className="flex items-center justify-between mb-3">
                        <Smartphone className="w-4 h-4" />
                        <span className="text-xs">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-3 h-2 bg-white rounded-sm"></div>
                          <div className="w-3 h-2 bg-white rounded-sm"></div>
                          <div className="w-3 h-2 bg-white rounded-sm"></div>
                        </div>
                      </div>
                      <h3 className="text-sm font-bold">Hello, Ahmed!</h3>
                      <p className="text-xs opacity-90">Your Credit Hub</p>
                    </div>
                    
                    {/* Score Display - More Compact */}
                    <div className="p-3">
                      <motion.div
                        className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white text-center mb-3"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <div className="text-3xl font-bold">765</div>
                        <div className="text-xs mt-1">Excellent Score</div>
                        <div className="mt-3 bg-white/20 rounded-full h-1.5">
                          <div className="bg-white rounded-full h-1.5 w-4/5"></div>
                        </div>
                      </motion.div>

                      {/* App Tabs */}
                      <div className="flex justify-around mb-3 bg-gray-100 rounded-lg p-1">
                        <motion.div 
                          className="flex-1 text-center py-1 bg-green-500 text-white rounded text-xs font-medium"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                        >
                          Credit
                        </motion.div>
                        <motion.div 
                          className="flex-1 text-center py-1 text-gray-600 text-xs"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.7 }}
                        >
                          Education
                        </motion.div>
                        <motion.div 
                          className="flex-1 text-center py-1 text-gray-600 text-xs"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                        >
                          Money
                        </motion.div>
                      </div>

                      {/* Features - High Contrast */}
                      <div className="space-y-1.5">
                        <motion.div
                          className="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-200 shadow-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <div className="flex items-center gap-2">
                            <Activity className="w-3 h-3 text-green-600" />
                            <span className="text-xs font-bold text-gray-900">Credit Monitor</span>
                          </div>
                          <ArrowRight className="w-3 h-3 text-gray-600" />
                        </motion.div>

                        <motion.div
                          className="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-200 shadow-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 }}
                        >
                          <div className="flex items-center gap-2">
                            <MessageCircle className="w-3 h-3 text-green-600" />
                            <span className="text-xs font-bold text-gray-900">AI Advisor Chat</span>
                          </div>
                          <ArrowRight className="w-3 h-3 text-gray-600" />
                        </motion.div>

                        <motion.div
                          className="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-200 shadow-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 }}
                        >
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-3 h-3 text-green-600" />
                            <span className="text-xs font-bold text-gray-900">Learn & Grow</span>
                          </div>
                          <ArrowRight className="w-3 h-3 text-gray-600" />
                        </motion.div>

                        <motion.div
                          className="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-200 shadow-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 }}
                        >
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-3 h-3 text-green-600" />
                            <span className="text-xs font-bold text-gray-900">BNPL Options</span>
                          </div>
                          <ArrowRight className="w-3 h-3 text-gray-600" />
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-3 py-2">
                      <div className="flex justify-around">
                        <Home className="w-4 h-4 text-green-500" />
                        <BarChart3 className="w-4 h-4 text-gray-400" />
                        <GraduationCap className="w-4 h-4 text-gray-400" />
                        <Wallet className="w-4 h-4 text-gray-400" />
                        <User className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Indicators - Smaller */}
                <motion.div
                  className="absolute -right-3 top-16 bg-white rounded-lg p-1 shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                </motion.div>
                
                <motion.div
                  className="absolute -left-3 bottom-24 bg-white rounded-lg p-1 shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <Lock className="w-4 h-4 text-green-500" />
                </motion.div>
              </div>
            </motion.div>

            {/* Integration Visualization - Better Balanced */}
            <motion.div
              className="flex flex-col items-center justify-center px-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <motion.div
                  className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
                
                {/* Connection Lines - Optimized for Wider Elements */}
                <motion.div
                  className="absolute top-1/2 -left-20 w-20 h-0.5 bg-white/30"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8 }}
                />
                <motion.div
                  className="absolute top-1/2 -right-20 w-20 h-0.5 bg-white/30"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8 }}
                />
              </div>
              
              <motion.div
                className="mt-2 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <p className="text-sm font-semibold">Real-time Sync</p>
                <p className="text-xs opacity-80">Secure API</p>
              </motion.div>
            </motion.div>

            {/* Business Solutions - Dashboard Mockup - Smaller */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Desktop Frame - Substantially Wider */}
                <div className="w-[420px] bg-gray-900 rounded-lg p-2 shadow-2xl">
                  <div className="flex gap-1 mb-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="bg-white rounded p-3">
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Monitor className="w-4 h-4 text-gray-700" />
                        <span className="font-semibold text-gray-800 text-sm">Lender Dashboard</span>
                      </div>
                      <span className="text-xs text-gray-500">Live</span>
                    </div>

                    {/* Metrics Grid - More Compact */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-2 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="text-lg font-bold">94%</div>
                        <div className="text-xs">Model Accuracy</div>
                      </motion.div>

                      <motion.div
                        className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-2 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="text-lg font-bold">2.3s</div>
                        <div className="text-xs">Avg Response</div>
                      </motion.div>

                      <motion.div
                        className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-2 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <div className="text-lg font-bold">15K</div>
                        <div className="text-xs">Daily Queries</div>
                      </motion.div>

                      <motion.div
                        className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-2 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        <div className="text-lg font-bold">1.8%</div>
                        <div className="text-xs">Default Rate</div>
                      </motion.div>
                    </div>

                    {/* Risk Distribution Chart - Compact */}
                    <motion.div
                      className="bg-gray-50 rounded-lg p-2 mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <div className="text-xs font-semibold text-gray-600 mb-1">Risk Distribution</div>
                      <div className="flex h-1.5 rounded-full overflow-hidden">
                        <div className="bg-green-500 w-2/5"></div>
                        <div className="bg-yellow-500 w-1/4"></div>
                        <div className="bg-orange-500 w-1/5"></div>
                        <div className="bg-red-500 w-[15%]"></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">Low</span>
                        <span className="text-xs text-gray-500">Med</span>
                        <span className="text-xs text-gray-500">High</span>
                        <span className="text-xs text-gray-500">Critical</span>
                      </div>
                    </motion.div>

                    {/* Recent Alerts - Smaller */}
                    <div className="space-y-1">
                      <motion.div
                        className="flex items-center gap-2 p-1.5 bg-yellow-50 rounded-lg border border-yellow-200"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1 }}
                      >
                        <Shield className="w-3 h-3 text-yellow-600" />
                        <span className="text-xs text-gray-700">Fraud alert: Pattern detected</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature Grid - 7 Solutions - Enlarged */}
          <motion.div
            className="grid grid-cols-7 gap-3 px-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <solution.icon className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-sm font-semibold mb-1">{solution.title}</h4>
                <p className="text-xs opacity-80">{solution.description}</p>
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
              <span>Business Solutions</span>
              <span>{(slideNumber || dynamicSlideNumber).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}