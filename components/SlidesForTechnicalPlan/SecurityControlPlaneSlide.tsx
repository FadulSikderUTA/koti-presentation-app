"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Eye, 
  Users,
  Database,
  Network,
  Search,
  Activity,
  FileCheck,
  Mail,
  AlertTriangle,
  HardDrive,
  Terminal,
  CheckCircle,
  DollarSign
} from "lucide-react";
import { useSlideNumber } from '@/contexts/SlideNumberContext';

interface SecurityControlPlaneSlideProps {
  slideNumber?: number;
}

export default function SecurityControlPlaneSlide({ 
  slideNumber 
}: SecurityControlPlaneSlideProps) {
  const dynamicSlideNumber = useSlideNumber();

  const securityControlStack = [
    {
      layer: "Identity & Authentication",
      icon: <Users className="w-4 h-4 text-blue-600" />,
      tools: [
        { name: "Multi-Factor Authentication (MFA)", description: "All user & admin accounts", cost: "Included" }
      ],
      borderColor: "border-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      layer: "Access Control",
      icon: <Lock className="w-4 h-4 text-green-600" />,
      tools: [
        { name: "Privileged Access Management (PAM)", description: "Account vaulting & session recording", cost: "Enterprise" }
      ],
      borderColor: "border-green-500",
      bgColor: "bg-green-50"
    },
    {
      layer: "Endpoint Protection",
      icon: <Shield className="w-4 h-4 text-purple-600" />,
      tools: [
        { name: "Endpoint Detection & Response (EDR)", description: "Behavioral threat hunting (CrowdStrike-class)", cost: "Premium" },
        { name: "Anti-Virus/Anti-Malware", description: "Baseline endpoint protection", cost: "Standard" }
      ],
      borderColor: "border-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      layer: "Data Protection",
      icon: <Database className="w-4 h-4 text-orange-600" />,
      tools: [
        { name: "Data Loss Prevention (DLP)", description: "Content inspection & exfiltration prevention", cost: "Enterprise" },
        { name: "Backup & Recovery", description: "Orchestrated backup with DR testing", cost: "Critical" }
      ],
      borderColor: "border-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      layer: "Network Security",
      icon: <Network className="w-4 h-4 text-teal-600" />,
      tools: [
        { name: "Network Access Control (NAC)", description: "Device compliance & access enforcement", cost: "Enterprise" },
        { name: "Network Behavior Analysis (NBA/NDR)", description: "Lateral movement detection", cost: "Advanced" }
      ],
      borderColor: "border-teal-500",
      bgColor: "bg-teal-50"
    },
    {
      layer: "Visibility & Monitoring",
      icon: <Eye className="w-4 h-4 text-indigo-600" />,
      tools: [
        { name: "Security Information & Event Management (SIEM)", description: "Central log correlation & incident detection", cost: "Core" },
        { name: "Vulnerability Scanner", description: "Proactive weakness identification", cost: "Essential" }
      ],
      borderColor: "border-indigo-500",
      bgColor: "bg-indigo-50"
    },
    {
      layer: "Operational Security",
      icon: <Activity className="w-4 h-4 text-red-600" />,
      tools: [
        { name: "Email Security", description: "Anti-phishing & malware filtering", cost: "Standard" },
        { name: "Network Monitoring System (NMS)", description: "Performance & availability monitoring", cost: "Operational" }
      ],
      borderColor: "border-red-500",
      bgColor: "bg-red-50"
    }
  ];

  const policyGuardrails = [
    {
      icon: <Lock className="w-4 h-4 text-white" />,
      title: "Encryption Everywhere",
      description: "TLS 1.2+ for transit • AES-256 for at rest",
      detail: "End-to-end data protection"
    },
    {
      icon: <Users className="w-4 h-4 text-white" />,
      title: "Role-Based Access Control (RBAC)",
      description: "Least privilege principle enforced",
      detail: "Granular permission management"
    },
    {
      icon: <CheckCircle className="w-4 h-4 text-white" />,
      title: "Input Validation",
      description: "Schema checks at all entry points",
      detail: "API Gateway & form validation"
    },
    {
      icon: <Eye className="w-4 h-4 text-white" />,
      title: "Data Masking",
      description: "Sensitive field protection in logs/reports",
      detail: "PII & financial data safeguards"
    },
    {
      icon: <FileCheck className="w-4 h-4 text-white" />,
      title: "Comprehensive Audit Logging",
      description: "All actions logged with immutable trail",
      detail: "Compliance & forensic readiness"
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
        <div className="h-full flex flex-col px-4 pt-20 pb-44">
          {/* Title Section */}
          <motion.div
            className="text-center mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-2">SECURITY CONTROL PLANE & COMPLIANCE GUARDRAILS</h1>
            <p className="text-base opacity-90">Defense-in-Depth Architecture with 15+ Integrated Security Controls</p>
          </motion.div>

          {/* Main Layout: Control Stack + Policy Rails */}
          <div className="flex-1 flex gap-4 px-2">
            
            {/* Left 70% - Security Control Stack */}
            <div className="w-[70%] space-y-1">
              <h3 className="text-xs font-bold text-white text-center mb-1">Multi-Layered Security Controls</h3>
              
              {securityControlStack.map((layer, index) => (
                <motion.div
                  key={index}
                  className={`bg-white ${layer.borderColor} border-l-4 rounded-lg p-2 shadow-lg`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                >
                  <div className="flex items-start">
                    <div className={`w-7 h-7 ${layer.bgColor} rounded-lg flex items-center justify-center mr-2 flex-shrink-0`}>
                      {layer.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-gray-800 mb-1">{layer.layer}</h4>
                      <div className={layer.tools.length > 1 ? "grid grid-cols-2 gap-1.5" : "space-y-1"}>
                        {layer.tools.map((tool, toolIndex) => (
                          <div key={toolIndex} className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="text-[11px] font-bold text-gray-800">{tool.name}</div>
                              <div className="text-[9px] text-gray-700 leading-tight">{tool.description}</div>
                            </div>
                            <div className="ml-1.5">
                              <span className="text-[8px] font-medium bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
                                {tool.cost}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right 30% - Policy Guardrails */}
            <motion.div 
              className="w-[30%] bg-gradient-to-b from-red-500 to-red-600 rounded-xl p-2.5 text-white shadow-lg flex flex-col"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Header */}
              <div className="text-center mb-2">
                <h4 className="text-xs font-bold mb-0.5 flex items-center justify-center">
                  <Shield className="w-3 h-3 mr-1" />
                  Policy Guardrails
                </h4>
                <div className="text-[10px] opacity-90">Uniform Security Standards</div>
              </div>

              {/* Policy Controls */}
              <div className="space-y-1.5 flex-1">
                {policyGuardrails.map((policy, index) => (
                  <motion.div
                    key={index}
                    className="bg-red-400/30 rounded-lg p-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="flex items-start">
                      <div className="bg-white/20 p-1 rounded mr-1.5 flex-shrink-0">
                        {policy.icon}
                      </div>
                      <div>
                        <div className="text-[11px] font-bold mb-1">{policy.title}</div>
                        <div className="text-[9px] opacity-90 leading-tight mb-1">{policy.description}</div>
                        <div className="text-[8px] bg-white/20 px-1.5 py-0.5 rounded font-medium">
                          {policy.detail}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Compliance Framework */}
              <div className="mt-2.5 pt-1.5 border-t border-red-300/30">
                <div className="text-center">
                  <div className="text-[11px] font-bold flex items-center justify-center mb-1">
                    <FileCheck className="w-3 h-3 mr-1" />
                    Compliance Ready
                  </div>
                  <div className="text-[9px] opacity-90 space-y-0.5">
                    <div>• Bangladesh Bank Guidelines</div>
                    <div>• KYC/AML Requirements</div>
                    <div>• Data Protection Standards</div>
                  </div>
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
              <span>Security Control Plane & Compliance Guardrails</span>
              <span>{(slideNumber || dynamicSlideNumber).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}