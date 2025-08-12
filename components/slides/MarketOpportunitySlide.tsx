"use client";
import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, ShieldCheck, BarChart3, ArrowRight } from "lucide-react";

interface MarketOpportunitySlideProps {
  companyName?: string;
}

export default function MarketOpportunitySlide({ 
  companyName = "Koti" 
}: MarketOpportunitySlideProps) {
  const keyStats = [
    { label: "Credit Invisible", value: "90%", icon: Users, color: "text-red-400" },
    { label: "Public Registry", value: "0.9%", icon: BarChart3, color: "text-red-400" },
    { label: "NPL Rate", value: "16.9%", icon: TrendingUp, color: "text-red-400" },
    { label: "SME Gap", value: "$2.8B", icon: DollarSign, color: "text-yellow-400" },
    { label: "Regulatory Green", value: "June '24", icon: ShieldCheck, color: "text-green-400" }
  ];

  const marketSizes = [
    { label: "Total Addressable Market", sublabel: "All formal lenders + MFIs + digital lenders", value: "50+ Banks/NBFIs + 731 MFIs" },
    { label: "Serviceable Available Market", sublabel: "Top-tier banks & leading MFIs", value: "20 Major Banks + Top 50 MFIs" },
    { label: "Serviceable Obtainable Market", sublabel: "36-month coverage target", value: "30%+ Adult Coverage" }
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
        <div className="h-full flex flex-col px-8 py-16 pb-52">
          {/* Title Section */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold">Market Opportunity</h1>
          </motion.div>

        {/* Key Statistics Banner - Enhanced Contrast */}
        <motion.div 
          className="grid grid-cols-5 gap-3 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {keyStats.map((stat, index) => {
            const isGreen = index === 4; // Make the last one (Regulatory) green
            const isWhite = index % 2 === 0 && index !== 4; // Alternate white for others
            
            return (
              <motion.div
                key={stat.label}
                className={`${
                  isGreen 
                    ? 'bg-gradient-to-r from-green-500 to-green-600 border-2 border-green-400/30' 
                    : isWhite 
                      ? 'bg-white border-2 border-white/30' 
                      : 'bg-black/40 border-2 border-white/20'
                } rounded-lg p-3 text-center shadow-lg hover:scale-105 transition-all duration-300`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <stat.icon className={`w-5 h-5 mx-auto mb-2 ${
                  isGreen ? 'text-white' : isWhite ? stat.color.replace('text-', 'text-') : stat.color
                }`} />
                <div className={`text-lg font-bold mb-1 ${
                  isGreen ? 'text-white' : isWhite ? 'text-gray-800' : 'text-white'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-xs font-medium ${
                  isGreen ? 'text-white/90' : isWhite ? 'text-gray-600' : 'text-white/80'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Visual Narrative - The Great Unlocking */}
        <motion.div 
          className="flex-1 flex items-stretch justify-between gap-4 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Left Panel - The Stalled Present */}
          <motion.div 
            className="flex-1 min-h-[160px] bg-white rounded-xl border-2 border-white/30 p-4 flex flex-col shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="text-center mb-2">
              <h3 className="text-sm font-bold text-red-500 mb-2">The Credit Blindspot</h3>
              <div className="w-12 h-12 bg-red-100 rounded-full mx-auto flex items-center justify-center mb-2">
                <div className="w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="space-y-2 text-xs flex-1">
              <div className="bg-red-50 border border-red-200 rounded-lg p-2">
                <div className="font-bold text-gray-800 mb-1">Formal Banking</div>
                <div className="text-gray-600">Seized by 16.9% NPL</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-2">
                <div className="font-bold text-gray-800 mb-1">Data Ocean</div>
                <div className="text-gray-600 mb-1">40.86M MF + 238M wallets</div>
                <div className="text-xs font-semibold text-yellow-600 bg-yellow-100 px-2 py-1 rounded">Disconnected</div>
              </div>
            </div>
          </motion.div>

          {/* Center Panel - The Bridge */}
          <motion.div 
            className="flex-1 min-h-[160px] bg-gradient-to-r from-green-500 to-green-600 rounded-xl border-2 border-green-400/30 p-4 flex flex-col items-center justify-center relative shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="absolute -left-3 top-1/2 transform -translate-y-1/2">
              <ArrowRight className="w-6 h-6 text-green-400" />
            </div>
            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2">
              <ArrowRight className="w-6 h-6 text-green-400" />
            </div>
            
            <div className="text-center flex-1 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-white mb-3">The Koti Bridge</h3>
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-white mb-1">AI-Powered Credit Infrastructure</div>
                <div className="text-xs text-white/90">Connecting Data to Decisions</div>
              </div>
            </div>
            
            <div className="text-center mt-auto">
              <div className="text-xs bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 text-white font-medium">
                Enabled by BB Circular June '24
              </div>
            </div>
          </motion.div>

          {/* Right Panel - The Unlocked Future */}
          <motion.div 
            className="flex-1 min-h-[160px] bg-white rounded-xl border-2 border-white/30 p-4 flex flex-col shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <div className="text-center mb-2">
              <h3 className="text-sm font-bold text-green-600 mb-2">The Great Unlocking</h3>
              <div className="w-12 h-12 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="space-y-2 text-xs flex-1">
              <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                <div className="font-bold text-gray-800 mb-1">Revitalized Banking</div>
                <div className="text-gray-600">$2.8B SME gap unlocked</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
                <div className="font-bold text-gray-800 mb-1">Mass Inclusion</div>
                <div className="text-gray-600 mb-1">0.9% → 30%+ coverage</div>
                <div className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">Empowered</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Market Sizing */}
        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <h3 className="text-sm font-bold text-center mb-2">Market Sizing Framework</h3>
          <div className="grid grid-cols-3 gap-3">
            {marketSizes.map((market, index) => (
              <motion.div
                key={market.label}
                className="bg-black/30 rounded-lg p-2 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
              >
                <div className="text-xs font-bold mb-1">{market.label}</div>
                <div className="text-xs opacity-80 mb-1">{market.sublabel}</div>
                <div className="text-xs font-semibold text-green-400">{market.value}</div>
              </motion.div>
            ))}
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
              <span>Market Opportunity</span>
              <span>09</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}