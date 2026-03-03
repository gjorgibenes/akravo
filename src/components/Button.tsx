import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  fullWidth?: boolean;
  newTab?: boolean;
}

const sizeStyles = {
  small: { padding: "9px 13px", fontSize: 14 },
  medium: { padding: "12px 18px", fontSize: 14 },
  large: { padding: "24px 48px", fontSize: 21 },
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "large",
  className = "",
  type = "button",
  onClick,
  fullWidth,
  newTab,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 cursor-pointer ${fullWidth ? "w-full" : ""}`;

  const style: React.CSSProperties = {
    padding: sizeStyles[size].padding,
    fontFamily: "Satoshi, sans-serif",
    fontWeight: 500,
    fontSize: sizeStyles[size].fontSize,
    lineHeight: "24px",
    letterSpacing: "-0.02em",
    color: "#fbfafc",
    borderRadius: 999,
    ...(variant === "primary"
      ? {
          background: "rgb(98, 20, 217)",
          boxShadow:
            "0px 4px 10px -2px rgba(0,0,0,0.05), 0px 2px 2px -1px rgba(0,0,0,0.1), 0px 0px 0px 1px rgba(98,20,217,0.12)",
        }
      : {
          background: "rgba(13, 13, 13, 0.5)",
          border: "none",
          boxShadow:
            "0px 4px 10px -2px rgba(0,0,0,0.1), 0px 2px 2px -1px rgba(0,0,0,0.1), 0px 0px 0px 1px rgba(255,255,255,0.08)",
        }),
  };

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal || newTab) {
      return (
        <a
          href={href}
          target={newTab ? "_blank" : undefined}
          rel={newTab ? "noopener noreferrer" : undefined}
          className={`${baseClasses} ${className}`}
          style={style}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={`${baseClasses} ${className}`}
        style={style}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}
