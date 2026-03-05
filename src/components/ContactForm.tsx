"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { supabase } from "@/lib/supabase";
import Button from "./Button";

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const labelStyle: React.CSSProperties = {
    fontFamily: "Satoshi, sans-serif",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "1.5em",
    letterSpacing: "-0.02em",
    color: "#fbfafc",
    marginBottom: 8,
    display: "block",
  };

  const inputStyle: React.CSSProperties = {
    background: "rgb(13, 13, 13)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
    padding: 16,
    color: "#fbfafc",
    fontFamily: "Satoshi, sans-serif",
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: "-0.02em",
    outline: "none",
    width: "100%",
    transition: "border-color 0.3s ease",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error: dbError } = await supabase.from("contacts").insert({
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      website: formData.website,
      message: formData.message,
    });

    setLoading(false);

    if (dbError) {
      setError(t("error"));
      return;
    }

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="w-full pt-[75px] px-6 md:px-15 pb-10 md:pb-15"
      style={{
        background: "rgb(10, 10, 10)",
        borderRadius: "0px 0px var(--contact-radius) var(--contact-radius)",
        zIndex: 1,
        position: "relative",
      }}
    >
      <div className="max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
          className="flex flex-col items-center text-center mb-12"
          style={{ gap: 24 }}
        >
          <h2
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 500,
              fontSize: "var(--heading-section)",
              lineHeight: "1.1em",
              letterSpacing: "-0.05em",
              color: "#fbfafc",
              maxWidth: 483,
            }}
          >
            {t("headingRegular")}{" "}
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              {t("headingItalic")}
            </span>
          </h2>
          <p
            style={{
              color: "#999",
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 500,
              fontSize: "var(--desc-contact)",
              lineHeight: "1.5em",
              letterSpacing: "-0.02em",
              maxWidth: 628,
              textWrap: "balance",
            }}
          >
            {t("description")}
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <p
              style={{
                color: "#fbfafc",
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 500,
                fontSize: 20,
                marginBottom: 8,
              }}
            >
              {t("thankYou")}
            </p>
            <p
              style={{
                color: "#999",
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 500,
              }}
            >
              {t("thankYouMessage")}
            </p>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col"
            style={{ gap: 24, maxWidth: 800, zIndex: 4 }}
          >
            <div
              className="grid grid-cols-1 sm:grid-cols-2"
              style={{ gap: 16 }}
            >
              <div>
                <label htmlFor="firstName" style={labelStyle}>{t("firstName")}</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder={t("firstName")}
                  required
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.2)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.1)")
                  }
                />
              </div>
              <div>
                <label htmlFor="lastName" style={labelStyle}>{t("lastName")}</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder={t("lastName")}
                  required
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.2)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.1)")
                  }
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" style={labelStyle}>{t("email")}</label>
              <input
                id="email"
                type="email"
                placeholder={t("email")}
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                style={inputStyle}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.2)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.1)")
                }
              />
            </div>
            <div>
              <label htmlFor="website" style={labelStyle}>{t("website")}</label>
              <input
                id="website"
                type="url"
                placeholder={t("website")}
                value={formData.website}
                onChange={(e) =>
                  setFormData({ ...formData, website: e.target.value })
                }
                style={inputStyle}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.2)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.1)")
                }
              />
            </div>
            <div>
              <label htmlFor="message" style={labelStyle}>{t("message")}</label>
              <textarea
                id="message"
                placeholder={t("message")}
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                style={{ ...inputStyle, minHeight: 100, resize: "vertical" }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.2)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.1)")
                }
              />
            </div>
            {error && (
              <p
                style={{
                  color: "#ef4444",
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: 14,
                }}
              >
                {error}
              </p>
            )}
            <Button type="submit" variant="primary" size="large" fullWidth>
              {loading ? t("sending") : t("submit")}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
