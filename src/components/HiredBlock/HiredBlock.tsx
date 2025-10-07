import { Check } from "@assets";
import styled from "@emotion/styled";
import { flex } from "@styled/flex";

export const HiredBlock: React.FC = () => {
  return (
    <Box>
      <CheckIconBox>
        <Check width="30px" height="30px" />
      </CheckIconBox>
      <TextWrapper>
        <Text>Experienced nannies</Text>
        <Count>15,000</Count>
      </TextWrapper>
    </Box>
  );
};
const Box = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 284px;
  height: 118px;
  border-radius: 20px;
  background: ${(props) => props.theme.colors.background};
  padding: 32px;
  ${flex({ direction: "row", gap: "16px" })}
`;
const CheckIconBox = styled.div`
  ${flex};
  width: 54px;
  height: 54px;
  border-radius: 13px;
  background: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.whiteText};
`;

const TextWrapper = styled.div`
  ${flex({ align: "flex-start", gap: "6px" })}
`;
const Text = styled.p`
  color: ${(props) => props.theme.colors.grayText};
  font-size: 16px;
`;
const Count = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: 700;
`;
