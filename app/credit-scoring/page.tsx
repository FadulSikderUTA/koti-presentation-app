"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, AlertCircle, Users, Database, Brain, LineChart, ArrowLeft } from 'lucide-react';
import { Button } from "../../components/credit-scoring/ui/button";
import FrameworkStepsNavigation from "../../components/credit-scoring/FrameworkStepsNavigation";
import FeatureHierarchy from "../../components/credit-scoring/FeatureHierarchy";
import ModelDevelopment from "../../components/credit-scoring/ModelDevelopment";
import ScoreCalculation from "../../components/credit-scoring/ScoreCalculation";
import FeatureWeightDistribution from "../../components/credit-scoring/FeatureWeightDistribution";
import ImplementationMonitoring from "../../components/credit-scoring/ImplementationMonitoring";
import DataCollectionEcosystem from "../../components/credit-scoring/DataCollectionEcosystem";
import ProtectedRoute from "@/components/ProtectedRoute";
import Link from 'next/link';

const KootiCSMVisualization = () => {
  // State for input data (simplified for demo)
  const [inputs, setInputs] = useState({
    loanHistory: 2,
    creditAge: 15,
    paymentHistory: 90,
    creditUtilization: 20,
    inquiries: 1,
    telecomPayments: 95,
    mobileFinancial: 85,
    utilityBills: 92
  });
  
  // State to track which borrower type is selected
  const [borrowerType, setBorrowerType] = useState<'thick-file' | 'thin-file'>('thick-file');
  
  // Active step in the visualization
  const [activeStep, setActiveStep] = useState(0);
  
  // Final credit score
  const [creditScore, setCreditScore] = useState(0);
  
  // Explanation for the current score
  const [scoreExplanation, setScoreExplanation] = useState<string[]>([]);
  
  // Add state for model recalibration simulation
  const [calibrationCycle, setCalibrationCycle] = useState(0);
  const [isCalibrating, setIsCalibrating] = useState(false);
  const [modelLastUpdated] = useState('2 months ago');
  useState([65, 68, 72, 75, 78, 76, 77, 78]);
  
  // Add to the existing state variables
  const [calibratedScore, setCalibratedScore] = useState(0);
  
  // Calculate score based on inputs and borrower type
  useEffect(() => {
    let baseScore = 500;
    let explanations = [];
    
    if (borrowerType === 'thick-file') {
      // Number of loans
      if (inputs.loanHistory >= 3) {
        baseScore += 50;
        explanations.push("Multiple established credit lines (+50)");
      } else if (inputs.loanHistory > 0) {
        baseScore += 30;
        explanations.push("Limited credit lines (+30)");
      }
      
      // Credit age in months
      if (inputs.creditAge > 24) {
        baseScore += 70;
        explanations.push("Well-established credit history (+70)");
      } else if (inputs.creditAge > 12) {
        baseScore += 40;
        explanations.push("Moderate credit history (+40)");
      } else {
        baseScore += 10;
        explanations.push("Limited credit history (+10)");
      }
      
      // Payment history (percentage on-time)
      if (inputs.paymentHistory > 95) {
        baseScore += 100;
        explanations.push("Excellent payment history (+100)");
      } else if (inputs.paymentHistory > 85) {
        baseScore += 70;
        explanations.push("Good payment history (+70)");
      } else if (inputs.paymentHistory > 75) {
        baseScore += 30;
        explanations.push("Fair payment history (+30)");
      } else {
        baseScore -= 20;
        explanations.push("Poor payment history (-20)");
      }
      
      // Credit utilization
      if (inputs.creditUtilization < 10) {
        baseScore += 80;
        explanations.push("Very low credit utilization (+80)");
      } else if (inputs.creditUtilization < 30) {
        baseScore += 60;
        explanations.push("Low credit utilization (+60)");
      } else if (inputs.creditUtilization < 50) {
        baseScore += 30;
        explanations.push("Moderate credit utilization (+30)");
      } else if (inputs.creditUtilization < 70) {
        baseScore += 0;
        explanations.push("High credit utilization (+0)");
      } else {
        baseScore -= 30;
        explanations.push("Very high credit utilization (-30)");
      }
      
      // Recent inquiries
      if (inputs.inquiries === 0) {
        baseScore += 50;
        explanations.push("No recent credit inquiries (+50)");
      } else if (inputs.inquiries < 3) {
        baseScore += 20;
        explanations.push("Few recent credit inquiries (+20)");
      } else {
        baseScore -= 10;
        explanations.push("Many recent credit inquiries (-10)");
      }
    } else {
      // Thin-file borrower logic
      // Telecom payments (percentage on-time)
      if (inputs.telecomPayments > 95) {
        baseScore += 100;
        explanations.push("Excellent telecom payment history (+100)");
      } else if (inputs.telecomPayments > 85) {
        baseScore += 70;
        explanations.push("Good telecom payment history (+70)");
      } else if (inputs.telecomPayments > 75) {
        baseScore += 30;
        explanations.push("Fair telecom payment history (+30)");
      } else {
        baseScore -= 10;
        explanations.push("Poor telecom payment history (-10)");
      }
      
      // Mobile financial services usage
      if (inputs.mobileFinancial > 90) {
        baseScore += 100;
        explanations.push("Very active MFS user with good history (+100)");
      } else if (inputs.mobileFinancial > 80) {
        baseScore += 70;
        explanations.push("Active MFS user with good history (+70)");
      } else if (inputs.mobileFinancial > 70) {
        baseScore += 40;
        explanations.push("Moderate MFS usage (+40)");
      } else {
        baseScore += 10;
        explanations.push("Limited MFS usage (+10)");
      }
      
      // Utility bill payments
      if (inputs.utilityBills > 95) {
        baseScore += 100;
        explanations.push("Excellent utility payment history (+100)");
      } else if (inputs.utilityBills > 85) {
        baseScore += 70;
        explanations.push("Good utility payment history (+70)");
      } else if (inputs.utilityBills > 75) {
        baseScore += 30;
        explanations.push("Fair utility payment history (+30)");
      } else {
        baseScore -= 10;
        explanations.push("Poor utility payment history (-10)");
      }
      
      // Credit history
      if (inputs.loanHistory > 0) {
        baseScore += 50;
        explanations.push("Some established credit history (+50)");
      }
    }
    
    // Ensure score stays within 300-850 range
    let finalScore = Math.max(300, Math.min(850, baseScore));
    setCreditScore(finalScore);
    
    // Limit to top 5 factors by contribution (absolute value) and sort by impact
    explanations.sort((a, b) => {
      const valueA = parseInt(a.match(/\(([+-]\d+)\)/)?.[1] || '0');
      const valueB = parseInt(b.match(/\(([+-]\d+)\)/)?.[1] || '0');
      return Math.abs(valueB) - Math.abs(valueA);
    });
    
    // Take top 5 most impactful factors
    explanations = explanations.slice(0, 5);
    
    setScoreExplanation(explanations);
  }, [inputs, borrowerType]);
  
  // Modify the useEffect that handles calibration
  useEffect(() => {
    if (isCalibrating) {
      const timer = setTimeout(() => {
        // Simulate weights changing during calibration
        setCalibrationCycle(prev => (prev + 1) % 5);
        
        // Calculate a slightly different score based on calibration cycle
        // This will make the score change dynamically during recalibration
        if (calibrationCycle === 1) { // During the Model Training phase
          const weightAdjustment = calibrationCycle === 1 ? Math.floor(Math.random() * 20) - 10 : 0;
          setCalibratedScore(Math.max(300, Math.min(850, creditScore + weightAdjustment)));
          
          // Also update score explanations during calibration to simulate key factors changing
          const updatedExplanations = [...scoreExplanation];
          
          // Randomly modify one of the explanations to simulate changing factor importance
          if (updatedExplanations.length > 0) {
            const randomIndex = Math.floor(Math.random() * updatedExplanations.length);
            const explanation = updatedExplanations[randomIndex];
            
            // Extract the numeric value from the explanation
            const match = explanation.match(/\(([+-]\d+)\)/);
            if (match && match[1]) {
              const currentValue = parseInt(match[1]);
              // Create a small random adjustment
              const adjustment = [-5, -3, 0, 3, 5][Math.floor(Math.random() * 5)];
              const newValue = currentValue + adjustment;
              
              // Only update if there's an actual change
              if (adjustment !== 0) {
                // Replace the value in the explanation
                const newExplanation = explanation.replace(
                  /\([+-]\d+\)/, 
                  `(${newValue >= 0 ? '+' : ''}${newValue})`
                );
                updatedExplanations[randomIndex] = newExplanation;
                setScoreExplanation(updatedExplanations);
              }
            }
          }
        } else {
          setCalibratedScore(creditScore);
        }
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCalibratedScore(creditScore);
    }
  }, [isCalibrating, calibrationCycle, creditScore, scoreExplanation]);

  // Dynamic feature weights with slight variations for each calibration cycle
  const getDynamicWeights = () => {
    // Explicitly cast borrowerType to ensure TypeScript recognizes it as a valid key
    const baseWeights = featureWeights[borrowerType as keyof typeof featureWeights];
    // Apply small variations based on calibration cycle (±2%)
    return baseWeights.map(feature => ({
      ...feature,
      weight: Math.max(5, Math.min(50, feature.weight + ([-2, -1, 0, 1, 2][calibrationCycle % 5])))
    }));
  };
  
  // Helper function to get risk category
  const getRiskCategory = (score: number) => {
    if (score >= 750) return {category: "Excellent", color: "bg-emerald-500"};
    if (score >= 700) return {category: "Very Good", color: "bg-green-500"};
    if (score >= 650) return {category: "Good", color: "bg-teal-500"};
    if (score >= 600) return {category: "Fair", color: "bg-yellow-500"};
    return {category: "Poor", color: "bg-red-500"};
  };

  const riskInfo = getRiskCategory(creditScore);

  // Steps in the framework
  const steps = [
    {
      title: "Define Business Objectives",
      icon: <Users size={24} />,
      description: "Establish goals for credit scoring system aligned with Bangladesh Bank regulations",
      details: "Credit bureau aims to address financial inclusion and risk management by developing models that help lenders make fair credit decisions."
    },
    {
      title: "Specify Target & Outcome Definition",
      icon: <AlertCircle size={24} />,
      description: "Determine what \"default\" means and establish the performance windows",
      details: "Define default as 90+ days past due within a 12-month performance window. Separate approaches for thick-file vs. thin-file borrowers."
    },
    {
      title: "Data Collection & Feature Engineering",
      icon: <Database size={24} />,
      description: "Gather data from traditional and alternative sources, transform into predictive features",
      details: "Collect data from banks, microfinance institutions, telecoms, utilities and mobile financial services. Apply Weight of Evidence (WoE) transformations."
    },
    {
      title: "Model Development & Validation",
      icon: <Brain size={24} />,
      description: "Build, validate models and develop scorecards with transparent points allocation",
      details: "Logistic regression models are developed separately for Kooti Pro Score (thick-file) and Kooti New Score (thin-file) with comprehensive validation frameworks."
    },
    {
      title: "Implementation, Monitoring & Governance",
      icon: <LineChart size={24} />,
      description: "Deploy and monitor models with governance controls",
      details: "Real-time implementation with continuous performance tracking and regulatory compliance checks."
    }
  ];

  // Add type for feature weights
  type FeatureWeight = {
    name: string;
    weight: number;
    color: string;
  };

  // Define the feature weights with proper typing
  const featureWeights: Record<'thick-file' | 'thin-file', FeatureWeight[]> = {
    'thick-file': [
      { name: 'Payment History', weight: 35, color: 'bg-blue-500' },
      { name: 'Credit Utilization', weight: 30, color: 'bg-green-500' },
      { name: 'Credit History', weight: 15, color: 'bg-purple-500' },
      { name: 'Credit Mix', weight: 10, color: 'bg-yellow-500' },
      { name: 'New Credit', weight: 10, color: 'bg-red-500' }
    ],
    'thin-file': [
      { name: 'Telecom Payments', weight: 40, color: 'bg-blue-500' },
      { name: 'Utility Payments', weight: 30, color: 'bg-green-500' },
      { name: 'Mobile Financial', weight: 20, color: 'bg-purple-500' },
      { name: 'Psychometric', weight: 10, color: 'bg-yellow-500' }
    ]
  };

  // Input configuration for UI (Moved from original file)
  const thickFileInputs = [
    { label: "Number of Loan/Credit Accounts", min: 0, max: 10, step: 1, value: inputs.loanHistory, param: "loanHistory" },
    { label: "Credit History Age (months)", min: 0, max: 60, step: 1, value: inputs.creditAge, param: "creditAge" },
    { label: "Payment History (% on-time)", min: 0, max: 100, step: 1, value: inputs.paymentHistory, param: "paymentHistory" },
    { label: "Credit Utilization (%)", min: 0, max: 100, step: 1, value: inputs.creditUtilization, param: "creditUtilization" },
    { label: "Recent Credit Inquiries", min: 0, max: 10, step: 1, value: inputs.inquiries, param: "inquiries" }
  ];

  const thinFileInputs = [
    { label: "Telecom Payment History (% on-time)", min: 0, max: 100, step: 1, value: inputs.telecomPayments, param: "telecomPayments" },
    { label: "Mobile Financial Services Usage Score", min: 0, max: 100, step: 1, value: inputs.mobileFinancial, param: "mobileFinancial" },
    { label: "Utility Bill Payment History (% on-time)", min: 0, max: 100, step: 1, value: inputs.utilityBills, param: "utilityBills" },
    { label: "Number of Formal Loans (if any)", min: 0, max: 3, step: 1, value: inputs.loanHistory, param: "loanHistory" }
  ];

  // Handler for input changes (Moved from original file)
  const handleInputChange = (param: string, value: number) => {
    setInputs(prev => ({
      ...prev,
      [param]: value
    }));
  };

  // Logic to move through steps
  const handleNextStep = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  // Render progress indicator
  const renderProgressBar = () => {
    return (
      <div className="w-full bg-muted h-2 rounded-full mt-2 mb-6">
        <div
          className="bg-secondary h-2 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${(activeStep + 1) * 20}%` }}
        />
      </div>
    );
  };

  return (
    <ProtectedRoute>
      <div className="credit-scoring-container">
      <div className="flex flex-col w-full min-h-screen bg-background text-foreground font-inter overflow-auto">
        
        {/* Header with back button */}
        <div className="bg-gradient-to-r from-primary via-secondary to-primary/90 text-primary-foreground p-4 relative overflow-hidden">
          {/* Back button */}
          <Link href="/" className="absolute top-4 left-4 z-10">
            <button className="flex items-center px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors duration-200 text-sm font-medium">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Home
            </button>
          </Link>
          
          {/* Decorative accent elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-xl"></div>
          <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-white/5 rounded-full -mb-16 blur-lg"></div>
          <h1 className="text-2xl font-bold text-center">Kooti Credit Scoring Methodology</h1>
          <p className="text-primary-foreground/90 text-center">Interactive visualization of the 5-step credit scoring framework</p>
          <div className="mt-4">
            <FrameworkStepsNavigation activeStep={activeStep} setActiveStep={setActiveStep} />
          </div>
          {renderProgressBar()}
        </div>

        {/* Main content area */}
        <div className="p-6 flex flex-col flex-1">
          {/* Current step details */}
          <div className="bg-card p-5 rounded-lg mb-4 border shadow-md relative overflow-hidden">
            {/* Decorative accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary/70"></div>
            
            <div className="pl-3">
              <div className="flex items-center mb-3">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  {steps[activeStep].icon}
                </div>
                <h2 className="text-xl font-bold text-card-foreground">{steps[activeStep].title}</h2>
              </div>
              
              <p className="text-lg text-card-foreground mb-3 pl-12">{steps[activeStep].description}</p>
              <p className="text-muted-foreground pl-12 border-l-2 border-muted py-2">{steps[activeStep].details}</p>
            </div>
          </div>

          {/* Interactive content based on step */}
          <div className="flex-grow">
            {activeStep === 0 && (
                <div className="bg-brand-bg-card p-4 rounded-lg shadow-md space-y-6 border border-brand-border"> {/* Main container for step 0 content */}
                  <div>
                  <h3 className="font-semibold text-brand-text-primary mb-2">Business Objectives</h3>
                  <ul className="list-disc pl-5 space-y-2 text-brand-text-secondary"> {/* Text color for list items */}
                    <li>Improve lending decisions by quantifying risk</li>
                    <li>Streamline credit processes with automated scoring</li>
                    <li>Facilitate financial inclusion for underserved populations</li>
                    <li>Enhance market efficiency through reduced information asymmetry</li>
                    <li>Align with Bangladesh Bank's regulatory guidelines</li>
                  </ul>
                  </div>

                  {/* Distinction between general-purpose and application-specific scoring */}
                  <div className="mt-4">
                    <h3 className="font-semibold text-brand-text-primary mb-3">Scoring Model Approaches</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-brand-border p-4 rounded-md bg-brand-bg-light relative"> {/* Lighter background for card */}
                        <div className="absolute top-0 right-0 bg-brand-primary text-white text-xs px-2 py-1 rounded-bl-md">
                          Kooti Focus
                        </div>
                        <h4 className="font-medium text-brand-primary">General-Purpose Credit Scoring</h4> {/* Brand primary for heading */}
                        <p className="text-sm mt-2 text-brand-text-secondary">
                          Provides an overall risk assessment for any credit product, ensuring consistent underwriting across multiple lenders and reducing data asymmetry.
                        </p>
                      </div>
                      <div className="border border-brand-border p-4 rounded-md bg-brand-bg-light"> {/* Lighter background for card */}
                        <h4 className="font-medium text-brand-text-primary">Application-Specific Scoring</h4> {/* Primary text for heading */}
                        <p className="text-sm mt-2 text-brand-text-secondary">
                          Developed internally by banks/NBFIs for particular credit products. Kooti Score often serves as a baseline or input to such specialized models.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bangladesh market dynamics */}
                  <div className="mt-4">
                    <h3 className="font-semibold text-brand-text-primary mb-3">Bangladesh Credit Market Dynamics</h3>
                    <div className="p-4 border border-brand-border rounded-md bg-yellow-50"> {/* Keeping yellow for emphasis, can be changed to a brand tint */}
                      <p className="text-sm text-yellow-800"> {/* Darker yellow text for readability */}
                        Most of Bangladesh's population lacks access to formal credit, resulting in limited or no credit history ("thin-file"). To address this challenge, Kooti employs a segmented approach that accommodates both established borrowers and those new to formal credit.
                      </p>
                      <div className="mt-3 flex items-center justify-center">
                        <div className="bg-red-100 rounded-md p-2 text-center w-32">
                          <p className="text-xs font-medium text-red-700">Challenge</p>
                          <p className="text-sm font-bold text-red-800 mt-1">Limited Credit Data</p>
                        </div>
                        <div className="mx-4 text-gray-400">→</div>
                        <div className="bg-green-100 rounded-md p-2 text-center w-32">
                          <p className="text-xs font-medium text-green-700">Solution</p>
                          <p className="text-sm font-bold text-green-800 mt-1">Segmented Approach</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Kooti's segmented approach */}
                  <div className="mt-4">
                    <h3 className="font-semibold text-brand-text-primary mb-3">Kooti Score Product Suite</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="border-2 border-brand-primary p-4 rounded-md relative bg-brand-bg-card"> {/* Brand primary border, card background */}
                        <div className="absolute -top-3 left-3 bg-brand-primary text-white text-sm px-3 py-1 rounded-md">
                          Thick-File Borrowers
                        </div>
                        <h4 className="font-bold text-brand-primary mt-3">Kooti Pro Score</h4>
                        <p className="text-sm mt-2 text-brand-text-secondary">
                          For borrowers with substantial credit history (2+ years, multiple accounts). Uses traditional credit data and metrics.
                        </p>
                        <div className="mt-3 bg-blue-50 rounded p-2 text-xs text-brand-text-primary"> {/* Light blue bg, primary text */}
                          <span className="font-medium">Score Range:</span> 300-850
                        </div>
                      </div>
                      <div className="border-2 border-brand-secondary p-4 rounded-md relative bg-brand-bg-card"> {/* Brand secondary border, card background */}
                        <div className="absolute -top-3 left-3 bg-brand-secondary text-white text-sm px-3 py-1 rounded-md">
                          Thin-File Borrowers
                        </div>
                        <h4 className="font-bold text-brand-secondary mt-3">Kooti New Score</h4>
                        <p className="text-sm mt-2 text-brand-text-secondary">
                          For borrowers with limited or no formal credit history. Leverages alternative data sources and advanced analytics.
                        </p>
                        <div className="mt-3 bg-teal-50 rounded p-2 text-xs text-brand-text-primary"> {/* Light teal bg, primary text */}
                          <span className="font-medium">Score Range:</span> 300-850
                        </div>
                      </div>
                    </div>
                    
                    {/* Industry-specific variants */}
                    <div className="mt-2">
                      <h4 className="font-medium text-sm text-brand-text-primary mb-2">Industry-Specific Variants</h4>
                      <div className="flex flex-wrap gap-2">
                        {/* Example: Using brand colors for these tags, or creating specific tag colors */}
                        <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-md text-sm flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                          Kooti MFI Score
                        </div>
                        <div className="bg-green-100 text-green-800 px-3 py-2 rounded-md text-sm flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          Kooti Retail Score
                        </div>
                        <div className="bg-amber-100 text-amber-800 px-3 py-2 rounded-md text-sm flex items-center">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                          Kooti SME Score
                        </div>
                      </div>
                      <p className="text-xs text-brand-text-secondary mt-2 italic"> {/* Secondary text for disclaimer */}
                        Disclaimer: Score ranges shown are illustrative and follow international standards. Actual implementation will be calibrated with Bangladesh market data.
                      </p>
                    </div>
                  </div>
                </div>
            )}

            {activeStep === 1 && (
                <div className="space-y-6 text-brand-text-primary"> {/* Base text color */}
                  <h3 className="text-xl font-semibold text-center text-brand-text-primary">Specify Target & Outcome Definition</h3>
                  
                  {/* Primary Target Definition */}
                  <div className="bg-brand-bg-card p-5 rounded-lg border border-brand-border shadow-sm">
                    <h4 className="font-medium mb-3 text-brand-primary">Primary Target Variable: Probability of Default (PD)</h4>
                    
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1 bg-brand-bg-light p-4 rounded-lg border border-brand-border">
                        <h5 className="font-medium text-brand-text-primary mb-2">Core Definition</h5>
                        <div className="mb-2 bg-blue-50 rounded-lg p-3 border border-blue-200"> {/* Keeping light blue for emphasis, can be brand tint */}
                          <p className="text-sm font-medium text-center text-brand-primary">PD = P(Borrower defaults within next 12 months)</p>
                        </div>
                        <p className="text-sm mb-2 text-brand-text-secondary">A borrower is considered in <strong>default</strong> if unable to meet debt obligations, typically marked by:</p>
                        <ul className="text-sm list-disc list-inside space-y-1 text-brand-text-secondary">
                          <li><strong>90+ days</strong> past due</li>
                          <li>Charge-off/Write-off</li>
                          <li>Bankruptcy or Insolvency</li>
                          <li>Settlements (partial repayment arrangements)</li>
                        </ul>
                      </div>
                        
                      <div className="flex-1 bg-brand-bg-light p-4 rounded-lg border border-brand-border">
                        <h5 className="font-medium text-brand-text-primary mb-2">Alternative Target Constructions</h5>
                        <ul className="text-sm space-y-3 text-brand-text-secondary">
                          <li className="bg-blue-50 p-2 rounded border border-blue-200">
                            <span className="font-medium text-brand-primary">Delinquency Thresholds:</span> 30+, 60+, 120+ days past due
                          </li>
                          <li className="bg-green-50 p-2 rounded border border-green-200">
                            <span className="font-medium text-green-700">Roll Rate Analysis:</span> Probability of moving between delinquency states (30→60→90)
                          </li>
                          <li className="bg-purple-50 p-2 rounded border border-purple-200">
                            <span className="font-medium text-purple-700">Vintage Analysis:</span> Performance of loan origination cohorts over time
                          </li>
                        </ul>
                        <p className="text-xs mt-2 text-brand-text-secondary italic">Note: While these variations inform model development, the standard Kooti Score uses 12-month PD with 90+ days past due.</p>
                      </div>
                    </div>
                  </div>
                        
                  {/* Time Window Framework Visualization - REDESIGNED FOR CLARITY */}
                  <div className="bg-brand-bg-card p-5 rounded-lg border border-brand-border shadow-sm">
                    <h4 className="font-medium mb-6 text-brand-primary">Observation and Performance Windows</h4>
                    
                    {/* Thick-file Timeline - Redesigned with better spacing */}
                    <div className="mb-12">
                      <div className="flex items-center mb-2">
                        <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium text-sm">
                          Thick-File (Kooti Pro Score)
                        </div>
                      </div>
                      
                      <div className="flex w-full h-12 relative">
                        {/* Observation Window */}
                        <div className="w-[40%] h-12 bg-blue-100 rounded-l-lg flex items-center justify-center border border-blue-200">
                          <span className="text-xs font-medium text-blue-800">Observation Window</span>
                        </div>
                        
                        {/* Buffer */}
                        <div className="w-[10%] h-12 bg-yellow-100 flex items-center justify-center border-t border-b border-yellow-200 relative">
                          <span className="text-xs font-medium text-yellow-800">Buffer</span>
                          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                            <svg width="16" height="16" viewBox="0 0 24 24" className="text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                            </svg>
                          </div>
                        </div>
                        
                        {/* Performance Window */}
                        <div className="w-[50%] h-12 bg-green-100 rounded-r-lg flex items-center justify-center border border-green-200">
                          <span className="text-xs font-medium text-green-800">Performance Window</span>
                        </div>
                      </div>
                      
                      {/* Duration labels */}
                      <div className="flex w-full mt-1">
                        <div className="w-[40%] text-center">
                          <span className="text-xs text-blue-700">Up to 24 months</span>
                        </div>
                        <div className="w-[10%] text-center">
                          <span className="text-xs text-yellow-700">3 months</span>
                        </div>
                        <div className="w-[50%] text-center">
                          <span className="text-xs text-green-700">12 months</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Thin-file Timeline - Redesigned with better spacing */}
                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <div className="bg-teal-100 text-teal-800 px-2 py-1 rounded font-medium text-sm">
                          Thin-File (Kooti New Score)
                        </div>
                      </div>
                      
                      <div className="flex w-full h-12 relative">
                        {/* Observation Window */}
                        <div className="w-[25%] h-12 bg-teal-100 rounded-l-lg flex items-center justify-center border border-teal-200">
                          <span className="text-xs font-medium text-teal-800">Observation Window</span>
                        </div>
                        
                        {/* Buffer */}
                        <div className="w-[10%] h-12 bg-yellow-100 flex items-center justify-center border-t border-b border-yellow-200">
                          <span className="text-xs font-medium text-yellow-800">Buffer</span>
                        </div>
                        
                        {/* Performance Window */}
                        <div className="w-[50%] h-12 bg-green-100 flex items-center justify-center border border-green-200">
                          <span className="text-xs font-medium text-green-800">Performance Window</span>
                        </div>
                        
                        {/* More Frequent Updates */}
                        <div className="w-[15%] h-12 bg-blue-50 rounded-r-lg flex items-center justify-center border border-blue-200">
                          <span className="text-xs font-medium text-blue-700">Updates</span>
                        </div>
                      </div>
                      
                      {/* Duration labels */}
                      <div className="flex w-full mt-1">
                        <div className="w-[25%] text-center">
                          <span className="text-xs text-teal-700">6-12 months</span>
                        </div>
                        <div className="w-[10%] text-center">
                          <span className="text-xs text-yellow-700">0-3 months</span>
                        </div>
                        <div className="w-[50%] text-center">
                          <span className="text-xs text-green-700">12 months</span>
                        </div>
                        <div className="w-[15%] text-center">
                          <span className="text-xs text-blue-700">More frequent</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional explanation box */}
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200 flex items-start mt-4">
                      <svg width="20" height="20" viewBox="0 0 24 24" className="text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <div>
                        <p className="text-sm text-green-800 font-medium">Default events are tracked during the performance window</p>
                        <p className="text-xs text-green-700 mt-1">Loan performance is observed over this period to measure actual default outcomes compared to predictions.</p>
                      </div>
                    </div>
                    
                    <div className="text-center mt-4">
                      <span className="text-xs text-brand-text-secondary italic bg-brand-bg-light px-3 py-1 rounded-full border border-brand-border inline-block">
                        Exact window lengths calibrated with Bangladesh market data
                      </span>
                    </div>
                  </div>
                  
                  {/* Market Calibration Considerations */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-brand-bg-light p-3 rounded-lg border border-brand-border">
                      <h5 className="font-medium text-brand-text-primary mb-2">Bangladesh Market Calibration</h5>
                      <ul className="space-y-1 text-brand-text-secondary list-disc list-inside">
                        <li>Short-tenor loans (6-9 months for MFI/SME)</li>
                        <li>Agricultural seasonality impacts</li>
                        <li>Data gaps from smaller lenders</li>
                        <li>Minimum 3+ months of active records required</li>
                      </ul>
                    </div>
                    
                    <div className="bg-brand-bg-light p-3 rounded-lg border border-brand-border">
                      <h5 className="font-medium text-brand-text-primary mb-2">Economic Cycle Coverage</h5>
                      <ul className="space-y-1 text-brand-text-secondary list-disc list-inside">
                        <li>Out-of-time validation across years</li>
                        <li>Stress events (floods, pandemic) incorporated</li>
                        <li>Macro monitoring (inflation, currency changes)</li>
                        <li>Model recalibration triggered by economic shifts</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Segmented Target Strategy */}
                  <div className="bg-brand-bg-card p-5 rounded-lg border border-brand-border shadow-sm">
                    <h4 className="font-medium mb-3 text-brand-primary">Segmented Target Strategy</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Thick-file approach */}
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200"> {/* Keeping light blue for TF emphasis */}
                        <div className="flex items-center mb-3">
                          <div className="bg-brand-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2">TF</div>
                          <h5 className="font-medium text-brand-primary">Thick-File: Kooti Pro Score</h5>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="bg-brand-bg-card p-2.5 rounded border border-blue-100">
                            <h6 className="font-medium text-sm text-brand-primary mb-1">Default Definition</h6>
                            <ul className="text-xs space-y-1 text-brand-text-secondary list-disc list-inside">
                              <li>90+ day delinquency on any account</li>
                              <li>Charge-offs, write-downs</li>
                              <li>Adverse statuses within performance window</li>
                            </ul>
                          </div>
                    
                          <div className="bg-brand-bg-card p-2.5 rounded border border-blue-100">
                            <h6 className="font-medium text-sm text-brand-primary mb-1">Data Requirements</h6>
                            <ul className="text-xs space-y-1 text-brand-text-secondary list-disc list-inside">
                              <li>At least one active account &gt;6 months old</li>
                              <li>Multiple credit lines when possible</li>
                              <li>Continuous bureau data to track changes</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      {/* Thin-file approach */}
                      <div className="bg-teal-50 p-4 rounded-lg border border-teal-200"> {/* Keeping light teal for TN emphasis */}
                        <div className="flex items-center mb-3">
                          <div className="bg-brand-secondary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2">TN</div>
                          <h5 className="font-medium text-brand-secondary">Thin-File: Kooti New Score</h5>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="bg-brand-bg-card p-2.5 rounded border border-teal-100">
                            <h6 className="font-medium text-sm text-brand-secondary mb-1">Adapted Default Definition</h6>
                            <ul className="text-xs space-y-1 text-brand-text-secondary list-disc list-inside">
                              <li>90+ day delinquency (if any formal credit)</li>
                              <li>Utility bills unpaid for 2-3 consecutive cycles</li>
                              <li>Multiple missed telecom payments</li>
                              <li>Mobile money loan defaults</li>
                            </ul>
                          </div>
                          
                          <div className="bg-brand-bg-card p-2.5 rounded border border-teal-100">
                            <h6 className="font-medium text-sm text-brand-secondary mb-1">Alternative Data Sources</h6>
                            <ul className="text-xs space-y-1 text-brand-text-secondary list-disc list-inside">
                              <li>Telecom usage & payment patterns</li>
                              <li>Utility payment timelines</li>
                              <li>MFS transaction flows</li>
                              <li>Psychometric assessment scores</li>
                              <li>Small-scale microfinance activity</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-100 p-3 mt-4 rounded-lg border border-yellow-300 text-sm text-yellow-800"> {/* Brand consistent yellow warning */}
                      <div className="flex items-start">
                        <svg width="20" height="20" viewBox="0 0 24 24" className="text-yellow-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <div>
                          <span className="font-medium">ML Enhancement for Thin-File:</span> More sophisticated detection of "early negative signals" is applied for thin-file borrowers. For example, sudden changes in telecom recharge patterns or MFS transaction frequency can serve as early warning indicators.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            )}

            {activeStep === 2 && (
              <div className="space-y-6">
                <DataCollectionEcosystem 
                  borrowerType={borrowerType} 
                  setBorrowerType={setBorrowerType}
                />
                <FeatureHierarchy borrowerType={borrowerType} setBorrowerType={setBorrowerType} />
              </div>
            )}

            {activeStep === 3 && (
              <div>
                <ModelDevelopment 
                  borrowerType={borrowerType} 
                  setBorrowerType={setBorrowerType}
                  isCalibrating={isCalibrating}
                  setIsCalibrating={setIsCalibrating}
                  calibrationCycle={calibrationCycle}
                  modelLastUpdated={modelLastUpdated}
                />
                
                <FeatureWeightDistribution 
                  borrowerType={borrowerType} 
                  setBorrowerType={setBorrowerType}
                  getDynamicWeights={getDynamicWeights}
                  isCalibrating={isCalibrating}
                  calibrationCycle={calibrationCycle}
                  inputs={inputs}
                  handleInputChange={handleInputChange}
                />
                
                <ScoreCalculation 
                  borrowerType={borrowerType} 
                  setBorrowerType={setBorrowerType}
                  creditScore={creditScore}
                  calibratedScore={calibratedScore}
                  isCalibrating={isCalibrating}
                  scoreExplanation={scoreExplanation}
                  getDynamicWeights={getDynamicWeights}
                  featureWeights={featureWeights}
                  inputs={inputs}
                  handleInputChange={handleInputChange}
                />
              </div>
            )}

            {activeStep === 4 && (
              <ImplementationMonitoring 
                borrowerType={borrowerType} 
                setBorrowerType={setBorrowerType}
                creditScore={creditScore}
                scoreExplanation={scoreExplanation}
                inputs={inputs}
                handleInputChange={handleInputChange}
              />
            )}
          </div>

          {/* Navigation controls */}
          <div className="mt-6 flex justify-between">
            <Button
              onClick={handlePrevStep}
              variant="outline"
              className={`flex items-center border-primary text-primary hover:bg-primary/10 ${activeStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={activeStep === 0}
            >
              <ChevronRight className="mr-1 rotate-180 h-4 w-4" /> Previous
            </Button>
            <Button
              onClick={handleNextStep}
              variant="default"
              className={`flex items-center bg-primary hover:bg-primary/90 ${activeStep === 4 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={activeStep === 4}
            >
              Next <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="p-4 bg-muted text-center text-sm text-muted-foreground border-t border-border">
          <p className="flex items-center justify-center">
            <span className="font-semibold text-primary mr-1">© 2025 Koti Credit Bureau</span>
            <span className="mx-2">—</span>
            <span>This visualization represents the Kooti Credit Scoring Methodology (CSM)</span>
          </p>
        </div>
      </div>
      </div>
    </ProtectedRoute>
  );
};

export default KootiCSMVisualization;