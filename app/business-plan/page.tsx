"use client";

import EnhancedPresentationContainer from "@/components/EnhancedPresentationContainer";
import ProtectedRoute from "@/components/ProtectedRoute";
import TitleSlide from "@/components/slides/TitleSlide";
import MissionStatementSlide from "@/components/slides/MissionStatementSlide";
import ProblemStatementPuzzleSlide from "@/components/slides/ProblemStatementPuzzleSlide";
import MarketDataSlide from "@/components/slides/MarketDataSlide";
import OurSolutionSlide from "@/components/slides/OurSolutionSlide";
import BusinessSolutionsSlide from "@/components/slides/BusinessSolutionsSlide";
import ValuePropositionSlide from "@/components/slides/ValuePropositionSlide";
import RevenueModelSlide from "@/components/slides/RevenueModelSlide";
import MarketOpportunitySlide from "@/components/slides/MarketOpportunitySlide";
import CoreCustomerProfilesSlide from "@/components/slides/CoreCustomerProfilesSlide";
import GoToMarketStrategySlide from "@/components/slides/GoToMarketStrategySlide";
import TimelineSlide from "@/components/slides/TimelineSlide";
import FinancialProjectionsSlide from "@/components/slides/FinancialProjectionsSlide";
import CapitalPlanSlide from "@/components/slides/CapitalPlanSlide";
import ProfitabilitySlide from "@/components/slides/ProfitabilitySlide";
import TractionSlide from "@/components/slides/TractionSlide";
import CompetitiveAnalysisSlide from "@/components/slides/CompetitiveAnalysisSlide";
import TeamSlide from "@/components/slides/TeamSlide";
import ScoringComponentSlide from "@/components/slides/ScoringComponentSlide";
import ContactSlide from "@/components/slides/ContactSlide";

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