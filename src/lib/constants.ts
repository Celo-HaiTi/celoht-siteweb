/** Central place for cross-cutting constants, especially the dApp URL,
 * so it's never hardcoded in more than one place. */
export const DAPP_URL = process.env.NEXT_PUBLIC_DAPP_URL ?? "https://app.celoht.com";
export const DISCORD_URL = "https://discord.gg/BZk3nS4KM6";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://celoht.com";
export const BASE_PATH =
	process.env.GITHUB_ACTIONS && process.env.GITHUB_REPOSITORY && process.env.NEXT_PUBLIC_USE_PROJECT_BASE_PATH === "true"
		? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
		: "";

export function assetPath(path: string) {
	return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

export const GITHUB_ORG_URL = "https://github.com/Celo-HaiTi";
export const GITHUB_FLAGSHIP_URL = "https://github.com/Celo-HaiTi/CeloHT";
export const GITHUB_WEBSITE_URL = "https://github.com/Celo-HaiTi/celoht-siteweb";
export const GITHUB_DAPP_URL = "https://github.com/Celo-HaiTi/celoht-dapp";
export const GITHUB_DOCS_URL = "https://github.com/Celo-HaiTi/celoht-docs";
export const GITHUB_CONTRACTS_URL = "https://github.com/Celo-HaiTi/celoht-smart-contracts";
export const GITHUB_BRAND_URL = "https://github.com/Celo-HaiTi/celoht-brand";
export const GITHUB_RESEARCH_URL = "https://github.com/Celo-HaiTi/celoht-research";
export const GITHUB_DEMO_URL = "https://github.com/Celo-HaiTi/celoht-demo";
export const GITHUB_BOOK_URL = "https://github.com/Celo-HaiTi/celoht-investor-book";
