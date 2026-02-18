import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Account Deletion | ReadFast",
  description:
    "How to request ReadFast account and personal data deletion.",
};

export default function AccountDeletionPage() {
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
            <h1>Account and Data Deletion</h1>
            <p className="legal-meta">
              <strong>Effective date:</strong> February 18, 2026
            </p>
            <p>
              This page explains how ReadFast users can request deletion of an
              account and associated personal data for iOS, Android, and web app
              usage.
            </p>

            <h2>1. How to Request Deletion</h2>
            <ol>
              <li>
                If the in-app delete option is available, use{" "}
                <strong>Profile/Settings &rarr; Delete Account</strong>.
              </li>
              <li>
                If you cannot access the app or do not see the delete option,
                submit a request through support:{" "}
                <a href="https://discord.gg/UTY9wyvRR6">
                  discord.gg/UTY9wyvRR6
                </a>
                .
              </li>
            </ol>

            <h2>2. Information to Include in Your Request</h2>
            <ul>
              <li>
                Your ReadFast username or login email (if available).
              </li>
              <li>Your platform (iOS, Android, or web).</li>
              <li>
                A clear statement that you want your account deleted.
              </li>
            </ul>

            <h2>3. Processing Timeline</h2>
            <p>
              We aim to process verified deletion requests within 30 days. Some
              requests may require additional verification for account security.
            </p>

            <h2>4. What Is Deleted</h2>
            <ul>
              <li>Account profile and authentication data.</li>
              <li>
                Reading preferences and saved user-generated content, when
                applicable.
              </li>
              <li>
                Support-linked personal identifiers associated with the account.
              </li>
            </ul>

            <h2>5. What May Be Retained</h2>
            <ul>
              <li>
                Records required for legal, security, fraud, or tax compliance.
              </li>
              <li>
                Limited backup data for a short retention period before deletion
                cycles run.
              </li>
              <li>
                Aggregated or de-identified analytics data that cannot identify
                you.
              </li>
            </ul>

            <h2>6. Important Subscription Note</h2>
            <p>
              Deleting your ReadFast account does not automatically cancel App
              Store or Google Play subscriptions. You must cancel recurring
              subscriptions in your Apple or Google account settings.
            </p>

            <div className="legal-callout">
              This page is provided to support app-store account deletion
              disclosure requirements for Android and iOS distributions.
            </div>
          </article>
        </div>
      </main>

      <footer className="legal-footer">
        <div className="container">
          <Link href="/privacy-policy">Privacy Policy</Link> |{" "}
          <Link href="/terms-of-service">Terms of Service</Link> |{" "}
          <Link href="/refund-policy">Refund Policy</Link>
        </div>
      </footer>
    </div>
  );
}
