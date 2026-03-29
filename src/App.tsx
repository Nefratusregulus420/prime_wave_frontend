import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Purpose from "./pages/Purpose";
import Industries from "./pages/Industries";
import Footer from "./components/Footer";
import { useTheme, themes } from "./context/ThemeContext";

type Page = "home" | "contact" | "purpose" | "industries";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const { theme, isDark } = useTheme();
  const t = themes[theme];

  const navigate = (p: Page, hash?: string) => {
    if (hash) {
      window.location.hash = hash;
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflowX: "hidden",
      background: t.bg,
    }}>
      {/* Theme-based Background Layer */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: -1,
        }}
      >
        {isDark ? (
          /* ── DARK: Deep space / starry night ──────────────── */
          <>
            {/* Deep navy space base */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(160deg, #08081a 0%, #0b0e24 40%, #070b1e 100%)`,
            }} />

            {/* Soft mid-left indigo glow */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse 70% 60% at 20% 60%, rgba(72,52,180,0.45) 0%, transparent 60%),
                           radial-gradient(ellipse 50% 50% at 80% 15%, rgba(30,90,200,0.35) 0%, transparent 55%)`,
            }} />

            {/* Small bright stars */}
            <div style={{
              position: "absolute", width: 1, height: 1, background: "transparent",
              boxShadow: `
                5vw 8vh 1px 1px #fff, 14vw 22vh 1px 1px #fff, 23vw 6vh 1px 1px #fff,
                37vw 43vh 1px 1px #fff, 48vw 71vh 1px 1px #dde, 55vw 14vh 1px 1px #fff,
                62vw 58vh 1px 1px #fff, 71vw 31vh 1px 1px #fff, 83vw 75vh 1px 1px #eff,
                91vw 9vh 1px 1px #fff, 96vw 48vh 1px 1px #ddf, 3vw 52vh 1px 1px #fff,
                18vw 88vh 1px 1px #fff, 29vw 65vh 1px 1px #dde, 43vw 19vh 1px 1px #fff,
                57vw 92vh 1px 1px #fff, 68vw 7vh 1px 1px #fff, 79vw 56vh 1px 1px #eef,
                87vw 29vh 1px 1px #fff, 94vw 83vh 1px 1px #ddf
              `,
              animation: "twinkle 4s ease-in-out infinite alternate",
              borderRadius: "50%",
            }} />

            {/* Larger glowing stars */}
            <div style={{
              position: "absolute", width: 2, height: 2, background: "transparent",
              boxShadow: `
                8vw 35vh 2px 1px #c4d8ff, 26vw 17vh 2px 1px #b8d0ff,
                44vw 84vh 2px 1px #cce0ff, 60vw 40vh 2px 1px #c0d4ff,
                76vw 62vh 2px 1px #b8d0ff, 88vw 18vh 2px 1px #c4d8ff
              `,
              animation: "twinkle 6s ease-in-out infinite alternate-reverse",
              borderRadius: "50%",
            }} />

            {/* Purple nebula glow top-right */}
            <div style={{
              position: "absolute",
              top: "-15%", right: "-8%",
              width: 750, height: 750,
              background: `radial-gradient(circle, rgba(130,70,220,0.35) 0%, rgba(80,40,180,0.15) 40%, transparent 65%)`,
              filter: "blur(70px)",
              animation: "morphingBlob 22s ease-in-out infinite",
            }} />

            {/* Cyan nebula glow bottom-left */}
            <div style={{
              position: "absolute",
              bottom: "-20%", left: "-12%",
              width: 850, height: 850,
              background: `radial-gradient(circle, rgba(30,120,220,0.3) 0%, rgba(20,80,160,0.15) 45%, transparent 70%)`,
              filter: "blur(85px)",
              animation: "morphingBlob 28s ease-in-out infinite reverse",
            }} />

            {/* Centre subtle glow for depth */}
            <div style={{
              position: "absolute",
              top: "30%", left: "35%",
              width: 500, height: 400,
              background: `radial-gradient(ellipse, rgba(50,80,200,0.18) 0%, transparent 65%)`,
              filter: "blur(60px)",
            }} />
          </>
        ) : (
          /* ── LIGHT: Clean white / pale blue ───────────────── */
          <>
            {/* Pure white base */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "#f4f7fc",
            }} />

            {/* Very soft blue tint at top */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse 100% 55% at 50% 0%, rgba(214,228,255,0.7) 0%, transparent 60%)`,
            }} />

            {/* Faint right-side accent */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse 50% 60% at 95% 0%, rgba(200,218,255,0.45) 0%, transparent 55%)`,
            }} />
          </>
        )}
      </div>

      <Navbar current={page} navigate={navigate} />

      {page === "home" && <Home navigate={navigate} />}
      {page === "contact" && <Contact />}
      {page === "purpose" && <Purpose />}
      {page === "industries" && <Industries />}

      <Footer />
    </div>
  );
}