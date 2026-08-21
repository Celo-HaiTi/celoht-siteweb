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
  { name: "celoht-docs", description: "Architecture, governance, APIs, education, developer guides, RFCs, and community resources.", category: "Documentation", href: GITHUB_DOCS_URL },
  { name: "celoht-dapp", description: "The public DApp and smart-contract ecosystem for CeloHT services and participation.", category: "Product", language: "TypeScript", href: GITHUB_DAPP_URL },
  { name: "celoht-smart-contracts", description: "Solidity contracts for education, community agents, impact tracking, and future Web3 infrastructure.", category: "Smart contracts", language: "Solidity", href: GITHUB_CONTRACTS_URL },
  { name: "celoht-research", description: "Research papers, RFCs, technical specifications, security studies, and evidence-based analyses.", category: "Research", href: GITHUB_RESEARCH_URL },
  { name: "celoht-brand", description: "Official logos, brand guidelines, messaging, typography, colors, and media resources.", category: "Brand", href: GITHUB_BRAND_URL },
  { name: "celoht-demo", description: "An interactive demo for reviewing simulated CeloHT wallet, education, agent, and reforestation flows.", category: "Demo", language: "TypeScript", href: GITHUB_DEMO_URL },
];

export const openSourceDocuments = [
  { label: "Governance policy", href: `${GITHUB_FLAGSHIP_URL}/blob/main/GOVERNANCE.md`, external: true },
  { label: "Security policy", href: `${GITHUB_WEBSITE_URL}/blob/main/SECURITY.md`, external: true },
  { label: "Contribution guide", href: `${GITHUB_WEBSITE_URL}/blob/main/CONTRIBUTING.md`, external: true },
  { label: "Roadmap", href: `${GITHUB_FLAGSHIP_URL}/blob/main/ROADMAP.md`, external: true },
  { label: "Website architecture", href: `${GITHUB_WEBSITE_URL}/blob/main/ARCHITECTURE.md`, external: true },
  { label: "Documentation portal", href: "/docs", external: false },
  { label: "Transparency", href: "/transparency", external: false },
  { label: "Accessibility", href: "/accessibility", external: false },
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