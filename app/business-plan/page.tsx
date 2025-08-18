"use client";

import EnhancedPresentationContainer from "@/components/EnhancedPresentationContainer";
import ProtectedRoute from "@/components/ProtectedRoute";
import SlideWrapper from "@/components/SlideWrapper";
import { businessPlanSlideMetadata } from "@/lib/slideMetadata";
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
  // Array of slide components for dynamic numbering
  const slides = [
    <TitleSlide key="title" companyName="Koti" tagline="SAVE. EARN. GROW." version="V1" />,
    <MissionStatementSlide key="mission" version="V1" date="08/11" />,
    <ProblemStatementPuzzleSlide key="problem" version="V1" date="08/11" />,
    <OurSolutionSlide key="solution" version="V1" date="08/11" />,
    <BusinessSolutionsSlide key="business-solutions" />,
    <ValuePropositionSlide key="value-proposition" />,
    <MarketDataSlide key="market-data" version="V1" date="08/11" />,
    <MarketOpportunitySlide key="market-opportunity" />,
    <TargetCustomerProfilesSlide key="target-customers" />,
    <GoToMarketStrategySlide key="go-to-market" />,
    <TimelineSlide key="timeline" />,
    <ComplianceSlide key="compliance" />,
    <DataCoverageSlide key="data-coverage" />,
    <DataCoverageSourceSlide key="data-coverage-source" />,
    <RevenueModelSlide key="revenue-model" />,
    <FinancialProjectionsSlide key="financial-projections" />,
    <CapitalPlanSlide key="capital-plan" />,
    <ProfitabilitySlide key="profitability" />,
    <ServiceChargesSlide key="service-charges" />,
    <ScoringComponentSlide key="scoring-component" />,
    <CompetitiveAnalysisSlide key="competitive-analysis" />,
    <TeamSlide key="team" />,
    <ContactSlide key="contact" />
  ];

  return (
    <ProtectedRoute>
      <EnhancedPresentationContainer 
        showHomeButton={true}
        enableNavigationPanel={true}
        slideMetadata={businessPlanSlideMetadata}
      >
        {slides.map((slide, index) => (
          <SlideWrapper key={slide.key} slideNumber={index + 1}>
            {slide}
          </SlideWrapper>
        ))}
      </EnhancedPresentationContainer>
    </ProtectedRoute>
  );
}