export type NavItem = { label: string; href: string; description?: string };

export const primaryNav: NavItem[] = [
  { label: "About", href: "/about", description: "Vision, mission, and how CeloHT started" },
  {
    label: "Ecosystem",
    href: "/technology",
    description: "The CeloHT stack and the infrastructure it builds on",
  },
  {
    label: "Education",
    href: "/education",
    description: "Financial and Web3 literacy in Haitian Creole",
  },
  { label: "Impact", href: "/impact", description: "Metrics across all three pillars" },
  {
    label: "Developers",
    href: "/developers",
    description: "Docs, architecture, and how to contribute",
  },
  {
    label: "Open Source",
    href: "/open-source",
    description: "Repositories, documentation, and contribution paths",
  },
  { label: "Community", href: "/community", description: "Ways to participate and stay connected" },
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
      { label: "Developers", href: "/developers" },
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
      { label: "Contributing", href: "/contributing" },
    ],
  },
];

/** Flat, searchable index of every page on the site. */
export const searchIndex: NavItem[] = [
  {
    label: "Home",
    href: "/",
    description: "CeloHT: financial inclusion, education, agent network, reforestation",
  },
  { label: "About", href: "/about", description: "Who CeloHT is, and who it isn't" },
  {
    label: "Mission",
    href: "/mission",
    description: "Expand financial inclusion through three pillars",
  },
  { label: "Vision", href: "/vision", description: "Where CeloHT is headed by 2030" },
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
  { label: "Reforestation", href: "/reforestation", description: "Tree planting rewarded in USDm" },
  {
    label: "Technology",
    href: "/technology",
    description: "Celo, CELO, USDm, and Valora compatibility",
  },
  {
    label: "Impact",
    href: "/impact",
    description: "Metrics: agents trained, people educated, trees planted",
  },
  { label: "Community", href: "/community", description: "How to get involved" },
  { label: "Partners", href: "/partners", description: "Who we work with, and how" },
  { label: "Roadmap", href: "/roadmap", description: "Phased plan through 2028" },
  { label: "Governance", href: "/governance", description: "How decisions get made" },
  { label: "Transparency", href: "/transparency", description: "Public reporting and open data" },
  {
    label: "Developers",
    href: "/developers",
    description: "Contributing, repository structure, dApp plans",
  },
  {
    label: "Open Source",
    href: "/open-source",
    description: "The repositories and resources built in public",
  },
  { label: "Documentation", href: "/documentation", description: "Full documentation portal" },
  { label: "Media Kit", href: "/media-kit", description: "Logo, brand assets, press description" },
  { label: "Blog", href: "/blog", description: "Longer-form posts from the CeloHT team" },
  { label: "News", href: "/news", description: "Updates and announcements" },
  { label: "FAQ", href: "/faq", description: "Answers to common questions" },
  { label: "Support", href: "/support", description: "Get help" },
  { label: "Donate", href: "/donate", description: "Support CeloHT's work directly" },
  { label: "Contact", href: "/contact", description: "Official channels and how to reach us" },
  { label: "Privacy Policy", href: "/privacy", description: "What we collect and why" },
  { label: "Terms", href: "/terms", description: "Terms of use" },
  { label: "Cookies", href: "/cookies", description: "Cookie policy" },
  {
    label: "Security",
    href: "/security",
    description: "Vulnerability reporting and security practices",
  },
  { label: "Accessibility", href: "/accessibility", description: "Our accessibility commitment" },
  { label: "Code of Conduct", href: "/code-of-conduct", description: "Community standards" },
  { label: "Contributing", href: "/contributing", description: "How to contribute" },
];
