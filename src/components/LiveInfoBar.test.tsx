import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi, afterEach } from "vitest";
import { LiveInfoBar } from "@/components/LiveInfoBar";
import { resetLiveDataCache } from "@/lib/live-data";

describe("LiveInfoBar", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    resetLiveDataCache();
  });

  it("renders live CELO and USDm market cards without the technical network status", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
        const url = String(input);
        const body = typeof init?.body === "string" ? init.body : "";

        if (url.includes("api.coingecko.com")) {
          return {
            ok: true,
            json: async () => ({
              celo: {
                usd: 0.065,
                usd_24h_change: 2.8,
                last_updated_at: 1710000000,
              },
              "celo-dollar": {
                usd: 0.999,
                usd_24h_change: 0.2,
                last_updated_at: 1710000001,
              },
            }),
          } as unknown as Response;
        }

        if (body.includes("eth_chainId") || body.includes("eth_blockNumber")) {
          return {
            ok: true,
            json: async () => ({ result: "0xa4ec" }),
          } as unknown as Response;
        }

        return Promise.reject(new Error("Unexpected fetch target"));
      }),
    );

    render(<LiveInfoBar />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getAllByText("CELO").length).toBeGreaterThan(0),
    );
    expect(screen.getByText("$0.065")).toBeInTheDocument();
    expect(screen.getAllByText("USDm").length).toBeGreaterThan(0);
    expect(screen.getByText(/live market/i)).toBeInTheDocument();
    expect(screen.queryByText(/Celo Network/i)).not.toBeInTheDocument();
  });

  it("surfaces a concise market error state without exposing technical network details", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async (input: RequestInfo | URL) => {
        const url = String(input);

        if (url.includes("api.coingecko.com")) {
          throw new Error("CoinGecko unavailable");
        }

        return Promise.reject(new Error("Unexpected fetch target"));
      }),
    );

    render(<LiveInfoBar />);

    await waitFor(() =>
      expect(
        screen.getByText(/Market data is temporarily unavailable/i),
      ).toBeInTheDocument(),
    );
    expect(screen.queryByText(/Celo Network/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Latest block/i)).not.toBeInTheDocument();
  });
});
