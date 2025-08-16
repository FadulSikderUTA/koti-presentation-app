"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getImagePath } from "@/lib/image-utils";

interface MissionStatementSlideProps {
  version?: string;
  date?: string;
}

interface TeamMember {
  name: string;
  title: string;
  image: string;
}

export default function MissionStatementSlide({ 
  version = "V1",
  date = "08/11"
}: MissionStatementSlideProps) {
  const teamMembers: TeamMember[] = [
    {
      name: "Barrister Md Anisuzz Aman",
      title: "Founder & Director",
      image: getImagePath("/team/Anis.jpeg")
    },
    {
      name: "Fadul Sikder", 
      title: "Co-Founder & DCTO",
      image: getImagePath("/team/fadul.png")
    }
  ];

  const missionText = "To empower individuals and businesses across Bangladesh with accessible, transparent, and data-driven credit insights, fostering financial inclusion and responsible lending through innovation and collaboration.";

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
        <div className="h-full flex items-center px-8 py-16">
          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            
            {/* Left Side - Mission Statement */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 tracking-wide">
                  MISSION STATEMENT
                </h1>
                <p className="text-lg lg:text-xl xl:text-2xl text-white/90 leading-relaxed font-medium">
                  {missionText}
                </p>
              </div>
            </motion.div>

            {/* Right Side - Team Members in Curved Layout */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-full flex items-center justify-center"
            >
              <div className="relative w-full h-[500px] flex items-center justify-center">
                
                {/* Decorative Background Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 rounded-full border border-white/10 opacity-30"></div>
                  <div className="absolute w-60 h-60 rounded-full border border-white/15 opacity-40"></div>
                </div>

                {/* Center Logo - Enhanced Prominence */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute z-10 bg-white rounded-full p-8 shadow-2xl border-4 border-white/20"
                >
                  <div className="w-20 h-20 bg-[#5daa80] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-4xl font-black">K</span>
                  </div>
                </motion.div>

                {/* Team Member Cards - Fixed positioning: Anis left, Fadul right */}
                {teamMembers.map((member, index) => {
                  // Fixed positioning: Anis (index 0) on left, Fadul (index 1) on right
                  const positions = [
                    { top: '15%', left: '5%' }, // Anis - Left side
                    { top: '15%', right: '5%' } // Fadul - Right side
                  ];
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                      className="absolute z-20"
                      style={positions[index]}
                    >
                      <div className="bg-white/25 backdrop-blur-lg rounded-2xl p-5 border-2 border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:bg-white/30">
                        <div className="flex flex-col items-center text-center space-y-4">
                          {/* Photo */}
                          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white/60 shadow-xl">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          
                          {/* Name Only - Titles Removed */}
                          <div className="space-y-2">
                            <h3 className="text-white font-bold text-base leading-tight max-w-[140px]">
                              {member.name}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
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
              <span>Mission Statement</span>
              <span>02</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}