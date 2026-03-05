"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { locales, localeNames } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(newLocale: Locale) {
    setOpen(false);
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 cursor-pointer"
        style={{
          color: "#fbfafc",
          fontFamily: "Satoshi, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          letterSpacing: "-0.02em",
          padding: "8px 12px",
          borderRadius: 999,
          background: "transparent",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
        aria-label="Switch language"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        {locale.toUpperCase()}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 py-1 z-50"
          style={{
            background: "rgb(20, 20, 20)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 12,
            minWidth: 140,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
          }}
        >
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className="w-full text-left cursor-pointer"
              style={{
                display: "block",
                padding: "8px 16px",
                color: l === locale ? "#fbfafc" : "#999",
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                letterSpacing: "-0.02em",
                background:
                  l === locale ? "rgba(98, 20, 217, 0.2)" : "transparent",
                border: "none",
                transition: "background 0.15s, color 0.15s",
              }}
              onMouseEnter={(e) => {
                if (l !== locale) {
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.color = "#fbfafc";
                }
              }}
              onMouseLeave={(e) => {
                if (l !== locale) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#999";
                }
              }}
            >
              {localeNames[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
