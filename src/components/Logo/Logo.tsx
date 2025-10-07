import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Logo: React.FC = () => {
  return <LogoStyled to={"/"}>Nanny.Services</LogoStyled>;
};

export const LogoStyled = styled(Link)`
  color: ${(prop) => prop.theme.colors.whiteText};
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.48px;
  text-decoration: none;
`;
