import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SkipLink } from "@/components/SkipLink";
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";
import { SITE_URL } from "@/lib/constants";

const iconVersion = "20261107";
const absoluteIcon = (path: string, size?: string) => {
  const url = new URL(path, SITE_URL);
  if (size) return `${url.toString()}?v=${iconVersion}&s=${size}`;
  return `${url.toString()}?v=${iconVersion}`;
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "CeloHT",
  title: {
    default: "CeloHT",
    template: "%s | CeloHT",
  },
  description:
    "CeloHT is an open-source Web3 initiative rooted in Haiti, focused on financial inclusion, blockchain education, digital payments, and practical real-world access within the Celo ecosystem.",
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
  authors: [{ name: "CeloHT" }],
  manifest: absoluteIcon("/manifest.json"),
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "CeloHT",
    title: "CeloHT",
    description:
      "An open-source Web3 initiative rooted in Haiti, focused on financial inclusion, blockchain education, digital payments, and practical real-world access within the Celo ecosystem.",
    images: [
      {
        url: absoluteIcon("/og-image.svg"),
        width: 1200,
        height: 630,
        alt: "CeloHT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@celoht",
    title: "CeloHT",
    description:
      "CeloHT is an open-source Web3 initiative rooted in Haiti, focused on access, education, and practical digital infrastructure.",
    images: [absoluteIcon("/og-image.svg")],
  },
  icons: {
    icon: [
      {
        url: absoluteIcon("/favicon-32x32.png", "32x32"),
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: absoluteIcon("/favicon-16x16.png", "16x16"),
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: absoluteIcon("/favicon.ico"),
        type: "image/x-icon",
      },
    ],
    apple: absoluteIcon("/apple-touch-icon.png", "180x180"),
    shortcut: absoluteIcon("/celoht-logo.png", "512x512"),
  },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: "#081225",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-navy-950 font-body text-parchment-100 antialiased">
        <SkipLink />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
