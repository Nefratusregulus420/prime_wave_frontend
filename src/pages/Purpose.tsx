import { useTheme, themes as tokens } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import akashImg from "../assets/M.Akash Reddy.jpg";
import nithinImg from "../assets/Y.Nithin Satvik.jpg";
import sreecharanImg from "../assets/K.Sree Charan.jpg";
import thrinadhImg from "../assets/S.Thrinadh Reddy.jpg";
import snehithaImg from "../assets/T.Snehitha.jpg";
import shreyaImg from "../assets/Shreya Patra.jpg";

function TickerBar() {
  const { theme } = useTheme();
  const t = tokens[theme];
  const items = [
    "Enterprise Grade Solutions",
    "Cloud Native Architecture",
    "High Performance Systems",
    "Scalable Digital Transformation",
    "99.9% Service Uptime",
    "Global Infrastructure",
    "Secure & Compliant",
    "Next Generation Engineering",
    "Unified Commerce Platform",
    "Continuous Integration & Delivery",
    "Data-Driven Architecture",
  ];
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap", borderTop: `1px solid ${t.border}`, borderBottom: `1px solid ${t.border}`, background: t.bgSecondary, padding: "10px 0" }}>
      <div style={{ display: "inline-flex", gap: 48, animation: "ticker 28s linear infinite", fontSize: "0.75rem", fontWeight: 500, color: t.textSubtle, letterSpacing: "0.06em", textTransform: "uppercase" }}>
        {doubled.map((item, i) => (
          <span key={i}><span style={{ color: t.accent }}>◆</span> {item}</span>
        ))}
      </div>
    </div>
  );
}

export default function Purpose() {
  const { theme } = useTheme();
  const t = tokens[theme];
  const [selectedFounder, setSelectedFounder] = useState<{ image: string; name: string } | null>(null);

  const founders = [
    { name: "Y.Nithin Satvik", role: "CEO & Co-Founder", initials: "YS", color: "#00e676", quote: "Driving the strategic vision and engineering excellence.", image: nithinImg },
    { name: "M.Akash Reddy", role: "CTO & Co-Founder", initials: "AR", color: "#4fc3f7", quote: "Architecting scalable and resilient enterprise systems.", image: akashImg },
    { name: "S.Thrinadh Reddy", role: "CPO & Co-Founder", initials: "TR", color: "#ce93d8", quote: "Designing products that redefine digital commerce.", image: thrinadhImg },
    { name: "T.Snehitha", role: "CDO & Co-Founder", initials: "TS", color: "#ffb74d", quote: "Merging aesthetics with functional performance.", image: snehithaImg },
    { name: "Shreya Patra", role: "COO & Co-Founder", initials: "SP", color: "#ff7043", quote: "Optimizing operations for global scale delivery.", image: shreyaImg },
    { name: "K.Sreecharan", role: "CIO & Co-Founder", initials: "KS", color: "#ffca28", quote: "Ensuring security and infrastructure reliability.", image: sreecharanImg },
  ];

  const timeline = [
    { year: "2025", event: "Company Founded", detail: "Three engineers focusing on robust software architectural patterns." },
    { year: "2026", event: "Products Launched", detail: "Successfully delivered E-Commerce of Fashion and E-Commerce of Electronics." },
    { year: "2026", event: "Enterprise Scaling", detail: "Migrated core systems to high-performance tech stacks." },
    { year: "2026", event: "Global Footprint", detail: "Serving international clients with our 2 specialized products." },
  ];

  const values = [
    { icon: "⚡", title: "Move Fast", desc: "Iterate quickly to bring products to market." },
    { icon: "◈", title: "Engineering First", desc: "Prioritize architectural integrity over shortcuts." },
    { icon: "⬡", title: "Unified Vision", desc: "Collaborate across disciplines for a cohesive experience." },
  ];

  const sectionLabel = (text: string, center = false) => (
    <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: t.accent, display: "flex", alignItems: "center", justifyContent: center ? "center" : "flex-start", gap: 10, marginBottom: 14 }}>
      <span style={{ width: 22, height: 1, background: t.accent, display: "inline-block" }} />
      {text}
    </div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <div style={{ background: t.bg, minHeight: "100vh", paddingTop: 64 }}>
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ padding: "70px 24px 52px", background: t.sectionBg, borderBottom: `1px solid ${t.border}`, position: "relative", overflow: "hidden" }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.border}60 1px, transparent 1px), linear-gradient(90deg, ${t.border}60 1px, transparent 1px)`, backgroundSize: "40px 40px", opacity: 0.22, animation: "gridMove 10s linear infinite" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          {sectionLabel("Our Why")}
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", fontWeight: 800, letterSpacing: "-0.04em", color: t.text, lineHeight: 1.05, marginBottom: 18 }}>
            Built by engineers who<br />
            <span style={{ color: t.accent }}>demand excellence.</span>
          </h1>
          <p style={{ color: t.textSubtle, fontSize: "1.05rem", maxWidth: 540, lineHeight: 1.8 }}>
            PrimeWave Lifestyle & Electronics was founded with a single belief: that technology should be built by experienced engineers who understand the importance of scalable, reliable system architectures.
          </p>
        </div>
      </motion.section>

      <TickerBar />

      {/* Story + Timeline */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="section-pad"
        style={{ padding: "72px 24px" }}
      >
        <div className="grid-2col" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>

          {/* Story */}
          <div>
            {sectionLabel("The Origin")}
            <h2 style={{ fontSize: "1.9rem", fontWeight: 800, letterSpacing: "-0.03em", color: t.text, marginBottom: 18, lineHeight: 1.12 }}>
              How PrimeWave Lifestyle & Electronics Started
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: t.textSubtle, marginBottom: 18 }}>
              In 2025, an experienced team of engineers recognized a growing gap in the digital commerce space: the lack of robust, enterprise-ready solutions that could scale dynamically without sacrificing performance.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: t.textSubtle, marginBottom: 18 }}>
              What united them was a vision: technology that serves real businesses, scales gracefully, and processes high volumes of transactions flawlessly. From that shared mission, PrimeWave Lifestyle & Electronics was born.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: t.textSubtle, marginBottom: 28 }}>
              By 2026, we successfully launched 2 core products—E-Commerce of Fashion and E-Commerce of Electronics—while maintaining an unwavering commitment to engineering excellence.
            </p>

            {values.map((v, i) => (
              <motion.div
                custom={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] } })
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={v.title}
                style={{ display: "flex", gap: 14, marginBottom: 12, padding: "12px 15px", borderRadius: 8, border: `1px solid ${t.border}`, background: t.bgCard }}
              >
                <div style={{ width: 34, height: 34, borderRadius: 7, background: t.accentSoft, display: "flex", alignItems: "center", justifyContent: "center", color: t.accent, fontSize: "0.95rem", flexShrink: 0 }}>
                  {v.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem", color: t.text, marginBottom: 2 }}>{v.title}</div>
                  <div style={{ fontSize: "0.85rem", color: t.textSubtle }}>{v.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <div>
            {sectionLabel("Journey")}
            <h2 style={{ fontSize: "1.9rem", fontWeight: 800, letterSpacing: "-0.03em", color: t.text, marginBottom: 24 }}>
              The Timeline
            </h2>
            {/* Vertical line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ position: "absolute", left: 16, top: 8, bottom: 8, width: 2, background: `linear-gradient(180deg, ${t.accent}, ${t.accentBlue}, transparent)` }}
            />
            {timeline.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                key={i}
                style={{ display: "flex", gap: 18, marginBottom: 16, paddingLeft: 6, position: "relative" }}
              >
                <div style={{ width: 17, height: 17, borderRadius: "50%", border: `2px solid ${t.accent}`, background: t.bg, flexShrink: 0, marginTop: 5, position: "relative", zIndex: 1, boxShadow: `0 0 8px ${t.accent}35` }} />
                <div style={{ flex: 1, padding: "11px 15px", borderRadius: 8, border: `1px solid ${t.border}`, background: t.bgCard }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem", color: t.text }}>{item.event}</div>
                    <span style={{ fontSize: "0.7rem", fontWeight: 600, padding: "2px 9px", borderRadius: 4, background: t.accentSoft, color: t.accent, border: `1px solid ${t.accent}25` }}>{item.year}</span>
                  </div>
                  <div style={{ fontSize: "0.85rem", color: t.textMuted }}>{item.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section >

      {/* Founders */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="section-pad"
        style={{ padding: "72px 24px", background: t.sectionBg, borderTop: `1px solid ${t.border}` }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {sectionLabel("The Team", true)}
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.03em", color: t.text, textAlign: "center", marginBottom: 6 }}>
            Leadership Team
          </h2>
          <p style={{ color: t.textSubtle, fontSize: "1.05rem", textAlign: "center", marginBottom: 44 }}>
            The executive leadership guiding PrimeWave Lifestyle & Electronics's strategic growth.
          </p>

          <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                borderColor: t.accent,
                boxShadow: `0 20px 40px -10px ${t.accent}40`,
              }}
              key={founders[0].name}
              className="founder-ceo"
              onClick={() => setSelectedFounder({ image: founders[0].image, name: founders[0].name })}
              style={{ padding: "26px 18px", borderRadius: 16, border: `1px solid ${t.border}`, background: t.bgCard, textAlign: "center", boxShadow: t.shadowCard, transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)", cursor: "pointer", width: "100%", maxWidth: 280 }}
            >
              {founders[0].image ? (
                <div style={{ width: 68, height: 68, borderRadius: "50%", border: `2px solid ${founders[0].color}45`, margin: "0 auto 14px", position: "relative" }}>
                  <img src={founders[0].image} alt={founders[0].name} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", bottom: 2, right: 2, width: 11, height: 11, borderRadius: "50%", background: t.accent, border: `2px solid ${t.bgCard}` }} />
                </div>
              ) : (
                <div style={{ width: 68, height: 68, borderRadius: "50%", background: `linear-gradient(135deg, ${founders[0].color}28, ${founders[0].color}08)`, border: `2px solid ${founders[0].color}45`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1.25rem", color: founders[0].color, margin: "0 auto 14px", position: "relative" }}>
                  {founders[0].initials}
                  <div style={{ position: "absolute", bottom: 2, right: 2, width: 11, height: 11, borderRadius: "50%", background: t.accent, border: `2px solid ${t.bgCard}` }} />
                </div>
              )}
              <div style={{ fontWeight: 800, fontSize: "0.95rem", color: t.text, marginBottom: 3 }}>{founders[0].name}</div>
              <div style={{ fontSize: "0.7rem", fontWeight: 600, color: founders[0].color, marginBottom: 11, letterSpacing: "0.04em" }}>{founders[0].role}</div>
              <div style={{ fontSize: "0.85rem", color: t.textMuted, lineHeight: 1.5, padding: "8px 0", borderTop: `1px solid ${t.border}` }}>
                "{founders[0].quote}"
              </div>
            </motion.div>
          </div>

          <div className="grid-founders" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 18 }}>
            {founders.slice(1).map((f) => (
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  borderColor: t.borderAccent,
                  boxShadow: `0 15px 30px -10px ${t.accent}25`,
                }}
                key={f.name}
                onClick={() => setSelectedFounder({ image: f.image, name: f.name })}
                style={{ padding: "26px 18px", borderRadius: 16, border: `1px solid ${t.border}`, background: t.bgCard, textAlign: "center", boxShadow: t.shadowCard, transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)", cursor: "pointer", flex: "1 1 min-content", minWidth: 195, maxWidth: 260 }}
              >
                {/* Avatar */}
                {f.image ? (
                  <div style={{ width: 68, height: 68, borderRadius: "50%", border: `2px solid ${f.color}45`, margin: "0 auto 14px", position: "relative" }}>
                    <img src={f.image} alt={f.name} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", bottom: 2, right: 2, width: 11, height: 11, borderRadius: "50%", background: t.accent, border: `2px solid ${t.bgCard}` }} />
                  </div>
                ) : (
                  <div style={{ width: 68, height: 68, borderRadius: "50%", background: `linear-gradient(135deg, ${f.color}28, ${f.color}08)`, border: `2px solid ${f.color}45`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1.25rem", color: f.color, margin: "0 auto 14px", position: "relative" }}>
                    {f.initials}
                    <div style={{ position: "absolute", bottom: 2, right: 2, width: 11, height: 11, borderRadius: "50%", background: t.accent, border: `2px solid ${t.bgCard}` }} />
                  </div>
                )}
                <div style={{ fontWeight: 800, fontSize: "0.95rem", color: t.text, marginBottom: 3 }}>{f.name}</div>
                <div style={{ fontSize: "0.7rem", fontWeight: 600, color: f.color, marginBottom: 11, letterSpacing: "0.04em" }}>{f.role}</div>
                <div style={{ fontSize: "0.85rem", color: t.textMuted, lineHeight: 1.5, padding: "8px 0", borderTop: `1px solid ${t.border}` }}>
                  "{f.quote}"
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section >

      {/* Expanded Founder Image Modal */}
      <AnimatePresence>
        {selectedFounder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFounder(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              backdropFilter: "blur(5px)"
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "90vh",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedFounder.image}
                alt={selectedFounder.name}
                style={{
                  display: "block",
                  maxWidth: "100%",
                  maxHeight: "90vh",
                  objectFit: "contain",
                  borderRadius: "16px",
                  backgroundColor: t.bgCard
                }}
              />
              <button
                onClick={() => setSelectedFounder(null)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: t.bg,
                  border: `1px solid ${t.border}`,
                  color: t.text,
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  zIndex: 10,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
                }}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div >
  );
}