import React, { useMemo, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { ThemeToggleContext } from "./ThemeContext";
import { THEME_MAP } from "./constants";
import type { ThemeMode } from "@customTypes/theme";

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem("themeMode") as ThemeMode;
    return saved && ["red", "blue", "green"].includes(saved) ? saved : "green";
  });

  const theme = useMemo(() => THEME_MAP[themeMode], [themeMode]);

  const setMode = (mode: ThemeMode) => {
    if (THEME_MAP[mode]) {
      localStorage.setItem("themeMode", mode);
      setThemeMode(mode);
    }
  };

  const contextValue = useMemo(() => ({ themeMode, setThemeMode: setMode }), [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeToggleContext.Provider value={contextValue}>{children}</ThemeToggleContext.Provider>
    </ThemeProvider>
  );
};
