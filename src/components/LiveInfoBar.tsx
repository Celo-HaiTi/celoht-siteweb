"use client";

import { Activity, AlertTriangle, ArrowUpRight, CircleDollarSign, Coins, Wifi, WifiOff } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { getCachedLiveData, isLiveDataStale, refreshLiveData, type LiveData } from "@/lib/live-data";

type LiveState = LiveData & {
  loading: boolean;
  marketError: boolean;
  networkError: boolean;
};

function formatPrice(value: number | null) {
  if (value === null || Number.isNaN(value)) return "Data temporarily unavailable";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: value < 1 ? 3 : 2,
    maximumFractionDigits: value < 1 ? 4 : 2,
  }).format(value);
}

function formatChange(value: number | null) {
  if (value === null || Number.isNaN(value)) return "Data temporarily unavailable";
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
      ? "bg-forest-500/20 text-gold-300 ring-forest-400/40"
      : state === "down"
        ? "bg-gold-500/15 text-gold-300 ring-gold-500/40"
        : state === "error"
          ? "bg-gold-500/15 text-gold-300 ring-gold-500/40"
          : "bg-parchment-100/10 text-parchment-100/70 ring-parchment-100/20";

  return (
    <div className="rounded-xl border border-parchment-100/15 bg-navy-900/80 p-4 shadow-[0_12px_35px_rgba(0,0,0,0.16)] backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-parchment-100/55">
            {label}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-950 text-gold-500" aria-hidden="true">
              {icon === "celo" ? <Coins size={16} /> : icon === "usdm" ? <CircleDollarSign size={16} /> : <Activity size={16} />}
            </span>
            <span className="font-display text-xl font-semibold text-parchment-50">{symbol}</span>
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
        <p className="text-lg font-semibold text-parchment-50">{value}</p>
        <p className="mt-1 text-xs text-parchment-100/55">{updatedAt}</p>
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
  const [state, setState] = useState<LiveState>(() => {
    const initialData = getCachedLiveData();
    return {
      loading: !initialData,
      marketError: false,
      networkError: false,
      celo: initialData?.celo ?? null,
      usdm: initialData?.usdm ?? null,
      network: initialData?.network ?? null,
    };
  });

  useEffect(() => {
    let isMounted = true;
    let refreshTimer: number | undefined;

    const load = async () => {
      const result = await refreshLiveData();
      if (!isMounted) return;

      setState({
        loading: false,
        marketError: result.marketError,
        networkError: result.networkError,
        ...result.data,
      });
    };

    const scheduleRefresh = () => {
      window.clearTimeout(refreshTimer);
      if (document.visibilityState === "hidden") return;
      refreshTimer = window.setTimeout(() => {
        void load().finally(scheduleRefresh);
      }, 60000);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && isLiveDataStale(getCachedLiveData())) {
        void load();
      }
      scheduleRefresh();
    };

    const start = window.setTimeout(() => {
      if (isLiveDataStale(getCachedLiveData())) {
        void load().finally(scheduleRefresh);
      } else {
        scheduleRefresh();
      }
    }, 0);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      isMounted = false;
      window.clearTimeout(start);
      window.clearTimeout(refreshTimer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
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
    <section aria-label="Live CeloHT market data" aria-live="polite" className="border-b border-parchment-100/10 bg-navy-950 text-parchment-50">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-muted">
            <Activity size={10} aria-hidden="true" className="text-gold-700" />
            Live market & network
          </div>
          <p className="text-[0.62rem] text-muted">Market data provided by CoinGecko.</p>
        </div>

        {state.loading && !state.celo && !state.usdm && !state.network ? (
          <div role="status" aria-live="polite" aria-label="Loading live market data" className="grid gap-3 md:grid-cols-3">
            <span className="sr-only">Loading live market data</span>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="animate-pulse rounded-xl border border-parchment-100/15 bg-navy-900/80 p-4">
                <div className="h-3 w-20 rounded bg-parchment-100/15" />
                <div className="mt-4 h-6 w-24 rounded bg-parchment-100/15" />
                <div className="mt-4 h-4 w-28 rounded bg-parchment-100/15" />
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
          <div className="mt-3 flex items-center gap-2 rounded-xl border border-gold-500/30 bg-gold-500/10 px-3 py-2 text-xs text-gold-300">
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
