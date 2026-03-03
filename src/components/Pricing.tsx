"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Badge from "./Badge";
import Button from "./Button";

const CAL_LINK = "https://cal.com/fabianvantil/akravo-discovery";

const standardFeatures = [
  "Dedicated AI Strategist",
  "Advanced entity mapping",
  "Transparant Performance Dashboard",
  "Competitive displacement tactics",
  "Cross-platform citation monitoring",
  "Technical implementation support",
  "Direct Slack channel",
  "Pause or cancel anytime",
];

const enterpriseFeatures = [
  "Everything from our standard plan",
  "API access to citation data",
  "Multi-domain optimization",
  "Custom integration options",
  "Unlimited brands",
  "Invite unlimited users",
];

function StarFourIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 256 256"
      fill="#fbfafc"
    >
      <path d="M229.5,113,166.07,89.93,143,26.5a15.93,15.93,0,0,0-30,0L89.93,89.93,26.5,113a15.93,15.93,0,0,0,0,30l63.43,23.07L113,229.5a15.93,15.93,0,0,0,30,0l23.07-63.43L229.5,143a15.93,15.93,0,0,0,0-30Z" />
    </svg>
  );
}

export default function Pricing() {
  const [upfront, setUpfront] = useState(false);

  return (
    <section
      id="pricing"
      className="w-full"
      style={{
        padding: "64px",
        background: "rgb(10, 10, 10)",
      }}
    >
      <div
        className="max-w-[1200px] mx-auto"
        style={{ borderRadius: 50 }}
      >
        <div
          className="flex flex-col items-center"
          style={{ gap: 64 }}
        >
          {/* Header */}
          <div
            className="flex flex-col items-center text-center"
            style={{ gap: 8 }}
          >
            <Badge>Pricing</Badge>
            <div
              className="flex flex-col items-center text-center"
              style={{ gap: 16 }}
            >
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
                Pricing that&apos;s{" "}
                <span
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  just simple.
                </span>
              </h2>
              <p
                style={{
                  color: "#999",
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 500,
                  fontSize: 22,
                  lineHeight: "1.5em",
                  letterSpacing: "-0.02em",
                  textAlign: "center",
                  textWrap: "balance",
                }}
              >
                There is no need to overcomplicate pricing, ever.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div
            className="flex flex-col lg:flex-row items-stretch justify-center w-full overflow-clip"
            style={{ gap: 40 }}
          >
            {/* Standard Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.44, 0, 0.56, 1] }}
              className="relative flex flex-col overflow-hidden w-full"
              style={{
                maxWidth: 450,
                background: "rgb(13, 13, 13)",
                borderRadius: 24,
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "64px 32px",
              }}
            >
              {/* Video background glow */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute bottom-0 left-0 w-full pointer-events-none"
                style={{
                  height: 684,
                  objectFit: "cover",
                  opacity: 0.4,
                  maskImage:
                    "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)",
                  WebkitMaskImage:
                    "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)",
                }}
              >
                <source
                  src="https://limitless-framer-template.s3.us-east-005.backblazeb2.com/Sphere.mp4"
                  type="video/mp4"
                />
              </video>

              <div
                className="relative z-[1] flex flex-col"
                style={{ gap: 40 }}
              >
                {/* Top */}
                <div className="flex flex-col" style={{ gap: 12 }}>
                  <Badge green>3 spots left</Badge>
                  <div className="flex flex-col">
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
                      Starting at
                    </span>
                    <div
                      className="flex items-baseline"
                      style={{ gap: 4 }}
                    >
                      <span
                        style={{
                          fontFamily: "Satoshi, sans-serif",
                          fontWeight: 500,
                          fontSize: 48,
                          lineHeight: "1.2",
                          letterSpacing: "-0.2px",
                          color: "#fbfafc",
                        }}
                      >
                        ${upfront ? "5,265" : "1,950"}
                      </span>
                      <span
                        style={{
                          fontFamily: "Satoshi, sans-serif",
                          fontWeight: 500,
                          fontSize: 24,
                          lineHeight: "1.2",
                          color: "#fbfafc",
                        }}
                      >
                        {upfront ? "" : "/ month"}
                      </span>
                    </div>
                  </div>
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
                    3 Month-Project. Pricing may be adjusted to suit your
                    business&apos; needs. Excluding Link Budgets.
                  </span>
                </div>

                {/* Buttons + Toggle */}
                <div
                  className="flex flex-col items-center"
                  style={{ gap: 24 }}
                >
                  <div className="flex w-full" style={{ gap: 16 }}>
                    <Button
                      href={CAL_LINK}
                      variant="primary"
                      size="large"
                      fullWidth
                      newTab
                    >
                      Book Call
                    </Button>
                    <Button
                      href="/#contact"
                      variant="secondary"
                      size="large"
                      fullWidth
                    >
                      Submit Form
                    </Button>
                  </div>

                  {/* Upfront toggle bar */}
                  <div
                    className="flex items-center justify-between w-full"
                    style={{
                      background: "rgba(13, 13, 13, 0.5)",
                      borderRadius: 999,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      padding: "12px 24px",
                    }}
                  >
                    <button
                      onClick={() => setUpfront(!upfront)}
                      className="relative shrink-0 cursor-pointer"
                      style={{
                        width: 60,
                        height: 28,
                        borderRadius: 999,
                        background: upfront
                          ? "rgb(98, 20, 217)"
                          : "rgba(255,255,255,0.1)",
                        transition: "background 0.2s",
                        border: "none",
                      }}
                    >
                      <span
                        className="absolute rounded-full bg-white"
                        style={{
                          width: 20,
                          height: 20,
                          top: 4,
                          left: upfront ? 36 : 4,
                          transition: "left 0.2s",
                        }}
                      />
                    </button>
                    <span
                      style={{
                        fontFamily: "Satoshi, sans-serif",
                        fontWeight: 500,
                        fontSize: 14,
                        color: "#fbfafc",
                      }}
                    >
                      Upfront Payment
                    </span>
                    <Badge>Save 10%</Badge>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-col" style={{ gap: 16 }}>
                  {standardFeatures.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center"
                      style={{ gap: 10 }}
                    >
                      <StarFourIcon />
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
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.44, 0, 0.56, 1],
              }}
              className="relative flex flex-col overflow-hidden w-full"
              style={{
                maxWidth: 450,
                background: "rgb(3, 3, 3)",
                borderRadius: 24,
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "40px 32px",
              }}
            >
              {/* Video background glow */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute bottom-0 left-0 w-full pointer-events-none"
                style={{
                  height: 684,
                  objectFit: "cover",
                  opacity: 0.4,
                  maskImage:
                    "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)",
                  WebkitMaskImage:
                    "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)",
                }}
              >
                <source
                  src="https://limitless-framer-template.s3.us-east-005.backblazeb2.com/Sphere.mp4"
                  type="video/mp4"
                />
              </video>

              <div
                className="relative z-[1] flex flex-col"
                style={{ gap: 40 }}
              >
                {/* Price */}
                <div className="flex flex-col" style={{ gap: 12 }}>
                  <span
                    style={{
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 500,
                      fontSize: 48,
                      lineHeight: "1.2",
                      letterSpacing: "-0.2px",
                      color: "#fbfafc",
                    }}
                  >
                    $8,000+
                  </span>
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
                    For Enterprises
                  </span>
                </div>

                {/* Button — auto-width, centered */}
                <div className="flex justify-center">
                  <Button
                    href={CAL_LINK}
                    variant="primary"
                    size="large"
                    newTab
                  >
                    Let&apos;s Talk
                  </Button>
                </div>

                {/* Features */}
                <div className="flex flex-col" style={{ gap: 16 }}>
                  {enterpriseFeatures.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center"
                      style={{ gap: 10 }}
                    >
                      <StarFourIcon />
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
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
