import { AuthBlock, Logo, Navigation } from "@components";
import styled from "@emotion/styled";
import { flex } from "@styled/flex";

export const Header: React.FC = () => {
  return (
    <HeaderStyled variant="main">
      <Logo />
      <Navigation />
      <AuthBlock />
    </HeaderStyled>
  );
};

type Variants = {
  variant?: "main" | "theme";
};

export const HeaderStyled = styled.header<Variants>`
  position: fixed;
  width: 100%;
  background-color: ${(props) =>
    props.variant === "main" ? "transparent" : props.theme.colors.main};
  padding: 20px 96px;
  margin-top: 32px;
  ${flex({ direction: "row", justify: "space-between" })}
  z-index: 999;
  border-bottom: 1px solid rgba(251, 251, 251, 0.4);
`;
