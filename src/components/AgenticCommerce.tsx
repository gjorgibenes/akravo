"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Badge from "./Badge";
import Button from "./Button";
import ChecklistModal from "./ChecklistModal";

const CAL_LINK = "https://cal.com/fabianvantil/akravo-discovery";

export default function AgenticCommerce() {
  const t = useTranslations("AgenticCommerce");
  const [modalOpen, setModalOpen] = useState(false);

  const modalLabels = {
    name: t("formName"),
    email: t("formEmail"),
    phone: t("formPhone"),
    website: t("formWebsite"),
    submit: t("getChecklist"),
    sending: t("formSending"),
    thankYou: t("formThankYou"),
    thankYouMessage: t("formThankYouMessage"),
    error: t("formError"),
  };

  return (
    <>
      <section
        className="w-full py-16 px-6 md:px-16"
        style={{
          background: "rgb(10, 10, 10)",
          zIndex: 1,
        }}
      >
        <div
          className="max-w-[1000px] mx-auto overflow-hidden h-auto md:h-[443px]"
          style={{
            background: "rgb(13, 13, 13)",
            borderRadius: 24,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div
            className="relative flex items-center h-full py-16 px-6 md:px-12"
            style={{ gap: 24 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
              className="flex flex-col z-[1] lg:max-w-[50%]"
              style={{ gap: 24 }}
            >
              <div
                className="flex flex-col"
                style={{ gap: 16, maxWidth: 470 }}
              >
                <Badge>{t("badge")}</Badge>

                <h2
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 500,
                    fontSize: 48,
                    lineHeight: "1em",
                    letterSpacing: "-0.05em",
                    color: "#fbfafc",
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
                </h2>

                <p
                  style={{
                    color: "#999",
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "1.5em",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {t("description")}
                </p>
              </div>

              <div
                className="flex flex-col md:flex-row md:flex-wrap"
                style={{ gap: 12 }}
              >
                <Button
                  variant="primary"
                  size="medium"
                  onClick={() => setModalOpen(true)}
                >
                  {t("getChecklist")}
                </Button>
                <Button href={CAL_LINK} variant="secondary" size="medium">
                  {t("bookCall")}
                </Button>
              </div>
            </motion.div>

            <video
              autoPlay
              loop
              muted
              playsInline
              onLoadedMetadata={(e) => {
                (e.target as HTMLVideoElement).currentTime = 8.7;
              }}
              className="absolute top-0 right-0 h-full object-contain hidden lg:block"
              style={{ width: "48%", padding: "16px 16px 16px 0" }}
            >
              <source
                src="/videos/akravo-checklist.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

      <ChecklistModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        labels={modalLabels}
      />
    </>
  );
}
