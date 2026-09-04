import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPages =
  process.env.GITHUB_PAGES === "true" ||
  process.env.NEXT_PUBLIC_USE_PROJECT_BASE_PATH === "true";
const basePath = isGitHubPages ? `/${repoName || "celoht-siteweb"}` : "";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "docs.minipay.xyz" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
