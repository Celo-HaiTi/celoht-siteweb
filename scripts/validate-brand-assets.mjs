import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const root = process.cwd();
const basePath = process.env.GITHUB_ACTIONS && process.env.GITHUB_REPOSITORY && process.env.NEXT_PUBLIC_USE_PROJECT_BASE_PATH !== "false"
  ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
  : "";
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
    return entry.isDirectory() ? htmlFiles(path) : entry.name.endsWith(".html") ? [path] : [];
  });
}

const partnerPages = htmlFiles(outputRoot).filter((path) => path.endsWith("/partners/index.html"));
assert(partnerPages.length === 1, "partners page was not generated");
const partnerHtml = readFileSync(partnerPages[0], "utf8");
assert(partnerHtml.includes(`${basePath}/freclean-logo.jpg`), "FreClean URL is missing the expected production path");
assert(partnerHtml.includes(`${basePath}/celoht-logo.png`), "CeloHT URL is missing the expected production path");

console.log(`[brand-assets] validated ${assets.length} official logos for ${basePath || "root"} deployment`);