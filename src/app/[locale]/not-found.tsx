import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Badge from "@/components/Badge";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center"
      style={{
        background: "rgb(10, 10, 10)",
        padding: "160px 64px",
      }}
    >
      <div
        className="flex flex-col items-center"
        style={{ gap: 32, maxWidth: 725 }}
      >
        <Badge>{t("badge")}</Badge>

        <div className="flex flex-col items-center" style={{ gap: 24 }}>
          <h1
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 500,
              fontSize: 48,
              lineHeight: "1.3em",
              letterSpacing: "-0.05em",
              color: "#fbfafc",
              maxWidth: 725,
            }}
          >
            {t("heading")}
          </h1>
          <p
            style={{
              color: "#999",
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "1.5em",
              letterSpacing: "-0.02em",
              textWrap: "balance",
            }}
          >
            {t("description")}
          </p>
        </div>

        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px 18px",
            borderRadius: 999,
            background: "rgb(98, 20, 217)",
            color: "#fbfafc",
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            letterSpacing: "-0.02em",
            textDecoration: "none",
          }}
        >
          {t("goHome")}
        </Link>
      </div>
    </main>
  );
}
