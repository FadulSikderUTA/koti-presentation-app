"use client";

import EnhancedPresentationContainer from "@/components/EnhancedPresentationContainer";
import ProtectedRoute from "@/components/ProtectedRoute";
import SlideWrapper from "@/components/SlideWrapper";
import TitleSlide from "@/components/SlidesForTechnicalPlan/TitleSlide";
import InfrastructureOverviewSlide from "@/components/SlidesForTechnicalPlan/InfrastructureOverviewSlide";
import ArchitecturePrinciplesSlide from "@/components/SlidesForTechnicalPlan/ArchitecturePrinciplesSlide";
import SystemArchitectureOverviewSlide from "@/components/SlidesForTechnicalPlan/SystemArchitectureOverviewSlide";
import DefenseInDepthSlide from "@/components/SlidesForTechnicalPlan/DefenseInDepthSlide";
import DataCenterDRSlide from "@/components/SlidesForTechnicalPlan/DataCenterDRSlide";
import DataCollectionGovernanceSlide from "@/components/SlidesForTechnicalPlan/DataCollectionGovernanceSlide";
import ProofOfAddressSlide from "@/components/SlidesForTechnicalPlan/ProofOfAddressSlide";
import IdentityAntiSpoofingSlide from "@/components/SlidesForTechnicalPlan/IdentityAntiSpoofingSlide";
import RiskAssessmentSlide from "@/components/SlidesForTechnicalPlan/RiskAssessmentSlide";
import OpenBankingEnrichmentSlide from "@/components/SlidesForTechnicalPlan/OpenBankingEnrichmentSlide";
import PlatformArchitectureSlide from "@/components/SlidesForTechnicalPlan/PlatformArchitectureSlide";
import SecurityControlPlaneSlide from "@/components/SlidesForTechnicalPlan/SecurityControlPlaneSlide";
import MemberCreditInquirySlide from "@/components/SlidesForTechnicalPlan/MemberCreditInquirySlide";
import DataSubmissionWorkflowsSlide from "@/components/SlidesForTechnicalPlan/DataSubmissionWorkflowsSlide";
import ConsumerServicesSlide from "@/components/SlidesForTechnicalPlan/ConsumerServicesSlide";
import KotiCreditScoreMethodologySlide from "@/components/SlidesForTechnicalPlan/KotiCreditScoreMethodologySlide";
import TeamSlide from "@/components/SlidesForTechnicalPlan/TeamSlide";
import ContactSlide from "@/components/SlidesForTechnicalPlan/ContactSlide";

export default function TechnicalPlanPresentation() {
  // Array of slide components for dynamic numbering
  const slides = [
    <TitleSlide key="title" />,
    <InfrastructureOverviewSlide key="infrastructure" />,
    <ArchitecturePrinciplesSlide key="architecture" />,
    <SystemArchitectureOverviewSlide key="system-architecture" />,
    <DefenseInDepthSlide key="defense-in-depth" />,
    <DataCenterDRSlide key="datacenter-dr" />,
    <DataCollectionGovernanceSlide key="data-collection-governance" />,
    <ProofOfAddressSlide key="proof-of-address" />,
    <IdentityAntiSpoofingSlide key="identity-anti-spoofing" />,
    <RiskAssessmentSlide key="risk-assessment" />,
    <OpenBankingEnrichmentSlide key="open-banking-enrichment" />,
    <PlatformArchitectureSlide key="platform-architecture" />,
    <SecurityControlPlaneSlide key="security-control-plane" />,
    <MemberCreditInquirySlide key="member-credit-inquiry" />,
    <DataSubmissionWorkflowsSlide key="data-submission-workflows" />,
    <ConsumerServicesSlide key="consumer-services" />,
    <KotiCreditScoreMethodologySlide key="koti-credit-score-methodology" />,
    <TeamSlide key="team" />,
    <ContactSlide key="contact" />
  ];

  return (
    <ProtectedRoute>
      <EnhancedPresentationContainer showHomeButton={true}>
        {slides.map((slide, index) => (
          <SlideWrapper key={slide.key} slideNumber={index + 1}>
            {slide}
          </SlideWrapper>
        ))}
      </EnhancedPresentationContainer>
    </ProtectedRoute>
  );
}