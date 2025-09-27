import { css } from "@emotion/react";

type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

type AlignItems = "flex-start" | "flex-end" | "center" | "stretch" | "baseline";

type FlexProps = {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: string;
};
export const flex = ({
  direction = "column",
  justify = "center",
  align = "center",
  gap = "0px",
}: FlexProps) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  gap: ${gap};
`;
