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
  RadialLinearScale,
} from 'chart.js';
import { Bar, Doughnut, Radar } from 'react-chartjs-2';
import { DollarSign, Target, Users, PieChart, BarChart3, Radar as RadarIcon, Grid3x3 } from "lucide-react";

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
  ArcElement,
  RadialLinearScale
);

export default function CapitalPlanSlide() {
  const [activeChart, setActiveChart] = useState('allocation');

  // Capital plan data from reference
  const capitalData = {
    categories: ['IT Infrastructure', 'Office Setup', 'Rent Advance', 'Employee Tech', 'Other Equipment'],
    amounts: [30.0, 7.5, 3.2, 2.4, 1.9],
    colors: ['#3498db', '#e74c3c', '#f39c12', '#27ae60', '#9b59b6'],
    total: 45.1
  };

  const percentages = capitalData.amounts.map(amount => Math.round((amount / capitalData.total) * 100));

  // Key metrics
  const keyMetrics = [
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Total Investment",
      value: "45.1M",
      detail: "Strategic capital allocation",
      style: "gradient"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Technology Focus", 
      value: "67%",
      detail: "Core platform investment",
      style: "white"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Capital Efficiency",
      value: "2.7M",
      detail: "BDT per team member",
      style: "gradient"
    }
  ];

  // Chart configurations
  const chartConfigs = {
    allocation: {
      type: 'doughnut' as const,
      data: {
        labels: capitalData.categories,
        datasets: [{
          data: capitalData.amounts,
          backgroundColor: capitalData.colors,
          borderColor: '#ffffff',
          borderWidth: 2,
          cutout: '60%'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Strategic Capital Allocation',
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
          },
          tooltip: {
            callbacks: {
              label: function(context: any) {
                const percentage = Math.round((context.raw / capitalData.total) * 100);
                return `${context.label}: ${context.raw}M BDT (${percentage}%)`;
              }
            }
          }
        },
        layout: {
          padding: { top: 5, bottom: 5, left: 10, right: 10 }
        }
      },
      plugins: [{
        beforeDraw: function(chart: any) {
          const width = chart.width;
          const height = chart.height;
          const ctx = chart.ctx;
          
          ctx.restore();
          const fontSize = Math.min(width, height) * 0.08;
          ctx.font = `bold ${fontSize}px Arial`;
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#2c3e50";
          
          const text = "45.1M BDT";
          const textX = Math.round((width - ctx.measureText(text).width) / 2);
          const textY = height / 2 - 10;
          
          ctx.fillText(text, textX, textY);
          
          ctx.font = `${fontSize * 0.6}px Arial`;
          ctx.fillStyle = "#7f8c8d";
          const subtext = "Total Investment";
          const subtextX = Math.round((width - ctx.measureText(subtext).width) / 2);
          const subtextY = height / 2 + 15;
          
          ctx.fillText(subtext, subtextX, subtextY);
          ctx.save();
        }
      }]
    },

    deployment: {
      type: 'bar' as const,
      data: {
        labels: ['Total Capital', ...capitalData.categories],
        datasets: [{
          label: 'Capital Flow (Millions BDT)',
          data: [45.1, -30.0, -7.5, -3.2, -2.4, -1.9],
          backgroundColor: ['#27ae60', ...capitalData.colors.map(c => c + 'CC')],
          borderColor: ['#229954', ...capitalData.colors],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Capital Deployment Flow',
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
            title: { display: true, text: 'Capital Categories', color: '#2c3e50' },
            ticks: { color: '#374151' },
            grid: { color: 'rgba(0,0,0,0.1)' }
          },
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Amount (Millions BDT)', color: '#2c3e50' },
            ticks: {
              color: '#374151',
              callback: function(value: any) {
                return Math.abs(value) + 'M';
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
        labels: capitalData.categories,
        datasets: [{
          label: 'Investment (Millions BDT)',
          data: capitalData.amounts,
          backgroundColor: capitalData.colors,
          borderColor: capitalData.colors.map(c => c.replace('0.7', '1')),
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Investment Categories Overview',
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
            title: { display: true, text: 'Investment Categories', color: '#2c3e50' },
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

    efficiency: {
      type: 'radar' as const,
      data: {
        labels: ['Technology Focus', 'Cost Efficiency', 'Team Investment', 'Infrastructure', 'Scalability'],
        datasets: [{
          label: 'Investment Profile',
          data: [95, 85, 78, 88, 82],
          backgroundColor: 'rgba(93, 170, 128, 0.2)',
          borderColor: '#5daa80',
          borderWidth: 3,
          pointBackgroundColor: '#5daa80',
          pointRadius: 6,
          pointHoverRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Investment Efficiency Analysis',
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
          r: {
            beginAtZero: true,
            max: 100,
            ticks: { 
              display: false,
              stepSize: 20
            },
            grid: { color: 'rgba(0,0,0,0.1)' },
            pointLabels: {
              color: '#2c3e50',
              font: { size: 10 }
            }
          }
        }
      }
    }
  };

  const chartButtons = [
    { key: 'allocation', label: 'Strategic Allocation', icon: <PieChart className="w-4 h-4" /> },
    { key: 'deployment', label: 'Deployment Flow', icon: <BarChart3 className="w-4 h-4" /> },
    { key: 'dashboard', label: 'Category Overview', icon: <Grid3x3 className="w-4 h-4" /> },
    { key: 'efficiency', label: 'Efficiency Analysis', icon: <RadarIcon className="w-4 h-4" /> }
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
            <h1 className="text-3xl font-bold mb-2">CAPITAL PLAN</h1>
            <p className="text-lg opacity-90">Strategic Use of BDT 45.1M Investment</p>
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
                  {activeChart === 'allocation' ? (
                    <Doughnut key={activeChart} data={chartConfigs[activeChart].data} options={chartConfigs[activeChart].options} plugins={chartConfigs[activeChart].plugins} />
                  ) : activeChart === 'efficiency' ? (
                    <Radar key={activeChart} data={chartConfigs[activeChart].data} options={chartConfigs[activeChart].options} />
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
              <span>Capital Plan</span>
              <span>14</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}