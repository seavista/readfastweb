"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const APP_STORE_URL = "#";
const GOOGLE_PLAY_URL = "#";
const DISCORD_URL = "https://discord.gg/UTY9wyvRR6";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Why", href: "#why" },
  { label: "Pricing", href: "#pricing" },
  { label: "Download", href: "#download" },
];

const trustHooks = [
  {
    icon: "lni lni-headphone-alt",
    title: "Prosody & Emphasis",
    copy: "Hear meaning, not monotone.",
  },
  {
    icon: "lni lni-rocket",
    title: "Brain Training Plans",
    copy: "Daily sessions that compound.",
  },
  {
    icon: "lni lni-checkmark-circle",
    title: "Comprehension Proof",
    copy: "Instant AI quizzes + progress analytics.",
  },
];

const readFasterBullets = [
  "Speed Reader + Smart Pacer to match your attention rhythm",
  "Focus Highlight to reduce regression and wandering eyes",
  "Reading Modes tuned for skimmers, deep divers, and I can not focus days",
];

const progressCards = [
  {
    icon: "lni lni-layers",
    title: "Smart Summaries (Your Control)",
    copy: "Choose the compression level. Keep the thesis. Keep the tone. Keep what matters.",
  },
  {
    icon: "lni lni-grid-alt",
    title: "Comprehension + Recall",
    copy: "AI-generated questions that verify you actually got it and not just scrolled past it.",
  },
  {
    icon: "lni lni-graduation",
    title: "Vocabulary Growth (Effortless)",
    copy: "Capture new words in-context, revisit them on your schedule, and watch them stick.",
  },
];

const benefitBullets = [
  "Distraction-resistant reading (focus cues + pacing)",
  "Trackable improvement (speed, accuracy, streaks, mastery)",
  "Instant speed control (from calm to rocket mode)",
];

const libraryBullets = [
  "Save PDFs, articles, copied text, and notes",
  "Organize by projects, classes, goals, or topics",
  "Pick up anywhere, on any device",
];

const brainTypes = [
  {
    title: "The Sprinter",
    copy: "Fast intake, needs retention scaffolding.",
  },
  {
    title: "The Deep Diver",
    copy: "Strong comprehension, wants speed without losing nuance.",
  },
  {
    title: "The Audio-Thinker",
    copy: "Meaning clicks through rhythm, tone, and emphasis.",
  },
  {
    title: "The Focus-Seeker",
    copy: "Easily distracted; needs structured pacing + micro-wins.",
  },
  {
    title: "The Scanner-to-Studier",
    copy: "Skims first, then locks in where it matters.",
  },
];

const personalizationBullets = [
  "Font, spacing, themes, and word chunking",
  "Pacer intensity + focus highlight strength",
  "Summary compression level",
  "Quiz difficulty and learning goals",
];

const prosodyBullets = [
  "Emphasis on key phrases and transitions",
  "Better rhythm for sustained attention",
  "Great for long-form reading fatigue and ADHD-style drift",
];

const whyFeatures = [
  {
    icon: "lni lni-display",
    title: "Speed Reading (Without the Blur)",
    copy: "Train fast intake while keeping structure and meaning intact.",
  },
  {
    icon: "lni lni-leaf",
    title: "Smart Summaries (Decision-Ready)",
    copy: "Compress content to the level you need - overview, study notes, or action points.",
  },
  {
    icon: "lni lni-grid-alt",
    title: "AI Comprehension Quizzes (Proof, not vibes)",
    copy: "Quick checks that validate understanding and build recall.",
  },
  {
    icon: "lni lni-headphone-alt",
    title: "Prosody & Emphasis (Audio that actually helps)",
    copy: "Hear the shape of the content so your brain holds onto it.",
  },
  {
    icon: "lni lni-rocket",
    title: "Brain Training Plans (Daily compounding)",
    copy: "Guided sessions that progressively increase speed while protecting comprehension.",
  },
  {
    icon: "lni lni-package",
    title: "Progress & Mastery (See the climb)",
    copy: "Track speed, comprehension accuracy, streaks, and personal bests.",
  },
];

const motivationBullets = [
  "Focus Credits: earn through training (and optional rewarded ads) to unlock AI features",
  "Badges & Achievements: streaks, milestones, personal bests",
  "Celebrations that reinforce the habit loop: small wins to consistent practice to real growth",
];

type PlanFeature = {
  included: boolean;
  label: string;
};

type Plan = {
  title: string;
  identity: string;
  descriptor: string;
  price: string;
  period: string;
  cta: string;
  href: string;
  note?: string;
  features: PlanFeature[];
};

const includeAll = (labels: string[]): PlanFeature[] =>
  labels.map((label) => ({
    included: true,
    label,
  }));

const freeFeatureLabels = [
  "ReadFast Speed Reader",
  "Smart Pacer (Manual Mode)",
  "Focus Highlight",
  "Customizable Word Chunking",
  "Font & Theme Customization",
  "Reading Brain Types Quiz",
  "Starter Training Plan (7-Day Intro Track)",
  "Basic Progress Tracking (Speed + Sessions)",
  "10 AI Smart Summaries / month",
  "10 AI Comprehension Checks / month",
  "Standard Summary Compression",
  "Standard Quiz Difficulty",
  "Basic Text-To-Speech",
  "Adjustable Playback Speed",
  "Community + Email Support",
];

const plusUpgradeLabels = [
  "Full Adaptive Training Plans (Beginner -> Advanced)",
  "Focus Mode (Distraction-Resistant Interface)",
  "Speed Ramp Sessions (Progressive Intensity Control)",
  "Streak Tracking + Milestone Badges",
  "150 AI Smart Summaries / month",
  "150 AI Comprehension Tests / month",
  "Adjustable Summary Compression Slider",
  "Adaptive Quiz Difficulty",
  "Vocabulary Capture & Review",
  "Enhanced Text-To-Speech with Prosody Emphasis",
  "Structural Emphasis (Transitions, Conclusions, Key Points)",
  "Detailed Speed Analytics",
  "Comprehension Accuracy Tracking",
  "Reading Time Saved Metrics",
  "Focus Credits Multiplier",
  "Achievement Celebrations",
  "24/7 Priority Support",
];

const proUpgradeLabels = [
  "High-Intensity Training Mode (Advanced Speed Thresholds)",
  "Custom Training Builder (Design Your Own Sessions)",
  "Deep Retention Mode (Recall Reinforcement Sessions)",
  "Exam / Study Mode (Long-Form Structured Reading)",
  "500 AI Smart Summaries / month",
  "500 AI Comprehension Tests / month",
  "Priority AI Processing",
  "Advanced Multi-Level Summaries (Overview -> Thesis -> Study Notes -> Action Points)",
  "Concept Mapping (AI-generated structure view)",
  "Premium AI Voices (Natural Tone + Dynamic Emphasis)",
  "Audio + Visual Hybrid Mode (RSVP + Emphasis Sync)",
  "Cognitive Growth Dashboard",
  "Speed Trendlines",
  "Retention Improvement",
  "Focus Stability Metrics",
  "Personal Best Tracking",
  "Unlimited Vocabulary Tracking",
  "Export Study Notes",
  "PDF + Long-Form Deep Reading Optimization",
  "Dedicated Priority Support",
  "Early Access to New Features",
];

const freePlanFeatures = includeAll(freeFeatureLabels);
const plusPlanFeatures = includeAll(plusUpgradeLabels);
const proPlanFeatures = includeAll(proUpgradeLabels);

const monthlyPlans: Plan[] = [
  {
    title: "Free",
    identity: "Explorer",
    descriptor: "Learn the System",
    price: "$0",
    period: "",
    cta: "Start Free",
    href: "#download",
    note: "Designed to help users understand how ReadFast works and discover their Reading Brain Type.",
    features: freePlanFeatures,
  },
  {
    title: "Plus",
    identity: "Accelerator",
    descriptor: "Train Consistently",
    price: "$4.99",
    period: "/ month",
    cta: "Upgrade to Plus",
    href: "https://buy.stripe.com/test_9AQ3dTacL7tS0pO001",
    note:
      "Everything in Free, plus unique Plus upgrades for readers building measurable improvement and daily habits.",
    features: plusPlanFeatures,
  },
  {
    title: "Pro",
    identity: "Mastery",
    descriptor: "Go Elite",
    price: "$9.99",
    period: "/ month",
    cta: "Upgrade to Pro",
    href: "https://buy.stripe.com/test_9AQ15L98Hg0o3C0fZ0",
    note:
      "Everything in Plus, plus unique Pro upgrades for high-performance learners who want elite cognitive output.",
    features: proPlanFeatures,
  },
];

const yearlyPlans: Plan[] = [
  {
    title: "Free",
    identity: "Explorer",
    descriptor: "Learn the System",
    price: "$0",
    period: "",
    cta: "Start Free",
    href: "#download",
    note: "Designed to help users understand how ReadFast works and discover their Reading Brain Type.",
    features: freePlanFeatures,
  },
  {
    title: "Plus",
    identity: "Accelerator",
    descriptor: "Train Consistently",
    price: "$39.99",
    period: "/ year",
    cta: "Upgrade to Plus",
    href: "#contact",
    note:
      "Everything in Free, plus unique Plus upgrades for readers building measurable improvement and daily habits.",
    features: plusPlanFeatures,
  },
  {
    title: "Pro",
    identity: "Mastery",
    descriptor: "Go Elite",
    price: "$69.99",
    period: "/ year",
    cta: "Upgrade to Pro",
    href: "#contact",
    note:
      "Everything in Plus, plus unique Pro upgrades for high-performance learners who want elite cognitive output.",
    features: proPlanFeatures,
  },
];

const testimonials = [
  {
    quote:
      "ReadFast did not just speed me up - it taught me how to hold onto what I read. My studying finally feels efficient.",
    name: "Taylor Vines",
    role: "University Student",
  },
  {
    quote:
      "I process reports in a fraction of the time now. The quizzes are the difference - no more fake confidence.",
    name: "Simon Green",
    role: "Product Designer",
  },
  {
    quote:
      "The pacing + emphasis keeps my mind from drifting. It is the first reading app that feels like it understands my brain.",
    name: "Jordan Smith",
    role: "Focus-Seeking Professional",
  },
];

const featureModules = [
  "Speed Reader + Smart Pacer",
  "Focus Highlight + distraction control",
  "Smart Summaries (compression slider)",
  "AI Comprehension Quizzes (instant + adaptive)",
  "Prosody & Emphasis TTS",
  "Reading Brain Types Quiz + personalized defaults",
  "Training Plans (beginner to advanced)",
  "Progress analytics (speed, comprehension, streaks)",
  "Focus Credits + achievements economy",
];

type RsvpToken = {
  text: string;
  emphasis?: boolean;
  bridge?: boolean;
};

const RSVP_SAMPLE_TOKENS: RsvpToken[] = [
  { text: "Welcome", emphasis: true },
  { text: "to" },
  { text: "ReadFast." },
  { text: "In" },
  { text: "this" },
  { text: "live", emphasis: true },
  { text: "sample," },
  { text: "you" },
  { text: "will" },
  { text: "feel", emphasis: true },
  { text: "the" },
  { text: "pace", emphasis: true },
  { text: "rise" },
  { text: "while" },
  { text: "meaning", emphasis: true },
  { text: "stays" },
  { text: "clear." },
  { text: "We" },
  { text: "start", emphasis: true },
  { text: "calm" },
  { text: "so" },
  { text: "your" },
  { text: "eyes" },
  { text: "lock" },
  { text: "on" },
  { text: "the" },
  { text: "center", emphasis: true },
  { text: "character." },
  { text: "Prosody", emphasis: true },
  { text: "adds" },
  { text: "rhythm," },
  { text: "stress," },
  { text: "and" },
  { text: "timed", emphasis: true },
  { text: "pauses." },
  { text: "Key", emphasis: true },
  { text: "ideas" },
  { text: "stand" },
  { text: "out." },
  { text: "Now", bridge: true },
  { text: "the" },
  { text: "tempo", emphasis: true },
  { text: "builds." },
  { text: "Short" },
  { text: "phrases" },
  { text: "move" },
  { text: "faster." },
  { text: "You" },
  { text: "still" },
  { text: "catch", emphasis: true },
  { text: "the" },
  { text: "thesis," },
  { text: "the" },
  { text: "contrast," },
  { text: "and" },
  { text: "the" },
  { text: "conclusion." },
  { text: "This" },
  { text: "is" },
  { text: "the" },
  { text: "loop:", emphasis: true },
  { text: "speed" },
  { text: "to", bridge: true },
  { text: "comprehension" },
  { text: "to", bridge: true },
  { text: "retention." },
  { text: "The" },
  { text: "app", emphasis: true },
  { text: "checks" },
  { text: "accuracy," },
  { text: "then" },
  { text: "nudges", emphasis: true },
  { text: "pace" },
  { text: "again." },
  { text: "By" },
  { text: "the" },
  { text: "end," },
  { text: "you" },
  { text: "are" },
  { text: "reading", emphasis: true },
  { text: "far" },
  { text: "faster" },
  { text: "than" },
  { text: "baseline" },
  { text: "without" },
  { text: "losing", emphasis: true },
  { text: "understanding." },
  { text: "That" },
  { text: "is" },
  { text: "ReadFast", emphasis: true },
  { text: "training", emphasis: true },
  { text: "in" },
  { text: "real", emphasis: true },
  { text: "time." },
];

function splitForFocusCharacter(token: string): { prefix: string; focus: string; suffix: string } {
  const chars = Array.from(token);
  const firstWordChar = chars.findIndex((char) => /[A-Za-z0-9]/.test(char));
  const lastWordChar = chars.length - 1 - [...chars].reverse().findIndex((char) => /[A-Za-z0-9]/.test(char));

  if (firstWordChar < 0 || lastWordChar < firstWordChar) {
    return { prefix: "", focus: token, suffix: "" };
  }

  const coreLength = lastWordChar - firstWordChar + 1;
  const focusOffset = Math.floor((coreLength - 1) / 2);
  const focusIndex = firstWordChar + focusOffset;

  return {
    prefix: chars.slice(0, focusIndex).join(""),
    focus: chars[focusIndex] ?? "",
    suffix: chars.slice(focusIndex + 1).join(""),
  };
}

function PricingCard({ plan }: { plan: Plan }) {
  return (
    <article className="rf-card flex h-full flex-col border border-white/40 bg-white/80 p-6 backdrop-blur-sm">
      <div className="mb-5">
        <p className="rf-label">{plan.title}</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700">{plan.identity}</p>
        <p className="mt-1 text-sm text-slate-600">{plan.descriptor}</p>
        <h3 className="mt-4 font-display text-4xl font-semibold text-slate-950">
          {plan.price}
          {plan.period ? <span className="text-base text-slate-500"> {plan.period}</span> : null}
        </h3>
      </div>

      {plan.note ? (
        <p className="mb-4 rounded-xl bg-amber-100/70 p-3 text-sm text-slate-700">{plan.note}</p>
      ) : null}

      <ul className="mb-6 space-y-2 text-sm text-slate-700">
        {plan.features.map((feature) => (
          <li key={`${plan.title}-${feature.label}`} className="flex items-start gap-2">
            <span
              className={`mt-1 inline-flex h-2.5 w-2.5 rounded-full ${
                feature.included ? "bg-emerald-500" : "bg-slate-300"
              }`}
            />
            <span>{feature.label}</span>
          </li>
        ))}
      </ul>

      <a
        className="rf-btn-primary mt-auto text-center"
        href={plan.href}
        target={plan.href.startsWith("http") ? "_blank" : undefined}
        rel={plan.href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {plan.cta}
      </a>
    </article>
  );
}

function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`rf-store-cta-row ${className}`}>
      <a className="rf-store-btn" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
        <i className="lni lni-apple rf-store-icon" aria-hidden="true"></i>
        <span>
          <span className="rf-store-kicker">Download on the</span>
          <span className="rf-store-title">App Store</span>
        </span>
      </a>
      <a className="rf-store-btn" href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
        <i className="lni lni-play-store rf-store-icon" aria-hidden="true"></i>
        <span>
          <span className="rf-store-kicker">Get it on</span>
          <span className="rf-store-title">Google Play</span>
        </span>
      </a>
    </div>
  );
}

function RsvpProsodyDemo({ compact = false }: { compact?: boolean }) {
  const [tokenIndex, setTokenIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const totalTokens = RSVP_SAMPLE_TOKENS.length;
  const progress = totalTokens > 1 ? tokenIndex / (totalTokens - 1) : 0;
  const currentWpm = Math.round(210 + Math.pow(progress, 1.12) * 340);
  const activeToken = RSVP_SAMPLE_TOKENS[tokenIndex];
  const splitToken = splitForFocusCharacter(activeToken.text);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    const baseDelay = 60000 / currentWpm;
    const punctuationFactor = /[.!?]$/.test(activeToken.text) ? 2.6 : /[,;:]$/.test(activeToken.text) ? 1.8 : 1;
    const bridgeFactor = activeToken.bridge ? 1.35 : 1;
    const emphasisFactor = activeToken.emphasis ? 1.2 : 1;
    const wordLength = activeToken.text.replace(/[^\w]/g, "").length;
    const lengthFactor = wordLength > 8 ? 1.15 : 1;
    const loopResetFactor = tokenIndex === totalTokens - 1 ? 2.4 : 1;
    const delay = Math.round(baseDelay * punctuationFactor * bridgeFactor * emphasisFactor * lengthFactor * loopResetFactor);

    const timerId = window.setTimeout(() => {
      setTokenIndex((previous) => (previous + 1) % totalTokens);
    }, delay);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [activeToken, currentWpm, isPlaying, totalTokens]);

  return (
    <div className={`${compact ? "rounded-2xl border border-white/70 bg-white/95 p-4" : "mt-8 rounded-2xl border border-white/70 bg-white/90 p-6"}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="rf-label">Live App Reader Demo</p>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Pace: {currentWpm} WPM</p>
      </div>

      <p className={`${compact ? "mt-2 text-xs text-slate-700" : "mt-3 text-sm text-slate-700"}`}>
        Start at a natural pace, lock focus, then ramp speed in real time while emphasis and pause cues keep meaning clear.
      </p>

      <div
        className={`${
          compact
            ? "mt-3 flex min-h-[15rem] items-center justify-center rounded-2xl bg-slate-950 px-3 py-8 text-center"
            : "mt-5 flex min-h-[18rem] items-center justify-center rounded-2xl bg-slate-950 px-4 py-10 text-center"
        }`}
      >
        <div
          className={`rf-rsvp-orp-line ${compact ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"}`}
        >
          <span className="rf-rsvp-prefix">{splitToken.prefix}</span>
          <span className="rf-rsvp-focus">{splitToken.focus}</span>
          <span className="rf-rsvp-suffix">{splitToken.suffix}</span>
        </div>
      </div>

      <div className={`${compact ? "mt-3 h-2 overflow-hidden rounded-full bg-slate-200" : "mt-5 h-2 overflow-hidden rounded-full bg-slate-200"}`}>
        <div className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500" style={{ width: `${Math.round(progress * 100)}%` }} />
      </div>
      <p className="mt-2 text-xs text-slate-600">Ramp profile: 210 to 550 WPM with comprehension-safe pacing.</p>

      <div className={`${compact ? "mt-3 flex flex-wrap gap-2" : "mt-5 flex flex-wrap gap-3"}`}>
        <button
          type="button"
          className="rf-btn-secondary !bg-slate-900 !text-white"
          onClick={() => setIsPlaying((previous) => !previous)}
        >
          {isPlaying ? "Pause" : "Resume"}
        </button>
        <button
          type="button"
          className="rf-btn-secondary"
          onClick={() => {
            setTokenIndex(0);
            setIsPlaying(true);
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const activePlans = billingCycle === "monthly" ? monthlyPlans : yearlyPlans;

  return (
    <div className="relative overflow-x-clip bg-[var(--rf-bg)] text-[var(--rf-ink)]">
      <div className="rf-grid-bg pointer-events-none fixed inset-0 -z-20" />
      <div className="pointer-events-none fixed left-1/2 top-0 -z-10 h-[30rem] w-[65rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-300/35 via-cyan-300/20 to-emerald-300/30 blur-3xl" />

      <section className="rf-hero-shell relative overflow-hidden">
        <header className="relative z-20">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-6 lg:px-10">
            <a className="flex items-center gap-3" href="#home">
              <img src="/img/logo/logo-dark.svg" alt="ReadFast logo" className="h-10 w-auto sm:h-11" />
            </a>

            <a className="rf-btn-primary !border-white !bg-white !text-[var(--rf-brand-dark)]" href="#download">
              Download
            </a>
          </div>
          <nav className="mx-auto flex w-full max-w-7xl items-center gap-6 overflow-x-auto px-6 pb-3 text-base font-medium text-white lg:px-10">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="whitespace-nowrap transition hover:text-amber-100">
                {item.label}
              </a>
            ))}
          </nav>
          <p className="border-t border-white/25 px-6 py-2 text-center text-xs text-white/90 lg:px-10">
            Read smarter. Retain deeper. Train your brain.
          </p>
        </header>

        <div>
          <section id="home" className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-14 lg:px-10 lg:pt-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="rf-label">Built for different reading brains</p>
              <h1 className="rf-classic-heading mt-4 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                Experience the Future of Reading with AI
              </h1>
              <p className="rf-classic-copy mt-6 max-w-2xl text-lg leading-relaxed text-white/95">
                ReadFast turns reading into a trainable cognitive skill. Use adaptive speed pacing, center-character
                focus guidance, AI comprehension checks, and prosody-powered emphasis to read faster without losing
                meaning.
              </p>
              <p className="rf-classic-copy mt-4 max-w-2xl text-base font-semibold text-white/95">
                Watch the live demo ramp from 230 to 530 WPM and feel how quickly your pace can rise when comprehension
                stays locked in.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a className="rf-btn-primary" href="#download">
                  Download ReadFast
                </a>
                <a className="rf-btn-secondary !border-white/60 !bg-white/10 !text-white" href="#brain-types">
                  Take the Reading Brain Types Quiz
                </a>
              </div>

              <StoreButtons className="mt-5" />
            </div>

            <aside className="rf-card relative overflow-hidden border border-white/40 bg-white/80 p-4 backdrop-blur-sm sm:p-6">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-amber-300/40 blur-2xl" />
              <RsvpProsodyDemo compact />

              <div className="mt-5">
                <p className="rf-label">Training Loop</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-slate-950">
                  Speed {">"} Comprehension {">"} Retention
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  ReadFast adapts each session in real time. Pacing, quiz difficulty, and recall loops increase only
                  when your understanding proves ready for the next speed tier.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
                <div className="rounded-xl border border-slate-200/70 bg-white/80 p-3">
                  <p className="font-display text-xl font-semibold text-slate-950">2.1x</p>
                  <p className="text-slate-600">Faster Pace</p>
                </div>
                <div className="rounded-xl border border-slate-200/70 bg-white/80 p-3">
                  <p className="font-display text-xl font-semibold text-slate-950">93%</p>
                  <p className="text-slate-600">Quiz Accuracy</p>
                </div>
                <div className="rounded-xl border border-slate-200/70 bg-white/80 p-3">
                  <p className="font-display text-xl font-semibold text-slate-950">21d</p>
                  <p className="text-slate-600">Streak</p>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {trustHooks.map((item) => (
              <article key={item.title} className="rf-card border border-white/45 bg-white/85 p-5 backdrop-blur-sm">
                <span className="rf-icon-chip text-xl">
                  <i className={item.icon}></i>
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
      </section>

      <main>
        <section id="features" className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="rf-label">Read Faster</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-slate-950 sm:text-4xl">
              One library for everything you read. One system for how you learn.
            </h2>
            <p className="mt-5 max-w-xl text-slate-700">
              ReadFast works across iOS, Android, desktop, and web, so your reading library follows you. Save articles,
              PDFs, notes, and passages, then train on them using your personal reading profile.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {readFasterBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-900" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rf-card border border-white/45 bg-white/80 p-6 backdrop-blur-sm">
            <p className="rf-label">Feature Modules</p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-slate-950">
              Everything you need to read faster and understand deeper.
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {featureModules.map((module, index) => (
                <div key={module} className="rounded-xl border border-slate-200/75 bg-white/70 p-3 text-sm text-slate-700">
                  <p className="mb-1 font-display text-sm text-slate-500">0{index + 1}</p>
                  <p>{module}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <p className="rf-label">Get More Done</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-slate-950 sm:text-4xl">Turn pages into progress.</h2>
          <p className="mt-5 max-w-3xl text-slate-700">
            Summaries are great. But ReadFast goes further: it transforms what you read into understanding you can
            measure. Condense the noise, surface the meaning, and reinforce it with quick recall loops.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {progressCards.map((card) => (
              <article key={card.title} className="rf-card border border-white/45 bg-white/85 p-5 backdrop-blur-sm">
                <span className="rf-icon-chip text-xl">
                  <i className={card.icon}></i>
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-slate-950">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{card.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="rf-card border border-cyan-200/70 bg-gradient-to-br from-cyan-100/70 via-white to-amber-100/70 p-8 md:p-10">
            <p className="rf-label">Core Benefit</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-950 sm:text-4xl">
              Speed is useless without meaning. ReadFast trains both.
            </h2>
            <p className="mt-4 max-w-3xl text-slate-700">
              You do not need hacks. You need a system. ReadFast builds a feedback loop between speed,
              comprehension, and retention so you can move faster and remember more tomorrow than you did today.
            </p>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {benefitBullets.map((item) => (
                <div key={item} className="rounded-xl border border-white/70 bg-white/80 p-4 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 lg:grid-cols-2 lg:px-10">
          <div className="rf-card border border-white/45 bg-white/80 p-6 backdrop-blur-sm">
            <p className="rf-label">Build Your Reading Library</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-950">
              Your personal reading vault - from work, school, and real life.
            </h2>
            <p className="mt-4 text-slate-700">
              Stop losing great content to tabs, screenshots, and forgotten bookmarks. ReadFast is your centralized
              library where every saved piece becomes training fuel.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {libraryBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rf-card border border-white/45 bg-white/80 p-6 backdrop-blur-sm">
            <p className="rf-label">About</p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-slate-950">
              We are building the reading system we wish existed.
            </h3>
            <p className="mt-4 text-slate-700">
              Reading is how humans upgrade themselves. But most tools treat reading like a passive act. We treat it
              like training: measurable, adaptive, and deeply personal.
            </p>
            <p className="mt-4 text-slate-700">
              ReadFast blends speed reading science, modern AI, and brain-based personalization to help you read more
              in less time, retain what you read, and build a lifelong learning habit that compounds.
            </p>
          </div>
        </section>

        <section id="brain-types" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <p className="rf-label">Built for Different Reading Brains</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-slate-950 sm:text-4xl">
            Built for different reading brains. Not one correct way to read.
          </h2>
          <p className="mt-5 max-w-3xl text-slate-700">
            Some people thrive on high-speed visual pacing. Some need pacing. Some need audio cues. Some need
            strong emphasis to keep meaning alive. ReadFast adapts to you with a quick Reading Brain Types Quiz, then
            customizes your training and defaults.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {brainTypes.map((type) => (
              <article key={type.title} className="rf-card border border-white/45 bg-white/85 p-5 backdrop-blur-sm">
                <h3 className="font-display text-xl font-semibold text-slate-950">{type.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{type.copy}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-cyan-200/70 bg-cyan-50/70 p-6">
            <h3 className="font-display text-xl font-semibold text-slate-950">Personalization Controls</h3>
            <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
              {personalizationBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-700" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="rf-card border border-amber-200/70 bg-gradient-to-br from-amber-100/70 via-white to-orange-100/70 p-8 md:p-10">
            <p className="rf-label">Prosody & Emphasis</p>
            <h2 className="rf-classic-heading mt-3 text-3xl text-slate-950 sm:text-4xl">
              Prosody-powered reading: emphasis that makes meaning stick.
            </h2>
            <p className="rf-classic-copy mt-4 max-w-3xl text-slate-700">
              Most readers only speed up words. ReadFast speeds up understanding. Prosody and emphasis signal structure,
              contrast, and conclusions so your brain can keep comprehension high while pace climbs.
            </p>
            <ul className="rf-classic-copy mt-6 grid gap-3 text-sm text-slate-700 md:grid-cols-3">
              {prosodyBullets.map((bullet) => (
                <li key={bullet} className="rounded-xl border border-white/70 bg-white/80 p-4">
                  {bullet}
                </li>
              ))}
            </ul>
            <RsvpProsodyDemo />
          </div>
        </section>

        <section id="why" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-10 rounded-2xl border border-slate-200/80 bg-white/75 p-6 backdrop-blur-sm">
            <p className="rf-label">Manifesto</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-950 sm:text-4xl">
              Because information is not power. Understanding is.
            </h2>
            <div className="mt-5 space-y-2 text-slate-700">
              <p>More content will not change your life. Better comprehension will.</p>
              <p>Speed without retention is just motion.</p>
              <p>Your brain type matters. Your tools should respect that.</p>
              <p>Training beats hacks. Systems beat motivation.</p>
            </div>
            <a className="rf-btn-secondary mt-6" href="#brain-types">
              Take the Brain Types Quiz
            </a>
          </div>

          <p className="rf-label">Why Choose ReadFast</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-slate-950 sm:text-4xl">Why choose ReadFast</h2>
          <p className="mt-4 max-w-3xl text-slate-700">
            Because reading is not a talent. It is a trainable cognitive skill, and ReadFast is the gym.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyFeatures.map((feature) => (
              <article key={feature.title} className="rf-card border border-white/45 bg-white/85 p-5 backdrop-blur-sm">
                <span className="rf-icon-chip text-xl">
                  <i className={feature.icon}></i>
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{feature.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="rf-card border border-emerald-200/70 bg-gradient-to-br from-emerald-100/70 via-white to-cyan-100/70 p-8 md:p-10">
            <p className="rf-label">Motivation Bridge</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-950 sm:text-4xl">
              Motivation you can feel. Progress you can measure.
            </h2>
            <p className="mt-4 max-w-3xl text-slate-700">
              ReadFast is designed like a training system: you do not just read, you build capacity.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {motivationBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="pricing" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <p className="rf-label">Pricing</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-slate-950 sm:text-4xl">
            Choose a plan that matches your momentum.
          </h2>
          <p className="mt-4 max-w-3xl text-slate-700">
            Start free. Upgrade when you are training hard and want more AI power.
          </p>

          <div className="mt-7 inline-flex rounded-full border border-slate-300 bg-white p-1">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                billingCycle === "monthly" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("yearly")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                billingCycle === "yearly" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Yearly
            </button>
          </div>

          <p className="mt-3 text-sm text-slate-600">Yearly plans = best value for long-term skill building.</p>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {activePlans.map((plan) => (
              <PricingCard key={`${billingCycle}-${plan.title}`} plan={plan} />
            ))}
          </div>
        </section>

        <section id="testimonials" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <p className="rf-label">Testimonials</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-slate-950 sm:text-4xl">What our users say</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rf-card border border-white/45 bg-white/85 p-5 backdrop-blur-sm">
                <p className="text-sm leading-relaxed text-slate-700">&quot;{item.quote}&quot;</p>
                <div className="mt-5 border-t border-slate-200 pt-4">
                  <p className="font-display text-lg font-semibold text-slate-950">{item.name}</p>
                  <p className="text-sm text-slate-600">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="rf-card border border-slate-300/70 bg-slate-900 p-8 text-white md:p-10">
            <p className="rf-label text-cyan-200">Community</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Help shape the next era of reading.</h2>
            <p className="mt-4 max-w-3xl text-slate-200">
              Join early access to get first access to new training modes, prosody upgrades, and Brain Types tuning,
              while helping us build the most effective reading system on the planet.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="rf-btn-primary !bg-white !text-slate-900" href="#download">
                Join Early Access
              </a>
              <a className="rf-btn-secondary !border-white/60 !bg-transparent !text-white" href={DISCORD_URL}>
                Request Discord Invite
              </a>
            </div>
          </div>
        </section>

        <section id="download" className="mx-auto w-full max-w-7xl px-6 pb-24 pt-20 lg:px-10">
          <p className="rf-label">Download</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-slate-950 sm:text-4xl">Start training today.</h2>
          <p className="mt-4 max-w-3xl text-slate-700">
            Download ReadFast and run your first session in under 60 seconds. Your future reading speed is built one
            rep at a time.
          </p>

          <StoreButtons className="mt-8" />
        </section>
      </main>

      <footer className="relative overflow-hidden border-t border-orange-300/50 bg-[var(--rf-brand)] py-10 text-white">
        <img
          src="/img/footer/footer-bg.svg"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 text-sm text-slate-200 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="relative">
            <img src="/img/logo/logo-dark.svg" alt="ReadFast logo" className="h-10 w-auto" />
            <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/95">Revolutionize the way you read.</p>
          </div>

          <div className="relative flex flex-wrap items-center gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-amber-100">
              <i className="lni lni-facebook-filled text-lg"></i>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-amber-100">
              <i className="lni lni-twitter-filled text-lg"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-amber-100">
              <i className="lni lni-instagram-filled text-lg"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-amber-100">
              <i className="lni lni-linkedin-original text-lg"></i>
            </a>
          </div>

          <div className="relative flex flex-wrap gap-4">
            <Link className="hover:text-amber-100" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="hover:text-amber-100" href="/terms-of-service">
              Terms of Service
            </Link>
            <Link className="hover:text-amber-100" href="/refund-policy">
              Refund Policy
            </Link>
            <Link className="hover:text-amber-100" href="/account-deletion">
              Account Deletion
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
