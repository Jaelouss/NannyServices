import { createContext } from "react";
import type { ThemeContextType } from "@customTypes/theme";

export const ThemeToggleContext = createContext<ThemeContextType | null>(null);
