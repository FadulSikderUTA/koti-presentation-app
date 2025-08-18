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
  ArcElement,
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { TrendingUp, DollarSign, Target, PieChart, BarChart3, LineChart } from "lucide-react";

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
  Filler,
  ArcElement
);

// Define the chart configuration keys type
type ChartConfigKey = 'growth' | 'profitability' | 'dashboard';

interface ProfitabilitySlideProps {
  slideNumber?: number;
}

export default function ProfitabilitySlide({ slideNumber }: ProfitabilitySlideProps) {
  const [activeChart, setActiveChart] = useState<ChartConfigKey>('growth');
  const dynamicSlideNumber = useSlideNumber();
  useSlideTitle("Revenue & Profitability Model");

  // P&L data from Excel (in Crores BDT)
  const pnlData = {
    years: ['2026', '2027', '2028', '2029', '2030'],
    revenue: [0.72, 1.56, 5.70, 12.60, 18.00],
    costs: [4.52, 5.808, 7.249, 10.114, 14.843],
    netProfit: [-6.007, -6.539, -4.104, -0.609, 1.603],
    grossProfit: [-2.052, -1.857, 1.518, 7.711, 12.528]
  };

  // Service revenue distribution (based on projected Year 5 - 18 Cr total)
  const serviceRevenue = {
    api: 7.2,           // 40% of 18 Cr
    individual: 4.5,    // 25% of 18 Cr
    business: 3.6,      // 20% of 18 Cr
    monitoring: 1.8,    // 10% of 18 Cr
    bulk: 0.9           // 5% of 18 Cr
  };

  // Key metrics
  const keyMetrics = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Revenue Growth",
      value: "2,400%",
      detail: "5-year total growth",
      style: "gradient"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Break-Even Point",
      value: "Year 5",
      detail: "First profitable year",
      style: "white"
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Y5 Net Profit",
      value: "৳1.6 Cr",
      detail: "First positive year",
      style: "gradient"
    }
  ];

  // Chart configurations
  const chartConfigs: Record<ChartConfigKey, any> = {
    growth: {
      type: 'line' as const,
      data: {
        labels: pnlData.years,
        datasets: [{
          label: 'Revenue (Crores BDT)',
          data: pnlData.revenue,
          borderColor: '#5daa80',
          backgroundColor: 'rgba(93, 170, 128, 0.1)',
          fill: true,
          tension: 0.4,
          borderWidth: 4,
          pointRadius: 8,
          pointHoverRadius: 10,
          pointBackgroundColor: '#5daa80'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Revenue Growth: 72L to 18 Cr BDT (2,400% Growth)',
            font: { size: 12, weight: 'bold' as const },
            color: '#2c3e50',
            padding: { top: 5, bottom: 10 }
          },
          legend: { display: false }
        },
        layout: {
          padding: { top: 5, bottom: 5, left: 10, right: 10 }
        },
        scales: {
          x: {
            title: { display: true, text: 'Financial Year', color: '#2c3e50' },
            ticks: { color: '#374151' },
            grid: { color: 'rgba(0,0,0,0.1)' }
          },
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Revenue (Crores BDT)', color: '#2c3e50' },
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
            radius: 6,
            hoverRadius: 8
          }
        }
      }
    },

    profitability: {
      type: 'bar' as const,
      data: {
        labels: pnlData.years,
        datasets: [
          {
            label: 'Revenue',
            data: pnlData.revenue,
            backgroundColor: '#3498db',
            borderColor: '#2980b9',
            borderWidth: 1
          },
          {
            label: 'Total Costs',
            data: pnlData.costs,
            backgroundColor: '#e74c3c',
            borderColor: '#c0392b',
            borderWidth: 1
          },
          {
            label: 'Net Profit',
            data: pnlData.netProfit,
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
            text: 'Revenue, Costs & Profitability Trajectory',
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
            title: { display: true, text: 'Amount (Crores BDT)', color: '#2c3e50' },
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

    dashboard: {
      type: 'bar' as const,
      data: {
        labels: ['Banks', 'NBFIs', 'Individual\nCustomers', 'Fintech\nCompanies', 'Government\nAgencies'],
        datasets: [{
          label: 'Revenue Share (%)',
          data: [45, 25, 20, 8, 2],
          backgroundColor: [
            '#3498db',
            '#e74c3c', 
            '#27ae60',
            '#f39c12',
            '#9b59b6'
          ],
          borderColor: [
            '#2980b9',
            '#c0392b',
            '#229954',
            '#d68910',
            '#8e44ad'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Revenue Dashboard: Customer Segments & MRR Growth',
            font: { size: 12, weight: 'bold' as const },
            color: '#2c3e50',
            padding: { top: 5, bottom: 10 }
          },
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function(context: any) {
                const percentage = context.raw;
                const revenue = Math.round((percentage / 100) * 18);
                return `${context.label}: ${percentage}% (৳${revenue} Cr)`;
              }
            }
          }
        },
        layout: {
          padding: { top: 5, bottom: 5, left: 10, right: 10 }
        },
        scales: {
          x: {
            title: { display: true, text: 'Customer Segments', color: '#2c3e50' },
            ticks: { 
              color: '#374151',
              maxRotation: 0,
              font: { size: 10 }
            },
            grid: { color: 'rgba(0,0,0,0.1)' }
          },
          y: {
            beginAtZero: true,
            max: 50,
            title: { display: true, text: 'Revenue Share (%)', color: '#2c3e50' },
            ticks: {
              color: '#374151',
              callback: function(value: any) {
                return value + '%';
              }
            },
            grid: { color: 'rgba(0,0,0,0.1)' }
          }
        }
      }
    }
  };

  const chartButtons: Array<{ key: ChartConfigKey; label: string; icon: React.ReactNode }> = [
    { key: 'growth', label: 'Revenue Growth', icon: <TrendingUp className="w-4 h-4" /> },
    { key: 'profitability', label: 'P&L Analysis', icon: <BarChart3 className="w-4 h-4" /> },
    { key: 'dashboard', label: 'Revenue Dashboard', icon: <PieChart className="w-4 h-4" /> }
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
        <div className="h-full flex flex-col px-4 py-12 pb-48">
          {/* Title Section */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-2">REVENUE & PROFITABILITY MODEL</h1>
            <p className="text-lg opacity-90">5-Year Growth Trajectory with Service-Based Revenue Streams</p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="flex-1 flex gap-4">
            {/* Left Column - Key Metrics */}
            <motion.div 
              className="w-1/3 flex flex-col gap-4 justify-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Key Metrics */}
              <div className="flex flex-col gap-4">
                {keyMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    className={`relative ${
                      metric.style === 'white' 
                        ? 'bg-white border-2 border-white/30' 
                        : 'bg-gradient-to-br from-green-500 to-green-600'
                    } rounded-xl p-5 shadow-lg flex items-center gap-4`}
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
                      <div className={`text-2xl font-bold ${
                        metric.style === 'white' ? 'text-green-600' : 'text-white'
                      }`}>{metric.value}</div>
                      <p className={`text-sm ${
                        metric.style === 'white' ? 'text-gray-600' : 'text-white/80'
                      }`}>{metric.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Chart Area */}
            <motion.div 
              className="w-2/3 flex flex-col"
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
                className="h-96 bg-white border border-gray-200 rounded-xl p-2 shadow-sm overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="w-full h-full">
                  {activeChart === 'growth' ? (
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
              <span>Revenue & Profitability Model</span>
              <span>{(slideNumber || dynamicSlideNumber).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}