"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Linkedin } from "lucide-react";

export default function ContactSlide() {
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

        {/* Main Content - Centered Layout */}
        <div className="h-full flex flex-col items-center justify-center px-8 py-16">
          
          {/* Company Name & Subtitle - More Prominent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-6 leading-tight">
              Koti
            </h1>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-white mb-4">
              Credit Bureau
            </h2>
            <p className="text-xl lg:text-2xl text-white font-semibold opacity-90">
              Bangladesh's First Digital Credit Scoring Platform
            </p>
          </motion.div>

          {/* Contact Information - Professional Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center max-w-4xl"
          >
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-8 leading-tight">
              Get In Touch
            </h3>
            
            {/* Contact Details Grid */}
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              
              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-white/80">Email</div>
                  <div className="text-lg font-semibold text-white">info@kotibd.com</div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-white/80">Phone</div>
                  <div className="text-lg font-semibold text-white">+8801714046370</div>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-white/80">Address</div>
                  <div className="text-lg font-semibold text-white">Dhaka, Bangladesh</div>
                </div>
              </motion.div>

              {/* Website */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-white/80">Website</div>
                  <div className="text-lg font-semibold text-white">www.kotibd.com</div>
                </div>
              </motion.div>

            </div>

            {/* Thank You Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8"
            >
              <p className="text-lg lg:text-xl text-white/90 font-medium leading-relaxed">
                Thank you for your time and consideration
              </p>
            </motion.div>
          </motion.div>

          {/* Clean spacing for professional look */}
          <div className="flex-1"></div>
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
              <span>Contact Information</span>
              <span>20</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}