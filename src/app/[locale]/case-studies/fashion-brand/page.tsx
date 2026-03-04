"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import MetricCard from "@/components/CaseStudy/MetricCard";
import Timeline from "@/components/CaseStudy/Timeline";
import PlatformBreakdown from "@/components/CaseStudy/PlatformBreakdown";

const CAL_LINK = "https://cal.com/fabianvantil/akravo-discovery";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.7, ease: [0.44, 0, 0.56, 1] as [number, number, number, number] },
};

export default function FashionBrandCaseStudy() {
  const t = useTranslations("CaseStudyFashion");

  const phases = [
    {
      period: t("phase1Period"),
      title: t("phase1Title"),
      description: t("phase1Desc"),
      metric: t("phase1Metric"),
    },
    {
      period: t("phase2Period"),
      title: t("phase2Title"),
      description: t("phase2Desc"),
      metric: t("phase2Metric"),
    },
    {
      period: t("phase3Period"),
      title: t("phase3Title"),
      description: t("phase3Desc"),
      metric: t("phase3Metric"),
    },
  ];

  const platforms = [
    { name: "ChatGPT", citations: 21, maxCitations: 21 },
    { name: "Perplexity", citations: 15, maxCitations: 21 },
    { name: "Gemini", citations: 11, maxCitations: 21 },
    { name: "Claude", citations: 7, maxCitations: 21 },
  ];

  return (
    <>
      <Navbar />
      <main
        role="main"
        style={{ position: "relative", zIndex: 2, overflow: "hidden" }}
      >
        {/* Hero */}
        <section
          style={{
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
            <motion.div {...fadeUp}>
              <Badge>{t("badge")}</Badge>
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              style={{
                fontFamily: "Instrument Serif, serif",
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#fbfafc",
                lineHeight: 1.15,
                marginTop: 24,
                marginBottom: 16,
              }}
            >
              {t("heroTitle")}
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: 18,
                color: "#999",
                lineHeight: 1.6,
                marginBottom: 48,
                maxWidth: 640,
              }}
            >
              {t("heroSubtitle")}
            </motion.p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 16,
              }}
            >
              <MetricCard
                value="0 → 54"
                label={t("metricCitations")}
                animateFrom={0}
                animateTo={54}
                suffix=" citations"
              />
              <MetricCard
                value="+312%"
                label={t("metricTraffic")}
                prefix="+"
                animateFrom={0}
                animateTo={312}
                suffix="%"
              />
              <MetricCard
                value="4.1x"
                label={t("metricConversion")}
              />
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section
          style={{
            background: "#0a0a0a",
            paddingTop: 80,
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
            <motion.div {...fadeUp}>
              <h2
                style={{
                  fontFamily: "Instrument Serif, serif",
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#fbfafc",
                  marginBottom: 24,
                }}
              >
                {t("challengeTitle")}
              </h2>
              <p
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: 16,
                  color: "#999",
                  lineHeight: 1.7,
                  marginBottom: 40,
                  maxWidth: 640,
                }}
              >
                {t("challengeText")}
              </p>
            </motion.div>

            {/* "Before" snapshot card */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              style={{
                background: "rgb(13, 13, 13)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: 24,
                padding: "32px",
                maxWidth: 520,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 20,
                }}
              >
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
                <span
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: 13,
                    color: "#666",
                    marginLeft: 8,
                  }}
                >
                  ChatGPT
                </span>
              </div>

              <div
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: 16,
                  padding: "14px 18px",
                  marginBottom: 16,
                }}
              >
                <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 14, color: "#ccc", margin: 0 }}>
                  {t("mockPrompt")}
                </p>
              </div>

              <div style={{ borderRadius: 16, padding: "14px 18px" }}>
                <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 14, color: "#999", lineHeight: 1.6, margin: 0 }}>
                  {t("mockResponse")}
                </p>
              </div>

              <div
                style={{
                  marginTop: 20,
                  padding: "10px 16px",
                  background: "rgba(255, 80, 80, 0.08)",
                  border: "1px solid rgba(255, 80, 80, 0.2)",
                  borderRadius: 12,
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#ff6b6b",
                }}
              >
                {t("mockVerdict")}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Approach - Timeline */}
        <section
          style={{
            background: "#050505",
            paddingTop: 80,
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
            <motion.h2
              {...fadeUp}
              style={{
                fontFamily: "Instrument Serif, serif",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#fbfafc",
                marginBottom: 48,
              }}
            >
              {t("approachTitle")}
            </motion.h2>

            <Timeline phases={phases} />
          </div>
        </section>

        {/* The Results */}
        <section
          style={{
            background: "#0a0a0a",
            paddingTop: 80,
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
            <motion.h2
              {...fadeUp}
              style={{
                fontFamily: "Instrument Serif, serif",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#fbfafc",
                marginBottom: 48,
              }}
            >
              {t("resultsTitle")}
            </motion.h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
                gap: 16,
                marginBottom: 64,
              }}
            >
              <MetricCard value="0 → 54" label={t("metricCitations")} animateFrom={0} animateTo={54} />
              <MetricCard value="1,540" label={t("metricPrompts")} animateFrom={0} animateTo={1540} />
              <MetricCard value="4" label={t("metricPlatforms")} animateFrom={0} animateTo={4} />
              <MetricCard value="+312%" label={t("metricTraffic")} prefix="+" animateFrom={0} animateTo={312} suffix="%" />
              <MetricCard value="4.1x" label={t("metricConversion")} />
            </div>

            <motion.div {...fadeUp}>
              <h3
                style={{
                  fontFamily: "Instrument Serif, serif",
                  fontSize: "clamp(22px, 3vw, 28px)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#fbfafc",
                  marginBottom: 32,
                }}
              >
                {t("platformTitle")}
              </h3>
              <div
                style={{
                  background: "rgb(13, 13, 13)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 24,
                  padding: "32px",
                }}
              >
                <PlatformBreakdown platforms={platforms} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonial */}
        <section
          style={{
            background: "#050505",
            paddingTop: 80,
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
            <motion.blockquote
              {...fadeUp}
              style={{
                background: "rgb(13, 13, 13)",
                borderLeft: "4px solid rgb(98, 20, 217)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderLeftWidth: 4,
                borderLeftColor: "rgb(98, 20, 217)",
                borderRadius: 24,
                padding: "40px 36px",
                margin: 0,
              }}
            >
              <p
                style={{
                  fontFamily: "Instrument Serif, serif",
                  fontSize: "clamp(20px, 3vw, 26px)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#fbfafc",
                  lineHeight: 1.5,
                  marginBottom: 24,
                }}
              >
                &ldquo;{t("quoteText")}&rdquo;
              </p>
              <footer
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: 15,
                  color: "#999",
                }}
              >
                — {t("quoteAuthor")}
              </footer>
            </motion.blockquote>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            background: "#0a0a0a",
            paddingTop: 80,
            paddingBottom: 120,
          }}
        >
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
              padding: "0 24px",
              textAlign: "center",
            }}
          >
            <motion.h2
              {...fadeUp}
              style={{
                fontFamily: "Instrument Serif, serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#fbfafc",
                marginBottom: 16,
              }}
            >
              {t("ctaTitle")}
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: 18,
                color: "#999",
                marginBottom: 40,
                maxWidth: 500,
                margin: "0 auto 40px",
              }}
            >
              {t("ctaDescription")}
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button href={CAL_LINK} variant="primary" newTab>
                {t("ctaBookCall")}
              </Button>
              <Button href="/#contact" variant="secondary">
                {t("ctaContact")}
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
