"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Badge from "./Badge";
import Button from "./Button";

const CAL_LINK = "https://cal.com/fabianvantil/akravo-discovery";

function PromptResearchIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 256 256"
      fill="none"
      stroke="#fbfafc"
      strokeWidth="16"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="112" cy="112" r="80" />
      <line x1="168.6" y1="168.6" x2="224" y2="224" />
    </svg>
  );
}

function CitationManagementIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 256 256"
      fill="none"
      stroke="#fbfafc"
      strokeWidth="16"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="48" y="32" width="160" height="56" rx="8" />
      <rect x="48" y="100" width="160" height="56" rx="8" />
      <rect x="48" y="168" width="160" height="56" rx="8" />
    </svg>
  );
}

function MonetisationIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 256 256"
      fill="none"
      stroke="#fbfafc"
      strokeWidth="16"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="108" cy="108" r="52" />
      <circle cx="108" cy="108" r="20" />
      <line x1="108" y1="56" x2="108" y2="72" />
      <line x1="108" y1="144" x2="108" y2="160" />
      <line x1="56" y1="108" x2="72" y2="108" />
      <line x1="144" y1="108" x2="160" y2="108" />
      <circle
        cx="188"
        cy="68"
        r="36"
        fill="rgb(98, 20, 217)"
        stroke="rgb(98, 20, 217)"
        strokeWidth="0"
      />
      <path
        d="M176 68l8 8 16-16"
        stroke="#fbfafc"
        strokeWidth="14"
        fill="none"
      />
    </svg>
  );
}

export default function Services() {
  const t = useTranslations("Services");

  const services = [
    {
      title: t("promptResearchTitle"),
      description: t("promptResearchDesc"),
      icon: <PromptResearchIcon />,
    },
    {
      title: t("citationManagementTitle"),
      description: t("citationManagementDesc"),
      icon: <CitationManagementIcon />,
    },
    {
      title: t("influentialMonetisationTitle"),
      description: t("influentialMonetisationDesc"),
      icon: <MonetisationIcon />,
    },
  ];

  return (
    <section
      id="process"
      className="w-full pt-16 px-6 md:px-16"
      style={{
        background: "rgb(10, 10, 10)",
      }}
    >
      <div
        className="max-w-[1200px] mx-auto overflow-visible py-16 px-6 md:px-12"
        style={{
          borderRadius: 50,
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="flex flex-col items-center" style={{ gap: 64 }}>
          <div
            className="flex flex-col items-center text-center"
            style={{ gap: 24 }}
          >
            <Badge>{t("badge")}</Badge>
            <h2
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 500,
                fontSize: "var(--heading-section)",
                letterSpacing: "-0.05em",
                color: "#fbfafc",
              }}
            >
              {t("headingRegular")}{" "}
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                {t("headingItalic")}
              </span>
            </h2>
            <p
              style={{
                color: "#999",
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 500,
                fontSize: "var(--desc-services)",
                lineHeight: "1.5em",
                letterSpacing: "-0.02em",
                textAlign: "center",
                textWrap: "balance",
              }}
            >
              {t("description")}
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 w-full"
            style={{ gap: "24px 20px" }}
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.44, 0, 0.56, 1],
                }}
                className="flex flex-col items-center text-center"
                style={{
                  borderRadius: 24,
                  gap: 24,
                  padding: "40px 24px",
                }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 72,
                    height: 72,
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    color: "#fbfafc",
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 500,
                    fontSize: 28,
                    lineHeight: "1.3em",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: "#999",
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 500,
                    fontSize: 18,
                    lineHeight: "1.5em",
                    letterSpacing: "-0.02em",
                    textWrap: "balance",
                  }}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <Button href={CAL_LINK} variant="primary" size="large">
            {t("bookCall")}
          </Button>
        </div>
      </div>
    </section>
  );
}
