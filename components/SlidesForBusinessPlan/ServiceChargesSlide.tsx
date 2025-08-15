"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Smartphone, 
  TrendingUp, 
  Users, 
  BarChart3,
  ShoppingBag,
  CreditCard,
  CheckCircle
} from "lucide-react";

export default function ServiceChargesSlide() {
  const bankFees = [
    { year: "Year 1", amount: "100,000", highlight: false },
    { year: "Year 2", amount: "200,000", highlight: false },
    { year: "Year 3", amount: "300,000", highlight: false },
    { year: "Year 4", amount: "500,000", highlight: false },
    { year: "Year 5+", amount: "600,000", highlight: true }
  ];

  const otherB2BFees = [
    { year: "Year 1", amount: "100,000" },
    { year: "Year 2", amount: "200,000" },
    { year: "Year 3+", amount: "300,000" }
  ];

  const servicesIncluded = [
    { icon: <BarChart3 className="w-4 h-4" />, title: "Credit Reports" },
    { icon: <CreditCard className="w-4 h-4" />, title: "Credit Products" },
    { icon: <TrendingUp className="w-4 h-4" />, title: "Analytical Tools" },
    { icon: <CheckCircle className="w-4 h-4" />, title: "Referral Fee-based Services" }
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
        <div className="h-full flex flex-col px-8 py-16 pb-40">
          {/* Title Section */}
          <motion.div
            className="text-center mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-1">SERVICE CHARGES</h1>
            <p className="text-lg opacity-90">Adoption-First Pricing That Scales With Network Value</p>
          </motion.div>

          {/* Three Column Layout */}
          <div className="flex-1 grid grid-cols-3 gap-4">
            
            {/* Left Column - Financial Institutions (Banks) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-2"
            >
              <div className="mb-2">
                <h2 className="text-lg font-bold mb-1 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-400" />
                  Banks (Annual)
                </h2>
                <p className="text-xs opacity-80">Incremental subscription model</p>
              </div>

              <div className="space-y-2">
                {bankFees.map((fee, index) => (
                  <motion.div
                    key={fee.year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className={`rounded-lg p-2 border ${
                      fee.highlight 
                        ? 'bg-white border-2 border-blue-400 shadow-lg' 
                        : 'bg-white/95 border-white/30'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className={`text-xs font-medium ${
                        fee.highlight ? 'text-blue-700' : 'text-gray-700'
                      }`}>{fee.year}</span>
                      <span className={`text-sm font-bold ${
                        fee.highlight ? 'text-blue-800' : 'text-gray-800'
                      }`}>BDT {fee.amount}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* NBFIs Note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="bg-white/95 rounded-lg p-2 border border-teal-300 shadow-md"
              >
                <div className="text-xs">
                  <span className="font-semibold text-teal-700">NBFIs:</span>
                  <br />
                  <span className="text-gray-700">Year 1: BDT 100,000</span>
                  <br />
                  <span className="text-gray-700">Year 2+: BDT 150,000</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Middle Column - Other B2B Sectors */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-2"
            >
              <div className="mb-2">
                <h2 className="text-lg font-bold mb-1 flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-purple-400" />
                  Other B2B (Annual)
                </h2>
                <p className="text-xs opacity-80">FMCG, MFI, E-Commerce, Tech</p>
              </div>

              <div className="space-y-2">
                {otherB2BFees.map((fee, index) => (
                  <motion.div
                    key={fee.year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="bg-white/95 rounded-lg p-2 border border-purple-300 shadow-md"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-purple-700">{fee.year}</span>
                      <span className="text-sm font-bold text-gray-800">BDT {fee.amount}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Value Proposition */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="bg-white/95 rounded-lg p-2 border border-gray-300 shadow-md"
              >
                <div className="text-xs">
                  <span className="font-semibold text-gray-800">Access to:</span>
                  <br />
                  <span className="text-gray-700">Consumer credit data, behavior analytics, purchasing patterns</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - B2C Strategy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-2"
            >
              <div className="mb-2">
                <h2 className="text-lg font-bold mb-1 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-green-400" />
                  Consumer App
                </h2>
                <p className="text-xs opacity-80">Freemium to subscription model</p>
              </div>

              {/* Free Phase */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-white/95 rounded-lg p-2 border-2 border-emerald-400 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-xl font-bold text-emerald-700">FREE</div>
                  <div className="text-xs text-gray-700">Initial Years</div>
                  <div className="text-xs text-gray-600">Drive mass adoption</div>
                </div>
              </motion.div>

              {/* Paid Phase */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="bg-white/95 rounded-lg p-2 border border-amber-400 shadow-md"
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-amber-700">BDT 250</div>
                  <div className="text-xs text-gray-700">Per User/Year</div>
                  <div className="text-xs text-gray-600">Post-traction</div>
                </div>
              </motion.div>

              {/* Bank Collaborations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="bg-white/95 rounded-lg p-2 border border-gray-300 shadow-md"
              >
                <div className="text-xs">
                  <span className="font-semibold text-gray-800">Partnerships:</span>
                  <br />
                  <span className="text-gray-700">Credit card products & promotional benefits</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Services Included Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-3 bg-white/10 rounded-lg p-2 border border-white/20"
          >
            <div className="text-center mb-2">
              <span className="text-sm font-bold">Services Included for Financial Institutions</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-xs">
              {servicesIncluded.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.3 + index * 0.1 }}
                  className="flex items-center gap-1 justify-center text-gray-800"
                >
                  <div className="text-blue-600">{service.icon}</div>
                  <span>{service.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer - Page Title and Number */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="absolute bottom-0 left-0 right-0"
        >
          <div className="bg-white/10 backdrop-blur-sm border-t border-white/20 px-12 py-4">
            <div className="flex justify-between items-center text-sm text-white font-semibold">
              <span>Service Charges</span>
              <span>19</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}