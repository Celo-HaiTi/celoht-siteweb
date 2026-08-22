import {
  GITHUB_BRAND_URL,
  GITHUB_CONTRACTS_URL,
  GITHUB_DAPP_URL,
  GITHUB_DEMO_URL,
  GITHUB_DOCS_URL,
  GITHUB_FLAGSHIP_URL,
  GITHUB_ORG_URL,
  GITHUB_RESEARCH_URL,
  GITHUB_WEBSITE_URL,
} from "@/lib/constants";

export type OpenSourceRepository = {
  name: string;
  description: string;
  category: string;
  language?: string;
  href: string;
};

export const openSourceRepositories: OpenSourceRepository[] = [
  { name: "CeloHT", description: "Flagship project repository for CeloHT's public direction, governance, and ecosystem context.", category: "Flagship", href: GITHUB_FLAGSHIP_URL },
  { name: "celoht-siteweb", description: "The official static-first website and public information layer for CeloHT.", category: "Website", language: "TypeScript", href: GITHUB_WEBSITE_URL },
  { name: "celoht-docs", description: "Architecture, governance, APIs, education, technical guides, RFCs, and community resources.", category: "Documentation", href: GITHUB_DOCS_URL },
  { name: "celoht-dapp", description: "The public DApp and smart-contract ecosystem for CeloHT services and participation.", category: "Product", language: "TypeScript", href: GITHUB_DAPP_URL },
  { name: "celoht-smart-contracts", description: "Solidity contracts for education, community agents, impact tracking, and future Web3 infrastructure.", category: "Smart contracts", language: "Solidity", href: GITHUB_CONTRACTS_URL },
  { name: "celoht-research", description: "Research papers, RFCs, technical specifications, security studies, and evidence-based analyses.", category: "Research", href: GITHUB_RESEARCH_URL },
  { name: "celoht-brand", description: "Official logos, brand guidelines, messaging, typography, colors, and media resources.", category: "Brand", href: GITHUB_BRAND_URL },
  { name: "celoht-demo", description: "An interactive demo for reviewing simulated CeloHT wallet, education, agent, and reforestation flows.", category: "Demo", language: "TypeScript", href: GITHUB_DEMO_URL },
];

export const publicDocumentationLinks = [
  { label: "Governance", href: "/governance", icon: "Users" },
  { label: "Security", href: "/security", icon: "Shield" },
  { label: "Architecture", href: "/technology", icon: "Layers" },
  { label: "Roadmap", href: "/roadmap", icon: "Map" },
  { label: "Privacy", href: "/privacy", icon: "Lock" },
  { label: "Accessibility", href: "/accessibility", icon: "Eye" },
  { label: "Code of Conduct", href: "/code-of-conduct", icon: "Heart" },
  { label: "Research", href: "/research", icon: "Beaker" },
  { label: "Transparency", href: "/transparency", icon: "Eye" },
];

export const openSourceDocuments = [
  { label: "Governance policy", href: "/governance", external: false },
  { label: "Security policy", href: "/security", external: false },
  { label: "Roadmap", href: "/roadmap", external: false },
  { label: "Website architecture", href: "/technology", external: false },
  { label: "Documentation portal", href: "/docs", external: false },
  { label: "Transparency", href: "/transparency", external: false },
  { label: "Accessibility", href: "/accessibility", external: false },
];

export type PublicEcosystemProject = {
  name: string;
  role: string;
  description: string;
  icon: string;
};

export const publicEcosystemProjects: PublicEcosystemProject[] = [
  {
    name: "CeloHT",
    role: "Core Repository",
    description: "Public repository containing fundamental information about CeloHT's direction, governance, and ecosystem context.",
    icon: "Package",
  },
  {
    name: "CeloHT Website",
    role: "Public Information Layer",
    description: "The official static-first website built for transparency, documentation, and direct community communication.",
    icon: "Globe",
  },
  {
    name: "CeloHT Documentation",
    role: "Technical Resources",
    description: "Architecture guides, APIs, education materials, technical resources, and RFCs for technical understanding.",
    icon: "BookOpen",
  },
  {
    name: "CeloHT DApp",
    role: "Public Application",
    description: "The public DApp providing services, education interfaces, and participation mechanisms within the Celo ecosystem.",
    icon: "Zap",
  },
  {
    name: "CeloHT Smart Contracts",
    role: "On-Chain Infrastructure",
    description: "Solidity contracts for education programs, community agents, impact tracking, and Web3 infrastructure.",
    icon: "Code2",
  },
  {
    name: "CeloHT Research",
    role: "Technical Analysis",
    description: "Research papers, RFCs, technical specifications, security studies, and evidence-based analysis.",
    icon: "Search",
  },
  {
    name: "CeloHT Brand",
    role: "Visual Resources",
    description: "Official logos, brand guidelines, messaging standards, typography, colors, and media assets.",
    icon: "Lightbulb",
  },
  {
    name: "CeloHT Demo",
    role: "Interactive Demonstration",
    description: "An interactive demonstration of CeloHT wallet, education interfaces, agents, and reforestation workflows.",
    icon: "Layers",
  },
];

export const technologyStack = [
  "Next.js App Router with static export",
  "TypeScript in strict mode",
  "Tailwind CSS v4",
  "Motion for the animated hero",
  "MDX for long-form content",
  "Vitest and Testing Library",
  "Playwright end-to-end testing",
  "GitHub Actions, CodeQL, and secret scanning",
];

export { GITHUB_ORG_URL };