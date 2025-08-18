"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Clock, 
  Users, 
  MessageSquare, 
  FileText, 
  AlertTriangle,
  Phone,
  Mail,
  Smartphone,
  Eye
} from "lucide-react";
import { useSlideNumber } from '@/contexts/SlideNumberContext';
import { useSlideTitle } from '@/hooks/useSlideTitle';

export default function ComplianceSlide() {
  const dynamicSlideNumber = useSlideNumber();
  
  // Register this slide's title for dynamic navigation
  useSlideTitle("Compliance & Complaints Policy");
  const complaintChannels = [
    {
      id: 1,
      icon: <Smartphone className="w-5 h-5 text-green-600" />,
      title: "Multi-Channel Access",
      description: "Free complaint submission through app, phone, email, chat, and other reasonable means",
      highlight: "Free of Charge",
      timeline: "24/7 Available"
    },
    {
      id: 2,
      icon: <Clock className="w-5 h-5 text-green-600" />,
      title: "Rapid Response",
      description: "Acknowledgement within 2 business days, resolution within 2 days where possible",
      highlight: "2 Day Target",
      timeline: "Quick Resolution"
    },
    {
      id: 3,
      icon: <MessageSquare className="w-5 h-5 text-green-600" />,
      title: "Extended Support",
      description: "Clear communication if resolution takes longer, maximum 35 business days response",
      highlight: "35 Day Maximum",
      timeline: "Full Transparency"
    }
  ];

  const governanceProcesses = [
    {
      id: 1,
      icon: <Eye className="w-5 h-5 text-white" />,
      title: "Four Eyes Approach",
      description: "Chief Compliance Officer and Chief Operations Officer collaborate on resolution",
      feature: "Dual oversight for quality",
      compliance: "Root cause analysis"
    },
    {
      id: 2,
      icon: <FileText className="w-5 h-5 text-white" />,
      title: "Final Response Protocol",
      description: "Clear summary resolution communication outlining firm's decision and reasoning",
      feature: "Transparent decisions",
      compliance: "Documented outcomes"
    },
    {
      id: 3,
      icon: <Shield className="w-5 h-5 text-white" />,
      title: "Regulatory Escalation",
      description: "Referral pathway to Bangladesh Bank Financial Integrity and Customer Services Department",
      feature: "Independent review option",
      compliance: "Annual BB reporting"
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
        <div className="h-full flex flex-col px-7 py-20 pb-36">
          {/* Title Section - Compacted by 10% */}
          <motion.div
            className="text-center mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-1">COMPLIANCE & COMPLAINTS POLICY</h1>
            <p className="text-base opacity-90">Customer Protection & Regulatory Adherence Framework</p>
          </motion.div>

          {/* Two Column Layout - Compacted spacing */}
          <div className="flex-1 flex gap-4">
            
            {/* Left Column - Customer Access & Response */}
            <motion.div 
              className="w-1/2 flex flex-col"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-lg font-bold">Customer Access & Response</h2>
              </div>

              <div className="space-y-3 flex-1">
                {complaintChannels.map((channel, index) => (
                  <motion.div
                    key={channel.id}
                    className="bg-white border-2 border-white/30 rounded-xl p-3 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                  >
                    <div className="flex items-start mb-2">
                      <div className="bg-green-100 p-2 rounded-lg mr-3 flex-shrink-0">
                        {channel.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-gray-800 mb-1">{channel.title}</h3>
                        <p className="text-xs text-gray-600 leading-relaxed mb-2">
                          {channel.description}
                        </p>
                        <div className="flex justify-between items-center gap-2">
                          <div className="text-[10px] text-green-600 font-semibold">
                            {channel.highlight}
                          </div>
                          <div className="text-[10px] text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded">
                            {channel.timeline}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Governance & Oversight */}
            <motion.div 
              className="w-1/2 flex flex-col"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-lg font-bold">Governance & Oversight</h2>
              </div>

              <div className="space-y-3 flex-1">
                {governanceProcesses.map((process, index) => (
                  <motion.div
                    key={process.id}
                    className="bg-gradient-to-r from-green-500 to-green-600 border-2 border-green-400/30 rounded-xl p-3 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                  >
                    <div className="flex items-start mb-2">
                      <div className="bg-white/20 p-2 rounded-lg mr-3 flex-shrink-0">
                        {process.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-white mb-1">{process.title}</h3>
                        <p className="text-xs text-white opacity-90 leading-relaxed mb-2">
                          {process.description}
                        </p>
                        <div className="flex justify-between items-center gap-2">
                          <div className="text-[10px] text-white font-semibold bg-white/20 px-2 py-1 rounded">
                            {process.feature}
                          </div>
                          <div className="text-[10px] text-yellow-300 font-semibold bg-black/20 px-2 py-1 rounded">
                            {process.compliance}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Key Metrics - Compacted */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-3 bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20"
          >
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-xl font-bold text-green-contrast header-with-background">2 Days</div>
                <div className="text-xs text-white text-readable-background-sm">Standard Response</div>
              </div>
              <div>
                <div className="text-xl font-bold text-blue-contrast header-with-background">35 Days</div>
                <div className="text-xs text-white text-readable-background-sm">Maximum Resolution</div>
              </div>
              <div>
                <div className="text-xl font-bold text-purple-contrast header-with-background">100%</div>
                <div className="text-xs text-white text-readable-background-sm">Record Keeping</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer - Page Title and Number */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="absolute bottom-0 left-0 right-0"
        >
          <div className="bg-white/10 backdrop-blur-sm border-t border-white/20 px-12 py-4">
            <div className="flex justify-between items-center text-sm text-white font-semibold">
              <span>Compliance & Complaints Policy</span>
              <span>{dynamicSlideNumber.toString().padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}