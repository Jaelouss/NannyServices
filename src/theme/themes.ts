import type { ThemeType } from "@customTypes/theme";

export const baseTheme: ThemeType = {
  colors: {
    text: "#11101C",
    grayText: "rgba(17, 16, 28, 0.50)",
    whiteText: "#FBFBFB",
    notActiveText: "rgba(17, 16, 28, 0.30)",
    price: "#38CD3E",
    yellow: "#FFC531",
    main: "#103931",
    disabled: "rgba(16, 57, 49, 0.20)",
    background: "#FBFBFB",
    backgroundBody: "#F3F3F3",
    hover: {
      text: "#11101C",
    },
  },
  fonts: {
    base: `'Helvetica Neue',  sans-serif`,
  },
};

export const redTheme: ThemeType = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,

    main: "#F03F3B",
    disabled: "rgba(240, 63, 59, 0.20)",
    hover: {
      ...baseTheme.colors.hover,
      text: "#F03F3B",
    },
  },
};

export const blueTheme: ThemeType = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    main: "#0957C3",
    disabled: "rgba(9, 87, 195, 0.20)",
    hover: {
      ...baseTheme.colors.hover,
      text: "#0957C3",
    },
  },
};

export const greenTheme: ThemeType = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    main: "#103931",
    disabled: "rgba(16, 57, 49, 0.20)",
    hover: {
      ...baseTheme.colors.hover,
      text: "#103931",
    },
  },
};
