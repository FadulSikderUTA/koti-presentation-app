import React, { useState } from 'react';

interface FeatureWeightDistributionProps {
  borrowerType: 'thick-file' | 'thin-file';
  setBorrowerType: (type: 'thick-file' | 'thin-file') => void;
  getDynamicWeights: () => Array<{
    name: string;
    weight: number;
    color: string;
  }>;
  isCalibrating: boolean;
  calibrationCycle: number;
  inputs: any;
  handleInputChange: (param: string, value: number) => void;
}

// Sample score calculation logic (this would normally be in the model)
const calculateSampleScore = (weights: any[], inputs: any, borrowerType: 'thick-file' | 'thin-file') => {
  let baseScore = 500;
  
  if (borrowerType === 'thick-file') {
    // Apply payment history weight
    const paymentFactor = (inputs.paymentHistory / 100) * weights[0].weight * 10;
    baseScore += paymentFactor;
    
    // Apply credit utilization weight (inverse relationship - lower is better)
    const utilizationFactor = ((100 - inputs.creditUtilization) / 100) * weights[1].weight * 10;
    baseScore += utilizationFactor;
    
    // Apply credit history weight
    const historyFactor = (Math.min(inputs.creditAge, 60) / 60) * weights[2].weight * 10;
    baseScore += historyFactor;
    
    // Apply credit mix weight
    const mixFactor = (Math.min(inputs.loanHistory, 8) / 8) * weights[3].weight * 8;
    baseScore += mixFactor;
    
    // Apply inquiries weight (inverse relationship - lower is better)
    const inquiriesFactor = ((10 - Math.min(inputs.inquiries, 10)) / 10) * weights[4].weight * 8;
    baseScore += inquiriesFactor;
    
  } else {
    // Apply telecom payments weight
    const telecomFactor = (inputs.telecomPayments / 100) * weights[0].weight * 10;
    baseScore += telecomFactor;
    
    // Apply utility payments weight
    const utilityFactor = (inputs.utilityBills / 100) * weights[1].weight * 10;
    baseScore += utilityFactor;
    
    // Apply mobile financial weight
    const mobileFactor = (inputs.mobileFinancial / 100) * weights[2].weight * 10;
    baseScore += mobileFactor;
    
    // Apply psychometric weight (simplified)
    const psychFactor = 0.8 * weights[3].weight * 8; // Assume 80% psychometric score
    baseScore += psychFactor;
  }
  
  // Ensure score stays within 300-850 range
  return Math.max(300, Math.min(850, Math.round(baseScore)));
};

// Component to show how a single weight affects the score
const WeightSimulator: React.FC<{
  feature: any; 
  index: number;
  baseWeights: any[];
  inputs: any;
  borrowerType: 'thick-file' | 'thin-file';
  isCalibrating: boolean;
}> = ({ feature, index, baseWeights, inputs, borrowerType, isCalibrating }) => {
  const [simulatedWeight, setSimulatedWeight] = useState(feature.weight);
  
  // Create a copy of weights with simulated weight for this feature
  const getSimulatedWeights = () => {
    const weights = [...baseWeights];
    weights[index] = {...weights[index], weight: simulatedWeight};
    return weights;
  };
  
  // Calculate current score
  const currentScore = calculateSampleScore(baseWeights, inputs, borrowerType);
  
  // Calculate simulated score
  const simulatedScore = calculateSampleScore(getSimulatedWeights(), inputs, borrowerType);
  
  // Calculate score difference
  const scoreDiff = simulatedScore - currentScore;
  
  return (
    <div className="bg-white p-3 rounded-lg border mt-3">
      <div className="flex justify-between mb-2">
        <h5 className="font-medium text-sm">{feature.name} Weight Simulation</h5>
        <div className="text-xs bg-blue-100 px-2 py-0.5 rounded">
          Current: {feature.weight}%
        </div>
      </div>
      
      <div className="relative">
        <input
          type="range"
          min={5}
          max={50}
          step={1}
          value={simulatedWeight}
          onChange={(e) => setSimulatedWeight(Number(e.target.value))}
          className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer z-10 relative ${isCalibrating ? 'opacity-50' : 'opacity-70'}`}
          disabled={isCalibrating}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>5%</span>
          <span>15%</span>
          <span>25%</span>
          <span>35%</span>
          <span>45%</span>
        </div>
      </div>
      
      <div className="mt-3 flex justify-between items-center text-sm">
        <div>
          Simulated weight: <span className="font-medium">{simulatedWeight}%</span>
        </div>
        <div className={`${
          scoreDiff > 0 ? 'text-green-600' : 
          scoreDiff < 0 ? 'text-red-600' : 
          'text-gray-600'
        }`}>
          Score impact: <span className="font-medium">{scoreDiff > 0 ? '+' : ''}{scoreDiff} points</span>
        </div>
      </div>
      
      {/* Score impact visualization */}
      <div className="mt-3 pt-3 border-t">
        <div className="text-xs text-gray-600 mb-1">Score range: 300-850</div>
        <div className="relative h-4 w-full bg-gray-100 rounded-full overflow-hidden">
          {/* Current score position */}
          <div 
            className="absolute h-6 w-1 bg-blue-700 top-1/2 transform -translate-y-1/2"
            style={{ left: `${((currentScore - 300) / 550) * 100}%` }}
          />
          
          {/* Simulated score position */}
          <div 
            className={`absolute h-6 w-1 ${scoreDiff > 0 ? 'bg-green-500' : scoreDiff < 0 ? 'bg-red-500' : 'bg-gray-400'} top-1/2 transform -translate-y-1/2`}
            style={{ left: `${((simulatedScore - 300) / 550) * 100}%` }}
          />
          
          {/* Connect the two points with a line */}
          <div 
            className={`absolute h-0.5 ${scoreDiff > 0 ? 'bg-green-300' : scoreDiff < 0 ? 'bg-red-300' : 'bg-gray-300'} top-1/2 transform -translate-y-1/2`}
            style={{ 
              left: `${((Math.min(currentScore, simulatedScore) - 300) / 550) * 100}%`,
              width: `${(Math.abs(simulatedScore - currentScore) / 550) * 100}%` 
            }}
          />
          
          {/* Add colored bands */}
          <div className="absolute inset-0 flex">
            <div className="bg-red-200 h-full" style={{width: '20%'}}></div>
            <div className="bg-yellow-200 h-full" style={{width: '20%'}}></div>
            <div className="bg-teal-200 h-full" style={{width: '20%'}}></div>
            <div className="bg-green-200 h-full" style={{width: '20%'}}></div>
            <div className="bg-emerald-200 h-full" style={{width: '20%'}}></div>
            </div>
        </div>
      </div>
      
      <p className="text-xs text-gray-500 mt-2 italic">
        {feature.name} has a {scoreDiff === 0 ? 'neutral' : scoreDiff > 0 ? 'positive' : 'negative'} impact on your score when {simulatedWeight > feature.weight ? 'increased' : simulatedWeight < feature.weight ? 'decreased' : 'unchanged'}.
      </p>
    </div>
  );
};

const FeatureWeightDistribution: React.FC<FeatureWeightDistributionProps> = ({
  borrowerType,
  setBorrowerType,
  getDynamicWeights,
  isCalibrating,
  calibrationCycle,
  inputs,
  handleInputChange
}) => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  
  const weights = getDynamicWeights();
  const currentScore = calculateSampleScore(weights, inputs, borrowerType);
  
  return (
    <div className="mt-6 bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Feature Weight Analysis</h3>
        
        {isCalibrating && (
          <div className="text-xs bg-yellow-100 px-2 py-1 rounded border border-yellow-300">
            Weights being recalibrated
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Feature weight visualization */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h4 className="font-medium mb-3 text-blue-800">
            Feature Weight Distribution
          </h4>
          <div className="space-y-3">
            {weights.map((feature, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <div className="flex items-center text-sm">
                    <div 
                      className={`w-3 h-3 rounded-full mr-2 ${feature.color}`}
                    ></div>
                    <span 
                      className={`cursor-pointer ${selectedFeature === i ? 'font-bold underline' : ''}`}
                      onClick={() => setSelectedFeature(i === selectedFeature ? null : i)}
                    >
                      {feature.name}
                    </span>
                </div>
                  <div className="flex items-center">
                    {isCalibrating && (
                      <span className={`text-xs mr-1 ${
                        feature.weight > weights[i].weight ? 'text-green-500' : 
                        feature.weight < weights[i].weight ? 'text-red-500' : ''
                      }`}>
                        {feature.weight > weights[i].weight ? '▲' : 
                         feature.weight < weights[i].weight ? '▼' : ''}
                      </span>
                    )}
                    <span className="text-sm font-medium">{feature.weight}%</span>
              </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`${feature.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${feature.weight}%` }}
                  />
                </div>
              </div>
            ))}
                </div>
          
          <div className="mt-4 text-xs text-gray-500">
            <p>
              <span className="font-medium">Note:</span> Feature weights represent the relative importance 
              of each factor in the final score calculation. These weights are periodically recalibrated
              based on new data and economic conditions.
            </p>
            <p className="mt-2">
              Click on any feature to simulate how changing its weight affects the final score.
            </p>
              </div>
          
          {/* Current score indicator */}
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex justify-between items-center">
                <div>
                <h5 className="text-sm font-medium">Current Calculated Score:</h5>
                <p className="text-xs text-gray-600">Based on current weights and your inputs</p>
              </div>
              <div className="text-xl font-bold text-blue-700">{currentScore}</div>
                </div>
              </div>
        </div>
        
        {/* Weight simulation and impact */}
                <div>
          <div className="bg-gray-50 p-4 rounded-lg border h-full">
            <h4 className="font-medium mb-3 text-blue-800">
              {selectedFeature !== null
                ? `${weights[selectedFeature].name} Impact Simulation`
                : 'Weight Impact Simulation'}
            </h4>
            
            {selectedFeature !== null ? (
              <WeightSimulator 
                feature={weights[selectedFeature]} 
                index={selectedFeature}
                baseWeights={weights}
                inputs={inputs}
                borrowerType={borrowerType}
                isCalibrating={isCalibrating}
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="bg-blue-100 rounded-full p-4 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                <h5 className="font-medium mb-2">Select a Feature</h5>
                <p className="text-sm text-gray-600">
                  Click on any feature from the left panel to see how changes to its weight impact your overall credit score.
                </p>
              </div>
            )}
            
            {isCalibrating && (
              <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200 mt-4">
                <h5 className="font-medium text-sm mb-1">Model Recalibration in Progress</h5>
                <p className="text-xs text-gray-600">
                  During recalibration, feature weights are adjusted based on recent performance
                  data and changing economic conditions. This ensures the model maintains
                  high predictive accuracy.
                </p>
                <div className="mt-2 text-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span>Calibration progress:</span>
                    <span>{calibrationCycle + 1}/5</span>
                </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className="bg-yellow-500 h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${((calibrationCycle + 1) / 5) * 100}%` }}
                    />
              </div>
                </div>
              </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default FeatureWeightDistribution;