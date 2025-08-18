"use client";

import { motion } from "framer-motion";
import { useSlideTitle } from '@/hooks/useSlideTitle';

interface ProblemStatementSlideProps {
  version?: string;
  date?: string;
}

export default function ProblemStatementPuzzleSlide({
  version = "V1",
  date = "08/11",
}: ProblemStatementSlideProps) {
  // Register slide title dynamically
  useSlideTitle("Problem Statement");
  const problemText =
    "Bangladesh's lending ecosystem is hampered by severe data fragmentation and the absence of a comprehensive, trusted credit information infrastructure. Consumer and SME data are left sparse and siloed across banks, MFIs, utilities, and digital platforms, creating significant information asymmetry. This leaves lenders with incomplete risk signals and renders vast populations of individuals and businesses—particularly thin-file and new-to-credit applicants—\"credit invisible.\" As a result, a cycle of financial exclusion is perpetuated, stifling fair access to finance and constraining both individual opportunity and responsible economic growth.";

  return (
    <div className="presentation-slide presentation-gradient">
      <div className="pdf-container text-white relative pt-24 pb-28 px-8">
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

        {/* Main Grid Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-6 gap-16 items-center">
          {/* Left - Puzzle motif (smaller, refined) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative h-[320px] flex items-center justify-center pointer-events-none"
          >
            <div className="relative w-full h-full pr-8">
              {/* Base puzzle silhouette */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <svg width="180" height="130" viewBox="0 0 280 200" className="drop-shadow-2xl">
                  <defs>
                    <linearGradient id="main-puzzle-gradient-v2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                      <stop offset="50%" stopColor="#f8fffe" stopOpacity="1" />
                      <stop offset="100%" stopColor="#f0f9f4" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M20 20 L260 20 Q270 20 270 30 L270 80 Q275 85 270 90 Q275 95 270 100 L270 170 Q270 180 260 180 L90 180 L90 120 Q85 115 90 110 Q85 105 90 100 L90 80 L20 80 Q10 80 10 70 L10 30 Q10 20 20 20 Z"
                    fill="url(#main-puzzle-gradient-v2)"
                    stroke="#5daa80"
                    strokeWidth="3"
                  />
                  {/* Missing notch */}
                  <path
                    d="M190 60 Q200 50 210 60 L240 60 Q250 60 250 70 L250 100 Q250 110 240 110 L210 110 Q200 120 190 110 L190 90 Q180 85 190 80 Q180 75 190 70 Z"
                    fill="#5daa80"
                    opacity="0.1"
                    stroke="#5daa80"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                </svg>
              </motion.div>

              {/* Floating piece (gentle bob) */}
              <motion.div
                initial={{ opacity: 0, x: 24, y: -16 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.0, delay: 0.6, type: "spring", stiffness: 80 }}
                className="absolute left-1/2 top-1/2 -translate-x-24 -translate-y-8 z-0"
              >
                <motion.div
                  animate={{ y: [0, -6, 0], rotate: [0, 1.5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg width="60" height="52" viewBox="0 0 60 50" className="drop-shadow-xl">
                    <defs>
                      <linearGradient id="koti-piece-gradient-v2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7ec29f" stopOpacity="1" />
                        <stop offset="50%" stopColor="#5daa80" stopOpacity="1" />
                        <stop offset="100%" stopColor="#4a8866" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M10 10 Q20 0 30 10 L50 10 Q60 10 60 20 L60 35 Q60 45 50 45 L30 45 Q20 55 10 45 L10 30 Q0 25 10 20 Q0 15 10 10 Z"
                      fill="url(#koti-piece-gradient-v2)"
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                    <text
                      x="30"
                      y="28"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="16"
                      fontWeight="bold"
                      fill="#ffffff"
                    >
                      K
                    </text>
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Paragraph text (no bullets) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 relative z-20"
          >
            <h1 className="text-3xl lg:text-4xl font-bold tracking-wide leading-tight mb-6">
              PROBLEM STATEMENT
            </h1>
            <div className="max-w-[780px] md:bg-black/10 md:backdrop-blur-[1px] md:rounded-xl md:p-6 md:shadow-lg md:ring-1 md:ring-white/10">
              <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                {problemText}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-0 left-0 right-0"
        >
          <div className="bg-white/10 backdrop-blur-sm border-t border-white/20 px-12 py-4">
            <div className="flex justify-between items-center text-sm text-white font-semibold">
              <span>Problem Statement</span>
              <span>03</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


