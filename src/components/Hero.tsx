"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, BookOpen, Github } from "lucide-react";
import { LaunchDappButton } from "@/components/LaunchDappButton";
import { assetPath, GITHUB_ORG_URL } from "@/lib/constants";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden border-b border-navy-700/10 dark:border-parchment-100/10">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(245,200,66,0.08)_48%,transparent_76%)] dark:bg-[linear-gradient(110deg,transparent_0%,rgba(245,200,66,0.06)_48%,transparent_76%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:py-28">
        <div>
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-gold-800 dark:text-gold-300"
          >
            CeloHT
          </motion.p>

          <motion.h1
            id="hero-title"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Haiti-born. Open-source.
            <span className="block text-gold-600 dark:text-gold-300">Built for global impact.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg text-ink-soft dark:text-parchment-100/75"
          >
            An open-source Haitian Web3 initiative building practical pathways through financial
            inclusion, education, digital payments, entrepreneurship, and community development on Celo.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <LaunchDappButton size="lg" />
            <Link
              href="/open-source"
              className="group inline-flex items-center gap-2 rounded-full border border-navy-700/20 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-gold-500 hover:bg-gold-500/10 dark:border-parchment-100/20 dark:text-parchment-100"
            >
              Explore Open Source
              <Github size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-soft dark:text-parchment-100/55"
          >
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-forest-500" /> Haitian-led</span>
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold-500" /> Built in public</span>
            <Link href="/technology" className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline">
              Explore ecosystem <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link href="/documentation" className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline">
              <BookOpen size={14} aria-hidden="true" /> Documentation
            </Link>
            <a href={GITHUB_ORG_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline">
              <Github size={14} aria-hidden="true" /> GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex min-h-[22rem] items-center justify-center overflow-hidden rounded-[2rem] border border-navy-700/10 bg-navy-950 px-6 py-10 text-parchment-50 shadow-2xl shadow-navy-950/10 dark:border-parchment-100/10 lg:min-h-[30rem]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(245,200,66,0.24),transparent_36%)]" />
          <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-[2.5rem] bg-[#ffff58] shadow-[0_24px_80px_rgba(245,200,66,0.18)] sm:h-80 sm:w-80">
            <Image
              src={assetPath("/celoht-logo.png")}
              alt="CeloHT logo"
              width={420}
              height={420}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
