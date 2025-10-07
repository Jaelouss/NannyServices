import styled from "@emotion/styled";
import { useModalStore } from "@store/modalStore";
import { ContainedButton } from "@styled/ContainedButton";
import { flex } from "@styled/flex";
import { TransparentButton } from "@styled/TransparentButton";

export const AuthBlock = () => {
  const { setModal } = useModalStore();

  const handleOpenModal = (type: string) => {
    setModal(type);
  };

  return (
    <Wrapper>
      <TransparentButton onClick={() => handleOpenModal("LOGIN")} type="button">
        Log In
      </TransparentButton>
      <ContainedButton onClick={() => handleOpenModal("REGISTER")} type="button">
        Registration
      </ContainedButton>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  ${flex({ direction: "row", gap: "8px" })}
`;
