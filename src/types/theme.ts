export interface ColorPalette {
  main: string;
  disabled: string;
  text: string;
  notActiveText: string;
  price: string;
  yellow: string;
  background: string;
  backgroundBody: string;
  hover: {
    text: string;
  };
}

export interface ThemeType {
  colors: ColorPalette;
  fonts: {
    base: string;
  };
}

export type ThemeMode = "red" | "blue" | "green";

export interface ThemeContextType {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
}
