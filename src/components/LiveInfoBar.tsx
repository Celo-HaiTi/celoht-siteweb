"use client";

import { Activity, AlertTriangle, ArrowUpRight, CircleDollarSign, Coins } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { getCachedLiveData, isLiveDataStale, refreshLiveData, type LiveData } from "@/lib/live-data";

type LiveState = LiveData & {
  loading: boolean;
  marketError: boolean;
};

function formatPrice(value: number | null) {
  if (value === null || Number.isNaN(value)) return "Price data unavailable";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: value < 1 ? 3 : 2,
    maximumFractionDigits: value < 1 ? 4 : 2,
  }).format(value);
}

function formatChange(value: number | null) {
  if (value === null || Number.isNaN(value)) return "Price data available";
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
  icon,
}: {
  label: string;
  symbol: string;
  value: string;
  change: string;
  updatedAt: string;
  state: "up" | "down" | "neutral" | "error";
  icon: "celo" | "usdm";
}) {
  const accentClass =
    state === "up"
      ? "bg-forest-500/10 text-gold-300 ring-forest-500/20"
      : state === "down"
        ? "bg-gold-500/10 text-gold-300 ring-gold-500/20"
        : state === "error"
          ? "bg-gold-500/10 text-gold-300 ring-gold-500/20"
          : "bg-parchment-100/10 text-parchment-100/80 ring-parchment-100/20";

  return (
    <article className="rounded-2xl border border-parchment-100/15 bg-navy-900/80 p-5 shadow-[0_18px_40px_rgba(2,8,20,0.2)] transition-colors duration-200 hover:border-gold-500/30 hover:bg-navy-900">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-parchment-100/55">
            {label}
          </p>
          <div className="mt-3 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-950 text-gold-300" aria-hidden="true">
              {icon === "celo" ? <Coins size={16} /> : <CircleDollarSign size={16} />}
            </span>
            <span className="font-display text-xl font-semibold text-parchment-50">{symbol}</span>
          </div>
        </div>
        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[0.62rem] font-semibold ring-1 ${accentClass}`}>
          {state === "down" ? <ArrowUpRight size={10} aria-hidden="true" className="rotate-90" /> : <ArrowUpRight size={10} aria-hidden="true" />}
          {change}
        </span>
      </div>

      <div className="mt-5">
        <p className="text-2xl font-semibold leading-none tracking-tight text-parchment-50 sm:text-3xl">{value}</p>
        <p className="mt-3 text-[0.7rem] uppercase tracking-[0.14em] text-parchment-100/55">{updatedAt}</p>
      </div>
    </article>
  );
}

type MarketTile = {
  label: string;
  symbol: string;
  value: string;
  change: string;
  updatedAt: string;
  state: "up" | "down" | "neutral" | "error";
  icon: "celo" | "usdm";
};

export function LiveInfoBar() {
  const [state, setState] = useState<LiveState>({
    loading: true,
    marketError: false,
    celo: null,
    usdm: null,
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

    const start = window.setTimeout(() => {
      const initialData = getCachedLiveData();
      if (initialData) {
        setState((current) => ({ ...current, loading: false, ...initialData }));
      }

      if (isLiveDataStale(initialData)) {
        void load().finally(scheduleRefresh);
      } else {
        scheduleRefresh();
      }
    }, 0);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && isLiveDataStale(getCachedLiveData())) {
        void load();
      }
      scheduleRefresh();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      isMounted = false;
      window.clearTimeout(start);
      window.clearTimeout(refreshTimer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const marketData = useMemo<MarketTile[]>(() => {
    const tileState = (value: number | null): "up" | "down" | "neutral" | "error" => {
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
        icon: "celo",
      },
      {
        label: "USDm",
        symbol: "USDm",
        value: formatPrice(state.usdm?.usd ?? null),
        change: formatChange(state.usdm?.change ?? null),
        updatedAt: formatRelativeTime(state.usdm?.updatedAt ?? null),
        state: tileState(state.usdm?.change ?? null),
        icon: "usdm",
      },
    ];
  }, [state]);

  const isShowingError = state.marketError || !state.celo || !state.usdm;

  return (
    <section aria-label="Live CeloHT market data" aria-live="polite" className="border-b border-parchment-100/10 bg-navy-950 text-parchment-50">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-parchment-100/70">
            <Activity size={10} aria-hidden="true" className="text-gold-300" />
            Live market
          </div>
          <p className="text-[0.62rem] text-parchment-100/60">Real-time Celo ecosystem market data</p>
        </div>

        {state.loading && !state.celo && !state.usdm ? (
          <div role="status" aria-live="polite" aria-label="Loading live market data" className="grid gap-3 md:grid-cols-2">
            <span className="sr-only">Loading live market data</span>
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="animate-pulse rounded-2xl border border-parchment-100/15 bg-navy-900/80 p-5">
                <div className="h-3 w-20 rounded bg-parchment-100/15" />
                <div className="mt-4 h-8 w-28 rounded bg-parchment-100/15" />
                <div className="mt-5 h-4 w-32 rounded bg-parchment-100/15" />
              </div>
            ))}
          </div>
        ) : (
          <>
            {isShowingError ? (
              <div className="mb-3 flex items-center gap-2 rounded-xl border border-gold-500/20 bg-gold-500/10 px-3 py-2 text-sm text-parchment-100/80" role="status" aria-live="polite">
                <AlertTriangle size={16} aria-hidden="true" className="text-gold-300" />
                Market data is temporarily unavailable.
              </div>
            ) : null}

            <div className="grid gap-3 md:grid-cols-2">
              {marketData.map((tile) => (
                <AssetTile
                  key={tile.label}
                  label={tile.label}
                  symbol={tile.symbol}
                  value={tile.value}
                  change={tile.change}
                  updatedAt={tile.updatedAt}
                  state={tile.state}
                  icon={tile.icon}
                />
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between gap-2 border-t border-parchment-100/10 pt-3 text-[0.65rem] uppercase tracking-[0.14em] text-parchment-100/45">
              <span>Market data source</span>
              <span>CoinGecko</span>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
