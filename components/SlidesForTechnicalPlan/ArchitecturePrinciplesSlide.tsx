"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Building2, 
  Shield, 
  Lock, 
  CheckCircle,
  Server,
  Database,
  Wifi,
  Activity
} from "lucide-react";
import { useSlideNumber } from '@/contexts/SlideNumberContext';

interface ArchitecturePrinciplesSlideProps {
  slideNumber?: number;
}

export default function ArchitecturePrinciplesSlide({ 
  slideNumber 
}: ArchitecturePrinciplesSlideProps) {
  const dynamicSlideNumber = useSlideNumber();

  const principles = [
    {
      id: 1,
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
      title: "Data Residency & Sovereignty",
      description: "All credit data hosted on-premise in Bangladesh across primary DC and separate DR site",
      evidence: "Infrastructure within Bangladesh with geographical separation",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      icon: <Building2 className="w-5 h-5 text-green-600" />,
      title: "High Availability with DC→DR Posture", 
      description: "Primary DC (active) + DR (warm standby) connected by dedicated, secure, high-bandwidth link",
      evidence: "Continuous replication for business continuity",
      borderColor: "border-green-500",
      bgColor: "bg-green-50"
    },
    {
      id: 3,
      icon: <Shield className="w-5 h-5 text-purple-600" />,
      title: "Segmentation & Zero-Trust Boundaries",
      description: "Layered edge protection (Anti-DDoS, NGFW, WAF) + strict zone segmentation (DMZ, internal, security, management)",
      evidence: "Defense-in-depth with network isolation",
      borderColor: "border-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      id: 4,
      icon: <Lock className="w-5 h-5 text-orange-600" />,
      title: "Encryption Everywhere + Strong AuthZ",
      description: "APIs over TLS 1.2+, SFTP with PGP for bulk, encryption in transit & at rest, RBAC least privilege",
      evidence: "End-to-end security with role-based access",
      borderColor: "border-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      id: 5,
      icon: <CheckCircle className="w-5 h-5 text-teal-600" />,
      title: "Verifiability by Design",
      description: "Input validation, standard JSON schemas, unique message IDs, comprehensive audit logging",
      evidence: "Traceable and auditable system operations",
      borderColor: "border-teal-500",
      bgColor: "bg-teal-50"
    }
  ];


  const techSpecs = [
    { icon: <Server className="w-4 h-4 text-white" />, label: "Dedicated Secure Link" },
    { icon: <Database className="w-4 h-4 text-white" />, label: "Continuous Replication" },
    { icon: <Wifi className="w-4 h-4 text-white" />, label: "TLS 1.2+ APIs" },
    { icon: <Activity className="w-4 h-4 text-white" />, label: "RBAC & Audit Logging" }
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
        <div className="h-full flex flex-col px-4 pt-16 pb-44">
          {/* Title Section */}
          <motion.div
            className="text-center mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-1">ARCHITECTURE PRINCIPLES & HOSTING POSTURE</h1>
            <p className="text-base opacity-90">Evidence-Based Technical Design Foundation</p>
          </motion.div>

          {/* Main Layout: Principles + Hosting Posture */}
          <div className="flex-1 flex gap-4">
            
            {/* Left 70% - Five Principles */}
            <div className="w-[70%] space-y-2">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.id}
                  className={`bg-white ${principle.borderColor} border-l-4 rounded-lg p-2 shadow-lg flex items-start`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className={`w-8 h-8 ${principle.bgColor} rounded-lg flex items-center justify-center mr-3 flex-shrink-0`}>
                    {principle.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-800 mb-1">{principle.title}</h3>
                    <p className="text-xs text-gray-700 mb-1 leading-tight">{principle.description}</p>
                    <div className={`text-xs font-bold ${
                      principle.id === 4 ? 'text-orange-800 bg-orange-100' : 
                      principle.id === 5 ? 'text-teal-800 bg-teal-100' : 
                      `${principle.borderColor.replace('border-', 'text-')} ${principle.bgColor}`
                    } px-2 py-0.5 rounded-full inline-block border ${principle.borderColor}`}>
                      ✓ {principle.evidence}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right 30% - Bangladesh Hosting Visualization */}
            <motion.div 
              className="w-[30%] bg-gradient-to-b from-green-500 to-green-600 rounded-xl p-2 text-white shadow-lg flex flex-col"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Bangladesh Map Header */}
              <div className="text-center mb-2">
                <h4 className="text-sm font-bold mb-0.5">🇧🇩 Bangladesh Infrastructure</h4>
                <div className="text-xs opacity-90">Data Sovereign Hosting</div>
              </div>

              {/* Simplified Bangladesh Map with DC/DR */}
              <div className="bg-green-400/30 rounded-lg p-2 mb-2 h-20 relative">
                <div className="absolute inset-2 border-2 border-white/50 border-dashed rounded relative">
                  {/* DC Active */}
                  <div className="absolute top-2 left-2">
                    <div className="bg-green-200 rounded-full w-3 h-3 relative">
                      <div className="absolute -bottom-5 -left-3 text-[8px] font-medium">
                        <div className="bg-white text-green-800 px-1 py-0.5 rounded shadow">
                          DC (Active)
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* DR Standby */}
                  <div className="absolute bottom-2 right-2">
                    <div className="bg-yellow-300 rounded-full w-3 h-3 relative">
                      <div className="absolute -bottom-5 -right-3 text-[8px] font-medium">
                        <div className="bg-white text-green-800 px-1 py-0.5 rounded shadow">
                          DR (Standby)
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connection Line - Fixed to properly connect DC to DR */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 60">
                    <line 
                      x1="15" y1="15" 
                      x2="85" y2="45" 
                      stroke="white" 
                      strokeWidth="2" 
                      strokeDasharray="4,4"
                      opacity="0.8"
                    />
                  </svg>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-2 flex-1">
                <h5 className="font-semibold text-sm mb-2">Security Standards</h5>
                {techSpecs.map((spec, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center bg-white/10 rounded p-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="mr-2">{spec.icon}</div>
                    <span className="text-xs font-medium">{spec.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Source Citation - Ultra Compact */}
              <div className="mt-1 pt-1 border-t border-white/20">
                <div className="text-[8px] opacity-80">
                  <div className="font-medium mb-0.5">Sources:</div>
                  <div>• Overview Infrastructure v1.2</div>
                  <div>• Technical Process Flow v1.1</div>
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
              <span>Architecture Principles & Hosting Posture</span>
              <span>{(slideNumber || dynamicSlideNumber).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}