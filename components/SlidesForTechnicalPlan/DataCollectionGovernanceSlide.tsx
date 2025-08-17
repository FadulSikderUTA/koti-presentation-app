"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  Shield, 
  Clock, 
  Filter,
  FileCheck,
  Users,
  Lock,
  Database
} from "lucide-react";
import { useSlideNumber } from '@/contexts/SlideNumberContext';

interface DataCollectionGovernanceSlideProps {
  slideNumber?: number;
}

export default function DataCollectionGovernanceSlide({ 
  slideNumber 
}: DataCollectionGovernanceSlideProps) {
  const dynamicSlideNumber = useSlideNumber();

  const governancePrinciples = [
    {
      id: 1,
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      title: "Consent & Purpose Limitation",
      description: "Explicit user consent required for all data collection • Data used only for stated verification purposes",
      evidence: "User rights protection by design",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      icon: <Filter className="w-5 h-5 text-green-600" />,
      title: "Data Minimization & Necessity", 
      description: "Collect only essential data required for KYC/AML compliance • No excessive data gathering",
      evidence: "Verification-purpose data only",
      borderColor: "border-green-500",
      bgColor: "bg-green-50"
    },
    {
      id: 3,
      icon: <Shield className="w-5 h-5 text-purple-600" />,
      title: "Security by Design",
      description: "End-to-end encryption in transit & at rest • Secure storage compliant with data protection policy",
      evidence: "Encrypted from collection to disposal",
      borderColor: "border-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      id: 4,
      icon: <Clock className="w-5 h-5 text-orange-600" />,
      title: "Time-Bound Retention",
      description: "Data retained only for duration necessary to fulfill regulatory & operational requirements",
      evidence: "Automatic secure disposal post-compliance",
      borderColor: "border-orange-500",
      bgColor: "bg-orange-50"
    }
  ];

  const governanceMetrics = [
    { 
      icon: <FileCheck className="w-4 h-4 text-white" />,
      label: "Framework", 
      value: "Governance Policy", 
      detail: "Board-approved standards"
    },
    { 
      icon: <Users className="w-4 h-4 text-white" />,
      label: "Authority", 
      value: "Designated Owner", 
      detail: "Responsible oversight"
    },
    { 
      icon: <Lock className="w-4 h-4 text-white" />,
      label: "Standards", 
      value: "KYC/AML/GDPR", 
      detail: "Multi-framework compliance"
    },
    { 
      icon: <Database className="w-4 h-4 text-white" />,
      label: "Sharing Policy", 
      value: "Essential Only", 
      detail: "Regulatory purposes"
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
            className="text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-2">DATA COLLECTION PRINCIPLES & GOVERNANCE</h1>
            <p className="text-base opacity-90">Board-Approved Framework for Ethical & Compliant Data Practices</p>
          </motion.div>

          {/* Main Layout: Principles + RACI Matrix */}
          <div className="flex-1 flex gap-4 mb-5">
            
            {/* Left 70% - Four Governance Principles */}
            <div className="w-[70%] grid grid-cols-2 gap-4">
              {governancePrinciples.map((principle, index) => (
                <motion.div
                  key={principle.id}
                  className={`bg-white ${principle.borderColor} border-l-4 rounded-lg p-5 shadow-lg`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-start mb-3">
                    <div className={`w-9 h-9 ${principle.bgColor} rounded-lg flex items-center justify-center mr-3 flex-shrink-0`}>
                      {principle.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-gray-800 mb-2">{principle.title}</h3>
                      <p className="text-xs text-gray-700 mb-3 leading-tight">{principle.description}</p>
                      <div className={`text-xs font-bold text-gray-800 bg-gray-100 px-2 py-1 rounded-full inline-block border border-gray-300`}>
                        ✓ {principle.evidence}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right 30% - RACI Matrix */}
            <motion.div 
              className="w-[30%] bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-xl p-5 text-white shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className="text-base font-bold text-center mb-5">Data Access Control Matrix</h4>
              
              {/* RACI Table */}
              <div className="bg-white/10 rounded-lg p-4">
                <div className="grid gap-2 text-xs font-bold mb-4" style={{ gridTemplateColumns: '1.2fr 1fr 1fr 1fr 1fr' }}>
                  <div></div>
                  <div className="text-center">See</div>
                  <div className="text-center">Use</div>
                  <div className="text-center">Store</div>
                  <div className="text-center">Share</div>
                </div>
                
                {/* User Row */}
                <div className="grid gap-2 text-xs mb-3" style={{ gridTemplateColumns: '1.2fr 1fr 1fr 1fr 1fr' }}>
                  <div className="font-medium">User</div>
                  <div className="text-center bg-green-400 rounded text-green-900 py-1.5">✓</div>
                  <div className="text-center bg-green-400 rounded text-green-900 py-1.5">✓</div>
                  <div className="text-center bg-red-400 rounded text-red-900 py-1.5">✗</div>
                  <div className="text-center bg-red-400 rounded text-red-900 py-1.5">✗</div>
                </div>
                
                {/* Koti Row */}
                <div className="grid gap-2 text-xs mb-3" style={{ gridTemplateColumns: '1.2fr 1fr 1fr 1fr 1fr' }}>
                  <div className="font-medium">Koti</div>
                  <div className="text-center bg-green-400 rounded text-green-900 py-1.5">✓</div>
                  <div className="text-center bg-green-400 rounded text-green-900 py-1.5">✓</div>
                  <div className="text-center bg-green-400 rounded text-green-900 py-1.5">✓</div>
                  <div className="text-center bg-yellow-400 rounded text-yellow-900 py-1.5">Min</div>
                </div>
                
                {/* Partner Row */}
                <div className="grid gap-2 text-xs mb-3" style={{ gridTemplateColumns: '1.2fr 1fr 1fr 1fr 1fr' }}>
                  <div className="font-medium">Partner</div>
                  <div className="text-center bg-yellow-400 rounded text-yellow-900 py-1.5">Ltd</div>
                  <div className="text-center bg-red-400 rounded text-red-900 py-1.5">✗</div>
                  <div className="text-center bg-red-400 rounded text-red-900 py-1.5">✗</div>
                  <div className="text-center bg-red-400 rounded text-red-900 py-1.5">✗</div>
                </div>
                
                {/* Regulator Row */}
                <div className="grid gap-2 text-xs" style={{ gridTemplateColumns: '1.2fr 1fr 1fr 1fr 1fr' }}>
                  <div className="font-medium">Regulator</div>
                  <div className="text-center bg-yellow-400 rounded text-yellow-900 py-1.5">Audit</div>
                  <div className="text-center bg-red-400 rounded text-red-900 py-1.5">✗</div>
                  <div className="text-center bg-red-400 rounded text-red-900 py-1.5">✗</div>
                  <div className="text-center bg-red-400 rounded text-red-900 py-1.5">✗</div>
                </div>
              </div>
              
              {/* Legend */}
              <div className="mt-4 text-xs space-y-2">
                <div className="flex justify-between">
                  <span>✓ Full Access</span>
                  <span>Min = Minimal</span>
                </div>
                <div className="flex justify-between">
                  <span>Ltd = Limited</span>
                  <span>✗ No Access</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Data Sharing Policy Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-5 text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3 border border-white/20">
              <p className="text-sm text-white/90">
                <span className="font-semibold">Data Sharing Policy:</span> Only essential data shared with network partners, strictly for regulatory or compliance purposes
              </p>
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
              <span>Data Collection Principles & Governance</span>
              <span>{(slideNumber || dynamicSlideNumber).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}