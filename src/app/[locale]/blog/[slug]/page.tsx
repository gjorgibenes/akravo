import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { locales, hreflangEntries, getLocalePath } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";
import { buildBreadcrumbSchema } from "@/lib/schema";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const post of blogPosts) {
      params.push({ locale, slug: post.slug[locale] });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc = locale as Locale;
  const post = getBlogPost(loc, slug);
  if (!post) return {};

  const canonicalUrl = `https://akravo.com${getLocalePath(loc)}/blog/${post.slug[loc]}`;
  const languages: Record<string, string> = {};
  for (const entry of hreflangEntries) {
    const entryLoc = entry.locale as Locale;
    languages[entry.hreflang] = `https://akravo.com${getLocalePath(entryLoc)}/blog/${post.slug[entryLoc]}`;
  }

  return {
    title: `${post.title[loc]} | Akravo`,
    description: post.description[loc],
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: post.title[loc],
      description: post.description[loc],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;

  const post = getBlogPost(loc, slug);
  if (!post) notFound();

  const backLabels: Record<Locale, string> = {
    en: "← Back to Blog",
    de: "← Zurück zum Blog",
    fr: "← Retour au Blog",
    es: "← Volver al Blog",
    it: "← Torna al Blog",
    nl: "← Terug naar Blog",
  };

  const minReadLabels: Record<Locale, string> = {
    en: "min read",
    de: "Min. Lesezeit",
    fr: "min de lecture",
    es: "min de lectura",
    it: "min di lettura",
    nl: "min leestijd",
  };

  const ctaLabels: Record<Locale, string> = {
    en: "Want to implement AI SEO for your business?",
    de: "Möchten Sie AI SEO für Ihr Unternehmen umsetzen?",
    fr: "Vous souhaitez mettre en place le SEO IA pour votre entreprise ?",
    es: "¿Quieres implementar AI SEO para tu negocio?",
    it: "Vuoi implementare l'AI SEO per la tua azienda?",
    nl: "Wilt u AI SEO implementeren voor uw bedrijf?",
  };

  const ctaButtonLabels: Record<Locale, string> = {
    en: "Book a call",
    de: "Gespräch buchen",
    fr: "Réserver un appel",
    es: "Reservar llamada",
    it: "Prenota una chiamata",
    nl: "Gesprek boeken",
  };

  const blogUrl = `https://akravo.com${getLocalePath(loc)}/blog`;
  const postUrl = `https://akravo.com${getLocalePath(loc)}/blog/${post.slug[loc]}`;

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Akravo", url: "https://akravo.com" },
    { name: "Blog", url: blogUrl },
    { name: post.title[loc], url: postUrl },
  ]);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title[loc],
    description: post.description[loc],
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Fabian van Til",
    },
    publisher: {
      "@type": "Organization",
      name: "Akravo",
      url: "https://akravo.com",
    },
    mainEntityOfPage: postUrl,
    inLanguage: loc,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Navbar />
      <main
        role="main"
        style={{ position: "relative", zIndex: 2, overflow: "hidden" }}
      >
        <article
          style={{
            minHeight: "100vh",
            background: "#050505",
            paddingTop: 160,
            paddingBottom: 80,
          }}
        >
          <div
            style={{
              maxWidth: 720,
              margin: "0 auto",
              padding: "0 24px",
            }}
          >
            {/* Back link */}
            <Link
              href="/blog"
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: 14,
                color: "#666",
                textDecoration: "none",
                display: "inline-block",
                marginBottom: 40,
              }}
            >
              {backLabels[loc]}
            </Link>

            {/* Meta */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 24,
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

            {/* Title */}
            <h1
              style={{
                fontFamily: "Instrument Serif, serif",
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 400,
                color: "#fbfafc",
                lineHeight: 1.2,
                marginBottom: 24,
              }}
            >
              {post.title[loc]}
            </h1>

            {/* Description */}
            <p
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: 18,
                color: "#999",
                lineHeight: 1.6,
                marginBottom: 48,
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                paddingBottom: 48,
              }}
            >
              {post.description[loc]}
            </p>

            {/* Content */}
            <div
              className="blog-content"
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: 17,
                color: "#ccc",
                lineHeight: 1.8,
              }}
              dangerouslySetInnerHTML={{ __html: post.content[loc] }}
            />

            {/* CTA */}
            <div
              style={{
                marginTop: 64,
                padding: "40px 32px",
                background: "rgba(98, 20, 217, 0.08)",
                border: "1px solid rgba(98, 20, 217, 0.2)",
                borderRadius: 16,
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "Instrument Serif, serif",
                  fontSize: 24,
                  color: "#fbfafc",
                  marginBottom: 20,
                }}
              >
                {ctaLabels[loc]}
              </p>
              <a
                href="https://cal.com/fabianvantil/akravo-discovery"
                style={{
                  display: "inline-block",
                  background: "rgb(98, 20, 217)",
                  color: "#fff",
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  padding: "12px 32px",
                  borderRadius: 999,
                  textDecoration: "none",
                }}
              >
                {ctaButtonLabels[loc]}
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
