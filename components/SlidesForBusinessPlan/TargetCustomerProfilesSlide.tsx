"use client";
import { motion } from "framer-motion";
import { Users, Building2, Smartphone, Tractor } from "lucide-react";
import { useSlideNumber } from '@/contexts/SlideNumberContext';
import { useSlideTitle } from '@/hooks/useSlideTitle';

interface TargetCustomerProfilesSlideProps {
  companyName?: string;
  slideNumber?: number;
}

export default function TargetCustomerProfilesSlide({ 
  companyName = "Koti",
  slideNumber
}: TargetCustomerProfilesSlideProps) {
  const dynamicSlideNumber = useSlideNumber();
  useSlideTitle("Target Customer Profiles");
  const personas = [
    {
      id: 1,
      title: "Formal Economy Professionals",
      icon: <Users className="w-4 h-4" />,
      segment: "Individuals",
      age: "24-45",
      financialProfile: "Salaried RMG/tech/banking employees in urban & rural areas",
      characteristics: "198M MFS users, frustrated with slow paper-based credit processes",
      creditNeeds: "Fast digital credit based on salary & MFS transaction history",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      accentColor: "text-blue-600",
      borderColor: "border-white/30"
    },
    {
      id: 2,
      title: "Micro-Entrepreneurs & Shopkeepers",
      icon: <Building2 className="w-4 h-4" />,
      segment: "Individuals", 
      age: "25-55",
      financialProfile: "Small business owners using MFS/agent banking, urban & rural",
      characteristics: "Part of $2.8B SME gap, rely on 180% informal loans for working capital",
      creditNeeds: "Formal recognition using MFS data for institutional credit access",
      bgColor: "bg-gradient-to-r from-green-500 to-green-600",
      textColor: "text-white",
      accentColor: "text-white",
      borderColor: "border-green-400/30"
    },
    {
      id: 3,
      title: "E-commerce Merchants",
      icon: <Smartphone className="w-4 h-4" />,
      segment: "Entities",
      age: "25-50",
      financialProfile: "Daraz ecosystem sellers, 2,500+ platforms (95% small businesses)",
      characteristics: "Digital-first operations, need working capital for inventory & growth",
      creditNeeds: "Credit scoring based on sales data, platform performance metrics",
      bgColor: "bg-gradient-to-r from-green-500 to-green-600",
      textColor: "text-white", 
      accentColor: "text-white",
      borderColor: "border-green-400/30"
    },
    {
      id: 4,
      title: "Agricultural Businesses",
      icon: <Tractor className="w-4 h-4" />,
      segment: "Entities",
      age: "30-60",
      financialProfile: "iFarmer network farmers, 20M smallholders (70% lack formal finance)",
      characteristics: "Alternative data & ML credit scoring, seasonal income patterns",
      creditNeeds: "Collateral-free credit based on farming performance & AgTech data",
      bgColor: "bg-white",
      textColor: "text-gray-800", 
      accentColor: "text-blue-600",
      borderColor: "border-white/30"
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

        {/* Main Content - Scaled down by 30% */}
        <div className="h-full flex flex-col px-6 py-11 pb-48">
          {/* Title Section */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl font-bold">TARGET CUSTOMER PROFILES</h1>
          </motion.div>

          {/* Personas Grid - Scaled up */}
          <div className="flex-1 grid grid-cols-2 gap-5">
            {personas.map((persona, index) => (
              <motion.div
                key={persona.id}
                className={`${persona.bgColor} rounded-xl border-2 ${persona.borderColor} p-5 flex flex-col shadow-lg`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              >
                {/* Persona Header */}
                <div className="flex items-center mb-3">
                  <div className={`${persona.bgColor === 'bg-white' ? 'bg-blue-100' : 'bg-white/20'} p-2 rounded-lg mr-3`}>
                    <div className={persona.bgColor === 'bg-white' ? 'text-blue-600' : 'text-white'}>
                      {persona.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-xs font-bold ${persona.textColor} mb-1`}>
                      {persona.title}
                    </h3>
                    <div className={`text-xs ${persona.accentColor} font-semibold bg-black/10 px-2 py-1 rounded mb-1`}>
                      {persona.segment}
                    </div>
                    <div className={`text-xs ${persona.accentColor} font-semibold bg-black/5 px-2 py-1 rounded`}>
                      Age: {persona.age}
                    </div>
                  </div>
                </div>

                {/* Financial Profile */}
                <div className="mb-2">
                  <h4 className={`text-xs font-bold ${persona.textColor} mb-1`}>Market Segment:</h4>
                  <p className={`text-xs ${persona.textColor} opacity-90`}>
                    {persona.financialProfile}
                  </p>
                </div>

                {/* Characteristics */}
                <div className="mb-2">
                  <h4 className={`text-xs font-bold ${persona.textColor} mb-1`}>Current Challenge:</h4>
                  <p className={`text-xs ${persona.textColor} opacity-90`}>
                    {persona.characteristics}
                  </p>
                </div>

                {/* Credit Needs */}
                <div className="flex-1">
                  <h4 className={`text-xs font-bold ${persona.textColor} mb-1`}>Credit Solution:</h4>
                  <p className={`text-xs ${persona.textColor} opacity-90`}>
                    {persona.creditNeeds}
                  </p>
                </div>

                {/* Bottom accent strip */}
                <div className={`mt-3 h-1 ${persona.bgColor === 'bg-white' ? 'bg-blue-500' : 'bg-white/30'} rounded-full`}></div>
              </motion.div>
            ))}
          </div>

          {/* Partnership Channels Section */}
          <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <div className="flex justify-center space-x-7">
              <div className="text-center">
                <div className="text-sm font-bold text-green-contrast header-with-background">198M</div>
                <div className="text-xs opacity-80">MFS Users</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-green-contrast header-with-background">2,500+</div>
                <div className="text-xs opacity-80">E-commerce Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-green-contrast header-with-background">20M</div>
                <div className="text-xs opacity-80">Smallholder Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-green-contrast header-with-background">731</div>
                <div className="text-xs opacity-80">MFIs</div>
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
              <span>Target Customer Profiles</span>
              <span>10</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}