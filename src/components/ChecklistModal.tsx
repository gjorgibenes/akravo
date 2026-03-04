"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ChecklistModalProps {
  open: boolean;
  onClose: () => void;
  labels: {
    name: string;
    email: string;
    phone: string;
    website: string;
    submit: string;
    sending: string;
    thankYou: string;
    thankYouMessage: string;
    error: string;
  };
}

const inputStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.06)",
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

const labelStyle: React.CSSProperties = {
  fontFamily: "Satoshi, sans-serif",
  fontWeight: 500,
  fontSize: 14,
  color: "#999",
  marginBottom: 8,
  display: "block",
};

export default function ChecklistModal({
  open,
  onClose,
  labels,
}: ChecklistModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/checklist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError(labels.error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset after animation
    setTimeout(() => {
      setSubmitted(false);
      setError("");
      setForm({ name: "", email: "", phone: "", website: "" });
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleClose}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.44, 0, 0.56, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "rgb(13, 13, 13)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: 24,
              padding: "40px 32px",
              width: "100%",
              maxWidth: 460,
              position: "relative",
            }}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              aria-label="Close"
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 4,
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#666"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "24px 0" }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(98, 20, 217, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgb(98, 20, 217)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p
                  style={{
                    color: "#fbfafc",
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 500,
                    fontSize: 20,
                    marginBottom: 8,
                  }}
                >
                  {labels.thankYou}
                </p>
                <p
                  style={{
                    color: "#999",
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 500,
                    fontSize: 15,
                  }}
                >
                  {labels.thankYouMessage}
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                <div>
                  <label style={labelStyle}>{labels.name}</label>
                  <input
                    type="text"
                    placeholder="Sam Altman"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
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
                  <label style={labelStyle}>{labels.email}</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
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
                  <label style={labelStyle}>{labels.phone}</label>
                  <input
                    type="tel"
                    placeholder="+31 6 12345678"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
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
                  <label style={labelStyle}>{labels.website}</label>
                  <input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={form.website}
                    onChange={(e) =>
                      setForm({ ...form, website: e.target.value })
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

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    padding: "14px 24px",
                    borderRadius: 999,
                    border: "none",
                    background: "#fbfafc",
                    color: "#0a0a0a",
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.7 : 1,
                    transition: "opacity 0.2s",
                  }}
                >
                  {loading ? labels.sending : labels.submit}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
