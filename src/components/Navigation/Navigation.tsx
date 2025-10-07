import styled from "@emotion/styled";
import { flex } from "@styled/flex";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const login = false;
  return (
    <NavBox>
      <RouteLink to={"/"}>Home</RouteLink>
      <RouteLink to={"/nannies"}>Nannies</RouteLink>
      {login && <RouteLink to={"/favorites"}>Favorites</RouteLink>}
    </NavBox>
  );
};
const NavBox = styled.nav`
  ${flex({ direction: "row", gap: "40px", justify: "flex-end" })}
  width: 250px;
  margin-left: 220px;
`;
const RouteLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.whiteText};
  position: relative;
  &.active::after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #f3f3f3;
    display: block;
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
