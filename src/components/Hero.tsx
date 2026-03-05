"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Badge from "./Badge";
import Button from "./Button";

const CAL_LINK = "https://cal.com/fabianvantil/akravo-discovery";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center text-center overflow-visible pt-24 md:pt-[140px] px-6 md:px-16 pb-16"
      style={{
        background: "rgb(10, 10, 10)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
        className="flex flex-col items-center w-full"
        style={{ maxWidth: 1200, gap: 32 }}
      >
        <Badge green>{t("badge")}</Badge>

        <h1
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 500,
            fontSize: "var(--heading-hero)",
            lineHeight: "1.1em",
            letterSpacing: "-0.05em",
            color: "#fbfafc",
            maxWidth: 952,
            width: "100%",
          }}
        >
          {t("headingPart1")}{" "}
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            {t("headingItalic")}
          </span>{" "}
          {t("headingPart2")}
        </h1>

        <p
          style={{
            color: "#999",
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 500,
            fontSize: "var(--desc-hero)",
            lineHeight: "1.5em",
            letterSpacing: "-0.02em",
            textAlign: "center",
            textWrap: "balance",
          }}
        >
          {t("description")}
        </p>

        <div className="flex flex-row flex-wrap items-center justify-center gap-4 md:gap-6">
          <Button href={CAL_LINK} variant="primary" size="large">
            {t("bookCall")}
          </Button>
          <Button href="/#process" variant="secondary" size="large">
            {t("learnHow")}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
