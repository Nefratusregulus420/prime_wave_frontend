import { useState, useEffect } from "react";
import { useTheme, themes } from "../context/ThemeContext";
import type { Page } from "./Navbar";
import { motion } from "framer-motion";
import homescreenImg from "../assets/Homescreen.png";

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
        padding: "100px 24px 60px",
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
        <div style={{ flex: "1 1 550px", display: "flex", flexDirection: "column", zIndex: 2 }}>
          {/* Status badge */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 14px",
              borderRadius: 20,
              border: `1px solid ${t.accent}35`,
              background: t.accentSoft,
              marginBottom: 32,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: t.accent,
                display: "inline-block",
                animation: "pulseDot 2s infinite, glowPulse 3s infinite",
                boxShadow: `0 0 10px ${t.accent}`,
              }}
            />
            <span
              style={{
                fontSize: "0.7rem",
                color: t.accent,
                letterSpacing: "0.1em",
                fontWeight: 600,
              }}
            >
              ENGINEERING EXCELLENCE
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: "clamp(3.5rem, 9vw, 6.5rem)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: t.text,
              marginBottom: 8,
            }}
          >
            Welcome to
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                backgroundImage: `linear-gradient(90deg, ${t.text} 0%, ${t.accent} 40%, ${t.text} 80%)`,
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                animation: "shimmer 3s linear infinite",
                display: "block",
                marginBottom: 5
              }}
            >
              PrimeWave
            </span>
            <span style={{
              fontSize: '0.45em',
              color: t.textSubtle,
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              display: "block",
              opacity: 0.8
            }}>
              Lifestyle & Electronics
            </span>
          </motion.h2>

          {/* Typewriter */}
          <motion.div
            variants={itemVariants}
            style={{
              fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)",
              color: t.textSubtle,
              fontWeight: 500,
              height: 34,
              marginBottom: 36,
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span style={{ color: t.accent }}>$ </span>
            <span>{typed}</span>
            <span
              style={{
                display: "inline-block",
                width: 2,
                height: "1.1em",
                background: t.accent,
                animation: "blink 1s infinite",
                borderRadius: 1,
                marginLeft: 1,
              }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: t.textSubtle,
              maxWidth: 580,
              marginBottom: 44,
            }}
          >
            <strong style={{ color: t.text, fontWeight: 600 }}>
              Combining style, performance, and affordability.
            </strong>
            <br />PrimeWave Lifestyle & Electronics is a forward-thinking retail organization managing specialized e-commerce brands in clothing and consumer electronics.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="cta-row"
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              marginBottom: 72,
            }}
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("industries")}
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                padding: "12px 28px",
                borderRadius: 8,
                cursor: "pointer",
                border: "1px solid transparent",
                background: t.accent,
                color: isDark ? "#0a0b0f" : "#fff",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = t.accentHover;
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = t.glowShadow;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = t.accent;
                (e.currentTarget as HTMLButtonElement).style.transform = "none";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              }}
            >
              Explore Industries →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("contact")}
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                padding: "12px 28px",
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
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = t.borderAccent;
                (e.currentTarget as HTMLButtonElement).style.color = t.text;
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                (e.currentTarget as HTMLButtonElement).style.transform = "none";
              }}
            >
              Get In Touch
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
                    fontSize: "2.2rem",
                    fontWeight: 800,
                    color: t.accent,
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

        {/* Right Column: Image */}
        <motion.div
          variants={itemVariants}
          style={{
            flex: "1 1 450px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
            position: "relative"
          }}
        >
          {/* Animated Glow Behind Image */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: "80%",
              height: "80%",
              background: `radial-gradient(circle, ${t.accent} 0%, transparent 70%)`,
              filter: "blur(60px)",
              zIndex: 0
            }}
          />
          <motion.img
            src={homescreenImg}
            alt="PrimeWave Homescreen"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "160%",
              maxWidth: "1000px",
              height: "auto",
              objectFit: "contain",
              WebkitMaskImage: "radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 72%)",
              maskImage: "radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 72%)",
              filter: isDark ? "drop-shadow(0px 20px 40px rgba(0,0,0,0.6))" : "drop-shadow(0px 20px 40px rgba(0,0,0,0.15))",
              position: "relative",
              zIndex: 1,
              transform: "translateZ(0)"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}