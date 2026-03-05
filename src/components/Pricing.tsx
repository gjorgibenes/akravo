"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Badge from "./Badge";
import Button from "./Button";

const CAL_LINK = "https://cal.com/fabianvantil/akravo-discovery";

function StarFourIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 256 256" fill="#fbfafc">
      <path d="M229.5,113,166.07,89.93,143,26.5a15.93,15.93,0,0,0-30,0L89.93,89.93,26.5,113a15.93,15.93,0,0,0,0,30l63.43,23.07L113,229.5a15.93,15.93,0,0,0,30,0l23.07-63.43L229.5,143a15.93,15.93,0,0,0,0-30Z" />
    </svg>
  );
}

export default function Pricing() {
  const t = useTranslations("Pricing");
  const [upfront, setUpfront] = useState(false);

  const standardFeatures = [
    t("standardFeature1"),
    t("standardFeature2"),
    t("standardFeature3"),
    t("standardFeature4"),
    t("standardFeature5"),
    t("standardFeature6"),
    t("standardFeature7"),
    t("standardFeature8"),
  ];

  const enterpriseFeatures = [
    t("enterpriseFeature1"),
    t("enterpriseFeature2"),
    t("enterpriseFeature3"),
    t("enterpriseFeature4"),
    t("enterpriseFeature5"),
    t("enterpriseFeature6"),
  ];

  return (
    <section
      id="pricing"
      className="w-full py-16 px-6 md:px-16"
      style={{
        background: "rgb(10, 10, 10)",
      }}
    >
      <div className="max-w-[1200px] mx-auto" style={{ borderRadius: 50 }}>
        <div className="flex flex-col items-center" style={{ gap: 64 }}>
          {/* Header */}
          <div
            className="flex flex-col items-center text-center"
            style={{ gap: 8 }}
          >
            <Badge>{t("badge")}</Badge>
            <div
              className="flex flex-col items-center text-center"
              style={{ gap: 16 }}
            >
              <h2
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 500,
                  fontSize: 48,
                  lineHeight: "1.3em",
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
          </div>

          {/* Cards */}
          <div
            className="flex flex-col lg:flex-row items-stretch justify-center w-full overflow-clip"
            style={{ gap: 40 }}
          >
            {/* Standard Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.44, 0, 0.56, 1] }}
              className="relative flex flex-col overflow-hidden w-full max-w-none lg:max-w-[450px] py-10 md:py-16 px-6 md:px-8"
              style={{
                background: "rgb(13, 13, 13)",
                borderRadius: 24,
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute bottom-0 left-0 w-full pointer-events-none"
                style={{
                  height: 684,
                  objectFit: "cover",
                  opacity: 0.4,
                  maskImage:
                    "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)",
                  WebkitMaskImage:
                    "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)",
                }}
              >
                <source
                  src="https://limitless-framer-template.s3.us-east-005.backblazeb2.com/Sphere.mp4"
                  type="video/mp4"
                />
              </video>

              <div
                className="relative z-[1] flex flex-col"
                style={{ gap: 40 }}
              >
                <div className="flex flex-col" style={{ gap: 12 }}>
                  <Badge green>{t("spotsLeft")}</Badge>
                  <div className="flex flex-col">
                    <span
                      style={{
                        fontFamily: "Satoshi, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        lineHeight: "1.5em",
                        letterSpacing: "-0.02em",
                        color: "#999",
                      }}
                    >
                      {t("startingAt")}
                    </span>
                    <div
                      className="flex items-baseline"
                      style={{ gap: 4 }}
                    >
                      <span
                        style={{
                          fontFamily: "Satoshi, sans-serif",
                          fontWeight: 500,
                          fontSize: 48,
                          lineHeight: "1.2",
                          letterSpacing: "-0.2px",
                          color: "#fbfafc",
                        }}
                      >
                        ${upfront ? "5,265" : "1,950"}
                      </span>
                      <span
                        style={{
                          fontFamily: "Satoshi, sans-serif",
                          fontWeight: 500,
                          fontSize: 24,
                          lineHeight: "1.2",
                          color: "#fbfafc",
                        }}
                      >
                        {upfront ? "" : t("perMonth")}
                      </span>
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: "1.5em",
                      letterSpacing: "-0.02em",
                      color: "#999",
                    }}
                  >
                    {t("pricingNote")}
                  </span>
                </div>

                <div
                  className="flex flex-col items-center"
                  style={{ gap: 24 }}
                >
                  <div
                    className="flex flex-col md:flex-row w-full"
                    style={{ gap: 16 }}
                  >
                    <Button
                      href={CAL_LINK}
                      variant="primary"
                      size="large"
                      fullWidth
                      newTab
                    >
                      {t("bookCall")}
                    </Button>
                    <Button
                      href="/#contact"
                      variant="secondary"
                      size="large"
                      fullWidth
                    >
                      {t("submitForm")}
                    </Button>
                  </div>

                  <div
                    className="flex items-center justify-between w-full"
                    style={{
                      background: "rgba(13, 13, 13, 0.5)",
                      borderRadius: 999,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      padding: "12px 24px",
                    }}
                  >
                    <button
                      onClick={() => setUpfront(!upfront)}
                      aria-label={
                        upfront ? t("switchToMonthly") : t("switchToUpfront")
                      }
                      role="switch"
                      aria-checked={upfront}
                      className="relative shrink-0 cursor-pointer"
                      style={{
                        width: 60,
                        height: 28,
                        borderRadius: 999,
                        background: upfront
                          ? "rgb(98, 20, 217)"
                          : "rgba(255,255,255,0.1)",
                        transition: "background 0.2s",
                        border: "none",
                      }}
                    >
                      <span
                        className="absolute rounded-full bg-white"
                        style={{
                          width: 20,
                          height: 20,
                          top: 4,
                          left: upfront ? 36 : 4,
                          transition: "left 0.2s",
                        }}
                      />
                    </button>
                    <span
                      style={{
                        fontFamily: "Satoshi, sans-serif",
                        fontWeight: 500,
                        fontSize: 14,
                        color: "#fbfafc",
                      }}
                    >
                      {t("upfrontPayment")}
                    </span>
                    <Badge>{t("save10")}</Badge>
                  </div>
                </div>

                <div className="flex flex-col" style={{ gap: 16 }}>
                  {standardFeatures.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center"
                      style={{ gap: 10 }}
                    >
                      <StarFourIcon />
                      <span
                        style={{
                          color: "#fbfafc",
                          fontFamily: "Satoshi, sans-serif",
                          fontWeight: 500,
                          fontSize: 16,
                          lineHeight: "1.5em",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.44, 0, 0.56, 1],
              }}
              className="relative flex flex-col overflow-hidden w-full max-w-none lg:max-w-[450px] py-10 px-6 md:px-8"
              style={{
                background: "rgb(3, 3, 3)",
                borderRadius: 24,
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute bottom-0 left-0 w-full pointer-events-none"
                style={{
                  height: 684,
                  objectFit: "cover",
                  opacity: 0.4,
                  maskImage:
                    "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)",
                  WebkitMaskImage:
                    "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)",
                }}
              >
                <source
                  src="https://limitless-framer-template.s3.us-east-005.backblazeb2.com/Sphere.mp4"
                  type="video/mp4"
                />
              </video>

              <div
                className="relative z-[1] flex flex-col"
                style={{ gap: 40 }}
              >
                <div className="flex flex-col" style={{ gap: 12 }}>
                  <span
                    style={{
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 500,
                      fontSize: 18,
                      lineHeight: "1.5em",
                      letterSpacing: "-0.02em",
                      color: "#fbfafc",
                    }}
                  >
                    {t("forEnterprises")}
                  </span>
                  <span
                    style={{
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: "1.5em",
                      letterSpacing: "-0.02em",
                      color: "#999",
                    }}
                  >
                    {t("pricingNote")}
                  </span>
                  <div className="flex flex-col">
                    <span
                      style={{
                        fontFamily: "Satoshi, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        lineHeight: "1.5em",
                        letterSpacing: "-0.02em",
                        color: "#999",
                      }}
                    >
                      {t("startingAt")}
                    </span>
                    <div
                      className="flex items-baseline"
                      style={{ gap: 4 }}
                    >
                      <span
                        style={{
                          fontFamily: "Satoshi, sans-serif",
                          fontWeight: 500,
                          fontSize: 48,
                          lineHeight: "1.2",
                          letterSpacing: "-0.2px",
                          color: "#fbfafc",
                        }}
                      >
                        $8,000
                      </span>
                      <span
                        style={{
                          fontFamily: "Satoshi, sans-serif",
                          fontWeight: 500,
                          fontSize: 24,
                          lineHeight: "1.2",
                          color: "#999",
                        }}
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  href={CAL_LINK}
                  variant="primary"
                  size="large"
                  fullWidth
                  newTab
                >
                  {t("letsTalk")}
                </Button>

                <div className="flex flex-col" style={{ gap: 16 }}>
                  {enterpriseFeatures.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center"
                      style={{ gap: 10 }}
                    >
                      <StarFourIcon />
                      <span
                        style={{
                          color: "#fbfafc",
                          fontFamily: "Satoshi, sans-serif",
                          fontWeight: 500,
                          fontSize: 16,
                          lineHeight: "1.5em",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
