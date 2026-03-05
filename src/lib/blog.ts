import type { Locale } from "@/i18n/config";
import { geoSeoContent } from "./blog-content-geo-seo";
import { aeoContent } from "./blog-content-aeo";
import { aiSeoStrategyContent } from "./blog-content-ai-seo-strategy";

export type BlogPost = {
  id: string;
  slug: Record<Locale, string>;
  date: string;
  readingTime: number;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  content: Record<Locale, string>;
};

export const blogPosts: BlogPost[] = [
  {
    id: "what-is-geo-seo",
    slug: {
      en: "what-is-geo-seo",
      de: "was-ist-geo-seo",
      fr: "quest-ce-que-le-geo-seo",
      es: "que-es-el-geo-seo",
      it: "cos-e-il-geo-seo",
      nl: "wat-is-geo-seo",
    },
    date: "2026-03-04",
    readingTime: 8,
    title: {
      en: "What is GEO SEO? GEO vs SEO Explained",
      de: "Was ist GEO SEO? Der Unterschied zwischen GEO und traditionellem SEO",
      fr: "Qu'est-ce que le GEO SEO ? GEO vs SEO expliqué",
      es: "¿Qué es el GEO SEO? GEO vs SEO explicado",
      it: "Cos'è il GEO SEO? GEO vs SEO spiegato",
      nl: "Wat is GEO SEO? GEO vs SEO uitgelegd",
    },
    description: {
      en: "GEO SEO (Generative Engine Optimization) is the practice of optimizing content for AI-powered search engines like ChatGPT and Perplexity. Learn how GEO differs from traditional SEO and why it matters.",
      de: "GEO SEO (Generative Engine Optimization) ist die Praxis der Inhaltsoptimierung für KI-gestützte Suchmaschinen wie ChatGPT und Perplexity. Erfahren Sie, wie sich GEO von traditionellem SEO unterscheidet.",
      fr: "Le GEO SEO (Generative Engine Optimization) est la pratique d'optimisation du contenu pour les moteurs de recherche IA comme ChatGPT et Perplexity. Découvrez comment le GEO diffère du SEO traditionnel.",
      es: "El GEO SEO (Generative Engine Optimization) es la práctica de optimizar contenido para motores de búsqueda impulsados por IA como ChatGPT y Perplexity. Descubre cómo el GEO difiere del SEO tradicional.",
      it: "Il GEO SEO (Generative Engine Optimization) è la pratica di ottimizzazione dei contenuti per i motori di ricerca basati sull'IA come ChatGPT e Perplexity. Scopri come il GEO differisce dal SEO tradizionale.",
      nl: "GEO SEO (Generative Engine Optimization) is de praktijk van het optimaliseren van content voor AI-gestuurde zoekmachines zoals ChatGPT en Perplexity. Ontdek hoe GEO verschilt van traditionele SEO.",
    },
    content: geoSeoContent,
  },
  {
    id: "what-is-aeo",
    slug: {
      en: "what-is-aeo",
      de: "was-ist-answer-engine-optimization",
      fr: "quest-ce-que-laeo",
      es: "que-es-el-aeo",
      it: "cos-e-laeo",
      nl: "wat-is-aeo",
    },
    date: "2026-03-04",
    readingTime: 9,
    title: {
      en: "What is AEO? The Complete Guide to Answer Engine Optimization",
      de: "Was ist Answer Engine Optimization? Der komplette AEO-Guide",
      fr: "Qu'est-ce que l'AEO ? Guide complet de l'Answer Engine Optimization",
      es: "¿Qué es el AEO? Guía completa de Answer Engine Optimization",
      it: "Cos'è l'AEO? Guida completa all'Answer Engine Optimization",
      nl: "Wat is AEO? De complete gids voor Answer Engine Optimization",
    },
    description: {
      en: "AEO (Answer Engine Optimization) is the process of optimizing your content to be cited by AI answer engines like ChatGPT, Perplexity, and Google AI Overview. Learn the complete AEO strategy.",
      de: "Answer Engine Optimization (AEO) ist der Prozess, Ihre Inhalte so zu optimieren, dass sie von KI-Antwortmaschinen wie ChatGPT, Perplexity und Google AI Overview zitiert werden. Der komplette AEO-Guide.",
      fr: "L'AEO (Answer Engine Optimization) est le processus d'optimisation de vos contenus pour être cité par les moteurs de réponse IA comme ChatGPT, Perplexity et Google AI Overview. Guide complet AEO.",
      es: "El AEO (Answer Engine Optimization) es el proceso de optimizar tu contenido para ser citado por motores de respuesta IA como ChatGPT, Perplexity y Google AI Overview. Guía completa de AEO.",
      it: "L'AEO (Answer Engine Optimization) è il processo di ottimizzazione dei contenuti per essere citati dai motori di risposta IA come ChatGPT, Perplexity e Google AI Overview. Guida completa all'AEO.",
      nl: "AEO (Answer Engine Optimization) is het proces van het optimaliseren van uw content om geciteerd te worden door AI-antwoordmachines zoals ChatGPT, Perplexity en Google AI Overview. De complete AEO-gids.",
    },
    content: aeoContent,
  },
  {
    id: "ai-seo-strategy-chatgpt",
    slug: {
      en: "ai-seo-strategy-chatgpt",
      de: "ai-seo-strategie-chatgpt",
      fr: "strategie-seo-ia-chatgpt",
      es: "estrategia-ai-seo-chatgpt",
      it: "strategia-ai-seo-chatgpt",
      nl: "ai-seo-strategie-chatgpt",
    },
    date: "2026-03-04",
    readingTime: 10,
    title: {
      en: "AI SEO Strategy: How to Get Your Business Recommended by ChatGPT",
      de: "AI SEO Strategie: So wird Ihr Unternehmen von ChatGPT empfohlen",
      fr: "Stratégie SEO IA : Comment rendre votre entreprise visible sur ChatGPT",
      es: "Estrategia AI SEO: Cómo hacer que ChatGPT recomiende tu negocio",
      it: "Strategia AI SEO: Come far raccomandare la tua azienda da ChatGPT",
      nl: "AI SEO Strategie: Zo wordt uw bedrijf aanbevolen door ChatGPT",
    },
    description: {
      en: "Learn a step-by-step AI SEO strategy to get your business recommended by ChatGPT, Perplexity, and Google AI Overview. From entity optimization to citation building.",
      de: "Lernen Sie eine Schritt-für-Schritt AI SEO Strategie, damit Ihr Unternehmen von ChatGPT, Perplexity und Google AI Overview empfohlen wird. Von Entity-Optimierung bis Zitationsaufbau.",
      fr: "Découvrez une stratégie SEO IA étape par étape pour que votre entreprise soit recommandée par ChatGPT, Perplexity et Google AI Overview. De l'optimisation des entités à la construction de citations.",
      es: "Aprende una estrategia AI SEO paso a paso para que tu negocio sea recomendado por ChatGPT, Perplexity y Google AI Overview. Desde la optimización de entidades hasta la construcción de citas.",
      it: "Scopri una strategia AI SEO passo dopo passo per far raccomandare la tua azienda da ChatGPT, Perplexity e Google AI Overview. Dall'ottimizzazione delle entità alla costruzione di citazioni.",
      nl: "Leer een stapsgewijze AI SEO strategie zodat uw bedrijf wordt aanbevolen door ChatGPT, Perplexity en Google AI Overview. Van entity-optimalisatie tot citatiemanagement.",
    },
    content: aiSeoStrategyContent,
  },
];

export function getBlogPost(
  locale: Locale,
  slug: string
): BlogPost | undefined {
  return blogPosts.find((post) => post.slug[locale] === slug);
}

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}
