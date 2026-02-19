import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "ReadFast - Speed Reading + Prosody + Brain Training",
  description:
    "Read faster without losing meaning. ReadFast combines speed reading, AI summaries, comprehension quizzes, and prosody-powered emphasis with personalized Brain Types training.",
  openGraph: {
    title: "Built for different reading brains.",
    description: "Train speed. Prove comprehension. Retain more.",
  },
};

export default function Home() {
  return (
    <main>
      <LandingPage />
    </main>
  );
}
