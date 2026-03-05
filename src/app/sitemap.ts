import type { MetadataRoute } from "next";
import { locales, getCanonicalUrl, hreflangEntries } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const homeLanguages: Record<string, string> = {};
  for (const entry of hreflangEntries) {
    homeLanguages[entry.hreflang] = getCanonicalUrl(entry.locale as Locale);
  }

  // Home pages for all locales
  const homePages = locales.map((locale) => ({
    url: getCanonicalUrl(locale),
    lastModified: new Date("2026-03-04"),
    changeFrequency: "weekly" as const,
    priority: locale === "en" ? 1 : 0.8,
    alternates: {
      languages: homeLanguages,
    },
  }));

  // Blog listing pages
  const blogLanguages: Record<string, string> = {};
  for (const entry of hreflangEntries) {
    const loc = entry.locale as Locale;
    blogLanguages[entry.hreflang] =
      loc === "en"
        ? "https://akravo.com/blog"
        : `https://akravo.com/${loc}/blog`;
  }

  const blogPages = locales.map((locale) => ({
    url:
      locale === "en"
        ? "https://akravo.com/blog"
        : `https://akravo.com/${locale}/blog`,
    lastModified: new Date("2026-03-04"),
    changeFrequency: "weekly" as const,
    priority: 0.7,
    alternates: {
      languages: blogLanguages,
    },
  }));

  // Blog post pages
  const blogPostPages = blogPosts.flatMap((post) => {
    const postLanguages: Record<string, string> = {};
    for (const entry of hreflangEntries) {
      const loc = entry.locale as Locale;
      postLanguages[entry.hreflang] =
        loc === "en"
          ? `https://akravo.com/blog/${post.slug[loc]}`
          : `https://akravo.com/${loc}/blog/${post.slug[loc]}`;
    }

    return locales.map((locale) => ({
      url:
        locale === "en"
          ? `https://akravo.com/blog/${post.slug[locale]}`
          : `https://akravo.com/${locale}/blog/${post.slug[locale]}`,
      lastModified: new Date("2026-03-04"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: postLanguages,
      },
    }));
  });

  // Case studies listing pages
  const caseStudiesLanguages: Record<string, string> = {};
  for (const entry of hreflangEntries) {
    const loc = entry.locale as Locale;
    caseStudiesLanguages[entry.hreflang] =
      loc === "en"
        ? "https://akravo.com/case-studies"
        : `https://akravo.com/${loc}/case-studies`;
  }

  const caseStudiesPages = locales.map((locale) => ({
    url:
      locale === "en"
        ? "https://akravo.com/case-studies"
        : `https://akravo.com/${locale}/case-studies`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
    alternates: {
      languages: caseStudiesLanguages,
    },
  }));

  // Individual case study pages
  const caseStudySlugs = ["skincare-brand", "wellness-brand", "fashion-brand"];

  const caseStudyPages = caseStudySlugs.flatMap((slug) => {
    const slugLanguages: Record<string, string> = {};
    for (const entry of hreflangEntries) {
      const loc = entry.locale as Locale;
      slugLanguages[entry.hreflang] =
        loc === "en"
          ? `https://akravo.com/case-studies/${slug}`
          : `https://akravo.com/${loc}/case-studies/${slug}`;
    }

    return locales.map((locale) => ({
      url:
        locale === "en"
          ? `https://akravo.com/case-studies/${slug}`
          : `https://akravo.com/${locale}/case-studies/${slug}`,
      lastModified: new Date("2026-03-04"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: slugLanguages,
      },
    }));
  });

  return [
    ...homePages,
    ...blogPages,
    ...blogPostPages,
    ...caseStudiesPages,
    ...caseStudyPages,
  ];
}
