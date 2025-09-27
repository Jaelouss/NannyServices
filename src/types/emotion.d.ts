import "@emotion/react";
import type { ThemeType } from "@customTypes/theme";

declare module "@emotion/react" {
  type Theme = ThemeType;
}
