"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Users, 
  BarChart3, 
  Zap, 
  Handshake, 
  Database,
  CreditCard,
  TrendingUp,
  Globe,
  Shield,
  Layers,
  Target
} from "lucide-react";

export default function RevenueModelSlide() {
  const revenueStreams = [
    {
      icon: <Building2 className="w-5 h-5 text-green-600" />,
      title: "B2B API Subscriptions",
      description: "Tiered monthly/annual licensing for banks, MFIs, and fintech companies",
      style: "white",
      badge: "Core Revenue"
    },
    {
      icon: <Users className="w-5 h-5 text-white" />,
      title: "Consumer Platform",
      description: "Freemium B2C model for individuals accessing credit insights",
      style: "gradient", 
      badge: "Growth Engine"
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-green-600" />,
      title: "Custom Analytics",
      description: "Bespoke data services and risk intelligence reports",
      style: "white",
      badge: "High Margin"
    },
    {
      icon: <Zap className="w-5 h-5 text-white" />,
      title: "Transaction Fees",
      description: "Pay-per-use API calls and real-time data queries",
      style: "gradient",
      badge: "Scalable"
    },
    {
      icon: <Handshake className="w-5 h-5 text-green-600" />,
      title: "Partnership Revenue",
      description: "Referral commissions and BNPL provider integrations",
      style: "white",
      badge: "Strategic"
    },
    {
      icon: <Database className="w-5 h-5 text-white" />,
      title: "Enterprise Licensing",
      description: "Large-scale data licensing for corporations and government",
      style: "gradient",
      badge: "Premium"
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
            <h1 className="text-4xl font-bold mb-3">REVENUE MODEL</h1>
            <p className="text-lg opacity-90">Diversified Monetization Strategy for Sustainable Growth</p>
          </motion.div>

          {/* Revenue Streams Grid - Balanced Design */}
          <div className="flex-1 grid grid-cols-3 gap-6 mb-6">
            {revenueStreams.map((stream, index) => (
              <motion.div
                key={index}
                className={`relative ${
                  stream.style === 'white' 
                    ? 'bg-white border-2 border-white/30' 
                    : 'bg-gradient-to-r from-green-500 to-green-600'
                } rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Badge */}
                <div className={`absolute -top-2 -right-2 ${
                  stream.style === 'white' ? 'bg-green-500' : 'bg-white/20'
                } backdrop-blur-sm rounded-full px-3 py-1`}>
                  <span className={`text-xs font-bold ${
                    stream.style === 'white' ? 'text-white' : 'text-white'
                  }`}>{stream.badge}</span>
                </div>
                
                {/* Icon */}
                <div className={`w-12 h-12 ${
                  stream.style === 'white' ? 'bg-green-100' : 'bg-white/20'
                } rounded-lg flex items-center justify-center mb-4`}>
                  {stream.icon}
                </div>
                
                {/* Content */}
                <h3 className={`text-lg font-bold mb-2 ${
                  stream.style === 'white' ? 'text-gray-800' : 'text-white'
                }`}>{stream.title}</h3>
                <p className={`text-sm leading-relaxed ${
                  stream.style === 'white' ? 'text-gray-600' : 'text-white opacity-90'
                }`}>{stream.description}</p>
              </motion.div>
            ))}
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
              <span>Revenue Model</span>
              <span>08</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}