import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-WBLMPX32HP";

export const metadata: Metadata = {
  title: "ReadFast - Speed Reading + Prosody + Brain Training",
  description:
    "Read faster without losing meaning. ReadFast combines speed reading, AI summaries, comprehension quizzes, and prosody-powered emphasis with personalized Brain Types training.",
  openGraph: {
    title: "Built for different reading brains.",
    description: "Train speed. Prove comprehension. Retain more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&family=Open+Sans:wght@400;600&display=swap"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.png" />
        <link rel="stylesheet" href="/css/lineicons.css" />
      </head>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
