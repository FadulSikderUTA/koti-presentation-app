"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getImagePath } from "@/lib/image-utils";

export default function TeamSlide() {
  const teamMembers = [
    {
      id: 1,
      name: "Anthony Wilcox",
      photo: getImagePath("/team/Tony.jpg"),
      expertise: "International Banking & Strategy",
      experience: [
        "CEO of major UK banks (Danske, Lloyds International)",
        "Multi-billion pound P&L across 25+ years"
      ],
      badges: ["Global Banking", "Strategy", "Leadership"],
      style: "white"
    },
    {
      id: 2,
      name: "Mizanur Rahman",
      photo: getImagePath("/team/mizanur-rahman.png"),
      expertise: "Banking Operations & Regulatory",
      experience: [
        "Senior Executive VP First Security Islami Bank",
        "Digital transformation architect across Bangladesh banking"
      ],
      badges: ["Banking Ops", "Regulation", "Digital"],
      style: "gradient"
    },
    {
      id: 3,
      name: "Md Mushfiqur Rahman",
      photo: getImagePath("/team/Mushfiq.jpg"), 
      expertise: "Technology & Security",
      experience: [
        "SOC and core banking technology specialist",
        "ISO 27001, PCI-DSS compliance architect"
      ],
      badges: ["CyberSecurity", "Core Banking", "Cloud"],
      style: "white"
    },
    {
      id: 4,
      name: "Barrister Md Anisuzz Aman",
      photo: getImagePath("/team/Anis.jpeg"),
      expertise: "Regulatory & Compliance",
      experience: [
        "FCA-approved MLRO with LLM Financial Regulation",
        "Fintech regulatory framework specialist"
      ],
      badges: ["Fintech Law", "Compliance", "MLRO"],
      style: "gradient" 
    },
    {
      id: 5,
      name: "Fadul Sikder",
      photo: getImagePath("/team/fadul.png"),
      expertise: "AI & Product Innovation", 
      experience: [
        "Computer Science Researcher",
        "AI/ML, Software & Blockchain Security Expert"
      ],
      badges: ["AI/ML", "Blockchain", "Research"],
      style: "white"
    },
    {
      id: 6,
      name: "Preston Brown",
      photo: getImagePath("/team/Preston.jpg"),
      expertise: "Platform Technology",
      experience: [
        "CEO of Yeeld - fintech platform architect",
        "Consumer fintech and API infrastructure leader"
      ],
      badges: ["Fintech", "APIs", "Platforms"],
      style: "gradient"
    },
    {
      id: 7,
      name: "Galib Ibn Anwarul Azim",
      photo: getImagePath("/team/Galib.jpg"),
      expertise: "Policy & Digital Finance",
      experience: [
        "Bangladesh Bank Assistant Director",
        "UNCDF digital inclusion across 10+ countries"
      ],
      badges: ["Policy", "Digital Finance", "UNCDF"],
      style: "white"
    }
  ];

  const renderMemberCard = (member: typeof teamMembers[0], index: number, delay: number) => (
    <motion.div
      key={member.id}
      className={`relative ${
        member.style === 'white' 
          ? 'bg-white border-2 border-white/30' 
          : 'bg-gradient-to-br from-green-500 to-green-600'
      } rounded-xl p-3 shadow-lg`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Photo */}
      <div className="flex justify-center mb-2">
        <div className="w-12 h-12 rounded-full border-2 border-green-400 overflow-hidden">
          <Image
            src={member.photo}
            alt={member.name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Name */}
      <h3 className={`text-xs font-bold text-center mb-1 ${
        member.style === 'white' ? 'text-gray-800' : 'text-white'
      }`}>{member.name}</h3>
      
      {/* Expertise */}
      <p className={`text-xs text-center mb-2 font-medium ${
        member.style === 'white' ? 'text-green-600' : 'text-green-200'
      }`}>{member.expertise}</p>
      
      {/* Experience Points */}
      <div className="space-y-1 mb-2">
        {member.experience.map((exp, expIndex) => (
          <div key={expIndex} className="flex items-start">
            <div className={`w-1 h-1 rounded-full mt-1 mr-1 flex-shrink-0 ${
              member.style === 'white' ? 'bg-green-500' : 'bg-white/60'
            }`} />
            <span className={`text-xs leading-tight ${
              member.style === 'white' ? 'text-gray-600' : 'text-white/80'
            }`}>{exp}</span>
          </div>
        ))}
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-1 justify-center">
        {member.badges.map((badge, badgeIndex) => (
          <span
            key={badgeIndex}
            className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
              member.style === 'white'
                ? 'bg-green-100 text-green-700'
                : 'bg-white/20 text-white'
            }`}
          >
            {badge}
          </span>
        ))}
      </div>
    </motion.div>
  );

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
        <div className="h-full flex flex-col px-6 py-16 pb-40">
          {/* Title Section */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-2">THE TEAM</h1>
            <p className="text-lg opacity-90">Power of Youth with Worldclass Experience</p>
          </motion.div>

          {/* Team Grid - 3 Top Row */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="grid grid-cols-3 gap-3">
              {teamMembers.slice(0, 3).map((member, index) =>
                renderMemberCard(member, index, 0.2 + index * 0.1)
              )}
            </div>

            {/* Team Grid - 4 Bottom Row */}
            <div className="grid grid-cols-4 gap-3">
              {teamMembers.slice(3, 7).map((member, index) =>
                renderMemberCard(member, index + 3, 0.5 + index * 0.1)
              )}
            </div>
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
              <span>The Team</span>
              <span>19</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}