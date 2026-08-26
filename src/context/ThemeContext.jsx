import { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";

const ThemeContext = createContext(null);
const STORAGE_KEY = "portfolio-theme";

/**
 * Détermine le thème initial : préférence sauvegardée > préférence système > "dark".
 */
function getInitialTheme() {
  if (typeof window === "undefined") return "dark";

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;

  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  return prefersLight ? "light" : "dark";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  // Applique la classe `.dark` sur <html> à chaque changement, et mémorise le choix.
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(
    () => ({ theme, isDark: theme === "dark", toggleTheme, setTheme }),
    [theme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

/**
 * Hook d'accès au thème courant. Doit être utilisé à l'intérieur de <ThemeProvider>.
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme() doit être utilisé à l'intérieur d'un <ThemeProvider>.");
  }
  return context;
}
