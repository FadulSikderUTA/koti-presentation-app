"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  User,
  Shield,
  Bell,
  CreditCard,
  FileText,
  Eye,
  AlertTriangle,
  CheckCircle,
  Clock,
  Key,
  Smartphone,
  MessageSquare,
  UserCheck,
  Settings,
  Lock,
  Download,
  Search,
  RefreshCw,
  HelpCircle,
  Mail
} from "lucide-react";
import { useSlideNumber } from '@/contexts/SlideNumberContext';

interface ConsumerServicesSlideProps {
  slideNumber?: number;
}

export default function ConsumerServicesSlide({ 
  slideNumber 
}: ConsumerServicesSlideProps) {
  const dynamicSlideNumber = useSlideNumber();

  const services = [
    {
      id: 1,
      title: "Credit Report Access",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      color: "blue",
      subtitle: "Secure Self-Service Portal",
      features: [
        {
          icon: <UserCheck className="w-4 h-4 text-blue-600" />,
          title: "Multi-Factor Authentication",
          description: "Credentials + NID + MFA/OTP + KBA",
          details: "4-layer security verification"
        },
        {
          icon: <Eye className="w-4 h-4 text-blue-600" />,
          title: "Instant Report Access",
          description: "View comprehensive credit profile",
          details: "Score + History + Accounts"
        },
        {
          icon: <Download className="w-4 h-4 text-blue-600" />,
          title: "Secure Download",
          description: "PDF reports with watermarking",
          details: "HTTPS delivery + audit trail"
        },
        {
          icon: <CreditCard className="w-4 h-4 text-blue-600" />,
          title: "Payment Integration",
          description: "Transparent fee structure",
          details: "Digital payment + receipt"
        }
      ],
      metrics: [
        { label: "Access Time", value: "<30sec", icon: <Clock className="w-3 h-3" /> },
        { label: "Success Rate", value: "99.7%", icon: <CheckCircle className="w-3 h-3" /> },
        { label: "Security", value: "4-Layer", icon: <Shield className="w-3 h-3" /> }
      ]
    },
    {
      id: 2,
      title: "Dispute Resolution",
      icon: <MessageSquare className="w-6 h-6 text-orange-600" />,
      color: "orange",
      subtitle: "Transparent Correction Process",
      features: [
        {
          icon: <Search className="w-4 h-4 text-orange-600" />,
          title: "Dispute Initiation",
          description: "Flag inaccurate information",
          details: "Online form + evidence upload"
        },
        {
          icon: <RefreshCw className="w-4 h-4 text-orange-600" />,
          title: "Investigation Process",
          description: "30-day investigation timeline",
          details: "Member verification + evidence review"
        },
        {
          icon: <FileText className="w-4 h-4 text-orange-600" />,
          title: "Resolution Tracking",
          description: "Real-time status updates",
          details: "Email + SMS notifications"
        },
        {
          icon: <CheckCircle className="w-4 h-4 text-orange-600" />,
          title: "Final Decision",
          description: "Correction or validation notice",
          details: "Updated report + explanation"
        }
      ],
      metrics: [
        { label: "Resolution", value: "≤30 days", icon: <Clock className="w-3 h-3" /> },
        { label: "Success Rate", value: "92%", icon: <CheckCircle className="w-3 h-3" /> },
        { label: "Tracking", value: "Real-time", icon: <Eye className="w-3 h-3" /> }
      ]
    },
    {
      id: 3,
      title: "Alert Notifications",
      icon: <Bell className="w-6 h-6 text-green-600" />,
      color: "green",
      subtitle: "Proactive Credit Monitoring",
      features: [
        {
          icon: <Bell className="w-4 h-4 text-green-600" />,
          title: "Real-Time Alerts",
          description: "Immediate credit activity notifications",
          details: "New inquiries + account changes"
        },
        {
          icon: <Smartphone className="w-4 h-4 text-green-600" />,
          title: "Multi-Channel Delivery",
          description: "SMS + Email + Push notifications",
          details: "User preference based"
        },
        {
          icon: <Settings className="w-4 h-4 text-green-600" />,
          title: "Custom Preferences",
          description: "Configurable alert thresholds",
          details: "Score changes + new accounts"
        },
        {
          icon: <AlertTriangle className="w-4 h-4 text-green-600" />,
          title: "Fraud Detection",
          description: "Suspicious activity warnings",
          details: "Identity theft protection"
        }
      ],
      metrics: [
        { label: "Delivery", value: "<1min", icon: <Clock className="w-3 h-3" /> },
        { label: "Channels", value: "3 Types", icon: <Mail className="w-3 h-3" /> },
        { label: "Coverage", value: "24/7", icon: <Shield className="w-3 h-3" /> }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-500",
        text: "text-blue-700",
        gradient: "from-blue-500 to-blue-600",
        light: "bg-blue-100"
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-500",
        text: "text-orange-700",
        gradient: "from-orange-500 to-orange-600",
        light: "bg-orange-100"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-500",
        text: "text-green-700",
        gradient: "from-green-500 to-green-600",
        light: "bg-green-100"
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

        {/* Main Content - Expanded: Push down 5% from header, expand left/right 10%, expand bottom 10% */}
        <div className="h-full flex flex-col px-0 py-20 pb-24">
          {/* Title Section */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-2">CONSUMER SERVICE USE CASES</h1>
            <p className="text-lg opacity-90">Empowering Consumers with Transparent Credit Access & Control</p>
          </motion.div>

          {/* Main Content Area - Full width utilization with expanded gaps */}
          <div className="flex-1 flex gap-8 px-4">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <motion.div
                  key={service.id}
                  className="flex-1 space-y-3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  {/* Service Header */}
                  <div className={`bg-gradient-to-b ${colors.gradient} rounded-xl p-3 text-white text-center`}>
                    <div className="flex items-center justify-center mb-2">
                      <div className="bg-white/20 p-2 rounded-lg mr-2">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold">{service.title}</h3>
                        <p className="text-xs opacity-90">{service.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Features - Expanded vertical spacing */}
                  <div className="space-y-4 flex-1">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className={`bg-white ${colors.border} border-l-4 rounded-lg p-3 shadow-lg`}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 + featureIndex * 0.05 }}
                      >
                        <div className="flex items-start">
                          <div className={`w-6 h-6 ${colors.light} rounded-lg flex items-center justify-center mr-2 flex-shrink-0`}>
                            {feature.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xs font-bold text-gray-800 mb-1">{feature.title}</h4>
                            <p className="text-[10px] text-gray-600 leading-tight mb-1">{feature.description}</p>
                            <span className="text-[9px] text-gray-500 italic">{feature.details}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                </motion.div>
              );
            })}
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
              <span>Consumer Service Use Cases</span>
              <span>{(slideNumber || dynamicSlideNumber).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}