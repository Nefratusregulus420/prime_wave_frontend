import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => { },
  isDark: false,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export const themes = {
  dark: {
    bg: "transparent", // Let the starry background show through
    bgSecondary: "rgba(255,255,255,0.02)",
    bgCard: "rgba(16, 18, 32, 0.7)",
    bgCardHover: "rgba(22, 25, 42, 0.8)",
    border: "rgba(255,255,255,0.08)",
    borderAccent: "rgba(59,130,246,0.35)",
    text: "#ffffff",
    textMuted: "#c8d1e0",
    textSubtle: "#94a3b8",
    accent: "#4d8ef7",
    accentSoft: "rgba(77,142,247,0.12)",
    accentHover: "#6ba3fa",
    accentBlue: "#38bdf8",
    navBg: "rgba(5, 6, 14, 0.72)",
    shadow: "0 8px 32px rgba(0,0,0,0.8)",
    shadowCard: "0 4px 24px rgba(0,0,0,0.5)",
    gradientHero: "radial-gradient(ellipse 90% 70% at 50% -15%, rgba(30,58,138,0.3) 0%, transparent 65%)",
    sectionBg: "transparent",
    termBg: "rgba(5,6,14,0.8)",
    glassBg: "rgba(10, 12, 28, 0.55)",
    glassBorder: "rgba(255, 255, 255, 0.07)",
    glowShadow: "0 0 30px rgba(77, 142, 247, 0.3)",
  },
  light: {
    bg: "transparent", // Let the light background show through
    bgSecondary: "rgba(241,245,250,0.8)",
    bgCard: "#ffffff",
    bgCardHover: "#f8fafc",
    border: "#dde3ed",
    borderAccent: "#b0c8f0",
    text: "#0d1117",
    textMuted: "#1e293b",
    textSubtle: "#475569",
    accent: "#2563eb",
    accentSoft: "rgba(37,99,235,0.08)",
    accentHover: "#1d4ed8",
    accentBlue: "#0284c7",
    navBg: "rgba(255, 255, 255, 0.85)",
    shadow: "0 8px 32px rgba(0,0,0,0.06)",
    shadowCard: "0 4px 20px rgba(0,0,0,0.06)",
    gradientHero: "radial-gradient(ellipse 90% 70% at 50% -15%, rgba(219,234,254,0.6) 0%, transparent 65%)",
    sectionBg: "transparent",
    termBg: "#f8fafc",
    glassBg: "rgba(255, 255, 255, 0.75)",
    glassBorder: "rgba(0, 0, 0, 0.06)",
    glowShadow: "0 0 20px rgba(37, 99, 235, 0.15)",
  },
};