"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Server, 
  Database, 
  HardDrive, 
  Network, 
  Shield,
  ArrowLeftRight,
  MapPin,
  Clock,
  CheckCircle,
  Activity,
  Zap,
  Globe
} from "lucide-react";
import { useSlideNumber } from '@/contexts/SlideNumberContext';

interface DataCenterDRSlideProps {
  slideNumber?: number;
}

export default function DataCenterDRSlide({ 
  slideNumber 
}: DataCenterDRSlideProps) {
  const dynamicSlideNumber = useSlideNumber();

  const dcComponents = [
    { icon: <Server className="w-3 h-3 text-blue-600" />, label: "App Cluster", detail: "HA Pairs" },
    { icon: <Database className="w-3 h-3 text-blue-600" />, label: "PostgreSQL HA", detail: "Active-Standby" },
    { icon: <HardDrive className="w-3 h-3 text-blue-600" />, label: "SAN Storage", detail: "Dual Controllers" },
    { icon: <Network className="w-3 h-3 text-blue-600" />, label: "ACI Fabric", detail: "Spine-Leaf" }
  ];

  const drComponents = [
    { icon: <Server className="w-3 h-3 text-orange-600" />, label: "App (Scaled)", detail: "Essential Only" },
    { icon: <Database className="w-3 h-3 text-orange-600" />, label: "DB Replica", detail: "Read-Only" },
    { icon: <HardDrive className="w-3 h-3 text-orange-600" />, label: "DR SAN", detail: "Single Array" },
    { icon: <Network className="w-3 h-3 text-orange-600" />, label: "Core Switch", detail: "Basic Config" }
  ];

  const recoveryMetrics = [
    { 
      metric: "RPO < 15min", 
      description: "Maximum data loss window", 
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    { 
      metric: "RTO < 4hrs", 
      description: "Maximum recovery time", 
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    { 
      metric: "Sovereign Hosting", 
      description: "🇧🇩 On-premise Bangladesh", 
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    { 
      metric: "Tested Procedures", 
      description: "Quarterly DR drills", 
      color: "text-orange-600",
      bgColor: "bg-orange-50"
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
          {/* Title Section - Increased vertical spacing by 10% */}
          <motion.div
            className="text-center mb-5 mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-3">DATA CENTER & DISASTER RECOVERY ARCHITECTURE</h1>
            <p className="text-base opacity-90">Dual-Site Resilience with Continuous Replication & &lt;15min RPO, &lt;4hr RTO</p>
          </motion.div>

          {/* Bangladesh Map Background Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <div className="text-9xl">🇧🇩</div>
          </div>

          {/* Twin-Site Layout - Scaled down by 10% */}
          <div className="flex-1 flex gap-4 relative z-10">
            
            {/* Left Panel - Primary DC (45%) - Increased vertical spacing by 10% */}
            <motion.div
              className="w-[45%] bg-gradient-to-b from-blue-500 to-blue-600 rounded-xl p-4 text-white shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* DC Header */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold mb-2">Primary Data Center (Active)</h3>
                <p className="text-xs text-blue-100">Production Environment</p>
              </div>

              {/* DC1/DC2 Fire Separation */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-blue-400/30 rounded-lg p-3 text-center border border-blue-300/50">
                  <div className="text-xs font-semibold">DC1 Facility</div>
                  <div className="text-[10px] text-blue-100">Primary Components</div>
                </div>
                <div className="bg-blue-400/30 rounded-lg p-3 text-center border border-blue-300/50">
                  <div className="text-xs font-semibold">DC2 Facility</div>
                  <div className="text-[10px] text-blue-100">Redundant Components</div>
                </div>
              </div>

              {/* HA Configuration */}
              <div className="bg-blue-400/20 rounded-lg p-4 mb-4">
                <h4 className="text-xs font-bold mb-3 flex items-center">
                  <Shield className="w-3 h-3 mr-1" />
                  High Availability (N+1)
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {dcComponents.map((component, index) => (
                    <div key={index} className="flex items-center bg-white/10 rounded p-2">
                      <div className="mr-1">{component.icon}</div>
                      <div>
                        <div className="text-[9px] font-medium">{component.label}</div>
                        <div className="text-[8px] text-blue-200">{component.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Uptime Badge */}
              <div className="text-center mt-2">
                <div className="bg-green-500 text-white px-3 py-2 rounded-full text-xs font-bold inline-block">
                  99.9% Uptime Target
                </div>
              </div>
            </motion.div>

            {/* Center - Replication Link (10%) - Increased vertical spacing by 10% */}
            <motion.div
              className="w-[10%] flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Dedicated Link Header */}
              <div className="text-center mb-3">
                <div className="text-xs font-bold text-white">Dedicated Link</div>
                <div className="text-[10px] text-white/70">High-Bandwidth</div>
              </div>

              {/* Replication Arrows */}
              <div className="bg-purple-600/80 rounded-lg p-4 text-center">
                <motion.div
                  className="mb-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowLeftRight className="w-6 h-6 text-white mx-auto" />
                </motion.div>
                
                <div className="space-y-2 text-[9px] text-white">
                  <div className="flex items-center justify-center">
                    <HardDrive className="w-2 h-2 mr-1" />
                    <span>SAN Block</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Database className="w-2 h-2 mr-1" />
                    <span>DB Stream</span>
                  </div>
                </div>

                <div className="mt-3 text-[8px] bg-purple-700/50 rounded px-2 py-1">
                  Encrypted
                </div>
              </div>

              {/* Geographic Separation */}
              <div className="mt-3 text-center">
                <div className="bg-yellow-600 text-white px-2 py-2 rounded text-[8px] font-medium">
                  <MapPin className="w-2 h-2 inline mr-1" />
                  Geo Separated
                </div>
              </div>
            </motion.div>

            {/* Right Panel - DR Site (45%) - Increased vertical spacing by 10% */}
            <motion.div
              className="w-[45%] bg-gradient-to-b from-orange-500 to-orange-600 rounded-xl p-4 text-white shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* DR Header */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold mb-2">Disaster Recovery Site</h3>
                <p className="text-xs text-orange-100">Warm Standby Environment</p>
              </div>

              {/* Single DR Facility */}
              <div className="mb-4">
                <div className="bg-orange-400/30 rounded-lg p-3 text-center border border-orange-300/50">
                  <div className="text-xs font-semibold">DR Facility</div>
                  <div className="text-[10px] text-orange-100">Essential Capacity</div>
                </div>
              </div>

              {/* Scaled Configuration */}
              <div className="bg-orange-400/20 rounded-lg p-4 mb-4">
                <h4 className="text-xs font-bold mb-3 flex items-center">
                  <Activity className="w-3 h-3 mr-1" />
                  Scaled Configuration (N)
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {drComponents.map((component, index) => (
                    <div key={index} className="flex items-center bg-white/10 rounded p-2">
                      <div className="mr-1">{component.icon}</div>
                      <div>
                        <div className="text-[9px] font-medium">{component.label}</div>
                        <div className="text-[8px] text-orange-200">{component.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Failover Ready Badge */}
              <div className="text-center mt-2">
                <div className="bg-red-500 text-white px-3 py-2 rounded-full text-xs font-bold inline-block">
                  Failover Ready
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Recovery Metrics Bar - Increased vertical spacing by 10% */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-xl p-5 shadow-lg mt-5 relative z-10"
          >
            <div className="grid grid-cols-4 gap-4">
              {recoveryMetrics.map((metric, index) => (
                <div key={index} className={`${metric.bgColor} rounded-lg p-4 text-center border-l-4 border-l-current`}>
                  <div className={`text-sm font-bold ${metric.color} mb-2`}>{metric.metric}</div>
                  <div className="text-xs text-gray-600">{metric.description}</div>
                </div>
              ))}
            </div>
            
            {/* Center Label */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gray-800 text-white px-4 py-2 rounded-full text-xs font-bold">
                Business Continuity Targets
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
              <span>Data Center & Disaster Recovery Architecture</span>
              <span>{(slideNumber || dynamicSlideNumber).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}