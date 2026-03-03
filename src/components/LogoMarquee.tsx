"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function GeminiSparkle() {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="rgb(255, 255, 255)"
    >
      <path d="M14.5 0C14.5 7.99 8 14.5 0 14.5C8 14.5 14.5 21 14.5 29C14.5 21 21 14.5 29 14.5C21 14.5 14.5 7.99 14.5 0Z" />
    </svg>
  );
}

const logos = [
  { name: "OpenAI", src: "/images/logo_OpenAI.svg", width: 149, height: 40 },
  { name: "Gemini", src: "/images/logo_Gemini.svg", width: 124, height: 32, sparkle: true },
  { name: "Meta AI", src: "/images/logo_Meta_AI_Icon.svg", width: 46, height: 32 },
  { name: "Perplexity", src: "/images/logo_Perplexity.svg", width: 151, height: 37 },
  { name: "Qwen", src: "/images/logo_QWEN.svg", width: 149, height: 44 },
  { name: "Mistral", src: "/images/logo_Mistral.svg", width: 38, height: 35 },
  { name: "Claude", src: "/images/logo_Claude.svg", width: 200, height: 43 },
];

export default function LogoMarquee() {
  const allLogos = [...logos, ...logos];

  return (
    <div
      className="w-full overflow-hidden relative"
      style={{
        padding: "0px 64px 64px 64px",
        background: "rgb(10, 10, 10)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="relative overflow-hidden" style={{ height: 55 }}>
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
            style={{ gap: 64 }}
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
                  height: 55,
                  gap: logo.sparkle ? 13 : 0,
                }}
              >
                {logo.sparkle && <GeminiSparkle />}
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
