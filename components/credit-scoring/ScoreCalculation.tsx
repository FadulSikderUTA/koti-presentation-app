import React from 'react';

interface ScoreCalculationProps {
  borrowerType: 'thick-file' | 'thin-file';
  setBorrowerType: (type: 'thick-file' | 'thin-file') => void;
  creditScore: number;
  calibratedScore: number;
  isCalibrating: boolean;
  scoreExplanation: string[];
  getDynamicWeights: () => any[];
  featureWeights: Record<'thick-file' | 'thin-file', any[]>;
  inputs: any;
  handleInputChange: (param: string, value: number) => void;
}

// Helper configurations for the UI
const thickFileInputs = [
  { label: "Number of Loan/Credit Accounts", min: 0, max: 10, step: 1, param: "loanHistory" },
  { label: "Credit History Age (months)", min: 0, max: 60, step: 1, param: "creditAge" },
  { label: "Payment History (% on-time)", min: 0, max: 100, step: 1, param: "paymentHistory" },
  { label: "Credit Utilization (%)", min: 0, max: 100, step: 1, param: "creditUtilization" },
  { label: "Recent Credit Inquiries", min: 0, max: 10, step: 1, param: "inquiries" }
];

const thinFileInputs = [
  { label: "Telecom Payment History (% on-time)", min: 0, max: 100, step: 1, param: "telecomPayments" },
  { label: "Mobile Financial Services Usage Score", min: 0, max: 100, step: 1, param: "mobileFinancial" },
  { label: "Utility Bill Payment History (% on-time)", min: 0, max: 100, step: 1, param: "utilityBills" },
  { label: "Number of Formal Loans (if any)", min: 0, max: 3, step: 1, param: "loanHistory" }
];

// Get ratings based on input values
const getRating = (param: string, value: number, borrowerType: 'thick-file' | 'thin-file') => {
  if (borrowerType === 'thick-file') {
    switch (param) {
      case 'loanHistory':
        return value >= 8 ? 'Excellent' : value >= 6 ? 'Very Good' : value >= 4 ? 'Good' : value >= 2 ? 'Fair' : 'Poor';
      case 'creditAge':
        return value >= 48 ? 'Excellent' : value >= 36 ? 'Very Good' : value >= 24 ? 'Good' : value >= 12 ? 'Fair' : 'Poor';
      case 'paymentHistory':
        return value >= 95 ? 'Excellent' : value >= 90 ? 'Very Good' : value >= 85 ? 'Good' : value >= 75 ? 'Fair' : 'Poor';
      case 'creditUtilization':
        return value < 10 ? 'Excellent' : value < 30 ? 'Very Good' : value < 50 ? 'Good' : value < 70 ? 'Fair' : 'Poor';
      case 'inquiries':
        return value === 0 ? 'Excellent' : value <= 1 ? 'Very Good' : value <= 2 ? 'Good' : value <= 3 ? 'Fair' : 'Poor';
      default:
        return 'N/A';
    }
  } else {
    switch (param) {
      case 'telecomPayments':
        return value >= 95 ? 'Excellent' : value >= 90 ? 'Very Good' : value >= 85 ? 'Good' : value >= 75 ? 'Fair' : 'Poor';
      case 'mobileFinancial':
        return value >= 90 ? 'Excellent' : value >= 85 ? 'Very Good' : value >= 80 ? 'Good' : value >= 70 ? 'Fair' : 'Poor';
      case 'utilityBills':
        return value >= 95 ? 'Excellent' : value >= 90 ? 'Very Good' : value >= 85 ? 'Good' : value >= 75 ? 'Fair' : 'Poor';
      case 'loanHistory':
        return value >= 3 ? 'Excellent' : value >= 2 ? 'Very Good' : value >= 1 ? 'Good' : 'Poor';
      default:
        return 'N/A';
    }
  }
};

// Get color for the rating
const getRatingColor = (rating: string) => {
  switch (rating) {
    case 'Excellent': return 'bg-emerald-500';
    case 'Very Good': return 'bg-green-500';
    case 'Good': return 'bg-teal-500';
    case 'Fair': return 'bg-yellow-500';
    default: return 'bg-red-500';
  }
};

// Get position for the marker based on input value
const getMarkerPosition = (param: string, value: number, borrowerType: 'thick-file' | 'thin-file') => {
  if (borrowerType === 'thick-file') {
    switch (param) {
      case 'loanHistory': return `${(value / 10) * 100}%`;
      case 'creditAge': return `${(value / 60) * 100}%`;
      case 'paymentHistory': return `${value}%`;
      case 'creditUtilization': return `${value}%`;
      case 'inquiries': return `${(value / 10) * 100}%`;
      default: return '0%';
    }
  } else {
    switch (param) {
      case 'telecomPayments': return `${value}%`;
      case 'mobileFinancial': return `${value}%`;
      case 'utilityBills': return `${value}%`;
      case 'loanHistory': return `${(value / 3) * 100}%`;
      default: return '0%';
    }
  }
};

// Component to show a factor row with rating and visualization
const ScoreFactor: React.FC<{
  label: string;
  value: number;
  param: string;
  min: number;
  max: number;
  step: number;
  borrowerType: 'thick-file' | 'thin-file';
  handleInputChange: (param: string, value: number) => void;
  isCalibrating: boolean;
}> = ({ label, value, param, min, max, step, borrowerType, handleInputChange, isCalibrating }) => {
  const rating = getRating(param, value, borrowerType);
  const ratingColor = getRatingColor(rating);
  const markerPosition = getMarkerPosition(param, value, borrowerType);
  const isUtilization = param === 'creditUtilization'; // Reverse the colored bands for utilization

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{label}</span>
        <div className="flex items-center">
          <span className="text-sm font-medium mr-2">{value}</span>
          <span className={`px-1.5 py-0.5 rounded text-white text-xs ${ratingColor}`}>
            {rating}
          </span>
        </div>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => handleInputChange(param, Number(e.target.value))}
          className={`w-full h-2 rounded-lg appearance-none cursor-pointer z-10 relative ${isCalibrating ? 'opacity-50' : 'opacity-70'}`}
          disabled={isCalibrating}
        />
        {/* Bands for the input range */}
        <div className="absolute top-0 w-full h-2 flex rounded-lg overflow-hidden">
          {isUtilization ? (
            <>
              <div className="bg-emerald-400 h-full" style={{width: '20%'}}></div>
              <div className="bg-green-400 h-full" style={{width: '20%'}}></div>
              <div className="bg-teal-400 h-full" style={{width: '20%'}}></div>
              <div className="bg-yellow-400 h-full" style={{width: '20%'}}></div>
              <div className="bg-red-400 h-full" style={{width: '20%'}}></div>
            </>
          ) : (
            <>
              <div className="bg-red-400 h-full" style={{width: '20%'}}></div>
              <div className="bg-yellow-400 h-full" style={{width: '20%'}}></div>
              <div className="bg-teal-400 h-full" style={{width: '20%'}}></div>
              <div className="bg-green-400 h-full" style={{width: '20%'}}></div>
              <div className="bg-emerald-400 h-full" style={{width: '20%'}}></div>
            </>
          )}
        </div>
        <div 
          className="absolute top-0 w-1.5 h-3 bg-blue-700 rounded-full"
          style={{ 
            left: `calc(${markerPosition} - 2px)`,
            transition: "left 0.5s ease-in-out" 
          }}
        />
      </div>
      {/* Band category indicator */}
      <div className="flex justify-between text-[10px] text-gray-500 mt-1">
        {isUtilization ? (
          <>
            <span>Excellent</span>
            <span>V.Good</span>
            <span>Good</span>
            <span>Fair</span>
            <span>Poor</span>
          </>
        ) : (
          <>
            <span>Poor</span>
            <span>Fair</span>
            <span>Good</span>
            <span>V.Good</span>
            <span>Excellent</span>
          </>
        )}
      </div>
    </div>
  );
};

const ScoreCalculation: React.FC<ScoreCalculationProps> = ({
  borrowerType,
  setBorrowerType,
  creditScore,
  calibratedScore,
  isCalibrating,
  scoreExplanation,
  getDynamicWeights,
  featureWeights,
  inputs,
  handleInputChange
}) => {
  // Helper function to get risk category
  const getRiskCategory = (score: number) => {
    if (score >= 750) return {category: "Excellent", color: "bg-emerald-500"};
    if (score >= 700) return {category: "Very Good", color: "bg-green-500"};
    if (score >= 650) return {category: "Good", color: "bg-teal-500"};
    if (score >= 600) return {category: "Fair", color: "bg-yellow-500"};
    return {category: "Poor", color: "bg-red-500"};
  };

  const riskInfo = getRiskCategory(isCalibrating ? calibratedScore : creditScore);
  const currentInputs = borrowerType === 'thick-file' ? thickFileInputs : thinFileInputs;
  
  return (
    <div className="mt-6 bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold mb-4">Credit Score Simulation</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sample data and score factors */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h4 className="font-medium mb-3 text-blue-800">Sample Input Data</h4>
          <p className="text-xs text-gray-600 mb-4">
            {isCalibrating 
              ? "Score recalibration in progress. Inputs frozen during calibration."
              : "Adjust the inputs below to see how they affect your credit score."}
          </p>
          
          <div className="space-y-2">
            {currentInputs.map((input, i) => (
              <ScoreFactor
                key={i}
                label={input.label}
                value={inputs[input.param]}
                param={input.param}
                min={input.min}
                max={input.max}
                step={input.step}
                borrowerType={borrowerType}
                handleInputChange={handleInputChange}
                isCalibrating={isCalibrating}
              />
            ))}
          </div>
        </div>

        {/* Score visualization */}
        <div className="flex flex-col">
          <div className="bg-gray-50 p-4 rounded-lg border mb-3">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-blue-800">
                Koti {borrowerType === 'thick-file' ? 'Pro' : 'New'} Score
              </h4>
              {isCalibrating && (
                <div className="text-xs bg-yellow-100 px-2 py-1 rounded border border-yellow-300">
                  Model recalibrating...
        </div>
              )}
      </div>

            <div className="flex items-center justify-center gap-4">
              <div className={`text-5xl font-bold ${
                (isCalibrating ? calibratedScore : creditScore) >= 700 ? 'text-green-600' : 
                (isCalibrating ? calibratedScore : creditScore) >= 600 ? 'text-yellow-600' : 
                'text-red-600'
              }`}>
                {isCalibrating ? calibratedScore : creditScore}
              </div>
              <div className="flex flex-col items-center">
                <div className={`px-3 py-1 rounded-full text-white text-sm ${riskInfo.color}`}>
                  {riskInfo.category}
                </div>
                <div className="text-gray-500 text-xs mt-1">
                  Range: 300-850
                </div>
              </div>
            </div>
            
            {/* Score visualization bar */}
            <div className="mt-4 relative h-6">
              <div className="flex w-full h-full rounded-lg overflow-hidden">
            <div className="bg-red-500 h-full" style={{width: '20%'}}></div> 
            <div className="bg-yellow-500 h-full" style={{width: '20%'}}></div>
            <div className="bg-teal-500 h-full" style={{width: '20%'}}></div>
            <div className="bg-green-500 h-full" style={{width: '20%'}}></div>
            <div className="bg-emerald-500 h-full" style={{width: '20%'}}></div>
          </div>

              {/* Score marker */}
              <div 
                className="absolute top-0 w-4 h-8 bg-blue-700 border-2 border-white rounded"
                style={{ 
                  left: `calc(${((isCalibrating ? calibratedScore : creditScore) - 300) / 550 * 100}% - 6px)`,
                  transition: "left 0.5s ease-in-out" 
                }}
              />
              
              {/* Previous score marker (when calibrating) */}
              {isCalibrating && (
                <div 
                  className="absolute top-0 w-3 h-6 border-2 border-gray-300 bg-white rounded opacity-60"
                  style={{ 
                    left: `calc(${((creditScore) - 300) / 550 * 100}% - 4px)`
                  }}
                />
              )}
          </div>

            {/* Score scale */}
            <div className="flex justify-between text-[10px] text-gray-500 mt-1">
              <span>Poor (300)</span>
              <span>Fair (480)</span>
              <span>Good (640)</span>
              <span>V.Good (710)</span>
              <span>Excellent (780)</span>
            </div>
          </div>

          {/* Score explanation */}
          <div className="bg-gray-50 p-4 rounded-lg border flex-grow">
            <h4 className="font-medium mb-2 text-blue-800">Key Score Factors</h4>
            <div className="space-y-1">
              {scoreExplanation.map((explanation, i) => (
                <div key={i} className="flex items-center">
                  <div className={`${explanation.includes('+') ? 'text-green-600' : 'text-red-600'} mr-2`}>
                    {explanation.includes('+') ? '▲' : '▼'}
                  </div>
                  <span className="text-sm">{explanation}</span>
                </div>
              ))}
            </div>
            
            {isCalibrating && (
              <div className="mt-4 text-xs text-gray-500 p-2 bg-yellow-50 rounded border border-yellow-200">
                <p className="font-medium">During recalibration:</p>
                <ul className="list-disc pl-4 mt-1 space-y-1">
                  <li>Feature weights are being adjusted</li>
                  <li>New data patterns are being incorporated</li>
                  <li>Scoring model parameters are being optimized</li>
                </ul>
              </div>
            )}
            </div>
          </div>
        </div>

      <div className="mt-4 text-xs text-gray-500 bg-blue-50 p-2 rounded border border-blue-100">
        <p>
          <span className="font-medium">Note:</span> The score model calculates a probability of default (PD) which is then
          transformed to a 300-850 score range. Thick-file scores focus on traditional credit data, 
          while thin-file scores leverage alternative data sources.
        </p>
      </div>
    </div>
  );
};

export default ScoreCalculation;