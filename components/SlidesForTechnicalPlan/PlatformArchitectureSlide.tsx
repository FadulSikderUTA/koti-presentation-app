"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Database, 
  Server, 
  Globe, 
  Users,
  CreditCard,
  BarChart3,
  Settings,
  Shield,
  ArrowRight,
  Activity,
  HardDrive,
  Cpu,
  Network,
  Building2,
  MapPin
} from "lucide-react";
import { useSlideNumber } from '@/contexts/SlideNumberContext';
import { useSlideTitle } from '@/hooks/useSlideTitle';

interface PlatformArchitectureSlideProps {
  slideNumber?: number;
}

export default function PlatformArchitectureSlide({ 
  slideNumber 
}: PlatformArchitectureSlideProps) {
  const dynamicSlideNumber = useSlideNumber();
  useSlideTitle("Platform Architecture & Runtime Stack");

  const platformModules = [
    {
      icon: <Database className="w-4 h-4 text-blue-600" />,
      title: "Data Ingestion & Management",
      description: "Identity matching, validation, cleansing",
      bgColor: "bg-blue-50"
    },
    {
      icon: <BarChart3 className="w-4 h-4 text-purple-600" />,
      title: "Credit Scoring Engine", 
      description: "AI/ML models & algorithms",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Settings className="w-4 h-4 text-green-600" />,
      title: "Query Processing & Reports",
      description: "Real-time queries & report generation",
      bgColor: "bg-green-50"
    }
  ];

  const portalServices = [
    {
      icon: <Users className="w-4 h-4 text-indigo-600" />,
      title: "Member Portal",
      description: "Web interface for institutions",
      bgColor: "bg-indigo-50"
    },
    {
      icon: <CreditCard className="w-4 h-4 text-teal-600" />,
      title: "Consumer Portal",
      description: "Self-service (planned)",
      bgColor: "bg-teal-50"
    },
    {
      icon: <Globe className="w-4 h-4 text-orange-600" />,
      title: "API Services Layer",
      description: "Programmatic integration",
      bgColor: "bg-orange-50"
    }
  ];

  const systemsFoundation = [
    {
      icon: <Server className="w-4 h-4 text-gray-600" />,
      title: "Hardened Enterprise Linux",
      description: "Secure OS foundation",
      bgColor: "bg-gray-50"
    },
    {
      icon: <Database className="w-4 h-4 text-blue-600" />,
      title: "PostgreSQL HA Cluster",
      description: "ACID compliance, streaming replication",
      bgColor: "bg-blue-50"
    },
    {
      icon: <HardDrive className="w-4 h-4 text-green-600" />,
      title: "Virtualization Platform",
      description: "Hypervisor & container runtime",
      bgColor: "bg-green-50"
    },
    {
      icon: <Shield className="w-4 h-4 text-purple-600" />,
      title: "API Gateway Middleware",
      description: "DMZ security & traffic management",
      bgColor: "bg-purple-50"
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
            <h1 className="text-3xl font-bold mb-2">PLATFORM ARCHITECTURE & RUNTIME STACK</h1>
            <p className="text-base opacity-90">Custom Credit Bureau Engine with Enterprise-Grade Foundation</p>
          </motion.div>

          {/* Main Layout: Stack Architecture + DC/DR Deployment */}
          <div className="flex-1 flex gap-4">
            
            {/* Left 70% - Layered Architecture Stack */}
            <div className="w-[70%] space-y-3">
              
              {/* Top Layer - User-Facing Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-indigo-500"
              >
                <h3 className="text-sm font-bold text-gray-800 mb-2 flex items-center">
                  <Users className="w-4 h-4 mr-2 text-indigo-600" />
                  PRESENTATION LAYER
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {portalServices.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`w-6 h-6 ${service.bgColor} rounded flex items-center justify-center mr-2 flex-shrink-0`}>
                        {service.icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-800">{service.title}</div>
                        <div className="text-[10px] text-gray-600">{service.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Middle Layer - Core Platform */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-purple-500"
              >
                <h3 className="text-sm font-bold text-gray-800 mb-2 flex items-center">
                  <Cpu className="w-4 h-4 mr-2 text-purple-600" />
                  KOTI CORE PLATFORM
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {platformModules.map((module, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`w-6 h-6 ${module.bgColor} rounded flex items-center justify-center mr-2 flex-shrink-0`}>
                        {module.icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-800">{module.title}</div>
                        <div className="text-[10px] text-gray-600">{module.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-2 pt-2 border-t border-gray-200">
                  <div className="text-xs text-purple-700 font-medium">
                    <span className="font-bold">Partnership:</span> Yeeld Technologies (UK) • Bespoke development for Bangladesh market
                  </div>
                </div>
              </motion.div>

              {/* Bottom Layer - Systems Foundation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-gray-500"
              >
                <h3 className="text-sm font-bold text-gray-800 mb-2 flex items-center">
                  <Server className="w-4 h-4 mr-2 text-gray-600" />
                  SYSTEMS SOFTWARE FOUNDATION
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {systemsFoundation.map((system, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`w-6 h-6 ${system.bgColor} rounded flex items-center justify-center mr-2 flex-shrink-0`}>
                        {system.icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-800">{system.title}</div>
                        <div className="text-[10px] text-gray-600">{system.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right 30% - DC/DR Deployment */}
            <motion.div 
              className="w-[30%] bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-xl p-3 text-white shadow-lg flex flex-col"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Bangladesh Map Header */}
              <div className="text-center mb-3">
                <h4 className="text-sm font-bold mb-1 flex items-center justify-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  🇧🇩 Deployment Architecture
                </h4>
                <div className="text-xs opacity-90">Data Sovereign Infrastructure</div>
              </div>

              {/* DC/DR Visualization */}
              <div className="bg-emerald-400/30 rounded-lg p-3 mb-3 h-20 relative">
                <div className="absolute inset-2 border-2 border-white/50 border-dashed rounded relative">
                  {/* Primary DC */}
                  <div className="absolute top-1 left-1">
                    <div className="bg-green-200 rounded-full w-4 h-4 relative">
                      <div className="absolute -bottom-6 -left-4 text-[8px] font-medium">
                        <div className="bg-white text-green-800 px-1 py-0.5 rounded shadow whitespace-nowrap">
                          DC (Active)
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* DR Site */}
                  <div className="absolute bottom-1 right-1">
                    <div className="bg-blue-300 rounded-full w-4 h-4 relative">
                      <div className="absolute -bottom-6 -right-4 text-[8px] font-medium">
                        <div className="bg-white text-blue-800 px-1 py-0.5 rounded shadow whitespace-nowrap">
                          DR (Warm)
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Replication Arrow */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 60">
                    <line 
                      x1="20" y1="20" 
                      x2="80" y2="40" 
                      stroke="white" 
                      strokeWidth="2" 
                      strokeDasharray="3,3"
                      opacity="0.8"
                    />
                    <text x="50" y="25" textAnchor="middle" className="text-[8px] fill-white font-medium">
                      WAL Replication
                    </text>
                  </svg>
                </div>
              </div>

              {/* Deployment Features */}
              <div className="space-y-2 flex-1">
                <h5 className="font-semibold text-xs mb-2">Key Features</h5>
                
                <div className="bg-white/10 rounded p-2">
                  <div className="flex items-center mb-1">
                    <Activity className="w-3 h-3 mr-1" />
                    <span className="text-xs font-medium">Continuous Replication</span>
                  </div>
                  <div className="text-[10px] opacity-90">PostgreSQL WAL streaming to DR</div>
                </div>

                <div className="bg-white/10 rounded p-2">
                  <div className="flex items-center mb-1">
                    <Building2 className="w-3 h-3 mr-1" />
                    <span className="text-xs font-medium">Geographic Separation</span>
                  </div>
                  <div className="text-[10px] opacity-90">Primary & DR in different locations</div>
                </div>

                <div className="bg-white/10 rounded p-2">
                  <div className="flex items-center mb-1">
                    <Network className="w-3 h-3 mr-1" />
                    <span className="text-xs font-medium">Automated Failover</span>
                  </div>
                  <div className="text-[10px] opacity-90">App instances ready at DR site</div>
                </div>
              </div>

              {/* Deployment Badges */}
              <div className="mt-2 pt-2 border-t border-emerald-300/30">
                <div className="flex justify-between text-xs">
                  <div className="bg-green-400 text-green-900 px-2 py-1 rounded font-bold">DC: Active</div>
                  <div className="bg-blue-400 text-blue-900 px-2 py-1 rounded font-bold">DR: Standby</div>
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
              <span>Platform Architecture & Runtime Stack</span>
              <span>{(slideNumber || dynamicSlideNumber).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}