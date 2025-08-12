import React from 'react';
import BorrowerTypeSelector from './BorrowerTypeSelector';

interface ImplementationMonitoringProps {
  borrowerType: 'thick-file' | 'thin-file';
  setBorrowerType: (type: 'thick-file' | 'thin-file') => void;
  creditScore: number;
  scoreExplanation: string[];
  inputs: any;
  handleInputChange: (param: string, value: number) => void;
}

interface RiskCategory {
  category: string;
  color: string;
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
}> = ({ label, value, param, min, max, step, borrowerType, handleInputChange }) => {
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
          className="w-full h-2 rounded-lg appearance-none cursor-pointer z-10 relative opacity-70"
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

const ImplementationMonitoring: React.FC<ImplementationMonitoringProps> = ({
  borrowerType,
  setBorrowerType,
  creditScore,
  scoreExplanation,
  inputs,
  handleInputChange
}) => {
  // Helper function to get risk category
  const getRiskCategory = (score: number): RiskCategory => {
    if (score >= 750) return {category: "Excellent", color: "bg-emerald-500"};
    if (score >= 700) return {category: "Very Good", color: "bg-green-500"};
    if (score >= 650) return {category: "Good", color: "bg-teal-500"};
    if (score >= 600) return {category: "Fair", color: "bg-yellow-500"};
    return {category: "Poor", color: "bg-red-500"};
  };

  const riskInfo = getRiskCategory(creditScore);
  const currentInputs = borrowerType === 'thick-file' ? thickFileInputs : thinFileInputs;

  return (
    <div className="bg-brand-bg-card p-4 rounded-lg shadow-md border border-brand-border">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-brand-text-primary">Implementation, Monitoring & Governance</h3>
        
        {/* Component-specific borrower type selector */}
        <BorrowerTypeSelector borrowerType={borrowerType} setBorrowerType={setBorrowerType} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-green-50 p-3 rounded-md border border-green-100">
          <h4 className="font-medium mb-2 text-green-700">Implementation</h4>
          <ul className="list-disc pl-5 text-sm space-y-1 text-brand-text-secondary">
            <li>Real-time API for instant loan decisions</li>
            <li>Batch processing for portfolio reviews</li>
            <li>Standardized Kooti scorecard output (300-850)</li>
            <li>Clear reason codes for score factors</li>
          </ul>
        </div>
        <div className="bg-amber-50 p-3 rounded-md border border-amber-100">
          <h4 className="font-medium mb-2 text-amber-700">Monitoring Framework</h4>
          <ul className="list-disc pl-5 text-sm space-y-1 text-brand-text-secondary">
            <li>Daily operational checks</li>
            <li>Monthly performance reviews</li>
            <li>Quarterly deep-dive analyses</li>
            <li>Annual comprehensive evaluations</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-brand-bg-light p-3 rounded-md mb-4 border border-brand-border">
        <h4 className="font-medium mb-2 text-brand-text-primary">Governance Structure:</h4>
        <div className="flex flex-wrap gap-2">
          <div className="bg-blue-100 px-3 py-1 rounded-md text-sm text-blue-700 border border-blue-200">Model Oversight Committee</div>
          <div className="bg-green-100 px-3 py-1 rounded-md text-sm text-green-700 border border-green-200">Regular Performance Reviews</div>
          <div className="bg-purple-100 px-3 py-1 rounded-md text-sm text-purple-700 border border-purple-200">Regulatory Compliance Checks</div>
          <div className="bg-yellow-100 px-3 py-1 rounded-md text-sm text-yellow-700 border border-yellow-200">Consumer Protection Mechanisms</div>
          <div className="bg-red-100 px-3 py-1 rounded-md text-sm text-red-700 border border-red-200">Recalibration Triggers</div>
        </div>
      </div>
      
      {/* Replace Final Credit Assessment with Interactive Credit Score Simulation */}
      <div className="mt-4">
        <h4 className="font-medium mb-2 text-brand-text-primary">Interactive Credit Score Simulation</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sample data and score factors */}
          <div className="bg-brand-bg-light p-4 rounded-lg border border-brand-border">
            <h4 className="font-medium mb-3 text-brand-primary">Sample Input Data</h4>
            <p className="text-xs text-brand-text-secondary mb-4">
              Adjust the inputs below to see how they affect the credit score.
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
                />
              ))}
            </div>
          </div>
          
          {/* Score visualization */}
          <div className="flex flex-col">
            <div className="bg-brand-bg-light p-4 rounded-lg border border-brand-border mb-3">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-brand-primary">
                  Kooti {borrowerType === 'thick-file' ? 'Pro' : 'New'} Score
                </h4>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <div className={`text-5xl font-bold ${
                  creditScore >= 700 ? 'text-green-600' : 
                  creditScore >= 600 ? 'text-yellow-600' : 
                  'text-red-600'
                }`}>
                  {creditScore}
                </div>
                <div className="flex flex-col items-center">
                  <div className={`px-3 py-1 rounded-full text-white text-sm ${riskInfo.color}`}>
                    {riskInfo.category}
                  </div>
                  <div className="text-brand-text-secondary text-xs mt-1">
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
                    left: `calc(${((creditScore - 300) / 550 * 100)}% - 6px)`,
                    transition: "left 0.5s ease-in-out" 
                  }}
                />
              </div>
              
              {/* Score scale */}
              <div className="flex justify-between text-[10px] text-brand-text-secondary mt-1">
                <span>Poor (300)</span>
                <span>Fair (480)</span>
                <span>Good (640)</span>
                <span>V.Good (710)</span>
                <span>Excellent (780)</span>
              </div>
            </div>
            
            {/* Score explanation */}
            <div className="bg-brand-bg-light p-4 rounded-lg border border-brand-border flex-grow">
              <h4 className="font-medium mb-2 text-brand-primary">Key Score Factors</h4>
              <div className="space-y-1">
                {scoreExplanation.map((explanation, i) => (
                  <div key={i} className="flex items-center">
                    <div className={`${explanation.includes('+') ? 'text-green-600' : 'text-red-600'} mr-2`}>
                      {explanation.includes('+') ? '▲' : '▼'}
                    </div>
                    <span className="text-sm text-brand-text-secondary">{explanation}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional section for implementation details specific to borrower type */}
      <div className="mt-6 bg-brand-bg-light p-4 rounded-lg border border-brand-border">
        <h4 className="font-medium mb-3 text-brand-text-primary">
          {borrowerType === 'thick-file' ? 'Kooti Pro Score Implementation' : 'Kooti New Score Implementation'}
        </h4>
        
        {borrowerType === 'thick-file' ? (
          <div className="space-y-3">
            <div className="bg-brand-bg-card p-3 rounded border border-brand-border">
              <h5 className="text-sm font-medium text-brand-primary mb-1">API Integration</h5>
              <p className="text-xs text-brand-text-secondary">
                Standardized RESTful API with authentication for real-time credit score queries by financial institutions.
              </p>
            </div>
            
            <div className="bg-brand-bg-card p-3 rounded border border-brand-border">
              <h5 className="text-sm font-medium text-brand-primary mb-1">Performance Metrics</h5>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-50 p-2 rounded">
                  <span className="font-medium">Gini Coefficient:</span> 0.72-0.78
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <span className="font-medium">KS Statistic:</span> 45-55
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <span className="font-medium">AUC-ROC:</span> 0.85-0.90
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <span className="font-medium">PSI Threshold:</span> &lt; 0.25
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="bg-brand-bg-card p-3 rounded border border-brand-border">
              <h5 className="text-sm font-medium text-brand-secondary mb-1">Alternative Data Updates</h5>
              <p className="text-xs text-brand-text-secondary">
                More frequent data refreshes (weekly vs. monthly) to capture rapidly changing alternative data signals.
              </p>
            </div>
            
            <div className="bg-brand-bg-card p-3 rounded border border-brand-border">
              <h5 className="text-sm font-medium text-brand-secondary mb-1">Performance Metrics</h5>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-50 p-2 rounded">
                  <span className="font-medium">Gini Coefficient:</span> 0.65-0.72
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <span className="font-medium">KS Statistic:</span> 40-48
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <span className="font-medium">AUC-ROC:</span> 0.80-0.85
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <span className="font-medium">PSI Threshold:</span> &lt; 0.30
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImplementationMonitoring; 