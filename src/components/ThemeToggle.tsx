import { useTheme, themes } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme, isDark } = useTheme();
  const t = themes[theme];

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={{
        width: 56,
        height: 28,
        borderRadius: 14,
        border: `1px solid ${t.borderAccent}`,
        background: isDark ? "#111318" : "#ddf0d8",
        cursor: "pointer",
        position: "relative",
        transition: "all 0.3s",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        padding: "0 4px",
      }}
    >
      <span
        style={{
          position: "absolute",
          left: 7,
          fontSize: "0.62rem",
          opacity: isDark ? 0.25 : 1,
          transition: "opacity 0.3s",
        }}
      >
        ☀️
      </span>
      <span
        style={{
          position: "absolute",
          right: 7,
          fontSize: "0.62rem",
          opacity: isDark ? 1 : 0.25,
          transition: "opacity 0.3s",
        }}
      >
        🌙
      </span>
      <div
        style={{
          width: 19,
          height: 19,
          borderRadius: "50%",
          background: t.accent,
          transform: isDark ? "translateX(28px)" : "translateX(0)",
          transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
          boxShadow: `0 2px 8px ${t.accent}60`,
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.52rem",
        }}
      >
        {isDark ? "🌙" : "☀️"}
      </div>
    </button>
  );
}