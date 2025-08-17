"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  CreditCard, 
  Camera, 
  Video, 
  Database,
  ScanLine,
  Eye,
  Shield,
  AlertTriangle,
  CheckCircle,
  FileCheck,
  Users,
  Zap
} from "lucide-react";
import { useSlideNumber } from '@/contexts/SlideNumberContext';

interface IdentityAntiSpoofingSlideProps {
  slideNumber?: number;
}

export default function IdentityAntiSpoofingSlide({ 
  slideNumber 
}: IdentityAntiSpoofingSlideProps) {
  const dynamicSlideNumber = useSlideNumber();

  const securityLayers = [
    {
      id: 1,
      title: "Document Verification",
      icon: <CreditCard className="w-5 h-5 text-blue-600" />,
      description: "Official identity documents processed through OCR with authenticity validation",
      details: "Passport • Driver's licence • National ID • Residence permit",
      process: "Extract: Full name, DOB, nationality, document number, expiry • Verify authenticity, legibility & validity",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700"
    },
    {
      id: 2,
      title: "Biometric Matching",
      icon: <Camera className="w-5 h-5 text-green-600" />,
      description: "Facial recognition comparison between live selfie and document photo",
      details: "Live selfie • Facial recognition • Photo comparison",
      process: "Capture real-time photograph • Match biometric data with ID photo • Confirm document owner identity",
      borderColor: "border-green-500",
      bgColor: "bg-green-50",
      textColor: "text-green-700"
    },
    {
      id: 3,
      title: "Liveness Detection",
      icon: <Video className="w-5 h-5 text-purple-600" />,
      description: "Advanced anti-spoofing technology preventing replay attacks and deepfakes",
      details: "Video recording • Micro-movement analysis • Spoof detection",
      process: "Record short video/selfies • Analyze facial geometry & micro-movements • Defeat photos, masks, videos",
      borderColor: "border-purple-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700"
    },
    {
      id: 4,
      title: "Database Cross-Check",
      icon: <Database className="w-5 h-5 text-orange-600" />,
      description: "Government and watchlist screening for risk assessment and compliance",
      details: "Government databases • Watchlists • Financial records",
      process: "Query gov databases • Screen PEP/sanctions lists • Ensure no risk flags or fraudulent activity",
      borderColor: "border-orange-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700"
    }
  ];

  const antiSpoofingFeatures = [
    {
      icon: <Eye className="w-4 h-4 text-red-600" />,
      title: "Replay Attack Prevention",
      description: "Detects static images & video playback"
    },
    {
      icon: <AlertTriangle className="w-4 h-4 text-red-600" />,
      title: "Mask Detection",
      description: "Identifies physical masks & 3D models"
    },
    {
      icon: <Zap className="w-4 h-4 text-red-600" />,
      title: "Deepfake Protection",
      description: "AI-generated face detection"
    },
    {
      icon: <ScanLine className="w-4 h-4 text-red-600" />,
      title: "Micro-Movement Analysis",
      description: "Validates natural facial movements"
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
            <h1 className="text-3xl font-bold mb-2">IDENTITY VERIFICATION & ANTI-SPOOFING</h1>
            <p className="text-base opacity-90">4-Layer Security System with Advanced Fraud Prevention Technology</p>
          </motion.div>

          {/* Main Layout: Security Layers + Anti-Spoofing */}
          <div className="flex-1 flex gap-5">
            
            {/* Left 70% - Security Layers */}
            <div className="w-[70%] space-y-3">
              {securityLayers.map((layer, index) => (
                <motion.div
                  key={layer.id}
                  className={`bg-white ${layer.borderColor} border-l-4 rounded-lg p-3 shadow-lg`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className={`w-9 h-9 ${layer.bgColor} rounded-lg flex items-center justify-center mr-3 flex-shrink-0`}>
                      {layer.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-sm font-bold text-gray-800 mr-2">
                          LAYER {layer.id}: {layer.title}
                        </h3>
                        <div className="bg-gray-200 px-2 py-1 rounded-full text-[9px] font-medium text-gray-600">
                          {layer.details}
                        </div>
                      </div>
                      <p className="text-xs text-gray-700 mb-2 leading-tight">{layer.description}</p>
                      <div className={`text-[10px] font-bold ${layer.textColor} ${layer.bgColor} px-2 py-1 rounded border ${layer.borderColor} leading-tight`}>
                        Process: {layer.process}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right 30% - Anti-Spoofing Technology */}
            <motion.div 
              className="w-[30%] bg-gradient-to-b from-red-500 to-red-600 rounded-xl p-4 text-white shadow-lg flex flex-col"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Header */}
              <div className="text-center mb-4">
                <h4 className="text-sm font-bold mb-1 flex items-center justify-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Anti-Spoofing Technology
                </h4>
                <div className="text-xs opacity-90">Advanced Fraud Prevention</div>
              </div>

              {/* Spoofing Protection Features */}
              <div className="space-y-3 flex-1">
                {antiSpoofingFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-red-400/30 rounded-lg p-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="flex items-start">
                      <div className="bg-white/20 p-1.5 rounded mr-2 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <div className="text-xs font-semibold mb-1">{feature.title}</div>
                        <div className="text-[10px] opacity-90 leading-tight">{feature.description}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Threat Detection Stats */}
              <div className="mt-4 pt-3 border-t border-red-300/30">
                <div className="text-center">
                  <div className="text-base font-bold">99.9%</div>
                  <div className="text-xs opacity-90">Threat Detection Rate</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Identity Verification Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl p-4 shadow-lg mt-4"
          >
            <div className="flex justify-center items-center gap-8">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-white mr-3" />
                <span className="text-base font-bold text-white">IDENTITY VERIFIED</span>
              </div>
              <div className="text-sm text-emerald-100">
                Multi-layer verification with biometric matching and advanced anti-spoofing technology
              </div>
              <div className="flex items-center gap-3">
                <FileCheck className="w-5 h-5 text-white" />
                <Users className="w-5 h-5 text-white" />
                <Video className="w-5 h-5 text-white" />
                <Database className="w-5 h-5 text-white" />
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
              <span>Identity Verification & Anti-Spoofing</span>
              <span>{(slideNumber || dynamicSlideNumber).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}