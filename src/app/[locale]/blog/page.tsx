import { setRequestLocale } from "next-intl/server";
import { blogPosts } from "@/lib/blog";
import type { Locale } from "@/i18n/config";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";
import { buildBreadcrumbSchema } from "@/lib/schema";

type Props = {
  params: Promise<{ locale: string }>;
};

const blogMetaTitles: Record<Locale, string> = {
  en: "Blog | Akravo - AI SEO & LLM Optimisation Insights",
  de: "Blog | Akravo - AI SEO & LLM-Optimierung Einblicke",
  fr: "Blog | Akravo - Actualités SEO IA & Optimisation LLM",
  es: "Blog | Akravo - AI SEO & Optimización LLM Insights",
  it: "Blog | Akravo - AI SEO & Ottimizzazione LLM Insights",
  nl: "Blog | Akravo - AI SEO & LLM Optimalisatie Inzichten",
};

const blogMetaDescriptions: Record<Locale, string> = {
  en: "Expert insights on AI SEO, GEO SEO, AEO, and LLM optimisation. Learn how to get your business recommended by ChatGPT, Perplexity, and Google AI Overview.",
  de: "Experteneinblicke zu AI SEO, GEO SEO, AEO und LLM-Optimierung. Erfahren Sie, wie Ihr Unternehmen von ChatGPT, Perplexity und Google AI Overview empfohlen wird.",
  fr: "Conseils d'experts sur le SEO IA, GEO SEO, AEO et l'optimisation LLM. Découvrez comment faire recommander votre entreprise par ChatGPT, Perplexity et Google AI Overview.",
  es: "Información experta sobre AI SEO, GEO SEO, AEO y optimización LLM. Aprende cómo hacer que tu negocio sea recomendado por ChatGPT, Perplexity y Google AI Overview.",
  it: "Approfondimenti esperti su AI SEO, GEO SEO, AEO e ottimizzazione LLM. Scopri come far raccomandare la tua azienda da ChatGPT, Perplexity e Google AI Overview.",
  nl: "Expertinzichten over AI SEO, GEO SEO, AEO en LLM-optimalisatie. Leer hoe uw bedrijf wordt aanbevolen door ChatGPT, Perplexity en Google AI Overview.",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  return {
    title: blogMetaTitles[loc],
    description: blogMetaDescriptions[loc],
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;

  const readMoreLabels: Record<Locale, string> = {
    en: "Read more",
    de: "Weiterlesen",
    fr: "Lire la suite",
    es: "Leer más",
    it: "Leggi di più",
    nl: "Lees meer",
  };

  const minReadLabels: Record<Locale, string> = {
    en: "min read",
    de: "Min. Lesezeit",
    fr: "min de lecture",
    es: "min de lectura",
    it: "min di lettura",
    nl: "min leestijd",
  };

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Akravo", url: "https://akravo.com" },
    { name: "Blog", url: `https://akravo.com/${loc}/blog` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Navbar />
      <main
        role="main"
        style={{ position: "relative", zIndex: 2, overflow: "hidden" }}
      >
        <section
          style={{
            minHeight: "100vh",
            background: "#050505",
            paddingTop: 160,
            paddingBottom: 80,
          }}
        >
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
              padding: "0 24px",
            }}
          >
            <h1
              style={{
                fontFamily: "Instrument Serif, serif",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 400,
                color: "#fbfafc",
                marginBottom: 16,
              }}
            >
              Blog
            </h1>
            <p
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: 18,
                color: "#999",
                marginBottom: 64,
              }}
            >
              {blogMetaDescriptions[loc]}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    paddingBottom: 48,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      marginBottom: 16,
                    }}
                  >
                    <time
                      dateTime={post.date}
                      style={{
                        fontFamily: "Satoshi, sans-serif",
                        fontSize: 14,
                        color: "#666",
                      }}
                    >
                      {new Date(post.date).toLocaleDateString(
                        loc === "en" ? "en-GB" : loc,
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </time>
                    <span style={{ color: "#444" }}>·</span>
                    <span
                      style={{
                        fontFamily: "Satoshi, sans-serif",
                        fontSize: 14,
                        color: "#666",
                      }}
                    >
                      {post.readingTime} {minReadLabels[loc]}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${post.slug[loc]}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h2
                      style={{
                        fontFamily: "Instrument Serif, serif",
                        fontSize: "clamp(24px, 3vw, 32px)",
                        fontWeight: 400,
                        color: "#fbfafc",
                        marginBottom: 12,
                        lineHeight: 1.3,
                      }}
                    >
                      {post.title[loc]}
                    </h2>
                  </Link>

                  <p
                    style={{
                      fontFamily: "Satoshi, sans-serif",
                      fontSize: 16,
                      color: "#999",
                      lineHeight: 1.6,
                      marginBottom: 20,
                    }}
                  >
                    {post.description[loc]}
                  </p>

                  <Link
                    href={`/blog/${post.slug[loc]}`}
                    style={{
                      fontFamily: "Satoshi, sans-serif",
                      fontSize: 15,
                      fontWeight: 500,
                      color: "rgb(98, 20, 217)",
                      textDecoration: "none",
                    }}
                  >
                    {readMoreLabels[loc]} →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
