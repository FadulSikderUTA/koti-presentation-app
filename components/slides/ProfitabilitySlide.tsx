"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
import { TrendingUp, DollarSign, Target, PieChart, BarChart3, LineChart, Receipt } from "lucide-react";

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

export default function ProfitabilitySlide() {
  const [activeChart, setActiveChart] = useState('growth');

  // P&L data from reference
  const pnlData = {
    years: ['2026', '2027', '2028', '2029', '2030'],
    revenue: [50, 150, 300, 550, 850],
    costs: [80, 120, 180, 280, 400],
    netProfit: [5, 45, 135, 295, 475],
    grossProfit: [45, 135, 270, 495, 765],
    serviceCharges: {
      individual: 150,
      business: 500,
      api: 25,
      bulk: 50000,
      monitoring: 300,
      fraud: 100
    }
  };

  // Service revenue distribution (based on projected Year 5)
  const serviceRevenue = {
    api: 340,           // 40% of 850M
    individual: 212,    // 25% of 850M  
    business: 170,      // 20% of 850M
    monitoring: 85,     // 10% of 850M
    bulk: 43           // 5% of 850M
  };

  // Key metrics
  const keyMetrics = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Revenue Growth",
      value: "1,600%",
      detail: "5-year total growth",
      style: "gradient"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Break-Even Point",
      value: "Year 2",
      detail: "Projected profitability",
      style: "white"
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Net Margin",
      value: "56%",
      detail: "Year 5 profit margin",
      style: "gradient"
    }
  ];

  // Chart configurations
  const chartConfigs = {
    growth: {
      type: 'line' as const,
      data: {
        labels: pnlData.years,
        datasets: [{
          label: 'Revenue (Millions BDT)',
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
            text: 'Revenue Growth: 50M to 850M BDT (1,600% Growth)',
            font: { size: 12, weight: 'bold' },
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
            title: { display: true, text: 'Revenue (Millions BDT)', color: '#2c3e50' },
            ticks: {
              color: '#374151',
              callback: function(value: any) {
                return value + 'M';
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
            font: { size: 12, weight: 'bold' },
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
            title: { display: true, text: 'Amount (Millions BDT)', color: '#2c3e50' },
            ticks: {
              color: '#374151',
              callback: function(value: any) {
                return value + 'M';
              }
            },
            grid: { color: 'rgba(0,0,0,0.1)' }
          }
        }
      }
    },

    services: {
      type: 'bar' as const,
      data: {
        labels: [
          'Individual\nReports',
          'Business\nReports', 
          'API\nCalls',
          'Credit\nMonitoring',
          'Fraud\nDetection',
          'Bulk Data\nAccess'
        ],
        datasets: [{
          label: 'Projected Year 5 Revenue (Millions BDT)',
          data: [212, 170, 340, 85, 42, 43], // Revenue values
          backgroundColor: [
            '#e74c3c',
            '#f39c12',
            '#3498db',
            '#27ae60',
            '#34495e',
            '#9b59b6'
          ],
          borderColor: [
            '#c0392b',
            '#d68910',
            '#2980b9',
            '#229954',
            '#2c3e50',
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
            text: 'Service Charges & Revenue Breakdown',
            font: { size: 12, weight: 'bold' },
            color: '#2c3e50',
            padding: { top: 5, bottom: 10 }
          },
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function(context: any) {
                const revenue = context.raw;
                const prices = ['150 BDT', '500 BDT', '25 BDT', '300 BDT', '100 BDT', '50K BDT'];
                const serviceName = context.label.replace('\n', ' ');
                return [
                  `${serviceName}: ${revenue}M BDT revenue`,
                  `Unit Price: ${prices[context.dataIndex]}`
                ];
              }
            }
          }
        },
        layout: {
          padding: { top: 5, bottom: 5, left: 10, right: 10 }
        },
        scales: {
          x: {
            title: { display: true, text: 'Service Types (Revenue in Millions BDT)', color: '#2c3e50' },
            ticks: { 
              color: '#374151',
              maxRotation: 0,
              font: { size: 10 },
              autoSkip: false,
              maxTicksLimit: 6
            },
            grid: { color: 'rgba(0,0,0,0.1)' }
          },
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Annual Revenue (Millions BDT)', color: '#2c3e50' },
            ticks: {
              color: '#374151',
              callback: function(value: any) {
                return value + 'M';
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
            font: { size: 12, weight: 'bold' },
            color: '#2c3e50',
            padding: { top: 5, bottom: 10 }
          },
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function(context: any) {
                const percentage = context.raw;
                const revenue = Math.round((percentage / 100) * 850);
                return `${context.label}: ${percentage}% (${revenue}M BDT)`;
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

  const chartButtons = [
    { key: 'growth', label: 'Revenue Growth', icon: <TrendingUp className="w-4 h-4" /> },
    { key: 'profitability', label: 'P&L Analysis', icon: <BarChart3 className="w-4 h-4" /> },
    { key: 'services', label: 'Service Charges', icon: <Receipt className="w-4 h-4" /> },
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
            {/* Left Column - Key Metrics & Service Charges */}
            <motion.div 
              className="w-1/3 flex flex-col gap-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Key Metrics - Upper Section */}
              <div className="flex flex-col gap-2">
                {keyMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    className={`relative ${
                      metric.style === 'white' 
                        ? 'bg-white border-2 border-white/30' 
                        : 'bg-gradient-to-br from-green-500 to-green-600'
                    } rounded-xl p-3 shadow-lg flex items-center gap-3 h-16`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className={`w-10 h-10 ${
                      metric.style === 'white' ? 'bg-green-100 text-green-600' : 'bg-white/20 text-white'
                    } rounded-lg flex items-center justify-center flex-shrink-0`}>
                      {metric.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xs font-bold ${
                        metric.style === 'white' ? 'text-gray-800' : 'text-white'
                      }`}>{metric.title}</h3>
                      <div className={`text-base font-bold ${
                        metric.style === 'white' ? 'text-green-600' : 'text-white'
                      }`}>{metric.value}</div>
                      <p className={`text-xs ${
                        metric.style === 'white' ? 'text-gray-600' : 'text-white/80'
                      }`}>{metric.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Service Charges Table - Lower Section */}
              <motion.div
                className="bg-white/90 rounded-xl p-3 shadow-lg mt-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-sm font-bold text-gray-800 mb-3 text-center bg-green-100 rounded-lg py-1">Service Charges</h3>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                  {[
                    { name: 'Individual Report', desc: 'Personal credit', price: '150 BDT' },
                    { name: 'Business Report', desc: 'Company assess', price: '500 BDT' },
                    { name: 'API Call', desc: 'Per decision', price: '25 BDT' },
                    { name: 'Bulk Access', desc: 'Monthly sub', price: '50K BDT' },
                    { name: 'Credit Monitor', desc: 'Ongoing track', price: '300 BDT' },
                    { name: 'Fraud Detection', desc: 'Real-time alert', price: '100 BDT' }
                  ].map((service, index) => (
                    <div key={index} className="bg-gray-50 rounded p-2 border border-gray-200">
                      <div className="text-xs font-semibold text-gray-800 leading-tight">{service.name}</div>
                      <div className="text-xs text-gray-600 leading-tight">{service.desc}</div>
                      <div className="text-xs font-bold text-green-600 mt-1">{service.price}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
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
              <span>15</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}