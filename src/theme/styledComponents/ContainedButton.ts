import styled from "@emotion/styled";
import { flex } from "./flex";

export const ContainedButton = styled.button`
  ${flex({ direction: "row", gap: "8px" })}
  padding: 14px 40px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.main};
  outline: none;
  border: none;
  color: ${(props) => props.theme.colors.whiteText};
  cursor: pointer;
`;
