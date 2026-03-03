"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section
      className="w-full"
      style={{
        padding: "64px",
        background: "rgb(10, 10, 10)",
      }}
    >
      <div
        className="max-w-[1200px] mx-auto overflow-hidden relative"
        style={{
          background: "rgb(13, 13, 13)",
          borderRadius: 24,
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          minHeight: 400,
        }}
      >
        <div
          className="flex flex-col lg:flex-row items-start relative"
          style={{ padding: "64px 48px" }}
        >
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
            className="flex flex-col z-[1]"
            style={{ gap: 24, maxWidth: 470 }}
          >
            <div className="flex flex-col" style={{ gap: 16 }}>
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
                Aim, shoot,{" "}
                <span
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  score.
                </span>
              </h2>

              <p
                style={{
                  color: "#999",
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 500,
                  fontSize: 20,
                  lineHeight: "1.5em",
                  letterSpacing: "-0.02em",
                }}
              >
                ChatGPT just announced the future. Google SGE is already used
                more than standard Google Results. While others are writing blog
                posts about &ldquo;AI SEO,&rdquo; we&apos;re inside the API
                making it work. Our edge: We don&apos;t theorize. We implement.
              </p>
            </div>

            <div className="flex flex-col" style={{ gap: 4 }}>
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
                Fabian van Til
              </span>
              <span
                style={{
                  color: "#999",
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: "1.5em",
                  letterSpacing: "-0.02em",
                }}
              >
                Founder of Akravo
              </span>
            </div>
          </motion.div>

          {/* Founder photo — absolute right, gradient mask on left edge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
            className="hidden lg:block absolute right-0 top-0 bottom-0"
            style={{
              width: "45%",
            }}
          >
            <Image
              src="/images/fabian.png"
              alt="Fabian van Til — Founder of Akravo"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center top",
                maskImage:
                  "linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 30%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 30%)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
