import { getCanonicalUrl } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

type Messages = Record<string, Record<string, string>>;

export function buildSchemas(locale: Locale, messages: Messages) {
  const t = (ns: string, key: string) => messages[ns]?.[key] ?? key;
  const url = getCanonicalUrl(locale);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Akravo",
    url: "https://akravo.com",
    description: t("Schema", "orgDescription"),
    priceRange: "$$$$",
    areaServed: "Worldwide",
    serviceType: t("Schema", "serviceType"),
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
          name: t("Schema", "standardPlanName"),
          description: t("Schema", "standardPlanDescription"),
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
          name: t("Schema", "enterprisePlanName"),
          description: t("Schema", "enterprisePlanDescription"),
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
    inLanguage: locale,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [1, 2, 3, 4, 5, 6].map((i) => ({
      "@type": "Question",
      name: t("FAQ", `q${i}`),
      acceptedAnswer: {
        "@type": "Answer",
        text: t("FAQ", `a${i}`),
      },
    })),
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
      description: t("Schema", "promptResearchDescription"),
      url,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Citation Management",
      provider: { "@type": "Organization", name: "Akravo" },
      description: t("Schema", "citationManagementDescription"),
      url,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Influential Monetisation",
      provider: { "@type": "Organization", name: "Akravo" },
      description: t("Schema", "influentialMonetisationDescription"),
      url,
    },
  ];

  return {
    organizationSchema,
    websiteSchema,
    faqSchema,
    personSchema,
    serviceSchemas,
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
