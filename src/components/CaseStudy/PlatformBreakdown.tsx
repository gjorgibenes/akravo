"use client";

import { motion } from "framer-motion";

interface Platform {
  name: string;
  citations: number;
  maxCitations: number;
}

interface PlatformBreakdownProps {
  platforms: Platform[];
}

export default function PlatformBreakdown({
  platforms,
}: PlatformBreakdownProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {platforms.map((platform, i) => (
        <motion.div
          key={platform.name}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            ease: [0.44, 0, 0.56, 1],
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <span
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: 15,
                fontWeight: 500,
                color: "#fbfafc",
              }}
            >
              {platform.name}
            </span>
            <span
              style={{
                fontFamily: "Instrument Serif, serif",
                fontSize: 20,
                color: "#fbfafc",
              }}
            >
              {platform.citations}
            </span>
          </div>
          <div
            style={{
              width: "100%",
              height: 8,
              background: "rgba(255, 255, 255, 0.06)",
              borderRadius: 999,
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width: `${(platform.citations / platform.maxCitations) * 100}%`,
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 1,
                delay: 0.3 + i * 0.1,
                ease: [0.44, 0, 0.56, 1],
              }}
              style={{
                height: "100%",
                background:
                  "linear-gradient(90deg, rgb(98, 20, 217) 0%, rgba(98, 20, 217, 0.6) 100%)",
                borderRadius: 999,
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
