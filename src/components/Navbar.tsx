import { useState, useEffect } from "react";
import { useTheme, themes } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Logo.png";

export type Page = "home" | "contact" | "purpose" | "industries";

interface NavbarProps {
  current: Page;
  navigate: (p: Page, hash?: string) => void;
}

export default function Navbar({ current, navigate }: NavbarProps) {
  const { theme } = useTheme();
  const t = themes[theme];
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close drawer on page resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 640) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const links: { id: Page; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "contact", label: "Contact" },
    { id: "purpose", label: "Purpose" },
    { id: "industries", label: "Industries" },
  ];

  const handleNav = (id: Page) => {
    navigate(id);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        className="nav-container"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? t.glassBg : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? `1px solid ${t.glassBorder}` : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.03)" : "none",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          padding: "0 24px",
          overflowX: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            width: "100%",
            boxSizing: "border-box",
            margin: "0 auto",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNav("home")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: 0,
              minWidth: 0,
              flex: "0 0 auto",
            }}
          >
            <img
              src={Logo}
              alt="PrimeWave Logo"
              style={{
                height: 38,
                width: 38,
                borderRadius: 8,
                objectFit: "cover",
                objectPosition: "top",
                flexShrink: 0,
                background: "#000",
                padding: "3px"
              }}
            />
            <span
              className="nav-logo-text"
              style={{
                fontWeight: 800,
                fontSize: "1rem",
                color: t.text,
                letterSpacing: "-0.02em",
                whiteSpace: "nowrap",
              }}
            >
              PrimeWave
            </span>
          </motion.button>

          {/* Desktop Nav links + toggle */}
          <div className="nav-links">
            {links.map((l) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={l.id}
                onClick={() => handleNav(l.id)}
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "6px 14px",
                  borderRadius: 6,
                  cursor: "pointer",
                  border: "none",
                  background: "transparent",
                  color: current === l.id ? "#2563eb" : t.textSubtle,
                  position: "relative",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (current !== l.id) {
                    (e.currentTarget as HTMLButtonElement).style.color = t.text;
                  }
                }}
                onMouseLeave={(e) => {
                  if (current !== l.id) {
                    (e.currentTarget as HTMLButtonElement).style.color = t.textSubtle;
                  }
                }}
              >
                {current === l.id && (
                  <motion.div
                    layoutId="navbar-indicator"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 10,
                      right: 10,
                      height: 2,
                      background: t.accent,
                      borderRadius: 2,
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span style={{ position: "relative", zIndex: 1 }}>{l.label}</span>
              </motion.button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div className="mobile-only-toggle">
              <ThemeToggle />
            </div>
            <button
              className="hamburger-btn"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((o) => !o)}
              style={{ color: t.text }}
            >
              <span style={{ background: t.text, transform: mobileOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
              <span style={{ background: t.text, opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ background: t.text, transform: mobileOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className={`mobile-nav-drawer open`}
            style={{
              background: t.glassBg,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: `1px solid ${t.glassBorder}`,
            }}
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => handleNav(l.id)}
                style={{
                  color: current === l.id ? t.accent : t.text,
                  background: current === l.id ? `${t.accent}12` : "transparent",
                }}
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}