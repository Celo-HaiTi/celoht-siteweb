"use client";

const MARKET_ENDPOINT =
  "https://api.coingecko.com/api/v3/simple/price?ids=celo,celo-dollar&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true";
const REQUEST_TIMEOUT = 4000;
const CACHE_KEY = "celoht-live-data-v1";
const CACHE_MAX_AGE = 10 * 60 * 1000;

export type PriceEntry = {
  usd: number | null;
  change: number | null;
  updatedAt: number | null;
};

export type LiveData = {
  celo: PriceEntry | null;
  usdm: PriceEntry | null;
};

let cachedData: LiveData | null = null;
type RefreshResult = {
  data: LiveData;
  marketError: boolean;
};

let request: Promise<RefreshResult> | null = null;

function readCache() {
  if (cachedData) return cachedData;
  if (typeof window === "undefined") return null;

  try {
    const stored = window.sessionStorage.getItem(CACHE_KEY);
    if (stored) cachedData = JSON.parse(stored) as LiveData;
  } catch {
    // Storage is an optional performance enhancement.
  }

  return cachedData;
}

function writeCache(data: LiveData) {
  cachedData = data;
  try {
    window.sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    // Storage is an optional performance enhancement.
  }
}

function fetchWithTimeout(input: RequestInfo | URL, init?: RequestInit) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

  return fetch(input, { ...init, signal: controller.signal }).finally(() => {
    window.clearTimeout(timeout);
  });
}

async function fetchMarketData(): Promise<Pick<LiveData, "celo" | "usdm">> {
  const response = await fetchWithTimeout(MARKET_ENDPOINT, {
    headers: { accept: "application/json" },
  });

  if (!response.ok) throw new Error("CoinGecko market data request failed");

  const data = await response.json();
  const celo = data?.celo ?? {};
  const usdm = data?.["celo-dollar"] ?? {};
  const toPriceEntry = (entry: Record<string, unknown>): PriceEntry => ({
    usd: typeof entry.usd === "number" ? entry.usd : null,
    change: typeof entry.usd_24h_change === "number" ? entry.usd_24h_change : null,
    updatedAt: typeof entry.last_updated_at === "number" ? entry.last_updated_at : null,
  });

  return { celo: toPriceEntry(celo), usdm: toPriceEntry(usdm) };
}

export function getCachedLiveData() {
  return readCache();
}

export function isLiveDataStale(data: LiveData | null) {
  const timestamps = [data?.celo?.updatedAt, data?.usdm?.updatedAt]
    .filter((timestamp): timestamp is number => typeof timestamp === "number")
    .map((timestamp) => timestamp * 1000);

  if (timestamps.length === 0) return true;
  return Date.now() - Math.max(...timestamps) > CACHE_MAX_AGE;
}

export function refreshLiveData() {
  if (request) return request;

  request = Promise.allSettled([fetchMarketData()])
    .then(([marketResult]) => {
      const current = readCache();
      const data: LiveData = {
        celo: marketResult.status === "fulfilled" ? marketResult.value.celo : current?.celo ?? null,
        usdm: marketResult.status === "fulfilled" ? marketResult.value.usdm : current?.usdm ?? null,
      };
      writeCache(data);
      return {
        data,
        marketError: marketResult.status === "rejected",
      };
    })
    .finally(() => {
      request = null;
    });

  return request;
}

export function resetLiveDataCache() {
  cachedData = null;
  request = null;
  try {
    window.sessionStorage.removeItem(CACHE_KEY);
  } catch {
    // Storage is an optional performance enhancement.
  }
}