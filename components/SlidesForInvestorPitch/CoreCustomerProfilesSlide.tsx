"use client";
import { motion } from "framer-motion";
import { Store, Laptop, Users, Smartphone } from "lucide-react";

interface CoreCustomerProfilesSlideProps {
  companyName?: string;
}

export default function CoreCustomerProfilesSlide({ 
  companyName = "Koti" 
}: CoreCustomerProfilesSlideProps) {
  const personas = [
    {
      id: 1,
      title: "The Growth-Hungry Shopkeeper",
      icon: <Store className="w-6 h-6" />,
      age: "30-55",
      financialProfile: "SME owner, cash/MFS only, no formal credit",
      characteristics: "Uses 180% informal loans for working capital",
      creditNeeds: "Formal recognition for $2.8B SME gap access",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      accentColor: "text-blue-600",
      borderColor: "border-white/30"
    },
    {
      id: 2,
      title: "The Digital Urban Professional",
      icon: <Laptop className="w-6 h-6" />,
      age: "24-40", 
      financialProfile: "Salaried RMG/tech/banking employee",
      characteristics: "Frustrated with slow, paper-heavy processes",
      creditNeeds: "Fast digital credit based on salary history",
      bgColor: "bg-gradient-to-r from-green-500 to-green-600",
      textColor: "text-white",
      accentColor: "text-white",
      borderColor: "border-green-400/30"
    },
    {
      id: 3,
      title: "The \"Credit-Proven\" Micro-Entrepreneur",
      icon: <Users className="w-6 h-6" />,
      age: "25-50",
      financialProfile: "MFI member with 98%+ repayment rate",
      characteristics: "Credit-proven but credit-invisible to banks",
      creditNeeds: "MFI history as collateral for formal loans",
      bgColor: "bg-gradient-to-r from-green-500 to-green-600",
      textColor: "text-white", 
      accentColor: "text-white",
      borderColor: "border-green-400/30"
    },
    {
      id: 4,
      title: "The Ambitious Digital Native",
      icon: <Smartphone className="w-6 h-6" />,
      age: "18-24",
      financialProfile: "Student/first job, MFS-exclusive lifestyle",
      characteristics: "Tech-comfortable, expects instant experiences",
      creditNeeds: "Nano-loans based on digital footprint",
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

        {/* Main Content */}
        <div className="h-full flex flex-col px-8 py-16 pb-44">
          {/* Title Section */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold">CORE CUSTOMER PROFILES</h1>
          </motion.div>

          {/* Personas Grid */}
          <div className="flex-1 grid grid-cols-2 gap-6">
            {personas.map((persona, index) => (
              <motion.div
                key={persona.id}
                className={`${persona.bgColor} rounded-xl border-2 ${persona.borderColor} p-6 flex flex-col shadow-lg`}
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
                    <h3 className={`text-sm font-bold ${persona.textColor} mb-1`}>
                      {persona.title}
                    </h3>
                    <div className={`text-xs ${persona.accentColor} font-semibold bg-black/10 px-2 py-1 rounded`}>
                      Age: {persona.age}
                    </div>
                  </div>
                </div>

                {/* Financial Profile */}
                <div className="mb-2">
                  <h4 className={`text-xs font-bold ${persona.textColor} mb-1`}>Financial Profile:</h4>
                  <p className={`text-xs ${persona.textColor} opacity-90`}>
                    {persona.financialProfile}
                  </p>
                </div>

                {/* Characteristics */}
                <div className="mb-2">
                  <h4 className={`text-xs font-bold ${persona.textColor} mb-1`}>Key Challenge:</h4>
                  <p className={`text-xs ${persona.textColor} opacity-90`}>
                    {persona.characteristics}
                  </p>
                </div>

                {/* Credit Needs */}
                <div className="flex-1">
                  <h4 className={`text-xs font-bold ${persona.textColor} mb-1`}>Solution Need:</h4>
                  <p className={`text-xs ${persona.textColor} opacity-90`}>
                    {persona.creditNeeds}
                  </p>
                </div>

                {/* Bottom accent strip */}
                <div className={`mt-4 h-1 ${persona.bgColor === 'bg-white' ? 'bg-blue-500' : 'bg-white/30'} rounded-full`}></div>
              </motion.div>
            ))}
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
              <span>Core Customer Profiles</span>
              <span>10</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}