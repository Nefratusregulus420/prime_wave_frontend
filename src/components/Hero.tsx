import { useState, useEffect } from "react";
import { useTheme, themes } from "../context/ThemeContext";
import type { Page } from "./Navbar";
import { motion } from "framer-motion";
import lightThemeImg from "../assets/Lighttheme.png";
import darkThemeImg from "../assets/Darktheme.png";

interface HeroProps {
  navigate: (p: Page) => void;
}

export default function Hero({ navigate }: HeroProps) {
  const { theme, isDark } = useTheme();
  const t = themes[theme];

  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState(0);
  const phrases = [
    "Enterprise Grade Solutions.",
    "Cloud Native Architecture.",
    "High Performance Systems.",
    "Scalable Digital Transformation.",
  ];

  useEffect(() => {
    let to: ReturnType<typeof setTimeout>;
    const cur = phrases[phase % phrases.length];
    if (typed.length < cur.length) {
      to = setTimeout(() => setTyped(cur.slice(0, typed.length + 1)), 55);
    } else {
      to = setTimeout(() => {
        setTyped("");
        setPhase((p) => p + 1);
      }, 2000);
    }
    return () => clearTimeout(to);
  }, [typed, phase]);

  const stats = [
    { val: "2", label: "Products Launched" },
    { val: "99.9%", label: "System Uptime" },
    { val: "24/7", label: "Global Support" },
    { val: "1", label: "Unified Platform" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section
      className="section-pad-hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "72px 24px 40px",
        background: t.bg,
      }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        <div style={{ flex: "1 1 480px", display: "flex", flexDirection: "column", zIndex: 2 }}>

          {/* Trusted-by badge */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 22px 8px 16px",
              borderRadius: 30,
              background: isDark ? "rgba(255,255,255,0.05)" : "#f1f5f9",
              marginBottom: 36,
              width: "fit-content",
            }}
          >
            <span style={{ fontSize: "0.9rem" }}>🚀</span>
            <span style={{ fontSize: "0.9rem" }}>🔥</span>
            <span
              style={{
                fontSize: "0.75rem",
                color: t.textSubtle,
                fontWeight: 500,
                marginLeft: 4,
              }}
            >
              Trusted by{" "}
              <strong style={{ color: t.text, fontWeight: 700 }}>10+ Brands</strong>
              {" | "}
              <span>Scalable E-Commerce Solutions</span>
            </span>
          </motion.div>

          {/* Main Headline — exactly 4 lines as in reference image */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ color: t.text }}>Powering the</span>
            <span style={{ color: t.text }}>Future of</span>
            <span style={{ color: isDark ? "#4d8ef7" : "#2563eb" }}>Lifestyle &amp;</span>
            <span style={{ color: isDark ? "#4d8ef7" : "#2563eb" }}>Electronics</span>
          </motion.h1>

          {/* Accent divider — matched to active blue */}
          <motion.div
            variants={itemVariants}
            style={{
              width: 48,
              height: 3,
              background: isDark ? "#4d8ef7" : "#2563eb",
              borderRadius: 4,
              marginBottom: 20,
              marginTop: 18,
            }}
          />

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "1.05rem",
              fontWeight: 700,
              color: t.text,
              marginBottom: 12,
              letterSpacing: "-0.01em",
            }}
          >
            Cloud-Native Commerce Infrastructure
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: t.textSubtle,
              maxWidth: 420,
              marginBottom: 38,
            }}
          >
            Innovative e-commerce solutions combining style,
            <br />performance, and affordability.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="cta-row"
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              marginBottom: 60,
              justifyContent: "flex-start",
            }}
          >
            {/* Primary: Get Started (solid blue) */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("contact")}
              style={{
                fontSize: "0.88rem",
                fontWeight: 600,
                letterSpacing: "0.02em",
                padding: "13px 30px",
                borderRadius: 8,
                cursor: "pointer",
                border: "1px solid transparent",
                background: isDark ? "#4d8ef7" : "#2563eb",
                color: "#fff",
                transition: "all 0.3s ease",
                boxShadow: isDark 
                  ? "0 0 20px rgba(77, 142, 247, 0.4)" 
                  : `0 4px 14px rgba(37, 99, 235, 0.3)`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = isDark ? "#6ba3fa" : "#1d4ed8";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = isDark
                  ? "0 0 30px rgba(77, 142, 247, 0.6)"
                  : `0 6px 20px rgba(37, 99, 235, 0.5)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = isDark ? "#4d8ef7" : "#2563eb";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = isDark
                  ? "0 0 20px rgba(77, 142, 247, 0.4)"
                  : `0 4px 14px rgba(37, 99, 235, 0.3)`;
              }}
            >
              Get Started
            </motion.button>

            {/* Secondary: Explore Industries (outline) */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("industries")}
              style={{
                fontSize: "0.88rem",
                fontWeight: 700,
                letterSpacing: "0.02em",
                padding: "13px 28px",
                borderRadius: 8,
                cursor: "pointer",
                border: `1px solid ${t.borderAccent}`,
                background: "transparent",
                color: t.text,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = t.accent;
                (e.currentTarget as HTMLButtonElement).style.color = t.accent;
                (e.currentTarget as HTMLButtonElement).style.background = t.accentSoft;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = t.borderAccent;
                (e.currentTarget as HTMLButtonElement).style.color = t.text;
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              }}
            >
              Explore Industries →
            </motion.button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="stats-row"
            style={{
              display: "flex",
              gap: 44,
              flexWrap: "wrap",
              padding: "22px 0",
              borderTop: `1px solid ${t.border}`,
            }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: isDark ? "#4d8ef7" : "#2563eb",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {s.val}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: t.textMuted,
                    letterSpacing: "0.05em",
                    marginTop: 4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: floating products, completely blended with aggressive trim mask */}
        <motion.div
          variants={itemVariants}
          style={{
            flex: "1 1 450px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
            position: "relative",
            pointerEvents: "none",
          }}
        >
          <motion.img
            src={isDark ? darkThemeImg : lightThemeImg}
            alt="PrimeWave Hero"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              objectFit: "contain",
              /* Mix blend mode for seamless integration */
              mixBlendMode: isDark ? "screen" : "multiply",
              /* Extreme 4-side masking to kill any asset-level borders */
              WebkitMaskImage: `linear-gradient(to bottom, transparent, black 12%, black 88%, transparent), 
                               linear-gradient(to right, transparent, black 12%, black 88%, transparent)`,
              WebkitMaskComposite: "source-in",
              maskImage: `linear-gradient(to bottom, transparent, black 12%, black 88%, transparent), 
                         linear-gradient(to right, transparent, black 12%, black 88%, transparent)`,
              maskComposite: "intersect",
              position: "relative",
              zIndex: 1,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}