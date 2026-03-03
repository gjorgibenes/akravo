import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SchemaOrg from "@/components/SchemaOrg";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akravo.com"),
  title: "Akravo - LLM Optimisation Agency | Get Recommended by AI",
  description:
    "ChatGPT, Perplexity, and Google's AI Overview control the new buyer journey. Akravo makes sure they recommend your business. LLM optimisation, AI search visibility, and citation building for brands.",
  keywords: [
    "LLM optimisation",
    "LLM optimization",
    "AI search optimisation",
    "ChatGPT SEO",
    "AI visibility",
    "Perplexity optimisation",
    "Google AI Overview",
    "AI citation building",
    "GEO",
    "generative engine optimisation",
    "AI search agency",
    "LLM SEO agency",
    "agentic commerce",
  ],
  openGraph: {
    title: "Akravo - LLM Optimisation Agency | Get Recommended by AI",
    description:
      "ChatGPT, Perplexity, and Google's AI Overview control the new buyer journey. We make sure they recommend you.",
    url: "https://akravo.com",
    siteName: "Akravo",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akravo - LLM Optimisation Agency",
    description:
      "Your business is invisible to 200 million AI users. We fix that. LLM optimisation for ChatGPT, Perplexity & Google AI Overview.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://akravo.com" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Akravo",
  url: "https://akravo.com",
  description:
    "LLM Optimisation Agency — We help businesses get recommended by AI platforms like ChatGPT, Perplexity, and Google's AI Overview.",
  priceRange: "$$$$",
  areaServed: "Worldwide",
  serviceType: "LLM Optimisation",
  knowsAbout: [
    "LLM Optimisation",
    "AI Search Visibility",
    "Generative Engine Optimisation",
    "ChatGPT SEO",
    "Perplexity Optimisation",
    "Google AI Overview Optimisation",
    "Agentic Commerce",
    "AI Citation Building",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "LLM Optimisation Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Standard Plan",
        description:
          "3 Month LLM Optimisation Project including dedicated AI strategist, entity mapping, cross-platform citation monitoring, and technical implementation support.",
        price: "1950",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "1950",
          priceCurrency: "USD",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        name: "Enterprise Plan",
        description:
          "Enterprise LLM Optimisation starting at $8,000+ including API access to citation data, multi-domain optimization, and custom integration options.",
        price: "8000",
        priceCurrency: "USD",
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Akravo",
  url: "https://akravo.com",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this just repackaged SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "70% overlaps with SEO, but the 30% that's different makes all the difference. AI platforms need structured data, clear answers, and entity authority - not just keywords and backlinks.",
      },
    },
    {
      "@type": "Question",
      name: "Can you guarantee we'll appear in ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We guarantee increased citations or full refund. ChatGPT doesn't \"rank\" sites - it synthesizes from trusted sources. We make you a trusted source.",
      },
    },
    {
      "@type": "Question",
      name: "How long until results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First citations within 30 days. Meaningful traffic by day 60. Compound growth after 90 days.",
      },
    },
    {
      "@type": "Question",
      name: "What exactly is LLM optimization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's the process of making your content visible and citable in AI-powered search tools like ChatGPT, Perplexity, and Google's AI Overview. Think of it as SEO for AI - we ensure these platforms understand, trust, and recommend your business when users ask relevant questions.",
      },
    },
    {
      "@type": "Question",
      name: "Will this interfere with our regular SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. In fact, 70% of AI optimization improves your traditional SEO too. Better structured data, clearer content, and improved entity recognition benefit both traditional and AI search.",
      },
    },
    {
      "@type": "Question",
      name: "How do AI platforms decide what sources to trust?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They evaluate domain authority, factual accuracy, content structure, and presence across multiple trusted sources. If you're cited frequently in their training data or high-authority sites, you become a trusted source. We systematically build these trust signals.",
      },
    },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fabian van Til",
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: "Akravo",
  },
  url: "https://akravo.com",
  knowsAbout: [
    "LLM Optimisation",
    "AI Search Visibility",
    "Generative Engine Optimisation",
    "ChatGPT SEO",
  ],
};

const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Prompt Research",
    provider: { "@type": "Organization", name: "Akravo" },
    description:
      "We map your intent taxonomy and identify entity gaps to understand how AI platforms perceive your brand.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Citation Management",
    provider: { "@type": "Organization", name: "Akravo" },
    description:
      "We build and maintain your citation graph, ensuring your brand is referenced across trusted sources that LLMs rely on.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Influencial Monetisation",
    provider: { "@type": "Organization", name: "Akravo" },
    description:
      "We monitor your answer share and citation share across AI platforms and catch hallucinations.",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <link rel="dns-prefetch" href="https://api.fontshare.com" />
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://cdn.fontshare.com" />
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,400i,500i,700i&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <SchemaOrg schema={organizationSchema} />
        <SchemaOrg schema={websiteSchema} />
        <SchemaOrg schema={faqSchema} />
        <SchemaOrg schema={personSchema} />
        {serviceSchemas.map((schema, i) => (
          <SchemaOrg key={i} schema={schema} />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
