"use client";

import { Activity, AlertTriangle, ArrowUpRight, CircleDollarSign, Coins, Wifi, WifiOff } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const MARKET_ENDPOINT =
  "https://api.coingecko.com/api/v3/simple/price?ids=celo,celo-dollar&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true";
const CELO_RPC_URL = process.env.NEXT_PUBLIC_CELO_RPC_URL ?? "https://forno.celo.org";
const CELO_CHAIN_ID = 42220;
const REFRESH_INTERVAL = 120000;
const REQUEST_TIMEOUT = 10000;

type PriceEntry = {
  usd: number | null;
  change: number | null;
  updatedAt: number | null;
};

type NetworkEntry = {
  ok: boolean;
  chainId: number | null;
  latestBlock: number | null;
  updatedAt: number | null;
};

type LiveState = {
  loading: boolean;
  marketError: boolean;
  networkError: boolean;
  celo: PriceEntry | null;
  usdm: PriceEntry | null;
  network: NetworkEntry | null;
};

async function fetchWithTimeout(input: RequestInfo | URL, init?: RequestInit) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

  try {
    return await fetch(input, { ...init, signal: controller.signal });
  } finally {
    window.clearTimeout(timeout);
  }
}

function formatPrice(value: number | null) {
  if (value === null || Number.isNaN(value)) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: value < 1 ? 3 : 2,
    maximumFractionDigits: value < 1 ? 4 : 2,
  }).format(value);
}

function formatChange(value: number | null) {
  if (value === null || Number.isNaN(value)) return "—";
  const sign = value >= 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

function formatRelativeTime(timestamp: number | null) {
  if (!timestamp) return "Updated recently";

  const diff = Math.max(0, Date.now() / 1000 - timestamp);

  if (diff < 60) return "Updated just now";
  if (diff < 3600) return `Updated ${Math.round(diff / 60)} min ago`;
  if (diff < 86400) return `Updated ${Math.round(diff / 3600)} hr ago`;
  return `Updated ${Math.round(diff / 86400)} day(s) ago`;
}

async function fetchMarketData(): Promise<{ celo: PriceEntry; usdm: PriceEntry }> {
  const response = await fetchWithTimeout(MARKET_ENDPOINT, {
    cache: "no-store",
    headers: { accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error("CoinGecko market data request failed");
  }

  const data = await response.json();

  const celo = data?.celo ?? {};
  const usdm = data?.["celo-dollar"] ?? {};

  return {
    celo: {
      usd: typeof celo.usd === "number" ? celo.usd : null,
      change: typeof celo.usd_24h_change === "number" ? celo.usd_24h_change : null,
      updatedAt: typeof celo.last_updated_at === "number" ? celo.last_updated_at : null,
    },
    usdm: {
      usd: typeof usdm.usd === "number" ? usdm.usd : null,
      change: typeof usdm.usd_24h_change === "number" ? usdm.usd_24h_change : null,
      updatedAt: typeof usdm.last_updated_at === "number" ? usdm.last_updated_at : null,
    },
  };
}

async function fetchNetworkData(): Promise<NetworkEntry> {
  const payload = {
    jsonrpc: "2.0",
    method: "eth_chainId",
    params: [],
    id: 1,
  };

  const chainResponse = await fetchWithTimeout(CELO_RPC_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!chainResponse.ok) {
    throw new Error("Celo RPC request failed");
  }

  const chainJson = await chainResponse.json();
  if (chainJson?.error) throw new Error("Celo RPC returned a chain ID error");
  const chainId = Number.parseInt(chainJson?.result ?? "0x0", 16);

  const blockPayload = {
    jsonrpc: "2.0",
    method: "eth_blockNumber",
    params: [],
    id: 2,
  };

  const blockResponse = await fetchWithTimeout(CELO_RPC_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blockPayload),
    cache: "no-store",
  });

  if (!blockResponse.ok) {
    throw new Error("Celo RPC block request failed");
  }

  const blockJson = await blockResponse.json();
  if (blockJson?.error) throw new Error("Celo RPC returned a block error");
  const latestBlock = blockJson?.result ? Number.parseInt(blockJson.result, 16) : null;

  return {
    ok: chainId === CELO_CHAIN_ID && latestBlock !== null,
    chainId: Number.isFinite(chainId) ? chainId : null,
    latestBlock: Number.isFinite(latestBlock) ? latestBlock : null,
    updatedAt: Date.now() / 1000,
  };
}

function AssetTile({
  label,
  symbol,
  value,
  change,
  updatedAt,
  state,
  kind,
  icon,
}: {
  label: string;
  symbol: string;
  value: string;
  change: string;
  updatedAt: string;
  state: "up" | "down" | "neutral" | "error";
  kind: "price" | "network";
  icon: "celo" | "usdm" | "network";
}) {
  const accentClass =
    state === "up"
      ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
      : state === "down"
        ? "bg-rose-50 text-rose-700 ring-rose-200"
        : state === "error"
          ? "bg-amber-50 text-amber-700 ring-amber-200"
          : "bg-slate-100 text-slate-700 ring-slate-200";

  return (
    <div className="rounded-2xl border border-navy-700/15 bg-parchment-50/85 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            {label}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-950 text-gold-500" aria-hidden="true">
              {icon === "celo" ? <Coins size={16} /> : icon === "usdm" ? <CircleDollarSign size={16} /> : <Activity size={16} />}
            </span>
            <span className="font-display text-xl font-semibold text-slate-900 dark:text-slate-50">{symbol}</span>
            <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.62rem] font-semibold ring-1 ${accentClass}`}>
              {kind === "network" ? (
                <Activity size={10} aria-hidden="true" />
              ) : state === "down" ? (
                <ArrowUpRight size={10} aria-hidden="true" className="rotate-90" />
              ) : (
                <ArrowUpRight size={10} aria-hidden="true" />
              )}
              {kind === "network" ? "Live" : change}
            </span>
          </div>
        </div>
        {kind === "network" ? (
          state === "error" ? (
            <WifiOff size={18} aria-hidden="true" className="text-amber-600" />
          ) : (
            <Wifi size={18} aria-hidden="true" className="text-emerald-600" />
          )
        ) : null}
      </div>

      <div className="mt-4">
        <p className="text-lg font-semibold text-slate-900 dark:text-slate-50">{value}</p>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{updatedAt}</p>
      </div>
    </div>
  );
}

type AssetTileState = "up" | "down" | "neutral" | "error";

type MarketTile = {
  label: string;
  symbol: string;
  value: string;
  change: string;
  updatedAt: string;
  state: AssetTileState;
  kind: "price" | "network";
  icon: "celo" | "usdm" | "network";
};

export function LiveInfoBar() {
  const [state, setState] = useState<LiveState>({
    loading: true,
    marketError: false,
    networkError: false,
    celo: null,
    usdm: null,
    network: null,
  });

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      const [marketResult, networkResult] = await Promise.allSettled([fetchMarketData(), fetchNetworkData()]);
      if (!isMounted) return;

      setState((current) => ({
        loading: false,
        marketError: marketResult.status === "rejected",
        networkError: networkResult.status === "rejected",
        celo: marketResult.status === "fulfilled" ? marketResult.value.celo : current.celo,
        usdm: marketResult.status === "fulfilled" ? marketResult.value.usdm : current.usdm,
        network: networkResult.status === "fulfilled" ? networkResult.value : current.network,
      }));
    };

    load();
    const timer = window.setInterval(load, REFRESH_INTERVAL);

    return () => {
      isMounted = false;
      window.clearInterval(timer);
    };
  }, []);

  const marketData = useMemo<MarketTile[]>(() => {
    const tileState = (value: number | null): AssetTileState => {
      if (value === null) return "error";
      return value >= 0 ? "up" : "down";
    };

    return [
      {
        label: "CELO",
        symbol: "CELO",
        value: formatPrice(state.celo?.usd ?? null),
        change: formatChange(state.celo?.change ?? null),
        updatedAt: formatRelativeTime(state.celo?.updatedAt ?? null),
        state: tileState(state.celo?.change ?? null),
        kind: "price" as const,
        icon: "celo" as const,
      },
      {
        label: "USDm",
        symbol: "USDm",
        value: formatPrice(state.usdm?.usd ?? null),
        change: formatChange(state.usdm?.change ?? null),
        updatedAt: formatRelativeTime(state.usdm?.updatedAt ?? null),
        state: tileState(state.usdm?.change ?? null),
        kind: "price" as const,
        icon: "usdm" as const,
      },
      {
        label: "Celo Network",
        symbol: state.network?.ok ? "Operational" : "Unable to verify",
        value: state.network?.ok ? `Chain ${state.network.chainId}` : "RPC unavailable",
        change: state.network?.ok ? "Live" : "Not verified",
        updatedAt: state.network?.latestBlock
          ? `Latest block #${state.network.latestBlock.toLocaleString()}`
          : "Unable to verify",
        state: state.network?.ok ? "up" : "error",
        kind: "network" as const,
        icon: "network" as const,
      },
    ];
  }, [state]);

  return (
    <section aria-label="Live CeloHT market data" aria-live="polite" className="border-b border-slate-200 bg-[#f1f5fa]/95 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            <Activity size={10} aria-hidden="true" className="text-emerald-600" />
            Live market & network
          </div>
          <p className="text-[0.62rem] text-slate-500 dark:text-slate-400">Market data provided by CoinGecko.</p>
        </div>

        {state.loading && !state.celo && !state.usdm && !state.network ? (
          <div role="status" aria-live="polite" aria-label="Loading live market data" className="grid gap-3 md:grid-cols-3">
            <span className="sr-only">Loading live market data</span>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="animate-pulse rounded-2xl border border-slate-200 bg-parchment-50/80 p-4 dark:border-slate-800 dark:bg-slate-900/80">
                <div className="h-3 w-20 rounded bg-slate-200 dark:bg-slate-700" />
                <div className="mt-4 h-6 w-24 rounded bg-slate-200 dark:bg-slate-700" />
                <div className="mt-4 h-4 w-28 rounded bg-slate-200 dark:bg-slate-700" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-3 md:grid-cols-3">
            {marketData.map((tile) => (
              <AssetTile
                key={tile.label}
                label={tile.label}
                symbol={tile.symbol}
                value={tile.value}
                change={tile.change}
                updatedAt={tile.updatedAt}
                state={tile.state}
                kind={tile.kind}
                icon={tile.icon}
              />
            ))}
          </div>
        )}

        {state.marketError || state.networkError ? (
          <div className="mt-3 flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800 dark:border-amber-900/60 dark:bg-amber-500/10 dark:text-amber-200">
            <AlertTriangle size={14} aria-hidden="true" />
            {state.marketError && state.networkError
              ? "Market and network data are temporarily unavailable."
              : state.marketError
                ? "Market data is temporarily unavailable."
                : "Celo network status could not be verified."}
          </div>
        ) : null}
      </div>
    </section>
  );
}
