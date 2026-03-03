"use client";

import { motion } from "framer-motion";
import Badge from "./Badge";
import Button from "./Button";

const CAL_LINK = "https://cal.com/fabianvantil/akravo-discovery";

export default function AgenticCommerce() {
  return (
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
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
            className="flex flex-col z-[1]"
            style={{ gap: 24 }}
          >
            <div className="flex flex-col" style={{ gap: 16, maxWidth: 470 }}>
              <Badge>Agentic Commerce</Badge>

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
                Get our{" "}
                <span
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  Checklist
                </span>{" "}
                for FREE (27 steps)
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
                AI Shopping is redefining eCommerce. Customers can now complete
                their checkout directly inside ChatGPT. Download the checklist to
                learn how to activate this for your brand.
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:flex-wrap" style={{ gap: 12 }}>
              <Button href="/#contact" variant="primary" size="medium" newTab>
                Get Checklist
              </Button>
              <Button href={CAL_LINK} variant="secondary" size="medium">
                Book Call
              </Button>
            </div>
          </motion.div>

          {/* Right side video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            onLoadedMetadata={(e) => {
              (e.target as HTMLVideoElement).currentTime = 8.7;
            }}
            className="absolute top-0 right-0 h-full object-cover hidden lg:block"
            style={{ width: "50%" }}
          >
            <source
              src="https://limitless-framer-template.s3.us-east-005.backblazeb2.com/Limitless+Tutorial+Preview+(Square).mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
