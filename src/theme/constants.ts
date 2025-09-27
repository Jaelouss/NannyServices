import type { ThemeMode } from "@customTypes/theme";
import type { Theme } from "@emotion/react";
import { blueTheme, greenTheme, redTheme } from "./themes";

export const THEME_MAP: Record<ThemeMode, Theme> = {
  red: redTheme,
  blue: blueTheme,
  green: greenTheme,
};
