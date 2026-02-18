import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "ReadFast - Read Smarter with AI",
  description:
    "ReadFast is revolutionizing the way you read by utilizing the latest in AI technology to enhance reading speed and comprehension.",
};

export default function Home() {
  return (
    <main>
      <LandingPage />
    </main>
  );
}
