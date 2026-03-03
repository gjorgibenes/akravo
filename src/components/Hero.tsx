"use client";

import { motion } from "framer-motion";
import Badge from "./Badge";
import Button from "./Button";

const CAL_LINK = "https://cal.com/fabianvantil/akravo-discovery";

export default function Hero() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center text-center overflow-visible pt-24 md:pt-[140px] px-6 md:px-16 pb-16"
      style={{
        background: "rgb(10, 10, 10)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
        className="flex flex-col items-center w-full"
        style={{ maxWidth: 1200, gap: 32 }}
      >
        <Badge green>Accepting 3 new clients for Q4</Badge>

        <h1
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 500,
            fontSize: "var(--heading-hero)",
            lineHeight: "1.1em",
            letterSpacing: "-0.05em",
            color: "#fbfafc",
            maxWidth: 952,
            width: "100%",
          }}
        >
          Your Business is{" "}
          <span
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            Invisible
          </span>{" "}
          to 200 Million AI Users.
        </h1>

        <p
          style={{
            color: "#999",
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 500,
            fontSize: "var(--desc-hero)",
            lineHeight: "1.5em",
            letterSpacing: "-0.02em",
            textAlign: "center",
            textWrap: "balance",
          }}
        >
          ChatGPT, Perplexity, and Google&apos;s AI Overview control the new
          buyer journey. We make sure they recommend you.
        </p>

        <div
          className="flex flex-row flex-wrap items-center justify-center gap-4 md:gap-6"
        >
          <Button href={CAL_LINK} variant="primary" size="large">
            Book a call
          </Button>
          <Button href="/#process" variant="secondary" size="large">
            Learn How
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
