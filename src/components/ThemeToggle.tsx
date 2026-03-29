import { useTheme, themes } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { toggleTheme, isDark } = useTheme();
  const accent = isDark ? "#4d8ef7" : "#2563eb";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      style={{
        width: 56,
        height: 28,
        borderRadius: 14,
        border: `1.5px solid ${isDark ? "rgba(77,142,247,0.4)" : "#b0c8f0"}`,
        background: isDark ? "rgba(10,12,28,0.7)" : "#ffffff",
        cursor: "pointer",
        position: "relative",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        padding: "0 4px",
        boxShadow: isDark
          ? "0 2px 10px rgba(77,142,247,0.2)"
          : "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      {/* Sun icon (left) */}
      <span
        style={{
          position: "absolute",
          left: 6,
          fontSize: "0.6rem",
          opacity: isDark ? 0.3 : 0.9,
          transition: "opacity 0.3s",
          lineHeight: 1,
        }}
      >
        ☀️
      </span>

      {/* Moon icon (right) */}
      <span
        style={{
          position: "absolute",
          right: 6,
          fontSize: "0.6rem",
          opacity: isDark ? 0.9 : 0.3,
          transition: "opacity 0.3s",
          lineHeight: 1,
        }}
      >
        🌙
      </span>

      {/* Sliding thumb */}
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: accent,
          transform: isDark ? "translateX(27px)" : "translateX(0px)",
          transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
          boxShadow: `0 2px 8px ${accent}70`,
          position: "relative",
          zIndex: 1,
        }}
      />
    </button>
  );
}