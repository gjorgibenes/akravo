import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SchemaOrg from "@/components/SchemaOrg";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akravo.com"),
  title: "Akravo - LLM Optimisation Agency",
  description:
    "ChatGPT, Perplexity, and Google's AI Overview control the new buyer journey. We make sure they recommend you. LLM Optimisation Agency.",
  openGraph: {
    title: "Akravo - LLM Optimisation Agency",
    description:
      "ChatGPT, Perplexity, and Google's AI Overview control the new buyer journey. We make sure they recommend you.",
    url: "https://akravo.com",
    siteName: "Akravo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akravo - LLM Optimisation Agency",
    description:
      "ChatGPT, Perplexity, and Google's AI Overview control the new buyer journey. We make sure they recommend you.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://akravo.com" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Akravo",
  url: "https://akravo.com",
  description: "LLM Optimisation Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,400i,500i,700i&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <SchemaOrg schema={orgSchema} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
