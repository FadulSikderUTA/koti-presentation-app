"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Server, 
  Shield, 
  FileCheck, 
  Database,
  Lock,
  Globe,
  Activity,
  Clock,
  Target
} from "lucide-react";
import { useSlideNumber } from '@/contexts/SlideNumberContext';
import { useSlideTitle } from '@/hooks/useSlideTitle';

interface InfrastructureOverviewSlideProps {
  slideNumber?: number;
}

export default function InfrastructureOverviewSlide({ 
  slideNumber 
}: InfrastructureOverviewSlideProps) {
  const dynamicSlideNumber = useSlideNumber();
  
  // Register this slide's title for dynamic navigation
  useSlideTitle("Infrastructure Overview & Regulatory Alignment");

  const sovereigntyFeatures = [
    {
      icon: <Database className="w-4 h-4 text-green-600" />,
      title: "100% On-Premise",
      description: "All infrastructure hosted within Bangladesh borders"
    },
    {
      icon: <Server className="w-4 h-4 text-green-600" />,
      title: "DC + DR Architecture", 
      description: "Primary data center with geographically separate disaster recovery"
    },
    {
      icon: <Globe className="w-4 h-4 text-green-600" />,
      title: "Data Residency",
      description: "Complete data sovereignty guaranteed by design"
    }
  ];

  const securityFeatures = [
    {
      icon: <Shield className="w-4 h-4 text-gray-600" />,
      title: "Defense-in-Depth",
      description: "Multi-layered security with NGFW, WAF/LB, and perimeter controls"
    },
    {
      icon: <Lock className="w-4 h-4 text-gray-600" />,
      title: "Encryption & SIEM",
      description: "End-to-end encryption with comprehensive monitoring and threat detection"
    },
    {
      icon: <Activity className="w-4 h-4 text-gray-600" />,
      title: "Board-Approved Policies",
      description: "ICT governance framework aligned with enterprise standards"
    }
  ];

  const complianceFeatures = [
    {
      icon: <FileCheck className="w-4 h-4 text-blue-600" />,
      title: "BB ICT Guidelines v4.0",
      description: "Strict adherence to Bangladesh Bank ICT security standards"
    },
    {
      icon: <Target className="w-4 h-4 text-blue-600" />,
      title: "PSD Circular 05/2024",
      description: "Credit bureau licensing and operational compliance"
    },
    {
      icon: <Clock className="w-4 h-4 text-blue-600" />,
      title: "Regulatory Reporting",
      description: "Automated compliance monitoring and BB reporting capabilities"
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
        <div className="h-full flex flex-col px-6 py-16 pb-40">
          {/* Title Section */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-2">INFRASTRUCTURE OVERVIEW & REGULATORY ALIGNMENT</h1>
            <p className="text-lg opacity-90">Sovereign, Secure & BB-Compliant Architecture</p>
          </motion.div>

          {/* Three Pillars Layout */}
          <div className="flex-1 grid grid-cols-3 gap-5">
            
            {/* Pillar 1: Data Sovereignty */}
            <motion.div 
              className="bg-white border-2 border-white/30 rounded-xl p-4 shadow-lg flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <Database className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Data Sovereignty</h3>
              </div>

              <div className="space-y-3 flex-1">
                {sovereigntyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex items-start mb-2">
                      <div className="bg-green-100 p-1 rounded mr-2 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-gray-800 mb-1">{feature.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Pillar 2: Security Framework */}
            <motion.div 
              className="bg-white border-2 border-white/30 rounded-xl p-4 shadow-lg flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <Shield className="w-5 h-5 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Security Framework</h3>
              </div>

              <div className="space-y-3 flex-1">
                {securityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  >
                    <div className="flex items-start mb-2">
                      <div className="bg-gray-100 p-1 rounded mr-2 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-gray-800 mb-1">{feature.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Pillar 3: Regulatory Compliance */}
            <motion.div 
              className="bg-white border-2 border-white/30 rounded-xl p-4 shadow-lg flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <FileCheck className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Regulatory Compliance</h3>
              </div>

              <div className="space-y-3 flex-1">
                {complianceFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="flex items-start mb-2">
                      <div className="bg-blue-100 p-1 rounded mr-2 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-gray-800 mb-1">{feature.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{feature.description}</p>
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
              <span>Infrastructure Overview & Regulatory Alignment</span>
              <span>{(slideNumber || dynamicSlideNumber).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}