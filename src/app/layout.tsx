import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";
import { assetPath, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CeloHT | Open-Source Haitian Web3 Initiative",
    template: "%s  -  CeloHT",
  },
  description:
    "CeloHT is an open-source Haitian Web3 initiative focused on financial inclusion, blockchain education, digital payments, and entrepreneurship within the Celo ecosystem.",
  keywords: [
    "CeloHT",
    "Celo",
    "financial inclusion",
    "USDm",
    "Valora",
    "Haiti",
    "reforestation",
    "open source",
    "community governance",
  ],
  authors: [{ name: "CeloHT Contributors" }],
  manifest: assetPath("/manifest.json"),
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "CeloHT",
    title: "CeloHT | Open-Source Haitian Web3 Initiative",
    description:
      "An open-source Haitian Web3 initiative focused on financial inclusion, blockchain education, digital payments, and entrepreneurship within the Celo ecosystem.",
    images: [{ url: assetPath("/og-image.svg"), width: 1200, height: 630, alt: "CeloHT" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CeloHtOfficial",
    title: "CeloHT | Open-Source Haitian Web3 Initiative",
    description:
      "An open-source Haitian Web3 initiative focused on financial inclusion, blockchain education, digital payments, and entrepreneurship within the Celo ecosystem.",
    images: [assetPath("/og-image.svg")],
  },
  icons: { icon: assetPath("/favicon.svg"), apple: assetPath("/celoht-logo.png") },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: "#F7F8FA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[#f1f5fa] font-body text-ink antialiased">
        <SkipLink />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
