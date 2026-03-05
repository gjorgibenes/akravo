import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import {
  locales,
  hreflangEntries,
  getCanonicalUrl,
  getLocalePath,
} from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import SchemaOrg from "@/components/SchemaOrg";
import { buildSchemas } from "@/lib/schema";
import "../globals.css";

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

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const t = (ns: string, key: string) => messages[ns]?.[key] ?? key;

  const canonicalUrl = getCanonicalUrl(locale as Locale);

  const alternates: Record<string, string> = {};
  for (const entry of hreflangEntries) {
    const url =
      entry.locale === "en"
        ? "https://akravo.com"
        : `https://akravo.com/${entry.locale}`;
    alternates[entry.hreflang] = url;
  }

  return {
    metadataBase: new URL("https://akravo.com"),
    title: t("Metadata", "title"),
    description: t("Metadata", "description"),
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
      title: t("Metadata", "ogTitle"),
      description: t("Metadata", "ogDescription"),
      url: canonicalUrl,
      siteName: "Akravo",
      locale: locale === "en" ? "en_GB" : `${locale}_${locale.toUpperCase()}`,
      type: "website",
      images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("Metadata", "twitterTitle"),
      description: t("Metadata", "twitterDescription"),
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl,
      languages: alternates,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const schemas = buildSchemas(
    locale as Locale,
    messages as Record<string, Record<string, string>>
  );

  return (
    <html
      lang={locale}
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <SchemaOrg schema={schemas.organizationSchema} />
        <SchemaOrg schema={schemas.websiteSchema} />
        <SchemaOrg schema={schemas.faqSchema} />
        <SchemaOrg schema={schemas.personSchema} />
        {schemas.serviceSchemas.map((schema, i) => (
          <SchemaOrg key={i} schema={schema} />
        ))}
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
