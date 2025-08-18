"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Database, 
  MapPin,
  ScanLine,
  CheckCircle,
  Upload,
  Search,
  Navigation,
  ShieldCheck,
  ArrowDown
} from "lucide-react";
import { useSlideNumber } from '@/contexts/SlideNumberContext';
import { useSlideTitle } from '@/hooks/useSlideTitle';

interface ProofOfAddressSlideProps {
  slideNumber?: number;
}

export default function ProofOfAddressSlide({ 
  slideNumber 
}: ProofOfAddressSlideProps) {
  const dynamicSlideNumber = useSlideNumber();
  
  // Register this slide's title for dynamic navigation
  useSlideTitle("Proof of Address Verification");

  const verificationMethods = [
    {
      id: 1,
      title: "Document-Based Verification",
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      color: "blue",
      steps: [
        {
          icon: <Upload className="w-4 h-4 text-blue-600" />,
          title: "Upload Documents",
          description: "Utility bills • Bank statements • National ID • Mortgage/tax statements • Voter registration • Government correspondence"
        },
        {
          icon: <ScanLine className="w-4 h-4 text-blue-600" />,
          title: "OCR & Analysis",
          description: "Extract: Full name, residential address, document issue date • Verify authenticity & integrity"
        },
        {
          icon: <CheckCircle className="w-4 h-4 text-blue-600" />,
          title: "Address Match",
          description: "Compare extracted address with user-provided address • Validate document validity period"
        }
      ]
    },
    {
      id: 2,
      title: "Database Cross-Reference",
      icon: <Database className="w-5 h-5 text-green-600" />,
      color: "green",
      steps: [
        {
          icon: <Search className="w-4 h-4 text-green-600" />,
          title: "Query Registries",
          description: "Government records • Credit bureaus • Banking institutions • Tax identification systems"
        },
        {
          icon: <Database className="w-4 h-4 text-green-600" />,
          title: "Retrieve Records",
          description: "Return: Registered residential address, full name from authoritative databases"
        },
        {
          icon: <CheckCircle className="w-4 h-4 text-green-600" />,
          title: "Cross-Reference",
          description: "Validate retrieved data against user-provided information for accuracy & legitimacy"
        }
      ]
    },
    {
      id: 3,
      title: "Geolocation Verification",
      icon: <MapPin className="w-5 h-5 text-purple-600" />,
      color: "purple",
      steps: [
        {
          icon: <Navigation className="w-4 h-4 text-purple-600" />,
          title: "GPS Consent",
          description: "Users opt-in to share device geolocation data • Explicit consent required for location access"
        },
        {
          icon: <MapPin className="w-4 h-4 text-purple-600" />,
          title: "Location Capture",
          description: "Capture real-time location coordinates from user's device • Secure transmission"
        },
        {
          icon: <CheckCircle className="w-4 h-4 text-purple-600" />,
          title: "Proximity Check",
          description: "Compare captured geolocation against declared residential address for consistency"
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-500",
        text: "text-blue-700",
        gradient: "from-blue-500 to-blue-600"
      },
      green: {
        bg: "bg-green-50", 
        border: "border-green-500",
        text: "text-green-700",
        gradient: "from-green-500 to-green-600"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-500", 
        text: "text-purple-700",
        gradient: "from-purple-500 to-purple-600"
      }
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
            className="text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-2">PROOF OF ADDRESS VERIFICATION</h1>
            <p className="text-base opacity-90">Multi-Method Address Validation for Complete Verification Coverage</p>
          </motion.div>

          {/* Three-Lane Verification Methods */}
          <div className="flex-1 flex gap-4 mb-5">
            {verificationMethods.map((method, index) => {
              const colors = getColorClasses(method.color);
              return (
                <motion.div
                  key={method.id}
                  className="flex-1 space-y-3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  {/* Method Header */}
                  <div className={`bg-gradient-to-b ${colors.gradient} rounded-xl p-4 text-white text-center`}>
                    <div className="flex items-center justify-center mb-3">
                      <div className="bg-white/20 p-2 rounded-lg mr-2">
                        {method.icon}
                      </div>
                      <h3 className="text-sm font-bold">{method.title}</h3>
                    </div>
                  </div>

                  {/* Method Steps */}
                  <div className="space-y-3">
                    {method.steps.map((step, stepIndex) => (
                      <motion.div
                        key={stepIndex}
                        className={`bg-white ${colors.border} border-l-4 rounded-lg p-3 shadow-lg`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 + stepIndex * 0.05 }}
                      >
                        <div className="flex items-start">
                          <div className={`w-7 h-7 ${colors.bg} rounded-lg flex items-center justify-center mr-3 flex-shrink-0`}>
                            {step.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xs font-bold text-gray-800 mb-2">{step.title}</h4>
                            <p className="text-[10px] text-gray-700 leading-tight">{step.description}</p>
                          </div>
                        </div>
                        
                        {/* Step connector arrow */}
                        {stepIndex < method.steps.length - 1 && (
                          <div className="flex justify-center mt-2">
                            <ArrowDown className="w-3 h-3 text-gray-400" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Convergence to Address Verified */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            {/* Convergence Arrows */}
            <div className="flex justify-center items-center mb-4">
              <div className="flex items-center gap-6">
                <ArrowDown className="w-5 h-5 text-blue-300" />
                <ArrowDown className="w-5 h-5 text-green-300" />
                <ArrowDown className="w-5 h-5 text-purple-300" />
              </div>
            </div>

            {/* Address Verified Badge */}
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-5 text-center shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <ShieldCheck className="w-7 h-7 text-white mr-3" />
                <h3 className="text-xl font-bold text-white">ADDRESS VERIFIED</h3>
                <ShieldCheck className="w-7 h-7 text-white ml-3" />
              </div>
              <p className="text-sm text-emerald-100">
                Multi-method verification ensures comprehensive address validation with user flexibility and system thoroughness
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
              <span>Proof of Address Verification</span>
              <span>{(slideNumber || dynamicSlideNumber).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}