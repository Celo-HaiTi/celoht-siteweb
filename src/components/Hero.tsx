"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Github } from "lucide-react";
import { GrowthRings } from "@/components/GrowthRings";
import { LaunchDappButton } from "@/components/LaunchDappButton";
import { GITHUB_ORG_URL } from "@/lib/constants";

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
            Community-led · Open source · Built on Celo
          </motion.p>

          <motion.h1
            id="hero-title"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Practical pathways to a more open digital economy.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg text-ink-soft dark:text-parchment-100/75"
          >
            CeloHT is a Haitian open-source Web3 initiative building practical pathways through
            financial inclusion, education, digital payments, entrepreneurship, and community action.
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
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full border border-navy-700/20 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-gold-500 hover:bg-gold-500/10 dark:border-parchment-100/20 dark:text-parchment-100"
            >
              Explore CeloHT
              <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
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
            <a href={GITHUB_ORG_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline">
              <Github size={14} aria-hidden="true" /> GitHub organization
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
          <GrowthRings className="relative h-64 w-64 text-gold-500/80 sm:h-80 sm:w-80" />
          <div className="absolute bottom-6 left-6 right-6 border-t border-parchment-100/15 pt-4 text-xs uppercase tracking-[0.18em] text-parchment-100/55">
            <div className="flex items-center justify-between">
              <span>CeloHT ecosystem</span>
              <span>01 / 03</span>
            </div>
            <p className="mt-3 max-w-xs font-display text-2xl normal-case tracking-normal text-parchment-50">
              Learn, participate, build.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
