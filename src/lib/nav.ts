export type NavItem = { label: string; href: string; description?: string };

export const primaryNav: NavItem[] = [
  {
    label: "About",
    href: "/about",
    description: "Who CeloHT is and why it exists",
  },
  {
    label: "Technology",
    href: "/technology",
    description: "How the ecosystem works on Celo",
  },
  {
    label: "Impact",
    href: "/impact",
    description: "Public evidence of the programs in motion",
  },
  {
    label: "Transparency",
    href: "/transparency",
    description: "Governance, financial reporting, and public accountability",
  },
  {
    label: "Resources",
    href: "/docs",
    description: "Documentation, research, and learning materials",
  },
  {
    label: "Community",
    href: "/community",
    description: "Ways to participate and support the mission",
  },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Organization",
    items: [
      { label: "About", href: "/about" },
      { label: "Mission", href: "/mission" },
      { label: "Vision", href: "/vision" },
      { label: "Governance", href: "/governance" },
      { label: "Transparency", href: "/transparency" },
      { label: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    heading: "Pillars",
    items: [
      { label: "Education", href: "/education" },
      { label: "Agent Network", href: "/agent-network" },
      { label: "Reforestation", href: "/reforestation" },
      { label: "Technology", href: "/technology" },
    ],
  },
  {
    heading: "Community",
    items: [
      { label: "Community", href: "/community" },
      { label: "Partners", href: "/partners" },
      { label: "Documentation", href: "/documentation" },
      { label: "Blog", href: "/blog" },
      { label: "News", href: "/news" },
    ],
  },
  {
    heading: "Support",
    items: [
      { label: "FAQ", href: "/faq" },
      { label: "Support", href: "/support" },
      { label: "Contact", href: "/contact" },
      { label: "Donate", href: "/donate" },
      { label: "Media Kit", href: "/media-kit" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
      { label: "Security", href: "/security" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Code of Conduct", href: "/code-of-conduct" },
    ],
  },
];

/** Flat, searchable index of every page on the site. */
export const searchIndex: NavItem[] = [
  {
    label: "Home",
    href: "/",
    description:
      "CeloHT: financial inclusion, education, agent network, reforestation",
  },
  {
    label: "About",
    href: "/about",
    description: "Who CeloHT is, and who it isn't",
  },
  {
    label: "Mission",
    href: "/mission",
    description: "Expand financial inclusion through three pillars",
  },
  {
    label: "Vision",
    href: "/vision",
    description: "Where CeloHT is headed by 2030",
  },
  {
    label: "Values",
    href: "/values",
    description: "The principles behind CeloHT's work",
  },
  {
    label: "History",
    href: "/history",
    description: "The documented origin and development of CeloHT",
  },
  {
    label: "Project Vision",
    href: "/project-vision",
    description: "The long-term CeloHT project direction",
  },
  {
    label: "Education",
    href: "/education",
    description: "Financial literacy and Web3 fundamentals in Creole",
  },
  {
    label: "Agent Network",
    href: "/agent-network",
    description: "Community agents, cash-in/cash-out, Valora support",
  },
  {
    label: "Reforestation",
    href: "/reforestation",
    description: "Tree planting rewarded in USDm",
  },
  {
    label: "Plant a Tree",
    href: "/en/reforestation/plant-a-tree",
    description:
      "A practical guide to planting, protecting, and monitoring a young tree",
  },
  {
    label: "Technology",
    href: "/technology",
    description: "Celo, CELO, USDm, and Valora compatibility",
  },
  {
    label: "Technology Architecture",
    href: "/technology/architecture",
    description: "A plain-language architecture overview for everyone",
  },
  {
    label: "Smart Contracts",
    href: "/technology/smart-contracts",
    description: "Human-readable overview of CeloHT contract components",
  },
  {
    label: "DApp",
    href: "/dapp",
    description:
      "The product layer used for education, payments, and community tools",
  },
  {
    label: "Agents",
    href: "/agents",
    description: "The community agent model and responsibilities",
  },
  {
    label: "Impact",
    href: "/impact",
    description: "Metrics: agents trained, people educated, trees planted",
  },
  {
    label: "Community",
    href: "/community",
    description: "How to get involved",
  },
  {
    label: "Partners",
    href: "/partners",
    description: "Verified partnerships and ecosystem relationships",
  },
  {
    label: "Roadmap",
    href: "/roadmap",
    description: "Phased plan through 2028",
  },
  {
    label: "Governance",
    href: "/governance",
    description: "How decisions get made",
  },
  {
    label: "No-Token Policy",
    href: "/no-token-policy",
    description: "CeloHT's explicit no-token policy",
  },
  {
    label: "Brand Identity",
    href: "/brand-identity",
    description: "Public brand identity and accurate project language",
  },
  {
    label: "Transparency",
    href: "/transparency",
    description: "Public reporting and open data",
  },
  {
    label: "On-chain Transparency",
    href: "/transparency/on-chain",
    description: "What can be independently audited on-chain",
  },
  {
    label: "Financial Transparency",
    href: "/transparency/financial",
    description: "Funding, allocation, and reporting overview",
  },
  {
    label: "DApp Services",
    href: "/dapp/services",
    description: "Documented CeloHT DApp services",
  },
  {
    label: "DApp Deployment",
    href: "/dapp/deployment",
    description: "DApp availability and deployment status",
  },
  {
    label: "Open Source",
    href: "/open-source",
    description: "The repositories and resources built in public",
  },
  {
    label: "Documents",
    href: "/docs",
    description: "Documentation portal for all audiences",
  },
  {
    label: "Documentation",
    href: "/documentation",
    description: "Legacy documentation landing page and canonical references",
  },
  {
    label: "Research",
    href: "/research",
    description: "Research, RFCs, and technical studies",
  },
  {
    label: "Media Kit",
    href: "/media-kit",
    description: "Logo, brand assets, press description",
  },
  {
    label: "Blog",
    href: "/blog",
    description: "Longer-form posts from the CeloHT team",
  },
  { label: "News", href: "/news", description: "Updates and announcements" },
  { label: "FAQ", href: "/faq", description: "Answers to common questions" },
  { label: "Support", href: "/support", description: "Get help" },
  {
    label: "Donate",
    href: "/donate",
    description: "Support CeloHT's work directly",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Official channels and how to reach us",
  },
  {
    label: "Privacy Policy",
    href: "/privacy",
    description: "What we collect and why",
  },
  { label: "Terms", href: "/terms", description: "Terms of use" },
  { label: "Cookies", href: "/cookies", description: "Cookie policy" },
  {
    label: "Security",
    href: "/security",
    description: "Vulnerability reporting and security practices",
  },
  {
    label: "Risks and Protections",
    href: "/security/risks",
    description: "User, wallet, network, and contract risks",
  },
  {
    label: "Funding Model",
    href: "/funding",
    description: "Published funding sources and allocation principles",
  },
  {
    label: "Accessibility",
    href: "/accessibility",
    description: "Our accessibility commitment",
  },
  {
    label: "Code of Conduct",
    href: "/code-of-conduct",
    description: "Community standards",
  },
];
