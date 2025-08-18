"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSlideNumber } from '@/contexts/SlideNumberContext';
import { useSlideTitle } from '@/hooks/useSlideTitle';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { TrendingUp, DollarSign, Target, BarChart3, LineChart, GitBranch } from "lucide-react";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Define the chart configuration keys type
type ChartConfigKey = 'stacked' | 'area' | 'comparison';

interface FinancialProjectionsSlideProps {
  slideNumber?: number;
}

export default function FinancialProjectionsSlide({ slideNumber }: FinancialProjectionsSlideProps) {
  const [activeChart, setActiveChart] = useState<ChartConfigKey>('stacked');
  const dynamicSlideNumber = useSlideNumber();
  
  // Register slide title dynamically
  useSlideTitle("Financial Projections");

  // Financial data from Excel (in Crores BDT)
  const years = ['2026', '2027', '2028', '2029', '2030'];
  
  // Assets (in Crores)
  const currentAssets = [2.20, 2.80, 5.83, 2.36, 3.87];
  const fixedAssets = [6.83, 4.70, 2.56, 0.43, 0.53];
  const totalAssets = [9.03, 7.49, 8.39, 2.79, 4.39];
  
  // Liabilities (in Crores)
  const currentLiabilities = [0.04, 0.04, 0.04, 0.04, 0.05];
  const shareholdersLoan = [5.00, 5.00, 5.00, 0, 0]; // Loan from shareholders
  const totalEquity = [3.99, 2.45, 3.35, 2.74, 4.34];
  const totalLiabilities = currentLiabilities.map((cl, i) => cl + shareholdersLoan[i]);
  const liabilitiesPlusEquity = totalLiabilities.map((tl, i) => tl + totalEquity[i]);
  
  // Revenue data for context (in Crores)
  const revenue = [0.72, 1.56, 5.70, 12.60, 18.00];

  // Key metrics
  const keyMetrics = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Revenue Growth",
      value: "25x",
      detail: "5-year revenue growth",
      style: "gradient"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Equity Ratio",
      value: "99%",
      detail: "Year 5 equity to assets",
      style: "white"
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Revenue Y5",
      value: "৳18 Cr",
      detail: "Projected 2030 revenue",
      style: "gradient"
    }
  ];

  // Chart configurations
  const chartConfigs: Record<ChartConfigKey, any> = {
    stacked: {
      type: 'bar' as const,
      data: {
        labels: years,
        datasets: [
          {
            label: 'Current Assets',
            data: currentAssets,
            backgroundColor: '#3498db',
            borderColor: '#2980b9',
            borderWidth: 1
          },
          {
            label: 'Fixed Assets',
            data: fixedAssets,
            backgroundColor: '#2c3e50',
            borderColor: '#1a252f',
            borderWidth: 1
          },
          {
            label: 'Current Liabilities',
            data: currentLiabilities,
            backgroundColor: '#e74c3c',
            borderColor: '#c0392b',
            borderWidth: 1
          },
          {
            label: 'Loan from Shareholders',
            data: shareholdersLoan,
            backgroundColor: '#a93226',
            borderColor: '#922b21',
            borderWidth: 1
          },
          {
            label: 'Total Equity',
            data: totalEquity,
            backgroundColor: '#27ae60',
            borderColor: '#229954',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Balance Sheet Components (BDT Crores)',
            font: { size: 12, weight: 'bold' as const },
            color: '#2c3e50',
            padding: { top: 5, bottom: 10 }
          },
          legend: {
            position: 'bottom' as const,
            labels: { 
              usePointStyle: true, 
              padding: 8,
              color: '#2c3e50',
              font: { size: 9 }
            }
          }
        },
        layout: {
          padding: { top: 5, bottom: 5, left: 10, right: 10 }
        },
        scales: {
          x: {
            title: { display: true, text: 'Projection Years', color: '#2c3e50' },
            ticks: { color: '#374151' },
            grid: { color: 'rgba(0,0,0,0.1)' }
          },
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Value (Crores BDT)', color: '#2c3e50' },
            ticks: {
              color: '#374151',
              callback: function(value: any) {
                return '৳' + value + ' Cr';
              }
            },
            grid: { color: 'rgba(0,0,0,0.1)' }
          }
        }
      }
    },
    
    area: {
      type: 'line' as const,
      data: {
        labels: years,
        datasets: [
          {
            label: 'Total Assets',
            data: totalAssets,
            borderColor: '#3498db',
            backgroundColor: 'rgba(52, 152, 219, 0.1)',
            fill: true,
            tension: 0.4,
            borderWidth: 3
          },
          {
            label: 'Total Equity',
            data: totalEquity,
            borderColor: '#27ae60',
            backgroundColor: 'rgba(39, 174, 96, 0.1)',
            fill: true,
            tension: 0.4,
            borderWidth: 3
          },
          {
            label: 'Total Liabilities',
            data: totalLiabilities,
            borderColor: '#e74c3c',
            backgroundColor: 'rgba(231, 76, 60, 0.1)',
            fill: true,
            tension: 0.4,
            borderWidth: 3
          },
          {
            label: 'Revenue',
            data: revenue,
            borderColor: '#9b59b6',
            backgroundColor: 'rgba(155, 89, 182, 0.1)',
            fill: true,
            tension: 0.4,
            borderWidth: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Financial Trends & Revenue Growth (BDT Crores)',
            font: { size: 12, weight: 'bold' as const },
            color: '#2c3e50',
            padding: { top: 5, bottom: 10 }
          },
          legend: {
            position: 'bottom' as const,
            labels: { 
              usePointStyle: true, 
              padding: 8,
              color: '#2c3e50',
              font: { size: 9 }
            }
          }
        },
        layout: {
          padding: { top: 5, bottom: 5, left: 10, right: 10 }
        },
        scales: {
          x: {
            title: { display: true, text: 'Projection Years', color: '#2c3e50' },
            ticks: { color: '#374151' },
            grid: { color: 'rgba(0,0,0,0.1)' }
          },
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Value (Crores BDT)', color: '#2c3e50' },
            ticks: {
              color: '#374151',
              callback: function(value: any) {
                return '৳' + value + ' Cr';
              }
            },
            grid: { color: 'rgba(0,0,0,0.1)' }
          }
        },
        elements: {
          point: {
            radius: 4,
            hoverRadius: 6
          }
        }
      }
    },
    
    comparison: {
      type: 'bar' as const,
      data: {
        labels: years,
        datasets: [
          {
            label: 'Total Assets',
            data: totalAssets,
            backgroundColor: '#3498db',
            borderColor: '#2980b9',
            borderWidth: 1
          },
          {
            label: 'Liabilities + Equity',
            data: liabilitiesPlusEquity,
            backgroundColor: 'rgba(231, 76, 60, 0.3)',
            borderColor: '#e74c3c',
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Balance Sheet Verification: Assets = Liabilities + Equity (BDT Crores)',
            font: { size: 12, weight: 'bold' as const },
            color: '#2c3e50',
            padding: { top: 5, bottom: 10 }
          },
          legend: {
            position: 'bottom' as const,
            labels: { 
              usePointStyle: true, 
              padding: 8,
              color: '#2c3e50',
              font: { size: 9 }
            }
          }
        },
        layout: {
          padding: { top: 5, bottom: 5, left: 10, right: 10 }
        },
        scales: {
          x: {
            title: { display: true, text: 'Projection Years', color: '#2c3e50' },
            ticks: { color: '#374151' },
            grid: { color: 'rgba(0,0,0,0.1)' }
          },
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Value (Crores BDT)', color: '#2c3e50' },
            ticks: {
              color: '#374151',
              callback: function(value: any) {
                return '৳' + value + ' Cr';
              }
            },
            grid: { color: 'rgba(0,0,0,0.1)' }
          }
        }
      }
    }
  };

  const chartButtons: Array<{ key: ChartConfigKey; label: string; icon: React.ReactNode }> = [
    { key: 'stacked', label: 'Stacked View', icon: <BarChart3 className="w-4 h-4" /> },
    { key: 'area', label: 'Trend Analysis', icon: <LineChart className="w-4 h-4" /> },
    { key: 'comparison', label: 'Assets vs L+E', icon: <GitBranch className="w-4 h-4" /> }
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
        <div className="h-full flex flex-col px-4 py-12 pb-44">
          {/* Title Section */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-2">FINANCIAL PROJECTIONS</h1>
            <p className="text-lg opacity-90">5-Year Growth Trajectory to Market Leadership</p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="flex-1 flex gap-4">
            {/* Left Column - Key Metrics */}
            <motion.div 
              className="w-1/4 flex flex-col gap-3 justify-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {keyMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className={`relative ${
                    metric.style === 'white' 
                      ? 'bg-white border-2 border-white/30' 
                      : 'bg-gradient-to-br from-green-500 to-green-600'
                  } rounded-xl p-5 shadow-lg flex items-center gap-5 h-24`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className={`w-14 h-14 ${
                    metric.style === 'white' ? 'bg-green-100 text-green-600' : 'bg-white/20 text-white'
                  } rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {metric.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-sm font-bold ${
                      metric.style === 'white' ? 'text-gray-800' : 'text-white'
                    }`}>{metric.title}</h3>
                    <div className={`text-xl font-bold ${
                      metric.style === 'white' ? 'text-green-600' : 'text-white'
                    }`}>{metric.value}</div>
                    <p className={`text-xs ${
                      metric.style === 'white' ? 'text-gray-600' : 'text-white/80'
                    }`}>{metric.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Column - Chart Area */}
            <motion.div 
              className="w-3/4 flex flex-col"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* Chart Controls */}
              <motion.div 
                className="flex justify-center gap-3 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {chartButtons.map((button) => (
                  <button
                    key={button.key}
                    onClick={() => setActiveChart(button.key)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      activeChart === button.key
                        ? 'bg-white text-green-600 shadow-md'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {button.icon}
                    {button.label}
                  </button>
                ))}
              </motion.div>

              {/* Chart Container */}
              <motion.div 
                className="flex-1 bg-white border border-gray-200 rounded-xl p-2 shadow-sm overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="w-full h-full">
                  {activeChart === 'area' ? (
                    <Line key={activeChart} data={chartConfigs[activeChart].data} options={chartConfigs[activeChart].options} />
                  ) : (
                    <Bar key={activeChart} data={chartConfigs[activeChart].data} options={chartConfigs[activeChart].options} />
                  )}
                </div>
              </motion.div>
            </motion.div>
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
              <span>Financial Projections</span>
              <span>{(slideNumber || dynamicSlideNumber).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}