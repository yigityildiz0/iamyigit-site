"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

import { readTheme, persistTheme, type Theme } from "@/lib/theme-storage";
const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = readTheme(() => window.localStorage.getItem("theme"));
    setTheme(saved);
    document.documentElement.dataset.theme = saved;
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    persistTheme((value) => window.localStorage.setItem("theme", value), next);
  };

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <button className="icon-btn" onClick={toggle} aria-label="Tema değiştir / Toggle theme">
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
