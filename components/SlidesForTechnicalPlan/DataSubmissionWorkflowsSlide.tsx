"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap,
  Database,
  Upload,
  Shield,
  CheckCircle,
  Clock,
  FileText,
  Lock,
  RefreshCw,
  ArrowRight,
  Globe,
  HardDrive,
  Key,
  AlertCircle,
  Download,
  GitBranch
} from "lucide-react";
import { useSlideNumber } from '@/contexts/SlideNumberContext';

interface DataSubmissionWorkflowsSlideProps {
  slideNumber?: number;
}

export default function DataSubmissionWorkflowsSlide({ 
  slideNumber 
}: DataSubmissionWorkflowsSlideProps) {
  const dynamicSlideNumber = useSlideNumber();

  const apiWorkflow = {
    title: "API Real-Time Path",
    icon: <Zap className="w-5 h-5 text-blue-600" />,
    color: "blue",
    timing: "Immediate",
    useCase: "Single records, real-time updates",
    steps: [
      {
        step: 1,
        title: "HTTPS Request",
        description: "Member sends encrypted JSON payload",
        icon: <Globe className="w-4 h-4 text-blue-600" />,
        timing: "0.1s"
      },
      {
        step: 2,
        title: "Real-Time Validation",
        description: "Schema & business rule validation",
        icon: <CheckCircle className="w-4 h-4 text-blue-600" />,
        timing: "0.2s"
      },
      {
        step: 3,
        title: "Immediate Processing",
        description: "Database update & credit score refresh",
        icon: <RefreshCw className="w-4 h-4 text-blue-600" />,
        timing: "0.5s"
      },
      {
        step: 4,
        title: "Instant Response",
        description: "Success/failure acknowledgment",
        icon: <ArrowRight className="w-4 h-4 text-blue-600" />,
        timing: "0.1s"
      }
    ]
  };

  const sftpWorkflow = {
    title: "SFTP Bulk Path",
    icon: <HardDrive className="w-5 h-5 text-green-600" />,
    color: "green", 
    timing: "Batch Processing",
    useCase: "High-volume bulk uploads",
    steps: [
      {
        step: 1,
        title: "File Preparation",
        description: "CSV format + PGP encryption",
        icon: <FileText className="w-4 h-4 text-green-600" />,
        timing: "Manual"
      },
      {
        step: 2,
        title: "Secure Upload",
        description: "SFTP + Key Auth + IP Whitelist",
        icon: <Upload className="w-4 h-4 text-green-600" />,
        timing: "Variable"
      },
      {
        step: 3,
        title: "Batch Processing",
        description: "Decrypt → Validate → Process loop",
        icon: <Database className="w-4 h-4 text-green-600" />,
        timing: "5-30min"
      },
      {
        step: 4,
        title: "Report Delivery",
        description: "Processing report via SFTP",
        icon: <Download className="w-4 h-4 text-green-600" />,
        timing: "Post-processing"
      }
    ]
  };

  const comparisonMetrics = [
    {
      metric: "Volume Capacity",
      api: "1-100 records",
      sftp: "1K-1M+ records",
      icon: <Database className="w-4 h-4" />
    },
    {
      metric: "Response Time",
      api: "<1 second",
      sftp: "5-30 minutes",
      icon: <Clock className="w-4 h-4" />
    },
    {
      metric: "Use Case",
      api: "Real-time updates",
      sftp: "Periodic bulk sync",
      icon: <RefreshCw className="w-4 h-4" />
    },
    {
      metric: "Security",
      api: "HTTPS/TLS 1.2+",
      sftp: "PGP + Key Auth",
      icon: <Shield className="w-4 h-4" />
    }
  ];

  const securityFeatures = [
    { name: "End-to-End Encryption", icon: <Lock className="w-3 h-3 text-red-600" /> },
    { name: "Multi-Factor Authentication", icon: <Key className="w-3 h-3 text-blue-600" /> },
    { name: "IP Whitelisting", icon: <Shield className="w-3 h-3 text-green-600" /> },
    { name: "Comprehensive Audit Logging", icon: <FileText className="w-3 h-3 text-purple-600" /> }
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
        <div className="h-full flex flex-col px-0 py-16 pb-40">
          {/* Title Section */}
          <motion.div
            className="text-center mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-2">DATA SUBMISSION WORKFLOWS</h1>
            <p className="text-base opacity-90">Dual-Path Architecture: Real-Time API vs High-Volume SFTP</p>
          </motion.div>

          {/* Dual Workflow Comparison */}
          <div className="flex-1 flex gap-4 mb-4">
            
            {/* API Real-Time Path */}
            <motion.div
              className="w-1/2 space-y-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* API Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-2 text-white">
                <div className="flex items-center justify-center mb-1">
                  <div className="bg-white/20 p-1 rounded mr-2">
                    {apiWorkflow.icon}
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-bold">{apiWorkflow.title}</h3>
                    <p className="text-[10px] opacity-90">{apiWorkflow.useCase}</p>
                  </div>
                </div>
                <div className="text-center bg-white/20 rounded py-1">
                  <span className="text-xs font-bold">Response: {apiWorkflow.timing}</span>
                </div>
              </div>

              {/* API Steps */}
              <div className="space-y-2">
                {apiWorkflow.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-blue-500"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-800">{step.title}</div>
                        <div className="text-xs text-gray-600">{step.description}</div>
                      </div>
                      <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">
                        {step.timing}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* SFTP Bulk Path */}
            <motion.div
              className="w-1/2 space-y-3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* SFTP Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-2 text-white">
                <div className="flex items-center justify-center mb-1">
                  <div className="bg-white/20 p-1 rounded mr-2">
                    {sftpWorkflow.icon}
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-bold">{sftpWorkflow.title}</h3>
                    <p className="text-[10px] opacity-90">{sftpWorkflow.useCase}</p>
                  </div>
                </div>
                <div className="text-center bg-white/20 rounded py-1">
                  <span className="text-xs font-bold">Processing: {sftpWorkflow.timing}</span>
                </div>
              </div>

              {/* SFTP Steps */}
              <div className="space-y-2">
                {sftpWorkflow.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-green-500"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-800">{step.title}</div>
                        <div className="text-xs text-gray-600">{step.description}</div>
                      </div>
                      <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
                        {step.timing}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section: Comparison Metrics & Security */}
          <div className="flex gap-4">
            
            {/* Comparison Metrics */}
            <motion.div
              className="w-3/5 bg-white rounded-lg p-3 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="text-sm font-bold text-purple-600 mb-3 flex items-center">
                <GitBranch className="w-4 h-4 mr-1" />
                Pathway Comparison Matrix
              </h4>
              <div className="grid grid-cols-3 gap-2">
                <div className="font-bold text-xs text-gray-500">Metric</div>
                <div className="font-bold text-xs text-blue-600 text-center">API Real-Time</div>
                <div className="font-bold text-xs text-green-600 text-center">SFTP Bulk</div>
                
                {comparisonMetrics.map((metric, index) => (
                  <React.Fragment key={index}>
                    <div className="text-xs text-gray-700 flex items-center">
                      <div className="mr-1">{metric.icon}</div>
                      {metric.metric}
                    </div>
                    <div className="text-xs text-blue-600 text-center font-medium">{metric.api}</div>
                    <div className="text-xs text-green-600 text-center font-medium">{metric.sftp}</div>
                  </React.Fragment>
                ))}
              </div>
            </motion.div>

            {/* Security Features */}
            <motion.div
              className="w-2/5 bg-white rounded-lg p-3 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h4 className="text-sm font-bold text-red-600 mb-3 flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                Universal Security
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center bg-gray-50 rounded px-2 py-1">
                    {feature.icon}
                    <span className="text-xs text-gray-700 ml-2 font-medium">{feature.name}</span>
                  </div>
                ))}
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
              <span>Data Submission Workflows</span>
              <span>{(slideNumber || dynamicSlideNumber).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}