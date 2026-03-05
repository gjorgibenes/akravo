"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function AgencyBanner() {
  const t = useTranslations("AgencyBanner");

  return (
    <section
      id="llm-optimisation-agency"
      className="w-full p-6 md:pt-0 md:px-16 md:pb-16"
      style={{
        background: "rgb(10, 10, 10)",
      }}
    >
      <div className="max-w-[1200px] mx-auto overflow-hidden relative flex items-center justify-center h-auto md:h-[603px] py-16 md:py-0 rounded-3xl md:rounded-[48px]">
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
              className="w-[90px] md:w-[137px] h-auto"
            />
          </Link>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              color: "#fbfafc",
              fontSize: "var(--heading-banner)",
              lineHeight: "1.1em",
              letterSpacing: "-0.02em",
            }}
          >
            {t("llmOptimisation")}{" "}
            <span style={{ color: "rgba(255, 255, 255, 0.45)" }}>
              {t("agency")}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
