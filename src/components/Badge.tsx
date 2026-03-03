export default function Badge({
  children,
  green,
}: {
  children: React.ReactNode;
  green?: boolean;
}) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full"
      style={{
        padding: "12px 16px",
        borderRadius: 50,
        background: "rgba(13, 13, 13, 0.4)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      {green && (
        <span
          className="w-2 h-2 rounded-full"
          style={{
            background: "#1aff75",
            boxShadow: "0px 0px 12px 0px rgba(25, 255, 117, 0.8)",
          }}
        />
      )}
      <span
        style={{
          color: "#fbfafc",
          fontFamily: "Satoshi, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          letterSpacing: "-0.02em",
          lineHeight: "1em",
        }}
      >
        {children}
      </span>
    </div>
  );
}
