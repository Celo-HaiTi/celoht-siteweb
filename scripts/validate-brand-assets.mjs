import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const root = process.cwd();
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://celoht.com";
const repoName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "celoht-siteweb";
const parsedSiteUrl = new URL(siteUrl);
const isProjectBasePath =
  process.env.NEXT_PUBLIC_USE_PROJECT_BASE_PATH === "true" &&
  parsedSiteUrl.hostname.endsWith("github.io") &&
  parsedSiteUrl.pathname.replace(/\/$/, "") === `/${repoName}`;
const basePath = isProjectBasePath ? `/${repoName}` : "";
const assets = ["celoht-logo.png", "freclean-logo.jpg"];
const outputRoot = resolve(root, "out");

function assert(condition, message) {
  if (!condition) throw new Error(`[brand-assets] ${message}`);
}

for (const asset of assets) {
  const sourcePath = resolve(root, "public", asset);
  const outputPath = join(outputRoot, asset);
  assert(existsSync(sourcePath), `missing source asset: public/${asset}`);
  assert(existsSync(outputPath), `missing build asset: out/${asset}`);
  assert(statSync(outputPath).size > 0, `empty build asset: out/${asset}`);
}

function htmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory()
      ? htmlFiles(path)
      : entry.name.endsWith(".html")
        ? [path]
        : [];
  });
}

const partnerPages = htmlFiles(outputRoot).filter((path) =>
  path.endsWith("/partners/index.html"),
);
assert(partnerPages.length === 1, "partners page was not generated");
const partnerHtml = readFileSync(partnerPages[0], "utf8");
assert(
  partnerHtml.includes(`${basePath}/freclean-logo.jpg`),
  "FreClean URL is missing the expected production path",
);
assert(
  partnerHtml.includes(`${basePath}/celoht-logo.png`),
  "CeloHT URL is missing the expected production path",
);

const homeHtml = readFileSync(join(outputRoot, "index.html"), "utf8");
const staticAssetUrls = [
  ...homeHtml.matchAll(/(?:href|src)="([^"]*\/_next\/static\/[^"]+)"/g),
].map((match) => new URL(match[1], siteUrl));
assert(staticAssetUrls.length > 0, "homepage has no generated Next.js assets");
for (const assetUrl of staticAssetUrls) {
  const expectedPrefix = `${basePath}/_next/static/`;
  assert(
    assetUrl.pathname.startsWith(expectedPrefix),
    `Next.js asset has an unexpected path: ${assetUrl.pathname}`,
  );
  const exportPath = assetUrl.pathname.slice(basePath.length + 1);
  assert(
    existsSync(join(outputRoot, exportPath)),
    `generated Next.js asset is missing: ${exportPath}`,
  );
}

console.log(
  `[brand-assets] validated ${assets.length} official logos for ${basePath || "root"} deployment`,
);
