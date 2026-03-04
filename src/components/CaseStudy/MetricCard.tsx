"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface MetricCardProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  animateFrom?: number;
  animateTo?: number;
}

function AnimatedNumber({
  from,
  to,
  prefix = "",
  suffix = "",
}: {
  from: number;
  to: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [current, setCurrent] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(from + (to - from) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [isInView, from, to]);

  return (
    <span ref={ref}>
      {prefix}
      {current}
      {suffix}
    </span>
  );
}

export default function MetricCard({
  value,
  label,
  prefix,
  suffix,
  animateFrom,
  animateTo,
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
      style={{
        background: "rgb(13, 13, 13)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderTop: "3px solid rgb(98, 20, 217)",
        borderRadius: 24,
        padding: "32px 28px",
        flex: 1,
        minWidth: 160,
      }}
    >
      <div
        style={{
          fontFamily: "Instrument Serif, serif",
          fontSize: "clamp(36px, 5vw, 52px)",
          fontWeight: 400,
          color: "#fbfafc",
          lineHeight: 1.1,
          marginBottom: 8,
        }}
      >
        {animateFrom !== undefined && animateTo !== undefined ? (
          <AnimatedNumber
            from={animateFrom}
            to={animateTo}
            prefix={prefix}
            suffix={suffix}
          />
        ) : (
          value
        )}
      </div>
      <div
        style={{
          fontFamily: "Satoshi, sans-serif",
          fontSize: 15,
          fontWeight: 500,
          color: "#999",
          letterSpacing: "-0.02em",
        }}
      >
        {label}
      </div>
    </motion.div>
  );
}
