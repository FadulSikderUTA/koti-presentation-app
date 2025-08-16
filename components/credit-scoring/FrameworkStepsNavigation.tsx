import React from 'react';
import { Check, Users, AlertCircle, Database, Brain, LineChart } from 'lucide-react';

const steps = [
  {
    title: "Define Business Objectives",
    icon: <Users size={20} />,
    description: "Establish goals for credit scoring system aligned with Bangladesh Bank regulations",
    details: "Credit bureau aims to address financial inclusion and risk management by developing models that help lenders make fair credit decisions."
  },
  {
    title: "Specify Target & Outcome Definition",
    icon: <AlertCircle size={20} />,
    description: "Determine what \"default\" means and establish the performance windows",
    details: "Define default as 90+ days past due within a 12-month performance window. Separate approaches for thick-file vs. thin-file borrowers."
  },
  {
    title: "Data Collection & Feature Engineering",
    icon: <Database size={20} />,
    description: "Gather data from traditional and alternative sources, transform into predictive features",
    details: "Collect data from banks, microfinance institutions, telecoms, utilities and mobile financial services. Apply Weight of Evidence (WoE) transformations."
  },
  {
    title: "Model Development & Validation",
    icon: <Brain size={20} />,
    description: "Build, validate models and develop scorecards with transparent points allocation",
    details: "Logistic regression models are developed separately for Koti Pro Score (thick-file) and Koti New Score (thin-file) with comprehensive validation frameworks."
  },
  {
    title: "Implementation, Monitoring & Governance",
    icon: <LineChart size={20} />,
    description: "Deploy and monitor models with governance controls",
    details: "Real-time implementation with continuous performance tracking and regulatory compliance checks."
  }
];

interface FrameworkStepsNavigationProps {
  activeStep: number;
  setActiveStep: (step: number) => void;
}

const FrameworkStepsNavigation: React.FC<FrameworkStepsNavigationProps> = ({ activeStep, setActiveStep }) => {
  return (
    <div className="flex justify-between items-center">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex flex-col items-center cursor-pointer transition-all duration-200 ${
            activeStep === index ? 'transform scale-110' : 'opacity-70'
          }`}
          onClick={() => setActiveStep(index)}
        >
          {/* Step Icon */}
          <div className={`flex items-center justify-center w-12 h-12 rounded-full mb-2 ${
            activeStep === index
              ? 'bg-primary-foreground/20'
              : 'bg-primary/10'
          }`}>
            {step.icon}
          </div>

          {/* Step Title */}
          <span className="text-xs font-medium text-center">{index + 1}. {step.title}</span>

          {/* Completed Indicator */}
          {activeStep > index && (
            <div className="mt-1 bg-[#198754] text-white rounded-full p-0.5">
              <Check size={12} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FrameworkStepsNavigation;