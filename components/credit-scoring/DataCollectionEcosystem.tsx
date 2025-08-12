import React from 'react';
import BorrowerTypeSelector from './BorrowerTypeSelector';

interface DataCollectionEcosystemProps {
  borrowerType: 'thick-file' | 'thin-file';
  setBorrowerType: (type: 'thick-file' | 'thin-file') => void;
}

const DataCollectionEcosystem: React.FC<DataCollectionEcosystemProps> = ({ 
  borrowerType, 
  setBorrowerType
}) => {
  return (
    <div className="mb-6 border border-brand-border rounded-lg p-4 bg-brand-bg-light text-brand-text-primary">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-medium text-brand-text-primary">Data Collection Ecosystem</h4>
        
        {/* Component-specific borrower type selector */}
        <BorrowerTypeSelector borrowerType={borrowerType} setBorrowerType={setBorrowerType} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Traditional Data Sources - Left column */}
        <div className="flex flex-col space-y-3">
          <div className="text-center mb-2">
            <div className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium inline-block">
              Traditional Data
            </div>
          </div>
          
          <div className="bg-blue-50 p-2 rounded-lg border border-blue-200 text-sm">
            <div className="font-medium text-blue-800">Banks & FIs</div>
            <div className="text-xs mt-1 text-brand-text-secondary">
              Loan histories, repayment records
            </div>
          </div>
          
          <div className="bg-blue-50 p-2 rounded-lg border border-blue-200 text-sm">
            <div className="font-medium text-blue-800">Bangladesh Bank CIB</div>
            <div className="text-xs mt-1 text-brand-text-secondary">
              Credit registry, defaults
            </div>
          </div>
          
          <div className="bg-blue-50 p-2 rounded-lg border border-blue-200 text-sm">
            <div className="font-medium text-blue-800">MFIs</div>
            <div className="text-xs mt-1 text-brand-text-secondary">
              Small loans, group lending
            </div>
          </div>
          
          <div className="text-center mt-2 mb-2">
            <div className="bg-teal-100 text-teal-800 rounded-full px-3 py-1 text-sm font-medium inline-block">
              Alternative Data
            </div>
          </div>
          
          <div className="bg-teal-50 p-2 rounded-lg border border-teal-200 text-sm">
            <div className="font-medium text-teal-800">Utilities</div>
            <div className="text-xs mt-1 text-brand-text-secondary">
              Bill payment histories
            </div>
          </div>
          
          <div className="bg-teal-50 p-2 rounded-lg border border-teal-200 text-sm">
            <div className="font-medium text-teal-800">Telecom</div>
            <div className="text-xs mt-1 text-brand-text-secondary">
              Mobile payments, recharge patterns
            </div>
          </div>
          
          <div className="bg-teal-50 p-2 rounded-lg border border-teal-200 text-sm">
            <div className="font-medium text-teal-800">MFS Providers</div>
            <div className="text-xs mt-1 text-brand-text-secondary">
              Transaction patterns, wallet usage
            </div>
          </div>
        </div>
        
        {/* Data Processing Pipeline - Middle column */}
        <div>
          <div className="bg-white p-3 rounded-lg border-2 border-indigo-300 shadow-md h-full">
            <h5 className="text-center font-medium text-indigo-800 mb-3">Data Processing Pipeline</h5>
            <div className="space-y-3">
              <div className="bg-indigo-50 p-2 rounded flex items-center">
                <div className="bg-indigo-200 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-indigo-800 font-medium">1</div>
                <div className="text-xs">
                  <div className="font-medium">Data Quality Management</div>
                  <div className="text-indigo-700">Missing data, outlier detection</div>
                </div>
              </div>
              
              <div className="bg-indigo-50 p-2 rounded flex items-center">
                <div className="bg-indigo-200 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-indigo-800 font-medium">2</div>
                <div className="text-xs">
                  <div className="font-medium">Feature Engineering</div>
                  <div className="text-indigo-700">Binning, WoE transformation</div>
                </div>
              </div>
              
              <div className="bg-indigo-50 p-2 rounded flex items-center">
                <div className="bg-indigo-200 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-indigo-800 font-medium">3</div>
                <div className="text-xs">
                  <div className="font-medium">Feature Selection</div>
                  <div className="text-indigo-700">IV analysis, multicollinearity check</div>
                </div>
              </div>
            </div>
            
            <div className="mt-3 text-xs text-center text-brand-text-secondary border-t border-gray-200 pt-2">
              <div>Statistical methods:</div>
              <div className="font-mono bg-gray-100 p-1 rounded mt-1 text-[10px]">
                WoE = ln(% good / % bad)<br />
                IV = Σ((% good - % bad) × WoE)
              </div>
            </div>
          </div>
        </div>
        
        {/* Kooti Scoring Models - Right column */}
        <div>
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-3 rounded-lg border-2 border-blue-300 shadow-md h-full">
            <h5 className="text-center font-medium text-blue-800 mb-3">Kooti Scoring Models</h5>
            
            <div className="space-y-3">
              <div className="bg-blue-600 p-2 rounded-lg text-white shadow-sm">
                <div className="font-bold text-center text-sm">Kooti Pro Score</div>
                <div className="text-xs mt-1 opacity-90">
                  For thick-file borrowers with traditional credit data
                </div>
              </div>
              
              <div className="bg-teal-600 p-2 rounded-lg text-white shadow-sm">
                <div className="font-bold text-center text-sm">Kooti New Score</div>
                <div className="text-xs mt-1 opacity-90">
                  For thin-file borrowers with alternative data
                </div>
              </div>
            </div>
            
            <div className="text-xs text-center text-brand-text-secondary mt-3 pt-2 border-t border-gray-200">
              Model-ready data is segmented based on borrower file thickness, with different feature sets for each model type
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-xs text-brand-text-secondary italic mt-4 text-center">
        Note: Actual data source integration will vary based on provider readiness and regulatory approval.
      </div>

      {/* Data Processing and Collection explanation */}
      <div className="mt-6 border-t border-brand-border pt-4">
        <h4 className="font-medium text-brand-text-primary mb-3">Data Collection Process</h4>
        <div className="bg-brand-bg-card p-3 rounded-lg border border-brand-border">
          <div className="flex flex-wrap gap-2 justify-center">
            <div className="bg-blue-100 rounded p-2 min-w-[140px] text-center">
              <div className="text-xs font-medium text-blue-800">Data Source Integration</div>
              <div className="text-[10px] text-blue-600 mt-1">API & Batch Feeds</div>
            </div>
            <div className="text-gray-400 flex items-center">→</div>
            <div className="bg-green-100 rounded p-2 min-w-[140px] text-center">
              <div className="text-xs font-medium text-green-800">Data Cleaning</div>
              <div className="text-[10px] text-green-600 mt-1">Validation & Formatting</div>
            </div>
            <div className="text-gray-400 flex items-center">→</div>
            <div className="bg-purple-100 rounded p-2 min-w-[140px] text-center">
              <div className="text-xs font-medium text-purple-800">Feature Creation</div>
              <div className="text-[10px] text-purple-600 mt-1">300+ Features Generated</div>
            </div>
            <div className="text-gray-400 flex items-center">→</div>
            <div className="bg-yellow-100 rounded p-2 min-w-[140px] text-center">
              <div className="text-xs font-medium text-yellow-800">Feature Selection</div>
              <div className="text-[10px] text-yellow-600 mt-1">IV Analysis & Stability</div>
            </div>
            <div className="text-gray-400 flex items-center">→</div>
            <div className="bg-red-100 rounded p-2 min-w-[140px] text-center">
              <div className="text-xs font-medium text-red-800">Model Input</div>
              <div className="text-[10px] text-red-600 mt-1">Final Feature Set</div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Refresh Frequency */}
      <div className="mt-4 bg-brand-bg-card p-3 rounded-lg border border-brand-border">
        <h5 className="text-sm font-medium text-brand-text-primary mb-2">Data Refresh Frequency</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
          <div className="flex justify-between items-center border-b border-brand-border pb-1">
            <span>Credit Bureau Data:</span>
            <span className="font-medium">{borrowerType === 'thick-file' ? 'Monthly' : 'Quarterly'}</span>
          </div>
          <div className="flex justify-between items-center border-b border-brand-border pb-1">
            <span>Bank Transactions:</span>
            <span className="font-medium">{borrowerType === 'thick-file' ? 'Daily' : 'Weekly'}</span>
          </div>
          <div className="flex justify-between items-center border-b border-brand-border pb-1">
            <span>Telecom Data:</span>
            <span className="font-medium">{borrowerType === 'thick-file' ? 'Monthly' : 'Weekly'}</span>
          </div>
          <div className="flex justify-between items-center border-b border-brand-border pb-1">
            <span>Utility Payments:</span>
            <span className="font-medium">Monthly</span>
          </div>
          <div className="flex justify-between items-center border-b border-brand-border pb-1">
            <span>MFS Transactions:</span>
            <span className="font-medium">{borrowerType === 'thick-file' ? 'Weekly' : 'Daily'}</span>
          </div>
          <div className="flex justify-between items-center border-b border-brand-border pb-1">
            <span>Psychometric Data:</span>
            <span className="font-medium">One-time + Updates</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCollectionEcosystem;