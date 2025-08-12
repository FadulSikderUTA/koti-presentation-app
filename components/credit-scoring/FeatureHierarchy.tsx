import React from 'react';
import BorrowerTypeSelector from './BorrowerTypeSelector';

interface FeatureHierarchyProps {
  borrowerType: 'thick-file' | 'thin-file';
  setBorrowerType: (type: 'thick-file' | 'thin-file') => void;
}

const FeatureHierarchy: React.FC<FeatureHierarchyProps> = ({ borrowerType, setBorrowerType }) => {
  return (
    <div className="mb-6 space-y-6">
      {/* Credit-Relevant Feature Hierarchy */}
      <div className="border border-brand-border rounded-lg p-4 bg-brand-bg-light text-brand-text-primary">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-medium text-brand-text-primary">Credit-Relevant Feature Hierarchy</h4>
        
        {/* Component-specific borrower type selector */}
        <BorrowerTypeSelector borrowerType={borrowerType} setBorrowerType={setBorrowerType} />
      </div>
      
      {borrowerType === 'thick-file' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Payment History Features */}
          <div className="bg-brand-bg-card rounded-lg border border-brand-border p-3">
            <div className="flex items-center mb-2">
              <div className="bg-brand-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">1</div>
              <h5 className="font-medium text-brand-primary">Payment History</h5>
            </div>
            <ul className="text-xs space-y-1 text-brand-text-secondary pl-2">
              <li>• Days past due (30/60/90+ days)</li>
              <li>• Number of delinquencies</li>
              <li>• Recency of last late payment</li>
              <li>• Bankruptcy records</li>
              <li>• On-time payment percentage</li>
              <li>• Default history</li>
              <li>• Settlement events</li>
              <li>• Months since last delinquency</li>
            </ul>
          </div>
          
          {/* Credit Utilization Features */}
          <div className="bg-brand-bg-card rounded-lg border border-brand-border p-3">
            <div className="flex items-center mb-2">
              <div className="bg-status-excellent text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">2</div>
              <h5 className="font-medium text-status-excellent">Credit Utilization</h5>
            </div>
            <ul className="text-xs space-y-1 text-brand-text-secondary pl-2">
              <li>• Overall utilization ratio</li>
              <li>• Revolving account balance</li>
              <li>• Highest utilization on single account</li>
              <li>• Balance-to-limit ratio</li>
              <li>• Utilization trend (increasing/decreasing)</li>
              <li>• Over-limit instances</li>
              <li>• Maxed-out accounts</li>
              <li>• Recent balance changes</li>
            </ul>
          </div>
          
          {/* Credit History Length */}
          <div className="bg-brand-bg-card rounded-lg border border-brand-border p-3">
            <div className="flex items-center mb-2">
              <div className="bg-purple-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">3</div>
              <h5 className="font-medium text-purple-700">Credit History Length</h5>
            </div>
            <ul className="text-xs space-y-1 text-brand-text-secondary pl-2">
              <li>• Age of oldest account (months)</li>
              <li>• Average age of all accounts</li>
              <li>• Recently opened account ages</li>
              <li>• Time since most recent account</li>
              <li>• Account closure patterns</li>
              <li>• Duration of banking relationships</li>
            </ul>
          </div>
          
          {/* Credit Mix */}
          <div className="bg-brand-bg-card rounded-lg border border-brand-border p-3">
            <div className="flex items-center mb-2">
              <div className="bg-status-fair text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">4</div>
              <h5 className="font-medium text-yellow-700">Credit Mix</h5>
            </div>
            <ul className="text-xs space-y-1 text-brand-text-secondary pl-2">
              <li>• Number of different account types</li>
              <li>• Secured vs. unsecured loan ratio</li>
              <li>• Installment vs. revolving credits</li>
              <li>• Retail vs. bank financing</li>
              <li>• MFI vs. traditional bank accounts</li>
              <li>• Credit card vs. personal loan mix</li>
            </ul>
          </div>
          
          {/* New Credit */}
          <div className="bg-brand-bg-card rounded-lg border border-brand-border p-3">
            <div className="flex items-center mb-2">
              <div className="bg-status-poor text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">5</div>
              <h5 className="font-medium text-red-700">New Credit</h5>
            </div>
            <ul className="text-xs space-y-1 text-brand-text-secondary pl-2">
              <li>• Recent inquiries (last 6 months)</li>
              <li>• Number of newly opened accounts</li>
              <li>• Time since most recent inquiry</li>
              <li>• Inquiry intensity (many in short time)</li>
              <li>• New account types</li>
              <li>• Credit shopping patterns</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Telecom Payments - Enhanced with more specific metrics */}
          <div className="bg-brand-bg-card rounded-lg border border-brand-border p-3">
            <div className="flex items-center mb-2">
              <div className="bg-brand-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">1</div>
              <h5 className="font-medium text-brand-primary">Telecom Payments</h5>
            </div>
            <ul className="text-xs space-y-1 text-brand-text-secondary pl-2">
              <li>• Bill payment consistency (% on-time)</li>
              <li>• Average days late on bill payments</li>
              <li>• Payment method consistency</li>
              <li>• Recharge frequency (prepaid)</li>
              <li>• Average recharge amount</li>
              <li>• Recharge pattern volatility</li>
              <li>• Service suspension events</li>
              <li>• Days between recharges consistency</li>
              <li>• Duration of telecom relationship</li>
              <li>• Upgrade/downgrade behavior</li>
              <li>• Usage-to-payment ratio</li>
              <li>• Auto-pay enrollment status</li>
            </ul>
          </div>
          
          {/* Utility Payments - Enhanced with more specific metrics */}
          <div className="bg-brand-bg-card rounded-lg border border-brand-border p-3">
            <div className="flex items-center mb-2">
              <div className="bg-status-excellent text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">2</div>
              <h5 className="font-medium text-status-excellent">Utility Payments</h5>
            </div>
            <ul className="text-xs space-y-1 text-brand-text-secondary pl-2">
              <li>• Electricity bill payment consistency</li>
              <li>• Water bill payment consistency</li>
              <li>• Gas bill payment consistency</li>
              <li>• Average days past due for utilities</li>
              <li>• Partial payment frequency</li>
              <li>• Payment method consistency</li>
              <li>• Service disconnection events</li>
              <li>• Reconnection fees incurred</li>
              <li>• Bill-to-income ratio stability</li>
              <li>• Seasonal payment variability</li>
              <li>• Payment timing pattern</li>
              <li>• Late payment fee history</li>
              <li>• Duration of utility relationships</li>
            </ul>
          </div>
            
            {/* Mobile Financial Services */}
            <div className="bg-brand-bg-card rounded-lg border border-brand-border p-3">
              <div className="flex items-center mb-2">
                <div className="bg-purple-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">3</div>
                <h5 className="font-medium text-purple-700">Mobile Financial Services</h5>
              </div>
              <ul className="text-xs space-y-1 text-brand-text-secondary pl-2">
                <li>• Transaction frequency & consistency</li>
                <li>• Average transaction amount</li>
                <li>• Balance turnover rate</li>
                <li>• Account usage diversity</li>
                <li>• Merchant payment reliability</li>
                <li>• P2P transfer patterns</li>
                <li>• Savings vs. spending ratio</li>
                <li>• Bill payment via MFS consistency</li>
                <li>• Micro-loan repayment behavior</li>
                <li>• Cash-in/cash-out patterns</li>
                <li>• Account dormancy periods</li>
              </ul>
            </div>
            
            {/* Psychometric - Enhanced with more specific metrics */}
            <div className="bg-brand-bg-card rounded-lg border border-brand-border p-3">
              <div className="flex items-center mb-2">
                <div className="bg-status-fair text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">4</div>
                <h5 className="font-medium text-yellow-700">Psychometric</h5>
              </div>
              <ul className="text-xs space-y-1 text-brand-text-secondary pl-2">
                <li>• Conscientiousness score (1-100)</li>
                <li>• Risk tolerance assessment (1-100)</li>
                <li>• Financial planning orientation</li>
                <li>• Delayed gratification metrics</li>
                <li>• Financial stress management</li>
                <li>• Financial decision-making style</li>
                <li>• Financial self-efficacy score</li>
                <li>• Financial literacy assessment</li>
                <li>• Problem-solving approach</li>
                <li>• Consistency in responses</li>
                <li>• Social responsibility indicators</li>
                <li>• Situational judgment test scores</li>
                <li>• Emotional stability metrics</li>
              </ul>
            </div>
          </div>
        )}
      </div>
      
      {/* Feature Selection Process - Now responds to borrower type selection */}
      <div className="border border-brand-border rounded-lg p-4 bg-brand-bg-light text-brand-text-primary">
        <h4 className="font-medium text-brand-text-primary mb-3 text-center">Feature Selection Process</h4>
        
        {/* Top row - First three steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          {/* Step 1: Raw Data */}
          <div className="bg-brand-bg-card p-3 rounded-lg border border-brand-border">
            <div className="text-center font-medium text-brand-text-primary mb-2">Raw Data Variables</div>
            <div className="space-y-1 text-brand-text-secondary">
              {borrowerType === 'thick-file' ? (
                <>
                  <div className="bg-gray-50 p-1.5 rounded border border-gray-200 text-xs">loan_amount</div>
                  <div className="bg-gray-50 p-1.5 rounded border border-gray-200 text-xs">days_past_due</div>
                  <div className="bg-gray-50 p-1.5 rounded border border-gray-200 text-xs">credit_limit</div>
                  <div className="bg-gray-50 p-1.5 rounded border border-gray-200 text-xs">outstanding_balance</div>
                  <div className="bg-gray-50 p-1.5 rounded border border-gray-200 text-xs">account_open_date</div>
                  <div className="text-center text-xs text-brand-text-secondary mt-1">+ many more credit fields</div>
                </>
              ) : (
                <>
                  <div className="bg-gray-50 p-1.5 rounded border border-gray-200 text-xs">telecom_bill_amount</div>
                  <div className="bg-gray-50 p-1.5 rounded border border-gray-200 text-xs">recharge_dates</div>
                  <div className="bg-gray-50 p-1.5 rounded border border-gray-200 text-xs">utility_payment_dates</div>
                  <div className="bg-gray-50 p-1.5 rounded border border-gray-200 text-xs">mfs_transaction_amounts</div>
                  <div className="bg-gray-50 p-1.5 rounded border border-gray-200 text-xs">psych_test_responses</div>
                  <div className="text-center text-xs text-brand-text-secondary mt-1">+ many more alternative data fields</div>
                </>
              )}
            </div>
          </div>
          
          {/* Step 2: Feature Transformation */}
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <div className="text-center font-medium text-blue-800 mb-2">Feature Transformation</div>
            <div className="space-y-1">
              {borrowerType === 'thick-file' ? (
                <>
                  <div className="bg-white p-1.5 rounded border border-blue-100 text-xs text-blue-900">
                    <div>days_past_due_bins</div>
                    <div className="text-[10px] text-blue-700">Binned: 0, 1-30, 31-60, 61+</div>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-blue-100 text-xs text-blue-900">
                    <div>utilization_ratio</div>
                    <div className="text-[10px] text-blue-700">outstanding_balance/credit_limit</div>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-blue-100 text-xs text-blue-900">
                    <div>account_age_months</div>
                    <div className="text-[10px] text-blue-700">Derived from open_date</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-white p-1.5 rounded border border-blue-100 text-xs text-blue-900">
                    <div>telecom_payment_consistency</div>
                    <div className="text-[10px] text-blue-700">% of on-time payments</div>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-blue-100 text-xs text-blue-900">
                    <div>utility_payment_delay</div>
                    <div className="text-[10px] text-blue-700">Avg days late per bill</div>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-blue-100 text-xs text-blue-900">
                    <div>mfs_transaction_regularity</div>
                    <div className="text-[10px] text-blue-700">Variance in transaction timing</div>
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Step 3: WoE & IV Analysis */}
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <div className="text-center font-medium text-purple-800 mb-2">WoE & IV Analysis</div>
            <div className="space-y-1">
              {borrowerType === 'thick-file' ? (
                <>
                  <div className="bg-white p-1.5 rounded border border-purple-100 text-xs text-purple-900">
                    <div>days_past_due_bins</div>
                    <div className="text-[10px] text-purple-700">IV: 0.82 (Strong)</div>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-purple-100 text-xs text-purple-900">
                    <div>utilization_ratio</div>
                    <div className="text-[10px] text-purple-700">IV: 0.57 (Medium)</div>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-purple-100 text-xs text-purple-900">
                    <div>account_age_months</div>
                    <div className="text-[10px] text-purple-700">IV: 0.35 (Medium)</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-white p-1.5 rounded border border-purple-100 text-xs text-purple-900">
                    <div>telecom_payment_consistency</div>
                    <div className="text-[10px] text-purple-700">IV: 0.63 (Strong)</div>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-purple-100 text-xs text-purple-900">
                    <div>utility_payment_delay</div>
                    <div className="text-[10px] text-purple-700">IV: 0.48 (Medium)</div>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-purple-100 text-xs text-purple-900">
                    <div>mfs_transaction_regularity</div>
                    <div className="text-[10px] text-purple-700">IV: 0.41 (Medium)</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Arrow down */}
        <div className="flex justify-center my-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
        
        {/* Bottom row - Last two steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Step 4: Statistical Checks */}
          <div className="bg-red-50 p-3 rounded-lg border border-red-200">
            <div className="text-center font-medium text-red-800 mb-2">Statistical Checks</div>
            <div className="space-y-1">
              {borrowerType === 'thick-file' ? (
                <>
                  <div className="bg-white p-1.5 rounded border border-red-100 text-xs text-red-900">
                    <div>Correlation Analysis</div>
                    <div className="text-[10px] text-red-700">High corr: utilization_ratio & balance_to_income</div>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-red-100 text-xs text-red-900">
                    <div>VIF Check</div>
                    <div className="text-[10px] text-red-700">VIF &lt; 10 requirement</div>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-red-100 text-xs text-red-900">
                    <div>Stepwise Selection</div>
                    <div className="text-[10px] text-red-700">p-value &lt; 0.05 for inclusion</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-white p-1.5 rounded border border-red-100 text-xs text-red-900">
                    <div>Correlation Analysis</div>
                    <div className="text-[10px] text-red-700">High corr: utility_delay & disconnection_events</div>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-red-100 text-xs text-red-900">
                    <div>Stability Analysis</div>
                    <div className="text-[10px] text-red-700">PSI &lt; 0.25 for stability</div>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-red-100 text-xs text-red-900">
                    <div>Signal Analysis</div>
                    <div className="text-[10px] text-red-700">Minimum support of 10% required</div>
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Step 5: Final Feature Set */}
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <div className="text-center font-medium text-green-800 mb-2">Final Feature Set</div>
            <div className="space-y-1">
              {borrowerType === 'thick-file' ? (
                <>
                  <div className="bg-white p-1.5 rounded border border-green-100 text-xs text-green-900">
                    <div className="font-medium text-green-700">Payment History</div>
                    <div className="text-[10px]">• days_past_due_bins, delinquency_count, etc.</div>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-green-100 text-xs text-green-900">
                    <div className="font-medium text-green-700">Credit Utilization</div>
                    <div className="text-[10px]">• utilization_ratio, balance_trend, etc.</div>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-green-100 text-xs text-green-900">
                    <div className="font-medium text-green-700">Credit History Length</div>
                    <div className="text-[10px]">• account_age_months, oldest_account_age, etc.</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-white p-1.5 rounded border border-green-100 text-xs text-green-900">
                    <div className="font-medium text-green-700">Telecom Payments</div>
                    <div className="text-[10px]">• telecom_payment_consistency, recharge_volatility, etc.</div>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-green-100 text-xs text-green-900">
                    <div className="font-medium text-green-700">Utility Payments</div>
                    <div className="text-[10px]">• utility_payment_delay, disconnection_events, etc.</div>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-green-100 text-xs text-green-900">
                    <div className="font-medium text-green-700">MFS Behavior</div>
                    <div className="text-[10px]">• mfs_transaction_regularity, balance_turnover, etc.</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHierarchy;