export interface SlideMetadata {
  key: string;
  title: string;
  number: number;
}

// Business Plan slide metadata mapping
export const businessPlanSlideMetadata: SlideMetadata[] = [
  { key: "title", title: "Introduction", number: 1 },
  { key: "mission", title: "Mission Statement", number: 2 },
  { key: "problem", title: "Problem Statement", number: 3 },
  { key: "solution", title: "Our Solution", number: 4 },
  { key: "business-solutions", title: "Business Solutions", number: 5 },
  { key: "value-proposition", title: "Value Proposition", number: 6 },
  { key: "market-data", title: "Market Data", number: 7 },
  { key: "market-opportunity", title: "Market Opportunity", number: 8 },
  { key: "target-customers", title: "Target Customer Profiles", number: 9 },
  { key: "go-to-market", title: "Go-to-Market Strategy", number: 10 },
  { key: "timeline", title: "Timeline", number: 11 },
  { key: "compliance", title: "Compliance", number: 12 },
  { key: "data-coverage", title: "Data Coverage", number: 13 },
  { key: "data-coverage-source", title: "Data Coverage Source", number: 14 },
  { key: "revenue-model", title: "Revenue Model", number: 15 },
  { key: "financial-projections", title: "Financial Projections", number: 16 },
  { key: "capital-plan", title: "Capital Plan", number: 17 },
  { key: "profitability", title: "Revenue & Profitability Model", number: 18 },
  { key: "service-charges", title: "Service Charges", number: 19 },
  { key: "scoring-component", title: "Scoring Component", number: 20 },
  { key: "competitive-analysis", title: "Competitive Analysis", number: 21 },
  { key: "team", title: "Team", number: 22 },
  { key: "contact", title: "Contact Information", number: 23 }
];

// Technical Plan slide metadata mapping
export const technicalPlanSlideMetadata: SlideMetadata[] = [
  { key: "title", title: "Technical Overview", number: 1 },
  { key: "infrastructure", title: "Infrastructure Overview", number: 2 },
  { key: "architecture", title: "Architecture Principles", number: 3 },
  { key: "system-architecture", title: "System Architecture Overview", number: 4 },
  { key: "defense-in-depth", title: "Defense in Depth", number: 5 },
  { key: "datacenter-dr", title: "Data Center & DR", number: 6 },
  { key: "data-collection-governance", title: "Data Collection Governance", number: 7 },
  { key: "proof-of-address", title: "Proof of Address", number: 8 },
  { key: "identity-anti-spoofing", title: "Identity Anti-Spoofing", number: 9 },
  { key: "risk-assessment", title: "Risk Assessment", number: 10 },
  { key: "open-banking-enrichment", title: "Open Banking Enrichment", number: 11 },
  { key: "platform-architecture", title: "Platform Architecture", number: 12 },
  { key: "security-control-plane", title: "Security Control Plane", number: 13 },
  { key: "member-credit-inquiry", title: "Member Credit Inquiry", number: 14 },
  { key: "data-submission-workflows", title: "Data Submission Workflows", number: 15 },
  { key: "consumer-services", title: "Consumer Services", number: 16 },
  { key: "koti-credit-score-methodology", title: "Koti Credit Score Methodology", number: 17 },
  { key: "team", title: "Team", number: 18 },
  { key: "contact", title: "Contact Information", number: 19 }
];

// Utility function to get slide metadata by key
export const getSlideMetadata = (slideKey: string, metadata: SlideMetadata[]): SlideMetadata | null => {
  return metadata.find(slide => slide.key === slideKey) || null;
};

// Utility function to get slide title by index
export const getSlideTitleByIndex = (index: number, metadata: SlideMetadata[]): string => {
  const slide = metadata[index];
  return slide ? slide.title : `Slide ${index + 1}`;
};