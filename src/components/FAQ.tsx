"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "Is this just repackaged SEO?",
    answer:
      '70% overlaps with SEO, but the 30% that\'s different makes all the difference. AI platforms need structured data, clear answers, and entity authority - not just keywords and backlinks.',
  },
  {
    question: "Can you guarantee we'll appear in ChatGPT?",
    answer:
      'We guarantee increased citations or full refund. ChatGPT doesn\'t "rank" sites - it synthesizes from trusted sources. We make you a trusted source.',
  },
  {
    question: "How long until results?",
    answer:
      "First citations within 30 days. Meaningful traffic by day 60. Compound growth after 90 days.",
  },
  {
    question: "What exactly is LLM optimization?",
    answer:
      "It's the process of making your content visible and citable in AI-powered search tools like ChatGPT, Perplexity, and Google's AI Overview. Think of it as SEO for AI - we ensure these platforms understand, trust, and recommend your business when users ask relevant questions.",
  },
  {
    question: "Will this interfere with our regular SEO?",
    answer:
      'No. In fact, 70% of AI optimization improves your traditional SEO too. Better structured data, clearer content, and improved entity recognition benefit both traditional and AI search. The only additions are AI-specific elements like llms.txt and answer-focused content formatting.',
  },
  {
    question: "How do AI platforms decide what sources to trust?",
    answer:
      'They evaluate domain authority, factual accuracy, content structure, and presence across multiple trusted sources (Wikipedia, major publications, etc.). If you\'re cited frequently in their training data or high-authority sites, you become a "trusted source." We systematically build these trust signals.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
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
                  {/* Horizontal bar */}
                  <span
                    style={{
                      position: "absolute",
                      width: 12,
                      height: 2,
                      background: "#fbfafc",
                      borderRadius: 8,
                    }}
                  />
                  {/* Vertical bar */}
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
