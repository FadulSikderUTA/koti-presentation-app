"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Code2, Construction } from "lucide-react";
import Link from "next/link";

export default function TechnicalPlanPresentation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="p-6 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl text-white shadow-2xl">
                <Code2 className="w-16 h-16" />
              </div>
              <div className="absolute -top-2 -right-2 p-2 bg-amber-500 rounded-full text-white shadow-lg">
                <Construction className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Title */}
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Technical Plan Deck
          </motion.h1>

          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center px-6 py-3 bg-amber-100 text-amber-800 rounded-full text-lg font-semibold mb-8"
          >
            <Construction className="w-5 h-5 mr-2" />
            Coming Soon
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Our comprehensive technical presentation is currently under development. 
            It will cover system architecture, API design, database schema, security 
            implementation, and detailed development roadmap.
          </motion.p>

          {/* Features Preview */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">System Architecture</h3>
              <p className="text-gray-600 text-sm">Microservices design, cloud infrastructure, and scalability patterns</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">API Documentation</h3>
              <p className="text-gray-600 text-sm">RESTful endpoints, authentication, and integration guides</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Security Framework</h3>
              <p className="text-gray-600 text-sm">Data protection, compliance, and security protocols</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Development Roadmap</h3>
              <p className="text-gray-600 text-sm">Sprint planning, milestones, and delivery timeline</p>
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}