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
    bgSecondary: "transparent",
    bgCard: "#12141d",
    bgCardHover: "#181b26",
    border: "#1f2233",
    borderAccent: "#243b61",
    text: "#f8fafc",
    textMuted: "#8b949e",
    textSubtle: "#a1aab5",
    accent: "#3b82f6",
    accentSoft: "#3b82f61a", // More present but soft
    accentHover: "#60a5fa",
    accentBlue: "#38bdf8",
    navBg: "rgba(6, 7, 10, 0.75)",
    shadow: "0 8px 32px rgba(0,0,0,0.8)",
    shadowCard: "0 4px 24px rgba(0,0,0,0.5)",
    gradientHero: "radial-gradient(ellipse 90% 70% at 50% -15%, #1e3a8a35 0%, transparent 65%)",
    sectionBg: "transparent",
    termBg: "#050608",
    glassBg: "rgba(18, 20, 29, 0.5)",
    glassBorder: "rgba(255, 255, 255, 0.05)",
    glowShadow: "0 0 20px rgba(59, 130, 246, 0.25)",
  },
  light: {
    bg: "transparent", // Let the starry background show through
    bgSecondary: "transparent",
    bgCard: "#ffffff",
    bgCardHover: "#f8fafc",
    border: "#e2e8f0",
    borderAccent: "#b8d4f0",
    text: "#0f172a",
    textMuted: "#1e293b",
    textSubtle: "#334155",
    accent: "#2563eb",
    accentSoft: "#2563eb14",
    accentHover: "#1d4ed8",
    accentBlue: "#0284c7",
    navBg: "rgba(250, 252, 255, 0.8)",
    shadow: "0 8px 32px rgba(0,0,0,0.06)",
    shadowCard: "0 4px 20px rgba(0,0,0,0.04)",
    gradientHero: "radial-gradient(ellipse 90% 70% at 50% -15%, #dbeafe80 0%, transparent 65%)",
    sectionBg: "transparent",
    termBg: "#f8fafc",
    glassBg: "rgba(255, 255, 255, 0.65)",
    glassBorder: "rgba(0, 0, 0, 0.05)",
    glowShadow: "0 0 20px rgba(37, 99, 235, 0.15)",
  },
};