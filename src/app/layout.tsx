import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider, themeInitScript } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";
import { assetPath, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CeloHT  -  Financial Inclusion, Education, Agent Network, Reforestation",
    template: "%s  -  CeloHT",
  },
  description:
    "CeloHT is a community-driven, open-source initiative expanding financial inclusion through education, a community agent network, and reforestation, built on the Celo ecosystem.",
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
    title: "CeloHT  -  Financial Inclusion, Education, Agent Network, Reforestation",
    description:
      "A community-driven, open-source initiative expanding financial inclusion through education, a community agent network, and reforestation.",
    images: [{ url: assetPath("/og-image.svg"), width: 1200, height: 630, alt: "CeloHT" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CeloHtOfficial",
    title: "CeloHT  -  Financial Inclusion, Education, Agent Network, Reforestation",
    description:
      "A community-driven, open-source initiative expanding financial inclusion through education, a community agent network, and reforestation.",
    images: [assetPath("/og-image.svg")],
  },
  icons: { icon: assetPath("/favicon.svg"), apple: assetPath("/celoht-logo.png") },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F8FA" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1120" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-parchment font-body text-ink antialiased dark:bg-navy-950 dark:text-parchment-100">
        <ThemeProvider>
          <SkipLink />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <ServiceWorkerRegistration />
        </ThemeProvider>
      </body>
    </html>
  );
}
