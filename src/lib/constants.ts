/** Central place for cross-cutting constants, especially the dApp URL,
 * so it's never hardcoded in more than one place. */
export const DAPP_URL = process.env.NEXT_PUBLIC_DAPP_URL ?? "https://app.celoht.com";
export const SITE_URL = "https://celoht.com";
export const BASE_PATH =
	process.env.GITHUB_ACTIONS && process.env.GITHUB_REPOSITORY
		? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
		: "";

export function assetPath(path: string) {
	return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

export const GITHUB_ORG_URL = "https://github.com/Celo-HT";
export const GITHUB_FLAGSHIP_URL = "https://github.com/celo-ht/celoht";
export const GITHUB_WEBSITE_URL = "https://github.com/celo-ht/website";
export const GITHUB_DAPP_URL = "https://github.com/celo-ht/dapp";
