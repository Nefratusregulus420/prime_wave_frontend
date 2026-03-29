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
      {/* Starry Night CSS Background Layer for entire website */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: t.bg,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: -1,
        }}
      >
        {/* Core background gradient */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at top left, #6b8cce 0%, transparent 50%),
                       radial-gradient(ellipse at bottom right, #8a63e5 0%, transparent 50%),
                       radial-gradient(ellipse at top right, #51d0ff 0%, transparent 50%),
                       linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)`,
          opacity: isDark ? 0.8 : 0.6,
        }} />

        {/* Scattered Stars with CSS shadows */}
        <div
          style={{
            position: "absolute",
            width: 2,
            height: 2,
            background: "transparent",
            boxShadow: `
              10vw 20vh 1px #fff, 20vw 10vh 2px #fff, 
              30vw 40vh 1px #fff, 40vw 30vh 1.5px #fff, 
              50vw 80vh 1px #fff, 60vw 60vh 2px #fff, 
              70vw 20vh 1px #fff, 80vw 50vh 1px #fff, 
              90vw 80vh 1.5px #fff, 95vw 10vh 2px #fff,
              15vw 60vh 1px #fff, 35vw 70vh 1px #fff,
              65vw 15vh 1.5px #fff, 85vw 35vh 1px #fff,
              25vw 85vh 2px #fff, 45vw 15vh 1px #fff
            `,
            animation: "twinkle 4s infinite alternate",
            opacity: 0.8,
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 3,
            height: 3,
            background: "transparent",
            boxShadow: `
              12vw 82vh 2px #e0f2fe, 32vw 22vh 3px #e0f2fe, 
              52vw 52vh 2px #e0f2fe, 72vw 72vh 3px #e0f2fe, 
              92vw 42vh 2px #e0f2fe, 22vw 42vh 2px #e0f2fe
            `,
            animation: "twinkle 3s infinite alternate-reverse",
            opacity: 0.9,
            borderRadius: "50%",
          }}
        />

        {/* Nebula/Glow Blobs simulating the reference image's bright spots */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: 800,
            height: 800,
            background: `radial-gradient(circle, #c4a5ff66 0%, transparent 60%)`,
            filter: "blur(80px)",
            animation: "morphingBlob 20s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            left: "-10%",
            width: 900,
            height: 900,
            background: `radial-gradient(circle, #51d0ff55 0%, transparent 70%)`,
            filter: "blur(90px)",
            animation: "morphingBlob 25s ease-in-out infinite reverse",
          }}
        />
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