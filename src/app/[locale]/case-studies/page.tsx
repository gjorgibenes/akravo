import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/config";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";
import { buildBreadcrumbSchema } from "@/lib/schema";

type Props = {
  params: Promise<{ locale: string }>;
};

const metaTitles: Record<Locale, string> = {
  en: "Case Studies | Akravo - AI SEO Results",
  de: "Fallstudien | Akravo - AI SEO Ergebnisse",
  fr: "Etudes de cas | Akravo - Resultats SEO IA",
  es: "Casos de estudio | Akravo - Resultados AI SEO",
  it: "Casi studio | Akravo - Risultati AI SEO",
  nl: "Casestudies | Akravo - AI SEO Resultaten",
};

const metaDescriptions: Record<Locale, string> = {
  en: "See how we helped brands get cited by AI platforms like ChatGPT, Perplexity, and Gemini. Real results from real AI SEO projects.",
  de: "Erfahren Sie, wie wir Marken geholfen haben, von KI-Plattformen wie ChatGPT, Perplexity und Gemini zitiert zu werden.",
  fr: "Decouvrez comment nous avons aide des marques a etre citees par les plateformes IA comme ChatGPT, Perplexity et Gemini.",
  es: "Descubre como ayudamos a marcas a ser citadas por plataformas de IA como ChatGPT, Perplexity y Gemini.",
  it: "Scopri come abbiamo aiutato i brand a essere citati dalle piattaforme IA come ChatGPT, Perplexity e Gemini.",
  nl: "Ontdek hoe wij merken hebben geholpen om geciteerd te worden door AI-platforms zoals ChatGPT, Perplexity en Gemini.",
};

const pageHeadings: Record<Locale, string> = {
  en: "Case Studies",
  de: "Fallstudien",
  fr: "Etudes de cas",
  es: "Casos de estudio",
  it: "Casi studio",
  nl: "Casestudies",
};

const readMoreLabels: Record<Locale, string> = {
  en: "Read case study",
  de: "Fallstudie lesen",
  fr: "Lire l'etude de cas",
  es: "Leer caso de estudio",
  it: "Leggi il caso studio",
  nl: "Lees casestudy",
};

interface CaseStudyEntry {
  slug: string;
  tag: string;
  duration: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

const caseStudies: CaseStudyEntry[] = [
  {
    slug: "skincare-brand",
    tag: "DTC Skincare",
    duration: "90 days",
    title: {
      en: "How a premium skincare brand went from invisible to 34 AI citations in 90 days",
      de: "Wie eine Premium-Hautpflegemarke in 90 Tagen von unsichtbar zu 34 KI-Zitationen kam",
      fr: "Comment une marque de soins premium est passee d'invisible a 34 citations IA en 90 jours",
      es: "Como una marca premium de cuidado de piel paso de invisible a 34 citaciones IA en 90 dias",
      it: "Come un brand premium di skincare e passato da invisibile a 34 citazioni IA in 90 giorni",
      nl: "Hoe een premium huidverzorgingsmerk in 90 dagen van onzichtbaar naar 34 AI-citaties ging",
    },
    description: {
      en: "DTC Skincare / 3-month project / 4 AI platforms covered",
      de: "DTC-Hautpflege / 3-Monats-Projekt / 4 KI-Plattformen abgedeckt",
      fr: "Soins DTC / Projet de 3 mois / 4 plateformes IA couvertes",
      es: "Cuidado de piel DTC / Proyecto de 3 meses / 4 plataformas IA cubiertas",
      it: "Skincare DTC / Progetto di 3 mesi / 4 piattaforme IA coperte",
      nl: "DTC Huidverzorging / 3-maanden project / 4 AI-platforms gedekt",
    },
  },
  {
    slug: "wellness-brand",
    tag: "Health & Wellness",
    duration: "90 days",
    title: {
      en: "How a supplement brand got 45 AI citations and became the default recommendation in its category",
      de: "Wie eine Nahrungserganzungsmittel-Marke 45 KI-Zitationen erhielt und zur Standardempfehlung wurde",
      fr: "Comment une marque de complements a obtenu 45 citations IA et est devenue la recommandation par defaut",
      es: "Como una marca de suplementos obtuvo 45 citaciones IA y se convirtio en la recomendacion por defecto",
      it: "Come un brand di integratori ha ottenuto 45 citazioni IA ed e diventato la raccomandazione predefinita",
      nl: "Hoe een supplementenmerk 45 AI-citaties kreeg en de standaardaanbeveling werd",
    },
    description: {
      en: "Health & Wellness / 3-month project / 4 AI platforms covered",
      de: "Gesundheit & Wellness / 3-Monats-Projekt / 4 KI-Plattformen abgedeckt",
      fr: "Sante & Bien-etre / Projet de 3 mois / 4 plateformes IA couvertes",
      es: "Salud y Bienestar / Proyecto de 3 meses / 4 plataformas IA cubiertas",
      it: "Salute & Benessere / Progetto di 3 mesi / 4 piattaforme IA coperte",
      nl: "Gezondheid & Wellness / 3-maanden project / 4 AI-platforms gedekt",
    },
  },
  {
    slug: "fashion-brand",
    tag: "E-commerce Fashion",
    duration: "90 days",
    title: {
      en: "How a DTC fashion label went from zero to 54 AI citations and tripled its AI-referred revenue",
      de: "Wie ein DTC-Modelabel von null auf 54 KI-Zitationen kam und seinen KI-Umsatz verdreifachte",
      fr: "Comment un label de mode DTC est passe de zero a 54 citations IA et a triple son chiffre d'affaires IA",
      es: "Como un label de moda DTC paso de cero a 54 citaciones IA y triplico sus ingresos de IA",
      it: "Come un label di moda DTC e passato da zero a 54 citazioni IA e ha triplicato i ricavi da IA",
      nl: "Hoe een DTC-modelabel van nul naar 54 AI-citaties ging en zijn AI-omzet verdrievoudigde",
    },
    description: {
      en: "E-commerce Fashion / 3-month project / 4 AI platforms covered",
      de: "E-Commerce Mode / 3-Monats-Projekt / 4 KI-Plattformen abgedeckt",
      fr: "E-commerce Mode / Projet de 3 mois / 4 plateformes IA couvertes",
      es: "E-commerce Moda / Proyecto de 3 meses / 4 plataformas IA cubiertas",
      it: "E-commerce Moda / Progetto di 3 mesi / 4 piattaforme IA coperte",
      nl: "E-commerce Mode / 3-maanden project / 4 AI-platforms gedekt",
    },
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  return {
    title: metaTitles[loc],
    description: metaDescriptions[loc],
  };
}

export default async function CaseStudiesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Akravo", url: "https://akravo.com" },
    { name: pageHeadings[loc], url: `https://akravo.com/${loc}/case-studies` },
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
              {pageHeadings[loc]}
            </h1>
            <p
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: 18,
                color: "#999",
                marginBottom: 64,
              }}
            >
              {metaDescriptions[loc]}
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 48,
              }}
            >
              {caseStudies.map((study) => (
                <article
                  key={study.slug}
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    paddingBottom: 48,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 16,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Satoshi, sans-serif",
                        fontSize: 13,
                        fontWeight: 500,
                        color: "rgb(98, 20, 217)",
                        background: "rgba(98, 20, 217, 0.12)",
                        border: "1px solid rgba(98, 20, 217, 0.25)",
                        borderRadius: 999,
                        padding: "4px 14px",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {study.tag}
                    </span>
                    <span
                      style={{
                        fontFamily: "Satoshi, sans-serif",
                        fontSize: 13,
                        fontWeight: 500,
                        color: "#666",
                      }}
                    >
                      {study.duration}
                    </span>
                  </div>

                  <Link
                    href={`/case-studies/${study.slug}`}
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
                      {study.title[loc]}
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
                    {study.description[loc]}
                  </p>

                  <Link
                    href={`/case-studies/${study.slug}`}
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
