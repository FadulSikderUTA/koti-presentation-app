"use client";

import EnhancedPresentationContainer from "@/components/EnhancedPresentationContainer";
import ProtectedRoute from "@/components/ProtectedRoute";
import TitleSlide from "@/components/SlidesForInvestorPitch/TitleSlide";
import MissionStatementSlide from "@/components/SlidesForInvestorPitch/MissionStatementSlide";
import ProblemStatementPuzzleSlide from "@/components/SlidesForInvestorPitch/ProblemStatementPuzzleSlide";
import MarketDataSlide from "@/components/SlidesForInvestorPitch/MarketDataSlide";
import OurSolutionSlide from "@/components/SlidesForInvestorPitch/OurSolutionSlide";
import BusinessSolutionsSlide from "@/components/SlidesForInvestorPitch/BusinessSolutionsSlide";
import ValuePropositionSlide from "@/components/SlidesForInvestorPitch/ValuePropositionSlide";
import RevenueModelSlide from "@/components/SlidesForInvestorPitch/RevenueModelSlide";
import MarketOpportunitySlide from "@/components/SlidesForInvestorPitch/MarketOpportunitySlide";
import CoreCustomerProfilesSlide from "@/components/SlidesForInvestorPitch/CoreCustomerProfilesSlide";
import GoToMarketStrategySlide from "@/components/SlidesForInvestorPitch/GoToMarketStrategySlide";
import TimelineSlide from "@/components/SlidesForInvestorPitch/TimelineSlide";
import FinancialProjectionsSlide from "@/components/SlidesForInvestorPitch/FinancialProjectionsSlide";
import CapitalPlanSlide from "@/components/SlidesForInvestorPitch/CapitalPlanSlide";
import ProfitabilitySlide from "@/components/SlidesForInvestorPitch/ProfitabilitySlide";
import TractionSlide from "@/components/SlidesForInvestorPitch/TractionSlide";
import CompetitiveAnalysisSlide from "@/components/SlidesForInvestorPitch/CompetitiveAnalysisSlide";
import TeamSlide from "@/components/SlidesForInvestorPitch/TeamSlide";
import ScoringComponentSlide from "@/components/SlidesForInvestorPitch/ScoringComponentSlide";
import ContactSlide from "@/components/SlidesForInvestorPitch/ContactSlide";

export default function InvestorPitchPresentation() {
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
      
      {/* Slide 4 - Market Data */}
      <MarketDataSlide 
        version="V1"
        date="08/11"
      />
      
      {/* Slide 5 - Our Solution */}
      <OurSolutionSlide 
        version="V1"
        date="08/11"
      />
      
      {/* Slide 6 - Business Solutions */}
      <BusinessSolutionsSlide />
      
      {/* Slide 7 - Value Proposition */}
      <ValuePropositionSlide />
      
      {/* Slide 8 - Revenue Model */}
      <RevenueModelSlide />
      
      {/* Slide 9 - Market Opportunity */}
      <MarketOpportunitySlide />
      
      {/* Slide 10 - Core Customer Profiles */}
      <CoreCustomerProfilesSlide />
      
      {/* Slide 11 - Go-to-Market Strategy */}
      <GoToMarketStrategySlide />
      
      {/* Slide 12 - Timeline */}
      <TimelineSlide />
      
      {/* Slide 13 - Financial Projections */}
      <FinancialProjectionsSlide />
      
      {/* Slide 14 - Capital Plan */}
      <CapitalPlanSlide />
      
      {/* Slide 15 - Revenue & Profitability Model */}
      <ProfitabilitySlide />
      
      {/* Slide 16 - Scoring Component */}
      <ScoringComponentSlide />
      
      {/* Slide 17 - Traction */}
      <TractionSlide />
      
      {/* Slide 18 - Competitive Analysis */}
      <CompetitiveAnalysisSlide />
      
      {/* Slide 19 - Team */}
      <TeamSlide />
      
      {/* Slide 20 - Contact Information */}
      <ContactSlide />
      </EnhancedPresentationContainer>
    </ProtectedRoute>
  );
}