"use client";

import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";
import Button from "./Button";

const CAL_LINK = "https://cal.com/fabianvantil/akravo-discovery";

export default function Footer() {
  return (
    <>
      {/* Fixed footer that reveals as content scrolls away */}
      <footer
        className="fixed bottom-0 left-0 right-0 overflow-hidden"
        style={{
          height: "80vh",
          background: "rgb(10, 10, 10)",
          zIndex: 0,
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
            src="https://limitless-framer-template.s3.us-east-005.backblazeb2.com/Displacement.mp4"
            type="video/mp4"
          />
        </video>

        {/* Content */}
        <div
          className="relative flex flex-col items-center justify-center text-center w-full h-full p-6 md:p-16"
          style={{ zIndex: 1 }}
        >
          <div
            className="max-w-[1200px] mx-auto flex flex-col items-center justify-center flex-1"
            style={{ gap: 32, paddingTop: 40 }}
          >
            <Badge green>Accepting 3 new clients for Q4</Badge>

            <h2
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 500,
                fontSize: "var(--heading-footer)",
                lineHeight: "0.9em",
                letterSpacing: "-0.05em",
                color: "#fbfafc",
              }}
            >
              Do you want to{" "}
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                Beat Your Competitors?
              </span>
            </h2>

            <p
              style={{
                color: "#999",
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 500,
                fontSize: 16,
                lineHeight: "1.5em",
                letterSpacing: "-0.02em",
                maxWidth: 600,
              }}
            >
              Every week you wait, your competitors build stronger AI authority
              that becomes exponentially harder to overcome.
            </p>

            <Button href={CAL_LINK} variant="primary" size="large">
              Book a call
            </Button>
          </div>

          {/* Copyright bar */}
          <div
            className="w-full py-8 px-6 md:px-16"
            style={{
              zIndex: 1,
            }}
          >
            <div
              className="max-w-[1200px] mx-auto flex flex-col md:flex-row flex-wrap items-center justify-between gap-4"
            >
              <span
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: "1.5em",
                  letterSpacing: "-0.02em",
                  color: "#999",
                }}
              >
                Copyright 2025 Akravo. All rights reserved.
              </span>
              <Link href="/">
                <Image
                  src="/images/akravo-logo.svg"
                  alt="akravo."
                  width={137}
                  height={47}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom gradient overlay */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "26%",
            background: "linear-gradient(to bottom, transparent, rgb(10,10,10))",
            zIndex: 0,
          }}
        />
      </footer>

      {/* Spacer element that creates the reveal effect */}
      <div
        style={{
          width: "100%",
          height: "80vh",
          overflow: "hidden",
        }}
      />
    </>
  );
}
