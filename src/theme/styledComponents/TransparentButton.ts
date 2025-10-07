import styled from "@emotion/styled";
import { flex } from "@styled/flex";

export const TransparentButton = styled.button`
  ${flex({ direction: "row", gap: "8px" })}
  padding: 14px 40px;
  border-radius: 30px;
  background-color: transparent;
  border: 1px solid rgba(251, 251, 251, 0.4);
  color: ${(props) => props.theme.colors.whiteText};
  font-weight: 500;
  cursor: pointer;
`;
