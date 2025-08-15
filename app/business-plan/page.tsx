"use client";

import EnhancedPresentationContainer from "@/components/EnhancedPresentationContainer";
import ProtectedRoute from "@/components/ProtectedRoute";
import TitleSlide from "@/components/SlidesForBusinessPlan/TitleSlide";
import MissionStatementSlide from "@/components/SlidesForBusinessPlan/MissionStatementSlide";
import ProblemStatementPuzzleSlide from "@/components/SlidesForBusinessPlan/ProblemStatementPuzzleSlide";
import MarketDataSlide from "@/components/SlidesForBusinessPlan/MarketDataSlide";
import OurSolutionSlide from "@/components/SlidesForBusinessPlan/OurSolutionSlide";
import BusinessSolutionsSlide from "@/components/SlidesForBusinessPlan/BusinessSolutionsSlide";
import ValuePropositionSlide from "@/components/SlidesForBusinessPlan/ValuePropositionSlide";
import RevenueModelSlide from "@/components/SlidesForBusinessPlan/RevenueModelSlide";
import MarketOpportunitySlide from "@/components/SlidesForBusinessPlan/MarketOpportunitySlide";
import TargetCustomerProfilesSlide from "@/components/SlidesForBusinessPlan/TargetCustomerProfilesSlide";
import GoToMarketStrategySlide from "@/components/SlidesForBusinessPlan/GoToMarketStrategySlide";
import TimelineSlide from "@/components/SlidesForBusinessPlan/TimelineSlide";
import ComplianceSlide from "@/components/SlidesForBusinessPlan/ComplianceSlide";
import DataCoverageSlide from "@/components/SlidesForBusinessPlan/DataCoverageSlide";
import DataCoverageSourceSlide from "@/components/SlidesForBusinessPlan/DataCoverageSourceSlide";
import FinancialProjectionsSlide from "@/components/SlidesForBusinessPlan/FinancialProjectionsSlide";
import CapitalPlanSlide from "@/components/SlidesForBusinessPlan/CapitalPlanSlide";
import ProfitabilitySlide from "@/components/SlidesForBusinessPlan/ProfitabilitySlide";
import ServiceChargesSlide from "@/components/SlidesForBusinessPlan/ServiceChargesSlide";
import CompetitiveAnalysisSlide from "@/components/SlidesForBusinessPlan/CompetitiveAnalysisSlide";
import TeamSlide from "@/components/SlidesForBusinessPlan/TeamSlide";
import ScoringComponentSlide from "@/components/SlidesForBusinessPlan/ScoringComponentSlide";
import ContactSlide from "@/components/SlidesForBusinessPlan/ContactSlide";

export default function BusinessPlanPresentation() {
  // Sample team data - you can replace with actual data
  const teamMembers = [
    { name: "Preston Brown", role: "CEO & Co-Founder" },
    { name: "Elliot Peverley", role: "CPO & Co-Founder" },
    { name: "Jacky Maughan", role: "COO & Co-Founder" },
  ];

  const missionText = `Our mission is to empower individuals to take control of their financial journey by turning complex data into simple, actionable insights. Through innovative AI-powered tools, we simplify saving, earning, and growing wealth—making financial management effortless, engaging, and accessible for everyone.`;

  return (
    <ProtectedRoute>
      <EnhancedPresentationContainer showHomeButton={true}>
      {/* Slide 1 - Title */}
      <TitleSlide 
        companyName="Koti"
        tagline="SAVE. EARN. GROW."
        version="V1"
      />
      
      {/* Slide 2 - Mission Statement */}
      <MissionStatementSlide 
        version="V1"
        date="08/11"
      />
      
      {/* Slide 3 - Problem Statement */}
      <ProblemStatementPuzzleSlide 
        version="V1"
        date="08/11"
      />
      
      {/* Slide 4 - Our Solution */}
      <OurSolutionSlide 
        version="V1"
        date="08/11"
      />
      
      {/* Slide 5 - Business Solutions */}
      <BusinessSolutionsSlide />
      
      {/* Slide 6 - Value Proposition */}
      <ValuePropositionSlide />
      
      {/* Slide 7 - Revenue Model */}
      <RevenueModelSlide />
      
      {/* Slide 8 - Market Data */}
      <MarketDataSlide 
        version="V1"
        date="08/11"
      />
      
      {/* Slide 9 - Market Opportunity */}
      <MarketOpportunitySlide />
      
      {/* Slide 10 - Target Customer Profiles */}
      <TargetCustomerProfilesSlide />
      
      {/* Slide 11 - Go-to-Market Strategy */}
      <GoToMarketStrategySlide />
      
      {/* Slide 12 - Timeline */}
      <TimelineSlide />
      
      {/* Slide 13 - Compliance & Complaints Policy */}
      <ComplianceSlide />
      
      {/* Slide 14 - Data Coverage */}
      <DataCoverageSlide />
      
      {/* Slide 15 - Data Coverage (Data Source) */}
      <DataCoverageSourceSlide />
      
      {/* Slide 16 - Financial Projections */}
      <FinancialProjectionsSlide />
      
      {/* Slide 17 - Capital Plan */}
      <CapitalPlanSlide />
      
      {/* Slide 18 - Revenue & Profitability Model */}
      <ProfitabilitySlide />
      
      {/* Slide 19 - Service Charges */}
      <ServiceChargesSlide />
      
      {/* Slide 20 - Scoring Component */}
      <ScoringComponentSlide />
      
      {/* Slide 21 - Competitive Analysis */}
      <CompetitiveAnalysisSlide />
      
      {/* Slide 22 - Team */}
      <TeamSlide />
      
      {/* Slide 23 - Contact Information */}
      <ContactSlide />
      </EnhancedPresentationContainer>
    </ProtectedRoute>
  );
}