"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  CreditCard, 
  Shield, 
  Database,
  CheckCircle,
  Clock,
  FileText,
  Eye,
  Bell,
  ArrowRight,
  Lock,
  Zap,
  Activity,
  Search,
  BarChart3
} from "lucide-react";
import { useSlideNumber } from '@/contexts/SlideNumberContext';
import { useSlideTitle } from '@/hooks/useSlideTitle';

interface MemberCreditInquirySlideProps {
  slideNumber?: number;
}

export default function MemberCreditInquirySlide({ 
  slideNumber 
}: MemberCreditInquirySlideProps) {
  const dynamicSlideNumber = useSlideNumber();
  useSlideTitle("Member Credit Inquiry Process");

  const systems = [
    { name: "Member\nSystem", color: "bg-blue-100", icon: <CreditCard className="w-4 h-4 text-blue-600" /> },
    { name: "API\nGateway", color: "bg-green-100", icon: <Shield className="w-4 h-4 text-green-600" /> },
    { name: "Backend\nPlatform", color: "bg-purple-100", icon: <BarChart3 className="w-4 h-4 text-purple-600" /> },
    { name: "Credit\nRepository", color: "bg-orange-100", icon: <Database className="w-4 h-4 text-orange-600" /> },
    { name: "Audit\nLog", color: "bg-gray-100", icon: <FileText className="w-4 h-4 text-gray-600" /> },
    { name: "Consumer\nAlerts", color: "bg-teal-100", icon: <Bell className="w-4 h-4 text-teal-600" /> }
  ];

  const sequenceSteps = [
    {
      step: 1,
      action: "Secure API Request",
      description: "HTTPS/TLS 1.2+ • JSON Payload",
      from: 0,
      to: 1,
      security: "TLS",
      timing: "0.1s"
    },
    {
      step: 2, 
      action: "Authenticate & Authorize",
      description: "API Keys • RBAC • Member ID",
      from: 1,
      to: 2,
      security: "RBAC",
      timing: "0.2s"
    },
    {
      step: 3,
      action: "Validate Input Data",
      description: "Schema • Business Rules • Consent",
      from: 2,
      to: 2,
      security: "Validation",
      timing: "0.1s"
    },
    {
      step: 4,
      action: "Query Subject Data",
      description: "NID • Name • DOB matching",
      from: 2,
      to: 3,
      security: "Access Control",
      timing: "0.5s"
    },
    {
      step: 5,
      action: "Calculate Score & Generate Report",
      description: "AI/ML Scoring • Report Compilation",
      from: 2,
      to: 2,
      security: "Processing",
      timing: "0.8s"
    },
    {
      step: 6,
      action: "Format & Mask Response",
      description: "Data Masking • JSON Response",
      from: 2,
      to: 1,
      security: "Masking",
      timing: "0.2s"
    },
    {
      step: 7,
      action: "Audit & Alert",
      description: "Log Transaction • Trigger Alerts",
      from: 2,
      to: 4,
      security: "Audit",
      timing: "0.1s"
    }
  ];

  const requestExample = {
    title: "Request Structure",
    fields: [
      "requestId: unique-123",
      "inquiryType: consumerCreditReport", 
      "customer: {nationalId, fullName, dateOfBirth}",
      "consentGranted: true",
      "inquiryReason: NewLoanApplication"
    ]
  };

  const responseExample = {
    title: "Response Structure", 
    fields: [
      "status: SUCCESS",
      "score: 750 (300-850 range)",
      "accounts: [masked account data]",
      "inquiryHistory: [recent checks]",
      "processingTime: 1.9s"
    ]
  };


  const securityControls = [
    { name: "HTTPS/TLS 1.2+", icon: <Lock className="w-3 h-3 text-green-600" /> },
    { name: "API Authentication", icon: <Shield className="w-3 h-3 text-blue-600" /> },
    { name: "RBAC Authorization", icon: <Eye className="w-3 h-3 text-purple-600" /> },
    { name: "Schema Validation", icon: <CheckCircle className="w-3 h-3 text-orange-600" /> },
    { name: "Data Masking", icon: <FileText className="w-3 h-3 text-teal-600" /> },
    { name: "Comprehensive Audit", icon: <Search className="w-3 h-3 text-gray-600" /> }
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
        <div className="h-full flex flex-col px-2 py-16 pb-40">
          {/* Title Section */}
          <motion.div
            className="text-center mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-2">MEMBER CREDIT INQUIRY PROCESS</h1>
            <p className="text-base opacity-90">Real-time API-driven Credit Decisioning in Under 2 Seconds</p>
          </motion.div>

          {/* Main Layout: Sequence Diagram + Technical Panel */}
          <div className="flex-1 flex gap-4">
            
            {/* Left 70% - Sequence Diagram */}
            <div className="w-[70%] bg-white rounded-xl p-4 shadow-lg">
              {/* Systems Header */}
              <div className="grid grid-cols-6 gap-2 mb-6">
                {systems.map((system, index) => (
                  <motion.div
                    key={index}
                    className={`${system.color} rounded-lg p-2 text-center`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex justify-center mb-1">{system.icon}</div>
                    <div className="text-xs font-bold text-gray-800 whitespace-pre-line leading-tight">
                      {system.name}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Sequence Flow */}
              <div className="space-y-2 flex-1">
                {sequenceSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-center">
                      {/* Step number */}
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                        {step.step}
                      </div>
                      
                      {/* Action description */}
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-800">{step.action}</div>
                        <div className="text-xs text-gray-600">{step.description}</div>
                      </div>

                      {/* Security badge */}
                      <div className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium mr-2">
                        {step.security}
                      </div>

                      {/* Timing */}
                      <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold min-w-12 text-center">
                        {step.timing}
                      </div>
                    </div>

                    {/* Arrow indicator */}
                    <div className="absolute left-8 top-8 w-0.5 h-4 bg-blue-300"></div>
                  </motion.div>
                ))}
              </div>

              {/* Total Response Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-3 text-center"
              >
                <div className="text-white font-bold flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Total Response Time: &lt;2 Seconds
                </div>
              </motion.div>
            </div>

            {/* Right 30% - Technical Details Panel */}
            <motion.div 
              className="w-[30%] space-y-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Security Controls - Moved to top */}
              <div className="bg-white rounded-lg p-2 shadow-lg">
                <h4 className="text-xs font-bold text-red-600 mb-1">Security Controls</h4>
                <div className="grid grid-cols-2 gap-1">
                  {securityControls.map((control, index) => (
                    <div key={index} className="flex items-center bg-gray-50 rounded px-1 py-0.5">
                      {control.icon}
                      <span className="text-[10px] text-gray-700 ml-1 font-medium">{control.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Request Example */}
              <div className="bg-white rounded-lg p-2 shadow-lg">
                <h4 className="text-xs font-bold text-blue-600 mb-1 flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1" />
                  {requestExample.title}
                </h4>
                <div className="space-y-0.5">
                  {requestExample.fields.map((field, index) => (
                    <div key={index} className="text-[10px] text-gray-700 font-mono bg-gray-50 px-1 py-0.5 rounded">
                      {field}
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Example */}
              <div className="bg-white rounded-lg p-2 shadow-lg">
                <h4 className="text-xs font-bold text-green-600 mb-1 flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1 rotate-180" />
                  {responseExample.title}
                </h4>
                <div className="space-y-0.5">
                  {responseExample.fields.map((field, index) => (
                    <div key={index} className="text-[10px] text-gray-700 font-mono bg-gray-50 px-1 py-0.5 rounded">
                      {field}
                    </div>
                  ))}
                </div>
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
              <span>Member Credit Inquiry Process</span>
              <span>{(slideNumber || dynamicSlideNumber).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}