"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
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
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[3fr_2fr] lg:py-24">
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
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 font-display text-5xl font-semibold leading-[1.02] sm:text-6xl"
          >
            Open-source infrastructure for financial inclusion,
            <span className="text-gold-600 dark:text-gold-400"> education, and community action.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg text-ink-soft dark:text-parchment-100/75"
          >
            CeloHT brings together learning, trusted community agents, reforestation, and public
            tools so people can access digital financial services with dignity and purpose.
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
              href={GITHUB_ORG_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-navy-700/20 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-gold-500 hover:bg-gold-500/10 dark:border-parchment-100/20 dark:text-parchment-100"
            >
              View on GitHub
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <GrowthRings className="h-64 w-64 text-navy-700/60 sm:h-80 sm:w-80 dark:text-parchment-100/40" />
        </motion.div>
      </div>
    </section>
  );
}
