"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Users, 
  Shield, 
  Handshake,
  TrendingUp,
  MessageSquare,
  FileText,
  Building2
} from "lucide-react";

export default function TractionSlide() {
  const tractionPoints = [
    {
      icon: <Globe className="w-5 h-5 text-green-600" />,
      title: "Website Traffic",
      description: "Early visits and sign-ups through kotibd.com indicate growing interest from consumers and financial institutions",
      details: [
        "Organic traffic growth",
        "Beta access waitlist active",
        "Cross-audience engagement"
      ],
      style: "white",
      badge: "Digital Presence"
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-white" />,
      title: "Social Media Engagement",
      description: "Digital presence attracting attention with early followers, shares, and growing interest in credit awareness",
      details: [
        "Growing follower base",
        "Feature requests received", 
        "Credit education discussions"
      ],
      style: "gradient",
      badge: "Market Research"
    },
    {
      icon: <Handshake className="w-5 h-5 text-green-600" />,
      title: "Partnership Conversations",
      description: "Early-stage discussions with multiple banks and financial institutions interested in our credit infrastructure",
      details: [
        "Tier-1 bank discussions",
        "MFI partnership interest",
        "Data-sharing frameworks"
      ],
      style: "white",
      badge: "B2B Pipeline"
    },
    {
      icon: <Shield className="w-5 h-5 text-white" />,
      title: "Regulatory Progress",
      description: "Formal engagement with Bangladesh Bank progressing through licensing process as a private credit bureau",
      details: [
        "BB application submitted",
        "Licensing process active",
        "Regulatory compliance focus"
      ],
      style: "gradient",
      badge: "De-risking"
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
            <h1 className="text-4xl font-bold mb-3">TRACTION</h1>
            <p className="text-lg opacity-90">Building Momentum Across All Key Fronts</p>
          </motion.div>

          {/* Traction Grid */}
          <div className="flex-1 grid grid-cols-2 gap-6 mb-4">
            {tractionPoints.map((point, index) => (
              <motion.div
                key={index}
                className={`relative ${
                  point.style === 'white' 
                    ? 'bg-white border-2 border-white/30' 
                    : 'bg-gradient-to-br from-green-500 to-green-600'
                } rounded-xl p-5 shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Badge */}
                <div className={`absolute -top-2 -right-2 ${
                  point.style === 'white' ? 'bg-green-500' : 'bg-white/20'
                } backdrop-blur-sm rounded-full px-3 py-1`}>
                  <span className={`text-xs font-bold ${
                    point.style === 'white' ? 'text-white' : 'text-white'
                  }`}>{point.badge}</span>
                </div>
                
                {/* Icon */}
                <div className={`w-12 h-12 ${
                  point.style === 'white' ? 'bg-green-100' : 'bg-white/20'
                } rounded-lg flex items-center justify-center mb-4`}>
                  {point.icon}
                </div>
                
                {/* Content */}
                <h3 className={`text-lg font-bold mb-2 ${
                  point.style === 'white' ? 'text-gray-800' : 'text-white'
                }`}>{point.title}</h3>
                
                <p className={`text-sm leading-snug mb-2 ${
                  point.style === 'white' ? 'text-gray-600' : 'text-white/90'
                }`}>{point.description}</p>

                {/* Detail Points */}
                <div className="space-y-2">
                  {point.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 + detailIndex * 0.05 }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        point.style === 'white' ? 'bg-green-500' : 'bg-white/60'
                      }`} />
                      <span className={`text-xs ${
                        point.style === 'white' ? 'text-gray-600' : 'text-white/80'
                      }`}>{detail}</span>
                    </motion.div>
                  ))}
                </div>
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
              <span>Traction</span>
              <span>17</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}