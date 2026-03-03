"use client";

import { motion } from "framer-motion";

function GeminiSparkle() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 29 29"
      fill="rgb(255, 255, 255)"
    >
      <path d="M14.5 0C14.5 7.99 8 14.5 0 14.5C8 14.5 14.5 21 14.5 29C14.5 21 21 14.5 29 14.5C21 14.5 14.5 7.99 14.5 0Z" />
    </svg>
  );
}

const logos: {
  name: string;
  src: string;
  sparkle?: boolean;
}[] = [
  { name: "OpenAI", src: "/images/logo_OpenAI.svg" },
  { name: "Gemini", src: "/images/logo_Gemini.svg", sparkle: true },
  { name: "Meta AI", src: "/images/logo_Meta_AI_Icon.svg" },
  { name: "Perplexity", src: "/images/logo_Perplexity.svg" },
  { name: "Qwen", src: "/images/logo_QWEN.svg" },
  { name: "Mistral", src: "/images/logo_Mistral.svg" },
  { name: "Claude", src: "/images/logo_Claude.svg" },
];

export default function LogoMarquee() {
  const allLogos = [...logos, ...logos];

  return (
    <div
      className="w-full overflow-hidden relative px-6 md:px-16 pb-0 md:pb-16"
      style={{
        background: "rgb(10, 10, 10)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="relative overflow-hidden" style={{ height: "var(--marquee-height)" }}>
          {/* Fade mask — 25% on each side, matching Framer */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
            }}
          />

          <motion.div
            className="flex items-center whitespace-nowrap absolute top-0 bottom-0"
            style={{ gap: "var(--marquee-gap)" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {allLogos.map((logo, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center justify-center"
                style={{
                  height: "var(--marquee-height)",
                  gap: logo.sparkle ? 10 : 0,
                }}
              >
                {logo.sparkle && <GeminiSparkle />}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  style={{
                    height: "50%",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
