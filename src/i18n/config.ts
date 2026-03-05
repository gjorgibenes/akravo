export const locales = ["en", "de", "fr", "es", "it", "nl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  nl: "Nederlands",
};

// Maps each locale to its full hreflang codes (including regional variants)
export const hreflangMap: Record<string, string> = {
  en: "en-GB",
  de: "de-DE",
  "de-AT": "de-AT",
  fr: "fr-FR",
  es: "es-ES",
  it: "it-IT",
  nl: "nl-NL",
  "nl-BE": "nl-BE",
};

// All hreflang entries for link tags
export const hreflangEntries = [
  { hreflang: "en-GB", locale: "en" },
  { hreflang: "de-DE", locale: "de" },
  { hreflang: "de-AT", locale: "de" },
  { hreflang: "fr-FR", locale: "fr" },
  { hreflang: "es-ES", locale: "es" },
  { hreflang: "it-IT", locale: "it" },
  { hreflang: "nl-NL", locale: "nl" },
  { hreflang: "nl-BE", locale: "nl" },
  { hreflang: "x-default", locale: "en" },
];

export function getLocalePath(locale: Locale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}

export function getCanonicalUrl(locale: Locale): string {
  const base = "https://akravo.com";
  return locale === defaultLocale ? base : `${base}/${locale}`;
}
