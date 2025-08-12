import React from 'react';
import { Brain, Database, Eye, Layers, LineChart } from 'lucide-react';
import BorrowerTypeSelector from './BorrowerTypeSelector';

interface ModelDevelopmentProps {
  borrowerType: 'thick-file' | 'thin-file';
  setBorrowerType: (type: 'thick-file' | 'thin-file') => void;
  isCalibrating: boolean;
  setIsCalibrating: (calibrating: boolean) => void;
  calibrationCycle: number; 
  modelLastUpdated: string;
}

const ModelDevelopment: React.FC<ModelDevelopmentProps> = ({
  borrowerType,
  setBorrowerType,
  isCalibrating,
  setIsCalibrating,
  calibrationCycle,
  modelLastUpdated
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Model Development & Validation</h3>
        
        {/* Component-specific borrower type selector */}
        <BorrowerTypeSelector borrowerType={borrowerType} setBorrowerType={setBorrowerType} />
      </div>
      
      {/* Model recalibration controls with added details */}
      <div className="flex justify-between items-center mb-4 bg-blue-50 p-3 rounded-md">
        <div>
          <h4 className="font-medium">Model Status</h4>
          <p className="text-sm text-gray-600">Last updated: {modelLastUpdated}</p>
          <p className="text-xs text-gray-600 mt-1">
            <span className="font-medium">Model type:</span> Logistic Regression
            <span className="ml-3 font-medium">Target:</span> Probability of Default (PD)
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button 
            className={`px-3 py-1 rounded text-sm ${isCalibrating ? 'bg-red-500 text-white' : 'bg-blue-600 text-white'}`}
            onClick={() => setIsCalibrating(!isCalibrating)}
          >
            {isCalibrating ? 'Stop Recalibration' : 'Simulate Recalibration'}
          </button>
          {isCalibrating && (
            <div className="text-xs bg-yellow-100 px-2 py-1 rounded">
              Recalibrating... Cycle {calibrationCycle + 1}/5
            </div>
          )}
        </div>
      </div>
      
      {/* Recalibration process visualization */}
      <div className="mb-6 bg-white border rounded-md p-4">
        <h4 className="font-medium mb-3">Continuous Model Recalibration Process</h4>
        
        {/* Center-focused process layout */}
        <div className="relative mb-4 overflow-x-auto">
          <div className="grid grid-cols-3 gap-4 mb-16">
            {/* Left: Data Collection */}
            <div className={`relative p-3 rounded-lg border-2 text-center
                           transition-all duration-300 
                           ${isCalibrating && calibrationCycle === 0 ? 'border-blue-500 bg-blue-50 shadow-lg' : 'border-gray-200'}`}>
              <Database className={`mx-auto ${isCalibrating && calibrationCycle === 0 ? 'text-blue-500' : 'text-gray-400'}`} size={20} />
              <h5 className={`text-sm font-medium mt-1 ${isCalibrating && calibrationCycle === 0 ? 'text-blue-700' : 'text-gray-600'}`}>
                Data Collection
              </h5>
              {isCalibrating && calibrationCycle === 0 && (
                <div className="mt-1 text-xs text-blue-700 bg-blue-100 rounded px-1 py-0.5">
                  Processing new data...
                </div>
              )}
              <div className="text-xs text-gray-500 mt-1">
                Credit bureau data, bank records
              </div>
            </div>
            
            {/* Center: Model Training (larger) */}
            <div className={`relative p-4 rounded-lg border-2 text-center row-span-2
                           transition-all duration-300 
                           ${isCalibrating && calibrationCycle === 1 ? 'border-green-500 bg-green-50 shadow-lg' : 'border-gray-200'}`}>
              <Brain className={`mx-auto ${isCalibrating && calibrationCycle === 1 ? 'text-green-500' : 'text-gray-400'}`} size={32} />
              <h5 className={`text-md font-medium mt-1 ${isCalibrating && calibrationCycle === 1 ? 'text-green-700' : 'text-gray-600'}`}>
                Model Training
              </h5>
              {isCalibrating && calibrationCycle === 1 && (
                <div className="mt-1 text-xs text-green-700 bg-green-100 rounded px-1 py-0.5">
                  Learning coefficients...
                </div>
              )}
              <div className="text-sm text-gray-600 mt-2 flex flex-col items-center">
                <div className="text-center mb-1">
                  <strong>Model:</strong> Logistic Regression
                </div>
                <div className="text-center">
                  <strong>Target:</strong> Probability of Default
                </div>
                
                <div className="mt-3 border-t border-gray-200 pt-2 w-full">
                  <div className="text-xs text-left">Key Coefficients:</div>
                  <div className="grid grid-cols-2 gap-x-1 gap-y-1 mt-1 text-xs text-left">
                    <div>Payment History: <span className="font-medium">High</span></div>
                    <div>Credit Utilization: <span className="font-medium">Medium</span></div>
                    <div>Credit Age: <span className="font-medium">Medium</span></div>
                    <div>Inquiries: <span className="font-medium">Low</span></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Validation */}
            <div className={`relative p-3 rounded-lg border-2 text-center
                           transition-all duration-300 
                           ${isCalibrating && calibrationCycle === 2 ? 'border-purple-500 bg-purple-50 shadow-lg' : 'border-gray-200'}`}>
              <Eye className={`mx-auto ${isCalibrating && calibrationCycle === 2 ? 'text-purple-500' : 'text-gray-400'}`} size={20} />
              <h5 className={`text-sm font-medium mt-1 ${isCalibrating && calibrationCycle === 2 ? 'text-purple-700' : 'text-gray-600'}`}>
                Validation
              </h5>
              {isCalibrating && calibrationCycle === 2 && (
                <div className="mt-1 text-xs text-purple-700 bg-purple-100 rounded px-1 py-0.5">
                  Testing accuracy...
                </div>
              )}
              <div className="text-xs text-gray-500 mt-1">
                Gini, KS, AUC-ROC metrics
              </div>
            </div>
            
            {/* Bottom Left: Deployment */}
            <div className={`relative p-3 rounded-lg border-2 text-center
                           transition-all duration-300 
                           ${isCalibrating && calibrationCycle === 3 ? 'border-amber-500 bg-amber-50 shadow-lg' : 'border-gray-200'}`}>
              <Layers className={`mx-auto ${isCalibrating && calibrationCycle === 3 ? 'text-amber-500' : 'text-gray-400'}`} size={20} />
              <h5 className={`text-sm font-medium mt-1 ${isCalibrating && calibrationCycle === 3 ? 'text-amber-700' : 'text-gray-600'}`}>
                Deployment
              </h5>
              {isCalibrating && calibrationCycle === 3 && (
                <div className="mt-1 text-xs text-amber-700 bg-amber-100 rounded px-1 py-0.5">
                  Releasing model...
                </div>
              )}
              <div className="text-xs text-gray-500 mt-1">
                Implementing score rules
              </div>
            </div>
            
            {/* Bottom Right: Monitoring */}
            <div className={`relative p-3 rounded-lg border-2 text-center
                           transition-all duration-300 
                           ${isCalibrating && calibrationCycle === 4 ? 'border-red-500 bg-red-50 shadow-lg' : 'border-gray-200'}`}>
              <LineChart className={`mx-auto ${isCalibrating && calibrationCycle === 4 ? 'text-red-500' : 'text-gray-400'}`} size={20} />
              <h5 className={`text-sm font-medium mt-1 ${isCalibrating && calibrationCycle === 4 ? 'text-red-700' : 'text-gray-600'}`}>
                Monitoring
              </h5>
              {isCalibrating && calibrationCycle === 4 && (
                <div className="mt-1 text-xs text-red-700 bg-red-100 rounded px-1 py-0.5">
                  Analyzing performance...
                </div>
              )}
              <div className="text-xs text-gray-500 mt-1">
                Tracking model metrics
              </div>
            </div>
          </div>
          
          {/* Connecting arrows with SVG */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
            {/* Data Collection to Model Training */}
            <path 
              d="M 30% 15% L 45% 15%" 
              fill="none" 
              stroke={isCalibrating && (calibrationCycle === 0 || calibrationCycle === 1) ? "#22c55e" : "#e5e7eb"} 
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
            
            {/* Model Training to Validation */}
            <path 
              d="M 70% 15% L 85% 15%" 
              fill="none" 
              stroke={isCalibrating && (calibrationCycle === 1 || calibrationCycle === 2) ? "#a855f7" : "#e5e7eb"} 
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
            
            {/* Validation to Deployment */}
            <path 
              d="M 85% 20% L 85% 50% L 30% 50%" 
              fill="none" 
              stroke={isCalibrating && (calibrationCycle === 2 || calibrationCycle === 3) ? "#f59e0b" : "#e5e7eb"} 
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
            
            {/* Deployment to Monitoring */}
            <path 
              d="M 30% 60% L 85% 60%" 
              fill="none" 
              stroke={isCalibrating && (calibrationCycle === 3 || calibrationCycle === 4) ? "#ef4444" : "#e5e7eb"} 
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
            
            {/* Monitoring back to Data Collection */}
            <path 
              d="M 85% 70% L 15% 70% L 15% 15%" 
              fill="none" 
              stroke={isCalibrating && (calibrationCycle === 4 || calibrationCycle === 0) ? "#3b82f6" : "#e5e7eb"} 
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
            
            {/* Animated dot */}
            {isCalibrating && (
              <circle 
                r="5"
                fill={calibrationCycle === 0 ? "#3b82f6" : 
                      calibrationCycle === 1 ? "#22c55e" : 
                      calibrationCycle === 2 ? "#a855f7" : 
                      calibrationCycle === 3 ? "#f59e0b" : "#ef4444"}
                cx={calibrationCycle === 0 ? "15%" : 
                    calibrationCycle === 1 ? "50%" : 
                    calibrationCycle === 2 ? "85%" : 
                    calibrationCycle === 3 ? "30%" : "85%"}
                cy={calibrationCycle === 0 ? "15%" : 
                    calibrationCycle === 1 ? "15%" : 
                    calibrationCycle === 2 ? "15%" : 
                    calibrationCycle === 3 ? "60%" : "60%"}
                className="animate-pulse"
              />
            )}
            
            {/* Arrow definitions */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#e5e7eb" />
              </marker>
            </defs>
          </svg>
        </div>
        
        {/* Logistic Regression Model Formula */}
        <div className={`border-2 rounded-lg mb-4 overflow-hidden transition-all duration-300
                        ${isCalibrating && calibrationCycle === 1 ? 'border-green-500 shadow-lg' : 'border-gray-200'}`}>
          <div className={`px-4 py-2 border-b ${isCalibrating && calibrationCycle === 1 ? 'bg-green-50 text-green-800' : 'bg-gray-50 text-gray-700'}`}>
            <h5 className="font-medium text-center">Logistic Regression Model Formula</h5>
          </div>
          <div className={`p-4 ${isCalibrating && calibrationCycle === 1 ? 'bg-green-50' : 'bg-white'}`}>
            <div className="flex justify-center items-center space-x-1 font-medium text-gray-700">
              <span>P(Default|X) =</span>
              <div className="border-b border-gray-400 text-center mx-1 px-3">
                <div>1</div>
                <div>1 + e<sup>-Z</sup></div>
              </div>
            </div>
            
            <div className="mt-3 text-sm text-gray-700">
              <div className="mb-1">Where Z is a linear combination of input features:</div>
              <div className="pl-4 font-mono">
                Z = β<sub>0</sub> + 
                <span className={`font-medium text-blue-600 ${isCalibrating && calibrationCycle === 1 ? 'animate-pulse' : ''}`}>
                  β<sub>1</sub> × Payment_History
                </span> + 
                <span className={`font-medium text-green-600 ${isCalibrating && calibrationCycle === 1 ? 'animate-pulse' : ''}`}>
                  β<sub>2</sub> × Credit_Utilization
                </span> + 
                <span className={`font-medium text-purple-600 ${isCalibrating && calibrationCycle === 1 ? 'animate-pulse' : ''}`}>
                  β<sub>3</sub> × Credit_History
                </span> + ...
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs bg-gray-50 p-2 rounded-md">
              <div className="flex items-center">
                <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-1">1</div>
                <div>Predict probability of default</div>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-1">2</div>
                <div>Convert to points (PDO scaling)</div>
              </div>
              <div className="flex items-center">
                <div className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-1">3</div>
                <div>Map to 300-850 score range</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Description of current phase */}
        <div className="mb-4 p-2 rounded bg-gray-50 text-sm">
          <h5 className="font-medium mb-1">Current Phase: 
            <span className="ml-2 font-bold">
              {calibrationCycle === 0 ? 'Data Collection' : 
               calibrationCycle === 1 ? 'Model Training' : 
               calibrationCycle === 2 ? 'Validation' : 
               calibrationCycle === 3 ? 'Deployment' : 'Monitoring'}
            </span>
          </h5>
          <p className="text-xs text-gray-600">
            {calibrationCycle === 0 ? 'Gathering new credit data from financial institutions, telecom providers, and alternative sources.' : 
             calibrationCycle === 1 ? 'Training logistic regression model to predict Probability of Default (PD). Optimizing coefficients through maximum likelihood estimation.' : 
             calibrationCycle === 2 ? 'Testing model discrimination power with Gini, KS statistics and AUC-ROC on holdout data.' : 
             calibrationCycle === 3 ? 'Deploying updated scorecard to production systems for real-time credit scoring.' : 
             'Continuously monitoring performance and credit population shifts to ensure reliability.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModelDevelopment;