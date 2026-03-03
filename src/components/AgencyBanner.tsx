"use client";

import Image from "next/image";
import Link from "next/link";

export default function AgencyBanner() {
  return (
    <section
      id="llm-optimisation-agency"
      className="w-full"
      style={{
        padding: "0px 64px 64px 64px",
        background: "rgb(10, 10, 10)",
      }}
    >
      <div
        className="max-w-[1200px] mx-auto overflow-hidden relative flex items-center justify-center"
        style={{
          borderRadius: 48,
          height: 603,
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source
            src="https://limitless-framer-template.s3.us-east-005.backblazeb2.com/Abstract+Objects.mp4"
            type="video/mp4"
          />
        </video>

        {/* Content overlay */}
        <div
          className="relative z-10 flex flex-col items-center text-center"
          style={{ gap: 10 }}
        >
          <Link href="/" className="block">
            <Image
              src="/images/akravo-logo.svg"
              alt="akravo."
              width={137}
              height={47}
            />
          </Link>
          <p
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontWeight: 400,
              color: "#fbfafc",
              fontSize: 100,
              lineHeight: "1.1em",
              letterSpacing: "-0.02em",
            }}
          >
            LLM Optimisation{" "}
            <span style={{ color: "rgba(255, 255, 255, 0.45)" }}>Agency</span>
          </p>
        </div>
      </div>
    </section>
  );
}
