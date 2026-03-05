"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("FAQ");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    { question: t("q1"), answer: t("a1") },
    { question: t("q2"), answer: t("a2") },
    { question: t("q3"), answer: t("a3") },
    { question: t("q4"), answer: t("a4") },
    { question: t("q5"), answer: t("a5") },
    { question: t("q6"), answer: t("a6") },
  ];

  return (
    <section
      className="w-full pt-15 px-6 md:px-15"
      style={{
        background: "rgb(10, 10, 10)",
        zIndex: 1,
        position: "relative",
      }}
    >
      <div className="max-w-[800px] mx-auto">
        <div className="flex flex-col" style={{ gap: 16 }}>
          {faqItems.map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgb(13, 13, 13)",
                borderRadius: 12,
                border: "1px solid rgba(255, 255, 255, 0.1)",
                overflow: "hidden",
              }}
            >
              <button
                id={`faq-question-${i}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                className="w-full flex items-center justify-between text-left cursor-pointer"
                style={{ padding: "18px 20px" }}
              >
                <span
                  style={{
                    color: "#fbfafc",
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "1.5em",
                    letterSpacing: "-0.02em",
                    paddingRight: 24,
                  }}
                >
                  {item.question}
                </span>
                <span
                  className="shrink-0 flex items-center justify-center"
                  style={{
                    width: 12,
                    height: 12,
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      width: 12,
                      height: 2,
                      background: "#fbfafc",
                      borderRadius: 8,
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      width: 2,
                      height: 12,
                      background: "#fbfafc",
                      borderRadius: 8,
                      transition: "transform 0.3s ease",
                      transform:
                        openIndex === i ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                  />
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.44, 0, 0.56, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <p
                      style={{
                        padding: "0 20px 18px 20px",
                        color: "#999",
                        fontFamily: "Satoshi, sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        lineHeight: "1.5em",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
