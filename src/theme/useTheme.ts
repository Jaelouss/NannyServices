import { useContext } from "react";
import { ThemeToggleContext } from "./ThemeContext";

export const useThemeMode = () => {
  const context = useContext(ThemeToggleContext);
  if (!context) {
    throw new Error("useThemeMode must be used within a CustomThemeProvider");
  }
  return context;
};
