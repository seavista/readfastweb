import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy | ReadFast",
  description:
    "ReadFast refund policy for subscriptions purchased on iOS, Android, and web.",
};

export default function RefundPolicyPage() {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="container legal-header-inner">
          <Link href="/">
            <img src="/img/logo/logo.svg" alt="ReadFast" className="legal-logo" />
          </Link>
          <Link href="/" className="main-btn btn-hover">
            Back to Home
          </Link>
        </div>
      </header>

      <main className="legal-main">
        <div className="container">
          <article className="legal-card">
            <h1>Refund Policy</h1>
            <p className="legal-meta">
              <strong>Effective date:</strong> February 18, 2026
            </p>

            <h2>1. Purchases Through Apple App Store</h2>
            <p>
              If you subscribed to ReadFast on iOS, Apple manages billing and
              refunds. Refund requests must be submitted directly to Apple under
              Apple&apos;s refund policies.
            </p>

            <h2>2. Purchases Through Google Play</h2>
            <p>
              If you subscribed through Google Play, Google manages billing and
              refunds. Refund requests must be submitted through Google Play in
              accordance with Google&apos;s policies.
            </p>

            <h2>3. Subscription Cancellation</h2>
            <p>
              Canceling a subscription stops future renewals but does not
              automatically generate a refund for the current billing period
              unless approved by the platform where the purchase was made.
            </p>

            <h2>4. Direct Purchases (If Available)</h2>
            <p>
              If ReadFast offers direct web billing in your region, refund
              eligibility and timelines are described at the checkout flow for
              that purchase.
            </p>

            <h2>5. Contact</h2>
            <p>For billing questions, contact support:</p>
            <ul>
              <li>
                Discord support:{" "}
                <a href="https://discord.gg/UTY9wyvRR6">
                  discord.gg/UTY9wyvRR6
                </a>
              </li>
              <li>
                Website contact section:{" "}
                <Link href="/#contact">ReadFast Contact</Link>
              </li>
            </ul>
          </article>
        </div>
      </main>

      <footer className="legal-footer">
        <div className="container">
          <Link href="/privacy-policy">Privacy Policy</Link> |{" "}
          <Link href="/terms-of-service">Terms of Service</Link> |{" "}
          <Link href="/account-deletion">Account Deletion</Link>
        </div>
      </footer>
    </div>
  );
}
