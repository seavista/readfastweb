import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | ReadFast",
  description:
    "ReadFast Privacy Policy for iOS, Android, and web users.",
};

export default function PrivacyPolicyPage() {
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
            <h1>Privacy Policy</h1>
            <p className="legal-meta">
              <strong>Effective date:</strong> February 18, 2026
            </p>
            <p>
              This Privacy Policy explains how ReadFast (&quot;ReadFast&quot;,
              &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses,
              and shares information when you use our mobile apps, website, and
              related services.
            </p>

            <h2>1. Information We Collect</h2>
            <ul>
              <li>
                Account information: details you provide such as name, username,
                and login credentials.
              </li>
              <li>
                Content and preferences: reading settings, saved content, and
                other in-app preferences.
              </li>
              <li>
                Device and usage data: app interactions, diagnostics, crash logs,
                device type, operating system, and approximate region.
              </li>
              <li>
                Purchase and subscription data: status and transaction data
                provided through Apple App Store or Google Play billing systems.
              </li>
              <li>
                Support communications: information you send when contacting us
                for help.
              </li>
            </ul>

            <h2>2. How We Use Information</h2>
            <ul>
              <li>Provide, maintain, and improve ReadFast features.</li>
              <li>Personalize reading experiences and app performance.</li>
              <li>Process subscriptions and verify purchases.</li>
              <li>Detect fraud, abuse, and security incidents.</li>
              <li>Respond to support requests and service communications.</li>
            </ul>

            <h2>3. How We Share Information</h2>
            <ul>
              <li>
                Service providers who support infrastructure, analytics, billing,
                and customer support on our behalf.
              </li>
              <li>
                Legal or regulatory authorities when required by applicable law.
              </li>
              <li>
                A successor entity in connection with a merger, acquisition, or
                asset transfer.
              </li>
            </ul>
            <p>We do not sell your personal information.</p>

            <h2>4. Data Retention</h2>
            <p>
              We retain information as long as needed to provide services, comply
              with legal obligations, resolve disputes, and enforce agreements.
              When deletion is requested and validated, we remove or anonymize
              personal data, except where retention is required by law.
            </p>

            <h2>5. Your Choices and Rights</h2>
            <ul>
              <li>
                You can review and update certain account information in the app.
              </li>
              <li>
                You can request account and data deletion using{" "}
                <Link href="/account-deletion">our account deletion page</Link>.
              </li>
              <li>
                You may control some diagnostics and analytics preferences
                through your device settings where available.
              </li>
            </ul>

            <h2>6. Children&apos;s Privacy</h2>
            <p>
              ReadFast is not intended for children under 13 (or the minimum age
              required in your country). If you believe a child has provided
              personal information, contact us so we can review and remove it.
            </p>

            <h2>7. Security</h2>
            <p>
              We use reasonable technical and organizational safeguards designed
              to protect personal information. No method of transmission or
              storage is fully secure, so we cannot guarantee absolute security.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Material changes will
              be posted on this page with an updated effective date.
            </p>

            <h2>9. Contact</h2>
            <p>
              For privacy requests or questions, contact us through our support
              channels:
            </p>
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

            <div className="legal-callout">
              For app store review teams: this policy applies to ReadFast on iOS
              and Android, and to the companion web experience.
            </div>
          </article>
        </div>
      </main>

      <footer className="legal-footer">
        <div className="container">
          <Link href="/terms-of-service">Terms of Service</Link> |{" "}
          <Link href="/refund-policy">Refund Policy</Link> |{" "}
          <Link href="/account-deletion">Account Deletion</Link>
        </div>
      </footer>
    </div>
  );
}
