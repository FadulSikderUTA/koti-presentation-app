"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Presentation, Code2, BarChart3 } from "lucide-react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Home() {
  const navigationOptions = [
    {
      id: "business-plan",
      title: "Business Plan",
      description: "Comprehensive business presentation covering market opportunity, financial projections, and strategic roadmap",
      icon: <Presentation className="w-8 h-8" />,
      href: "/business-plan",
      gradient: "from-green-600 to-emerald-500",
      status: "20 Slides Available"
    },
    {
      id: "technical-plan", 
      title: "Technical Architecture",
      description: "Detailed technical architecture, system design, implementation strategy, and development roadmap",
      icon: <Code2 className="w-8 h-8" />,
      href: "/technical-plan",
      gradient: "from-blue-600 to-cyan-500",
      status: "Coming Soon"
    },
    {
      id: "credit-scoring",
      title: "Credit Scoring Framework",
      description: "Interactive visualization of Koti's 5-phase credit scoring methodology with live demonstrations",
      icon: <BarChart3 className="w-8 h-8" />,
      href: "/credit-scoring", 
      gradient: "from-purple-600 to-indigo-500",
      status: "Interactive Demo"
    }
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-green-600 via-green-500 to-teal-500">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2Utb3BhY2l0eT0iMC4xIj4KPHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPgo8cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6Ii8+CjwvZz4KPC9zdmc+')] opacity-10"></div>
        
        {/* Header Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-8"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Koti
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-white/60 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </motion.div>
        </div>

        {/* Navigation Cards */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {navigationOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
              >
                <Link href={option.href} className="block group">
                  <div className="relative h-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-white/20 group-hover:scale-105 group-hover:bg-white">
                    <div className="p-8 h-full flex flex-col min-h-[320px]">
                      {/* Status Badge */}
                      <div className="flex justify-end mb-4">
                        <span className={`px-3 py-1 text-xs font-bold rounded-full shadow-md ${
                          option.status === "Coming Soon" 
                            ? "bg-amber-500 text-white" 
                            : option.status.includes("Slides")
                            ? "bg-green-500 text-white"
                            : "bg-purple-500 text-white"
                        }`}>
                          {option.status}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="flex justify-center mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${option.gradient} text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                          {React.cloneElement(option.icon as React.ReactElement, { size: 32 })}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-gray-900 transition-colors">
                        {option.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-center mb-8 flex-grow leading-relaxed text-sm">
                        {option.description}
                      </p>

                      {/* Action Button */}
                      <div className="flex justify-center">
                        <div className={`flex items-center px-6 py-3 bg-gradient-to-r ${option.gradient} text-white font-semibold rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 text-sm`}>
                          <span>Access Presentation</span>
                          <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
        </div>
      </div>

        {/* Footer */}
        <div className="relative z-10 mt-16 border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <p className="text-white/80 text-sm">
                © 2025 Koti Credit Bureau • www.kotibd.com
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}