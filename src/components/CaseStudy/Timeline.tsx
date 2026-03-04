"use client";

import { motion } from "framer-motion";

interface Phase {
  period: string;
  title: string;
  description: string;
  metric: string;
}

interface TimelineProps {
  phases: Phase[];
}

const phaseIcons = [
  // Search / Research icon
  <svg key="search" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(98, 20, 217)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>,
  // Build / Link icon
  <svg key="link" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(98, 20, 217)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>,
  // Chart / Growth icon
  <svg key="chart" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(98, 20, 217)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>,
];

export default function Timeline({ phases }: TimelineProps) {
  return (
    <div style={{ position: "relative", paddingLeft: 40 }}>
      {/* Vertical line */}
      <div
        style={{
          position: "absolute",
          left: 19,
          top: 0,
          bottom: 0,
          width: 2,
          background: "linear-gradient(180deg, rgb(98, 20, 217) 0%, rgba(98, 20, 217, 0.2) 100%)",
        }}
      />

      {phases.map((phase, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            delay: i * 0.15,
            ease: [0.44, 0, 0.56, 1],
          }}
          style={{
            position: "relative",
            marginBottom: i < phases.length - 1 ? 32 : 0,
          }}
        >
          {/* Icon circle */}
          <div
            style={{
              position: "absolute",
              left: -40,
              top: 24,
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgb(13, 13, 13)",
              border: "2px solid rgb(98, 20, 217)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            {phaseIcons[i]}
          </div>

          {/* Card */}
          <div
            style={{
              background: "rgb(13, 13, 13)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: 24,
              padding: "28px 32px",
              marginLeft: 20,
            }}
          >
            <div
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: 13,
                fontWeight: 500,
                color: "rgb(98, 20, 217)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              {phase.period}
            </div>
            <h3
              style={{
                fontFamily: "Instrument Serif, serif",
                fontSize: "clamp(22px, 3vw, 28px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#fbfafc",
                marginBottom: 8,
              }}
            >
              {phase.title}
            </h3>
            <p
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: 15,
                color: "#999",
                lineHeight: 1.6,
                marginBottom: 16,
              }}
            >
              {phase.description}
            </p>
            <div
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: 14,
                fontWeight: 700,
                color: "#fbfafc",
                background: "rgba(98, 20, 217, 0.15)",
                border: "1px solid rgba(98, 20, 217, 0.3)",
                borderRadius: 999,
                padding: "6px 16px",
                display: "inline-block",
              }}
            >
              {phase.metric}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
