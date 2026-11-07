"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

    const trimmed = email.trim();
    if (!trimmed || !emailPattern.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!consent) {
      setError("Please confirm that you agree to receive updates.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, consent: true, source: "footer" }),
      });

      const payload = (await response.json()) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(
          payload.error ?? payload.message ?? "Unable to submit your email right now.",
        );
      }

      setSuccess(payload.message ?? "Thanks for subscribing. You are on the list.");
      setEmail("");
      setConsent(false);
    } catch (submitError) {
      const message =
        submitError instanceof Error
          ? submitError.message
          : "Unable to submit your email right now.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={Boolean(error)}
          placeholder="Email address"
          className="w-full rounded-full border border-parchment-100/15 bg-navy-900/80 px-4 py-3 text-sm text-parchment-100 placeholder:text-parchment-100/40 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-500/30"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-sm font-semibold text-navy-950 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold-300 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
          {!isSubmitting && <ArrowRight size={16} aria-hidden="true" />}
        </button>
      </div>

      <div className="flex items-start gap-3 text-xs text-parchment-100/65">
        <input
          id="newsletter-consent"
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-parchment-100/30 bg-navy-900 text-gold-400"
        />
        <label htmlFor="newsletter-consent">
          I agree to receive updates from CeloHT and understand I can unsubscribe at any time. See the {" "}
          <Link href="/privacy" className="text-gold-300 underline-offset-2 hover:underline">
            Privacy Policy
          </Link>
          .
        </label>
      </div>

      {error ? (
        <p role="alert" className="text-sm text-red-300">
          {error}
        </p>
      ) : null}

      {success ? (
        <p className="inline-flex items-center gap-2 text-sm text-emerald-300">
          <CheckCircle2 size={16} aria-hidden="true" />
          {success}
        </p>
      ) : null}
    </form>
  );
}
