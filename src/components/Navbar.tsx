"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "LLM Optimisation", href: "/#llm-optimisation-agency" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
];

const CAL_LINK = "https://cal.com/fabianvantil/akravo-discovery";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      style={{ padding: "24px 64px" }}
    >
      <nav
        className="flex items-center justify-center w-fit transition-all duration-300"
        style={{
          background: "rgba(13, 13, 13, 0.5)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: 999,
          padding: "10px 10px 10px 10px",
          gap: 40,
        }}
      >
        {/* Logo + Links */}
        <div className="flex items-center" style={{ gap: 40 }}>
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/akravo-logo.svg"
              alt="akravo."
              width={100}
              height={35}
              priority
              style={{ borderRadius: 8 }}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center" style={{ gap: 32 }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 flex items-center"
                style={{
                  color: "#fbfafc",
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  letterSpacing: "-0.02em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.7";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center" style={{ gap: 8 }}>
          <Link
            href="/#contact"
            className="rounded-full transition-all duration-200"
            style={{
              color: "#fbfafc",
              background: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 500,
              fontSize: 16,
              letterSpacing: "-0.02em",
              padding: "10px 20px",
              borderRadius: 999,
            }}
          >
            Contact
          </Link>
          <a
            href={CAL_LINK}
            className="rounded-full text-white transition-all duration-200"
            style={{
              background: "rgb(98, 20, 217)",
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 500,
              fontSize: 16,
              letterSpacing: "-0.02em",
              padding: "10px 20px",
              borderRadius: 999,
            }}
          >
            Book a call
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fbfafc"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[80px] left-6 right-6 z-50 p-6 flex flex-col gap-4 md:hidden"
            style={{
              background: "rgb(10, 10, 10)",
              borderRadius: "0px 0px 48px 48px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base py-2"
                style={{
                  color: "#999",
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 500,
                }}
              >
                {link.label}
              </Link>
            ))}
            <hr style={{ borderColor: "rgba(255,255,255,0.1)" }} />
            <a
              href={CAL_LINK}
              onClick={() => setMobileOpen(false)}
              className="text-center py-3 rounded-full text-sm text-white"
              style={{
                background: "rgb(98, 20, 217)",
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 500,
                borderRadius: 999,
              }}
            >
              Book a call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
