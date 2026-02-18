import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | ReadFast",
  description:
    "ReadFast Terms of Service for iOS, Android, and web users.",
};

export default function TermsOfServicePage() {
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
            <h1>Terms of Service</h1>
            <p className="legal-meta">
              <strong>Effective date:</strong> February 18, 2026
            </p>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of
              ReadFast services, including our iOS app, Android app, website, and
              related features. By using ReadFast, you agree to these Terms.
            </p>

            <h2>1. Eligibility and Account</h2>
            <ul>
              <li>
                You must be legally able to enter into a binding agreement.
              </li>
              <li>
                You are responsible for account activity and credential security.
              </li>
              <li>
                You agree to provide accurate information and keep it up to date.
              </li>
            </ul>

            <h2>2. Subscriptions and Billing</h2>
            <ul>
              <li>
                In-app subscriptions are billed by Apple App Store or Google
                Play, according to their billing terms.
              </li>
              <li>
                Auto-renewals, cancellations, and billing management are handled
                through your app store account settings.
              </li>
              <li>
                Refunds for in-app purchases are governed by the applicable store
                policy. See <Link href="/refund-policy">Refund Policy</Link> for
                details.
              </li>
            </ul>

            <h2>3. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>
                Use ReadFast for unlawful, abusive, or fraudulent activity.
              </li>
              <li>
                Attempt to gain unauthorized access to systems or user data.
              </li>
              <li>
                Reverse engineer, scrape, or disrupt service functionality.
              </li>
              <li>Upload content you do not have rights to use.</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              ReadFast, including software, logos, and content (excluding
              user-provided content), is owned by ReadFast or its licensors and
              protected by applicable intellectual property laws.
            </p>

            <h2>5. Service Availability</h2>
            <p>
              We may modify, suspend, or discontinue features at any time. We aim
              for reliable service but do not guarantee uninterrupted
              availability.
            </p>

            <h2>6. Termination</h2>
            <p>
              We may suspend or terminate access if these Terms are violated or
              if necessary for security, legal compliance, or operational reasons.
              You may stop using ReadFast at any time and request account deletion
              through <Link href="/account-deletion">Account Deletion</Link>.
            </p>

            <h2>7. Disclaimers</h2>
            <p>
              ReadFast is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis to the fullest extent permitted by law. We
              disclaim all implied warranties, including fitness for a particular
              purpose and non-infringement.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, ReadFast is not liable for
              indirect, incidental, consequential, special, or punitive damages
              arising from use of the service.
            </p>

            <h2>9. Changes to Terms</h2>
            <p>
              We may update these Terms. Continued use after updated Terms are
              posted means you accept the revised Terms.
            </p>

            <h2>10. Contact</h2>
            <p>For legal or account questions, contact us via:</p>
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
          <Link href="/refund-policy">Refund Policy</Link> |{" "}
          <Link href="/account-deletion">Account Deletion</Link>
        </div>
      </footer>
    </div>
  );
}
