import { useTheme, themes as tokens } from "../context/ThemeContext";
import Logo from "../assets/Logo.png";

export default function Footer() {
  const { theme } = useTheme();
  const t = tokens[theme];
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        padding: "32px 24px",
        background: t.bgSecondary,
        borderTop: `1px solid ${t.border}`,
        textAlign: "center",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.75rem",
        color: t.textSubtle,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img
          src={Logo}
          alt="PrimeWave Logo"
          style={{
            height: 38,
            width: "auto",
            borderRadius: 6,
            objectFit: "contain"
          }}
        />
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: t.text }}>
          PrimeWave Lifestyle & Electronics
        </span>
      </div>
      <div>
        &copy; {year} PrimeWave Lifestyle & Electronics. All rights reserved.
      </div>
      <div style={{ fontSize: "0.65rem", color: t.textMuted, fontStyle: "italic", marginTop: 4 }}>
        "It is a Dummy Website make for college project"
      </div>
    </footer>
  );
}