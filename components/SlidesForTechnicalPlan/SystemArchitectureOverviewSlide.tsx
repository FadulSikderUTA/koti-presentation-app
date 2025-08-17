"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getImagePath } from "@/lib/image-utils";
import { useSlideNumber } from '@/contexts/SlideNumberContext';
import { Shield, Server, Link, CheckCircle, Activity, Clock } from "lucide-react";

interface SystemArchitectureOverviewSlideProps {
  slideNumber?: number;
}

export default function SystemArchitectureOverviewSlide({ 
  slideNumber 
}: SystemArchitectureOverviewSlideProps) {
  const dynamicSlideNumber = useSlideNumber();

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

        {/* Main Content - Full Screen Usage */}
        <div className="absolute top-14 left-0 right-0 bottom-16 flex flex-col">
          {/* Title Section */}
          <motion.div
            className="text-center mb-2 px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-2">SYSTEM ARCHITECTURE OVERVIEW</h1>
            <p className="text-base opacity-90">Complete DC-DR Infrastructure with Security Zones</p>
          </motion.div>

          {/* Main Layout - 20% Content, 80% Image and Metrics */}
          <div className="flex-1 flex gap-3">
            {/* Left Side - 20% Content */}
            <div className="w-[20%] flex flex-col gap-2 overflow-y-auto pr-2 pt-10">
              
              {/* Security Zones Section */}
              <motion.div
                className="bg-white rounded-lg p-2 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-xs font-bold text-gray-800 mb-2 flex items-center">
                  <Shield className="w-3 h-3 mr-1 text-blue-600" />
                  Security Zones
                </h3>
                <div className="space-y-1">
                  <div className="bg-blue-50 rounded p-1 border-l-2 border-blue-500">
                    <div className="text-[10px] font-semibold text-blue-700">Edge Protection</div>
                    <div className="text-[9px] text-gray-600">Anti-DDoS, NGFW, WAF</div>
                  </div>
                  <div className="bg-green-50 rounded p-1 border-l-2 border-green-500">
                    <div className="text-[10px] font-semibold text-green-700">DMZ Zone</div>
                    <div className="text-[9px] text-gray-600">Load Balancers, API Gateway</div>
                  </div>
                  <div className="bg-purple-50 rounded p-1 border-l-2 border-purple-500">
                    <div className="text-[10px] font-semibold text-purple-700">Server Farm</div>
                    <div className="text-[9px] text-gray-600">App Servers, Database Cluster</div>
                  </div>
                  <div className="bg-orange-50 rounded p-1 border-l-2 border-orange-500">
                    <div className="text-[10px] font-semibold text-orange-700">Admin/Utility</div>
                    <div className="text-[9px] text-gray-600">Monitoring, Backup, Management</div>
                  </div>
                </div>
              </motion.div>

              {/* Key Connections Section */}
              <motion.div
                className="bg-white rounded-lg p-2 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xs font-bold text-gray-800 mb-2 flex items-center">
                  <Link className="w-3 h-3 mr-1 text-green-600" />
                  Key Connections
                </h3>
                <div className="space-y-1">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-0.5 mr-1 flex-shrink-0"></div>
                    <div>
                      <div className="text-[10px] font-semibold text-green-700">DC Link Active</div>
                      <div className="text-[9px] text-gray-600">Dedicated secure bandwidth</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-0.5 mr-1 flex-shrink-0"></div>
                    <div>
                      <div className="text-[10px] font-semibold text-blue-700">Data Link 24/7</div>
                      <div className="text-[9px] text-gray-600">Real-time synchronization</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-0.5 mr-1 flex-shrink-0"></div>
                    <div>
                      <div className="text-[10px] font-semibold text-purple-700">Security Protected</div>
                      <div className="text-[9px] text-gray-600">Multi-layer zone isolation</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Key Features Section */}
              <motion.div
                className="bg-white rounded-lg p-2 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-xs font-bold text-gray-800 mb-2 flex items-center">
                  <CheckCircle className="w-3 h-3 mr-1 text-green-600" />
                  Key Features
                </h3>
                <div className="space-y-1 text-[9px] text-gray-700">
                  <div className="flex items-start">
                    <span className="text-green-600 mr-1 font-bold">✓</span>
                    <span>Geographic DC-DR separation</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-1 font-bold">✓</span>
                    <span>Zero-trust boundaries</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-1 font-bold">✓</span>
                    <span>Continuous replication</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-1 font-bold">✓</span>
                    <span>Multi-layer defense</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-1 font-bold">✓</span>
                    <span>Bangladesh sovereignty</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right Side - 80% Image */}
            <div className="w-[80%] flex flex-col">
              {/* Image Container */}
              <motion.div 
                className="flex-1 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Image
                  src={getImagePath("/architecture/system-architecture-diagram.jpg")}
                  alt="System Architecture Network Diagram"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
              
            </div>
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
              <span>System Architecture Overview</span>
              <span>{(slideNumber || dynamicSlideNumber).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}