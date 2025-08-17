"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Server, 
  Database, 
  Globe, 
  Activity, 
  Link,
  FileText,
  Terminal,
  Zap,
  Eye,
  Users
} from "lucide-react";
import { useSlideNumber } from '@/contexts/SlideNumberContext';

interface DefenseInDepthSlideProps {
  slideNumber?: number;
}

export default function DefenseInDepthSlide({ 
  slideNumber 
}: DefenseInDepthSlideProps) {
  const dynamicSlideNumber = useSlideNumber();

  const edgeDefenses = [
    {
      icon: <Globe className="w-4 h-4 text-red-600" />,
      title: "Internet/Partner Entry",
      description: "External network connections with threat exposure",
      bgColor: "bg-red-50",
      borderColor: "border-red-500"
    },
    {
      icon: <Shield className="w-4 h-4 text-orange-600" />,
      title: "Anti-DDoS Appliance",
      description: "First line defense against volumetric attacks",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-500"
    },
    {
      icon: <Activity className="w-4 h-4 text-yellow-600" />,
      title: "NGFW Layer",
      description: "Separate Internet vs Partner firewalls • Deep packet inspection & IPS",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-500"
    },
    {
      icon: <FileText className="w-4 h-4 text-lime-600" />,
      title: "WAF/API Gateway",
      description: "Application-layer protection • SQL injection & XSS prevention",
      bgColor: "bg-lime-50",
      borderColor: "border-lime-500"
    },
    {
      icon: <Database className="w-4 h-4 text-green-600" />,
      title: "DMZ Entry",
      description: "Controlled access point • No direct app exposure",
      bgColor: "bg-green-50",
      borderColor: "border-green-500"
    }
  ];

  const networkZones = [
    {
      zone: "DMZ Zone",
      description: "Externally accessible services with strict isolation",
      services: ["Web Servers", "API Gateway", "Email Security"],
      bgColor: "bg-blue-50",
      borderColor: "border-blue-500",
      textColor: "text-blue-700"
    },
    {
      zone: "Server Farm Zone", 
      description: "Core application and database servers",
      services: ["App Servers", "Database Cluster", "Microservices"],
      bgColor: "bg-green-50",
      borderColor: "border-green-500", 
      textColor: "text-green-700"
    },
    {
      zone: "Security Zone",
      description: "Monitoring and security management tools",
      services: ["SIEM", "DLP", "PAM", "NAC", "NMS"],
      bgColor: "bg-purple-50",
      borderColor: "border-purple-500",
      textColor: "text-purple-700"
    },
    {
      zone: "Management Zone",
      description: "Administrative access and network management",
      services: ["Bastions", "Directory", "Backup Systems"],
      bgColor: "bg-orange-50",
      borderColor: "border-orange-500",
      textColor: "text-orange-700"
    }
  ];

  const protocolStandards = [
    {
      icon: <Lock className="w-3 h-3 text-green-600" />,
      protocol: "TLS 1.2+ APIs",
      usage: "All application interfaces"
    },
    {
      icon: <FileText className="w-3 h-3 text-blue-600" />,
      protocol: "SFTP+PGP Bulk",
      usage: "Secure file transfers"
    },
    {
      icon: <Terminal className="w-3 h-3 text-purple-600" />,
      protocol: "SSHv2/SNMPv3",
      usage: "Administrative access"
    }
  ];

  const keyMetrics = [
    { label: "Zero-Trust", value: "Least privilege by default", color: "text-blue-400" },
    { label: "Micro-segmentation", value: "ACI fabric EPG policies", color: "text-green-400" },
    { label: "99.9% Uptime", value: "HA architecture", color: "text-purple-400" },
    { label: "<15min RPO", value: "Near real-time replication", color: "text-orange-400" }
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

        {/* Main Content - Pushed down by 5% */}
        <div className="h-full flex flex-col px-4 py-16 pb-44">
          {/* Title Section - Pushed down by 5% */}
          <motion.div
            className="text-center mb-4 mt-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-2">DEFENSE-IN-DEPTH NETWORK SECURITY</h1>
            <p className="text-base opacity-90">Multi-Layered Protection from Edge to Core with Zero-Trust Segmentation</p>
          </motion.div>

          {/* Three-Column Layout - Pushed down by 5% */}
          <div className="flex-1 flex gap-4 mt-3">
            
            {/* Left Column (30%) - Edge Security Pipeline */}
            <div className="w-[30%] space-y-2">
              <h3 className="text-sm font-bold text-white mb-3 text-center">Edge Security Pipeline</h3>
              {edgeDefenses.map((defense, index) => (
                <motion.div
                  key={index}
                  className={`bg-white ${defense.borderColor} border-l-4 rounded-lg p-2 shadow-lg`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className={`w-6 h-6 ${defense.bgColor} rounded-lg flex items-center justify-center mr-2 flex-shrink-0`}>
                      {defense.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-gray-800 mb-1">{defense.title}</h4>
                      <p className="text-[10px] text-gray-700 leading-tight">{defense.description}</p>
                    </div>
                  </div>
                  {index < edgeDefenses.length - 1 && (
                    <div className="flex justify-center mt-1">
                      <div className="text-gray-400 text-lg">↓</div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Center Column (40%) - Network Zones */}
            <div className="w-[40%] space-y-2">
              <h3 className="text-sm font-bold text-white mb-3 text-center">Zero-Trust Network Zones</h3>
              {networkZones.map((zone, index) => (
                <motion.div
                  key={index}
                  className={`${zone.bgColor} ${zone.borderColor} border-l-4 rounded-lg p-3 shadow-lg`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <h4 className={`text-sm font-bold ${zone.textColor} mb-1`}>{zone.zone}</h4>
                  <p className="text-xs text-gray-700 mb-2 leading-tight">{zone.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {zone.services.map((service, serviceIndex) => (
                      <span 
                        key={serviceIndex}
                        className="text-[9px] bg-white/70 px-1 py-0.5 rounded text-gray-700 font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column (30%) - Protocols & Continuity */}
            <div className="w-[30%] space-y-3 pt-20">
              
              {/* Protocol Standards */}
              <motion.div
                className="bg-white rounded-lg p-3 shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h4 className="text-sm font-bold text-gray-800 mb-2 flex items-center">
                  <Lock className="w-3 h-3 mr-1 text-green-600" />
                  Protocol Standards
                </h4>
                <div className="space-y-2">
                  {protocolStandards.map((protocol, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-2 mt-0.5">{protocol.icon}</div>
                      <div>
                        <div className="text-xs font-semibold text-gray-800">{protocol.protocol}</div>
                        <div className="text-[10px] text-gray-600">{protocol.usage}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-2 pt-2 border-t border-gray-200">
                  <div className="text-[10px] text-red-600 font-semibold">
                    ⚠️ Legacy protocols disabled (Telnet, HTTP, SNMPv1/v2c)
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Bottom Key Metrics - Pushed down by 5% */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-lg p-3 shadow-lg mt-4"
          >
            <div className="grid grid-cols-4 gap-4 text-center">
              {keyMetrics.map((metric, index) => (
                <div key={index}>
                  <div className={`text-sm font-bold ${metric.color.replace('text-', 'text-').replace('-400', '-700')}`}>{metric.label}</div>
                  <div className="text-xs text-gray-600">{metric.value}</div>
                </div>
              ))}
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
              <span>Defense-in-Depth Network Security</span>
              <span>{(slideNumber || dynamicSlideNumber).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}