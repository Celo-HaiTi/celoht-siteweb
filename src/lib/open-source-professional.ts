// Comprehensive Open Source data structure following international open-source organization standards

import {
  GITHUB_BRAND_URL,
  GITHUB_ADMIN_URL,
  GITHUB_BACKEND_URL,
  GITHUB_CONTRACTS_URL,
  GITHUB_DAPP_URL,
  GITHUB_DEMO_URL,
  GITHUB_DOCS_URL,
  GITHUB_FLAGSHIP_URL,
  GITHUB_GOVERNANCE_URL,
  GITHUB_INDEXER_URL,
  GITHUB_ORG_INFRASTRUCTURE_URL,
  GITHUB_RESEARCH_URL,
  GITHUB_BOOK_URL,
  GITHUB_SUPABASE_URL,
  GITHUB_WEBSITE_URL,
} from "@/lib/constants";

// === PRINCIPLES ===

export type Principle = {
  title: string;
  description: string;
};

export const openSourcePrinciples: Principle[] = [
  {
    title: "Transparency",
    description:
      "Important public information is documented and made accessible.",
  },
  {
    title: "Verifiability",
    description:
      "Public claims should be supported by information that can be independently examined.",
  },
  {
    title: "Accountability",
    description:
      "Project decisions, policies and development status should be clearly documented.",
  },
  {
    title: "Documentation",
    description:
      "Important knowledge should exist in durable public documentation.",
  },
  {
    title: "Open Development",
    description:
      "The project should distinguish publicly between current work, planned work and completed work.",
  },
  {
    title: "Long-Term Sustainability",
    description:
      "Public documentation and infrastructure should remain understandable and maintainable over time.",
  },
];

// === WHAT WE MAKE PUBLIC ===

export type PublicResource = {
  title: string;
  icon: string;
  description: string;
  internalLink: string;
};

export const whatWePublic: PublicResource[] = [
  {
    title: "Source Code",
    icon: "Code2",
    description: "Public software and technical infrastructure.",
    internalLink: "/open-source#projects",
  },
  {
    title: "Documentation",
    icon: "BookOpen",
    description:
      "Architecture, technical references, educational resources and project documentation.",
    internalLink: "/docs",
  },
  {
    title: "Governance",
    icon: "Users",
    description:
      "Public governance principles, decision frameworks and organizational documentation.",
    internalLink: "/governance",
  },
  {
    title: "Security",
    icon: "ShieldCheck",
    description:
      "Security policies, responsible disclosure and security practices.",
    internalLink: "/security",
  },
  {
    title: "Research",
    icon: "Search",
    description:
      "Technical research, specifications, analysis and evidence-based work.",
    internalLink: "/research",
  },
  {
    title: "Education",
    icon: "Lightbulb",
    description:
      "Educational resources related to blockchain, digital finance and CeloHT programs.",
    internalLink: "/education",
  },
  {
    title: "Policies",
    icon: "FileText",
    description:
      "Public rules covering governance, security, privacy, accessibility and other relevant areas.",
    internalLink: "/open-source#policies",
  },
  {
    title: "Roadmap",
    icon: "GitBranch",
    description: "Public development direction and project planning.",
    internalLink: "/roadmap",
  },
  {
    title: "Brand Resources",
    icon: "Lightbulb",
    description:
      "Official visual identity, brand story and public media resources.",
    internalLink: "/brand-identity",
  },
];

// === PROJECT STATUS ===

export type ProjectStatus =
  "ACTIVE" | "IN_DEVELOPMENT" | "PLANNED" | "EXPERIMENTAL" | "ARCHIVED";

export type PublicProject = {
  name: string;
  purpose: string;
  role: string;
  status: ProjectStatus;
  technology?: string;
  documentation?: string;
  lastUpdated?: string;
  category?: string;
};

export const publicProjects: PublicProject[] = [
  {
    name: "CeloHT Core",
    purpose:
      "Flagship CeloHT repository containing the project's institutional context, governance, technical direction, policies, roadmap, and ecosystem documentation.",
    role: "Core project and institutional reference",
    status: "ACTIVE",
    technology: "Markdown / Documentation / Governance",
    documentation: GITHUB_FLAGSHIP_URL,
    category: "Core & Public Layer",
  },
  {
    name: "CeloHT Website",
    purpose:
      "Official public website for CeloHT, providing the public information, transparency, documentation, ecosystem and community communication layer.",
    role: "Public information layer",
    status: "ACTIVE",
    technology: "TypeScript / Next.js",
    documentation: GITHUB_WEBSITE_URL,
    category: "Core & Public Layer",
  },
  {
    name: "CeloHT Documentation",
    purpose:
      "Central technical documentation covering architecture, governance, APIs, developer resources, education, research, policies and ecosystem documentation.",
    role: "Technical knowledge base",
    status: "ACTIVE",
    technology: "Markdown / Documentation",
    documentation: GITHUB_DOCS_URL,
    category: "Core & Public Layer",
  },
  {
    name: "CeloHT DApp",
    purpose:
      "CeloHT's public application layer connecting users with education, digital payments, wallet functionality, agent infrastructure and ecosystem services.",
    role: "Public application layer",
    status: "IN_DEVELOPMENT",
    technology: "TypeScript / React / Web3",
    documentation: GITHUB_DAPP_URL,
    category: "Core & Public Layer",
  },
  {
    name: "CeloHT Demo",
    purpose:
      "Experimental interactive demonstration of CeloHT workflows, interfaces and ecosystem concepts.",
    role: "Experimental demonstration",
    status: "EXPERIMENTAL",
    technology: "TypeScript / Web application",
    documentation: GITHUB_DEMO_URL,
    category: "Core & Public Layer",
  },
  {
    name: "CeloHT Backend",
    purpose:
      "Backend service layer providing authenticated APIs and application services connecting the CeloHT frontend, data layer and blockchain infrastructure.",
    role: "Backend application infrastructure",
    status: "IN_DEVELOPMENT",
    technology: "TypeScript / Node.js / HTTP API",
    documentation: GITHUB_BACKEND_URL,
    category: "Production Infrastructure",
  },
  {
    name: "CeloHT Indexer",
    purpose:
      "Blockchain indexing infrastructure responsible for processing relevant Celo network activity and making indexed data available to CeloHT application services.",
    role: "Blockchain data infrastructure",
    status: "IN_DEVELOPMENT",
    technology: "TypeScript / Celo RPC / PostgreSQL or Supabase",
    documentation: GITHUB_INDEXER_URL,
    category: "Production Infrastructure",
  },
  {
    name: "CeloHT Supabase",
    purpose:
      "Persistent data infrastructure containing database schema, migrations, Row Level Security and supporting data-layer configuration for CeloHT services.",
    role: "Persistent data layer",
    status: "IN_DEVELOPMENT",
    technology: "PostgreSQL / Supabase / RLS",
    documentation: GITHUB_SUPABASE_URL,
    category: "Production Infrastructure",
  },
  {
    name: "CeloHT Admin",
    purpose:
      "Administrative interface for authorized CeloHT operators and governance-controlled operational workflows.",
    role: "Administrative operations layer",
    status: "IN_DEVELOPMENT",
    technology: "TypeScript / React / Web application",
    documentation: GITHUB_ADMIN_URL,
    category: "Production Infrastructure",
  },
  {
    name: "CeloHT Smart Contracts",
    purpose:
      "On-chain smart contract infrastructure supporting CeloHT programs and blockchain-integrated functionality.",
    role: "On-chain infrastructure",
    status: "IN_DEVELOPMENT",
    technology: "Solidity / Hardhat / OpenZeppelin",
    documentation: GITHUB_CONTRACTS_URL,
    category: "Production Infrastructure",
  },
  {
    name: "CeloHT Governance",
    purpose:
      "Dedicated governance infrastructure for CeloHT decision-making, proposals, authorization, governance workflows and community-controlled operations.",
    role: "Governance infrastructure",
    status: "IN_DEVELOPMENT",
    technology: "Documentation / Governance tooling / Web3 infrastructure",
    documentation: GITHUB_GOVERNANCE_URL,
    category: "Governance, Research & Ecosystem",
  },
  {
    name: "CeloHT Research",
    purpose:
      "Public research repository containing technical research, specifications, RFCs, security analysis and evidence-based work related to the CeloHT ecosystem.",
    role: "Research and technical analysis",
    status: "ACTIVE",
    technology: "Markdown / Research / Technical Specifications",
    documentation: GITHUB_RESEARCH_URL,
    category: "Governance, Research & Ecosystem",
  },
  {
    name: "CeloHT Brand",
    purpose:
      "Official visual identity, logos, typography, colors, brand guidelines and approved visual resources.",
    role: "Brand and visual infrastructure",
    status: "ACTIVE",
    technology: "Design / Documentation / Brand Assets",
    documentation: GITHUB_BRAND_URL,
    category: "Governance, Research & Ecosystem",
  },
  {
    name: "CeloHT Investor Book",
    purpose:
      "Public institutional and ecosystem information resource explaining the CeloHT project, its model, development, infrastructure and opportunities for ecosystem support.",
    role: "Institutional and ecosystem resource",
    status: "ACTIVE",
    documentation: GITHUB_BOOK_URL,
    category: "Governance, Research & Ecosystem",
  },
  {
    name: "CeloHT Organization Infrastructure",
    purpose:
      "Organization-wide GitHub community health files, contribution standards, security policies, issue templates and repository governance defaults.",
    role: "Organization-level open-source infrastructure",
    status: "ACTIVE",
    technology: "GitHub / Markdown / Repository Governance",
    documentation: GITHUB_ORG_INFRASTRUCTURE_URL,
    category: "Governance, Research & Ecosystem",
  },
];

// === DOCUMENTATION ===

export type DocumentationCategory = {
  title: string;
  description: string;
  items: { label: string; href: string }[];
};

export const documentationCategories: DocumentationCategory[] = [
  {
    title: "Architecture",
    description: "How the public CeloHT ecosystem is structured.",
    items: [
      { label: "System Architecture", href: "/technology" },
      {
        label: "Smart Contract Architecture",
        href: "/technology/smart-contracts",
      },
    ],
  },
  {
    title: "Technical Documentation",
    description: "Technical concepts and implementation documentation.",
    items: [
      { label: "Technical Documentation", href: "/docs" },
      { label: "API Reference", href: "/docs" },
    ],
  },
  {
    title: "Governance Documentation",
    description: "Public governance information.",
    items: [{ label: "Governance Framework", href: "/governance" }],
  },
  {
    title: "Security Documentation",
    description: "Security policies and procedures.",
    items: [{ label: "Security Policy", href: "/security" }],
  },
  {
    title: "Education",
    description: "Educational resources.",
    items: [{ label: "Education Resources", href: "/education" }],
  },
  {
    title: "Research",
    description: "Research and technical analysis.",
    items: [{ label: "Research Repository", href: "/research" }],
  },
];

// === GOVERNANCE ===

export type GovernanceSection = {
  title: string;
  description: string;
  status?: "OPERATIONAL" | "PLANNED" | "PROPOSED";
  link?: string;
};

export const governanceInfo: GovernanceSection[] = [
  {
    title: "Organizational Structure",
    description:
      "CeloHT's organization is documented in the public governance repository.",
    status: "OPERATIONAL",
    link: "/governance",
  },
  {
    title: "Decision-Making Principles",
    description:
      "Public principles guide decision-making and organizational evolution.",
    status: "OPERATIONAL",
    link: "/governance",
  },
  {
    title: "Governance Documentation",
    description: "Full governance documentation is publicly available.",
    status: "OPERATIONAL",
    link: "/governance",
  },
];

// === TRANSPARENCY ===

export type TransparencyArea = {
  title: string;
  description: string;
  status?: string;
  link?: string;
};

export const transparencyAreas: TransparencyArea[] = [
  {
    title: "Project Transparency",
    description:
      "Current work is distinguished from planned work and completed work.",
    status: "ACTIVE",
    link: "/roadmap",
  },
  {
    title: "Documentation Transparency",
    description: "Important project documentation is publicly accessible.",
    status: "ACTIVE",
    link: "/docs",
  },
  {
    title: "Development Transparency",
    description: "Public project status and development history are available.",
    status: "ACTIVE",
    link: "/transparency",
  },
  {
    title: "Policy Transparency",
    description: "Relevant policies are accessible to the public.",
    status: "ACTIVE",
    link: "/open-source#policies",
  },
];

// === SECURITY ===

export type SecurityItem = {
  title: string;
  description: string;
  link?: string;
};

export const securityItems: SecurityItem[] = [
  {
    title: "Security Policy",
    description: "Public security reporting and handling procedures.",
    link: "/security",
  },
  {
    title: "Vulnerability Reporting",
    description: "Responsible disclosure process for security vulnerabilities.",
    link: "/security",
  },
  {
    title: "Wallet Safety",
    description: "Security resources for users.",
    link: "/security",
  },
  {
    title: "Smart Contract Security",
    description: "Smart contract security practices and documentation.",
    link: "/security",
  },
  {
    title: "Dependency Security",
    description: "Dependency management and security practices.",
    link: "/security",
  },
];

// === RESEARCH ===

export type ResearchItem = {
  title: string;
  type: "PAPER" | "RFC" | "SPECIFICATION" | "ANALYSIS" | "REPORT";
  status: "PUBLISHED" | "DRAFT" | "IN_PROGRESS";
  description?: string;
  link?: string;
};

// === POLICIES ===

export type PolicyItem = {
  title: string;
  description: string;
  link: string;
};

export const policies: PolicyItem[] = [
  {
    title: "Governance Policy",
    description: "Public governance framework and decision-making processes.",
    link: "/governance",
  },
  {
    title: "Security Policy",
    description: "Security practices and vulnerability reporting.",
    link: "/security",
  },
  {
    title: "Privacy Policy",
    description: "Privacy and data handling practices.",
    link: "/privacy",
  },
  {
    title: "Accessibility Policy",
    description: "Commitment to accessible design and inclusive practices.",
    link: "/accessibility",
  },
  {
    title: "Code of Conduct",
    description: "Community standards and expected behavior.",
    link: "/code-of-conduct",
  },
  {
    title: "No-Token Policy",
    description: "CeloHT's approach to tokenomics and financial structures.",
    link: "/no-token-policy",
  },
];

// === ROADMAP ===

export type RoadmapPhase = {
  title: string;
  status: "COMPLETED" | "CURRENT" | "NEXT" | "FUTURE";
  items: string[];
};

export const roadmapPhases: RoadmapPhase[] = [
  {
    title: "Completed",
    status: "COMPLETED",
    items: [
      "Launched public website and documentation",
      "Established governance framework",
      "Published brand guidelines",
      "Released initial DApp",
    ],
  },
  {
    title: "Current Work",
    status: "CURRENT",
    items: [
      "Expanding education resources",
      "Scaling agent network infrastructure",
      "Enhancing documentation",
      "Building community partnerships",
    ],
  },
  {
    title: "Near-Term (Next 6 months)",
    status: "NEXT",
    items: [
      "Advanced smart contract functionality",
      "Enhanced DApp features",
      "Research publication plan",
      "Community governance expansion",
    ],
  },
  {
    title: "Longer-Term (6-12+ months)",
    status: "FUTURE",
    items: [
      "Advanced on-chain infrastructure",
      "Full decentralized governance implementation",
      "Extended research initiatives",
      "Broader ecosystem partnerships",
    ],
  },
];

// === BRAND RESOURCES ===

export type BrandResource = {
  title: string;
  description: string;
  link: string;
};

export const brandResources: BrandResource[] = [
  {
    title: "Brand Identity",
    description: "Official CeloHT brand guidelines and usage standards.",
    link: "/brand-identity",
  },
  {
    title: "Logo & Visual Assets",
    description: "Logos, icons, and visual identity components.",
    link: "/brand-identity",
  },
  {
    title: "Color Palette",
    description: "Official color specifications and usage guidelines.",
    link: "/brand-identity",
  },
  {
    title: "Typography",
    description: "Typography standards and font guidelines.",
    link: "/brand-identity",
  },
  {
    title: "Brand Story",
    description: "CeloHT's mission, vision, and public narrative.",
    link: "/about",
  },
];

// === PUBLIC RESOURCES DIRECTORY ===

export type ResourceCategory = {
  title: string;
  icon: string;
  items: { label: string; href: string }[];
};

export const publicResourceDirectory: ResourceCategory[] = [
  {
    title: "Documentation",
    icon: "BookOpen",
    items: [
      { label: "Technical Documentation", href: "/docs" },
      { label: "Architecture", href: "/technology" },
      { label: "Education Resources", href: "/education" },
    ],
  },
  {
    title: "Governance",
    icon: "Users",
    items: [
      { label: "Governance Framework", href: "/governance" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Transparency", href: "/transparency" },
    ],
  },
  {
    title: "Security",
    icon: "ShieldCheck",
    items: [
      { label: "Security Policy", href: "/security" },
      { label: "Responsible Disclosure", href: "/security" },
      { label: "Wallet Safety", href: "/security" },
    ],
  },
  {
    title: "Research",
    icon: "Search",
    items: [
      { label: "Research Repository", href: "/research" },
      { label: "Technical Papers", href: "/research" },
      { label: "Analysis & Specs", href: "/research" },
    ],
  },
  {
    title: "Policies",
    icon: "FileText",
    items: [
      { label: "Code of Conduct", href: "/code-of-conduct" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "All Policies", href: "/open-source#policies" },
    ],
  },
  {
    title: "Brand",
    icon: "Lightbulb",
    items: [
      { label: "Brand Identity", href: "/brand-identity" },
      { label: "Logo & Assets", href: "/brand-identity" },
      { label: "Brand Story", href: "/about" },
    ],
  },
];

// === PROJECT STATUS DISPLAY ===

export function getStatusColor(status: ProjectStatus): string {
  const colors: Record<ProjectStatus, string> = {
    ACTIVE:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    IN_DEVELOPMENT:
      "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
    PLANNED:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
    EXPERIMENTAL:
      "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30",
    ARCHIVED:
      "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/30",
  };
  return colors[status];
}

export function getStatusLabel(status: ProjectStatus): string {
  const labels: Record<ProjectStatus, string> = {
    ACTIVE: "Active",
    IN_DEVELOPMENT: "In Development",
    PLANNED: "Planned",
    EXPERIMENTAL: "Experimental",
    ARCHIVED: "Archived",
  };
  return labels[status];
}
