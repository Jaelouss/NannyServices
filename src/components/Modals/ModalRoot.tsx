import styled from "@emotion/styled";
import { flex } from "@styled/flex";
import React from "react";
import { createPortal } from "react-dom";
import { CloseX } from "@assets";
import { modalRegistry } from "@const/modalsTypes";
import { useModalStore } from "@store/modalStore";

export const ModalRoot: React.FC = () => {
  const { modalType, modalData, modalState, setModalState, clearModal } = useModalStore();

  if (!modalType) return null;

  const Component = modalRegistry[modalType];
  if (!Component) return null;
  return createPortal(
    <Backdrop onClick={clearModal}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={clearModal}>
          <CloseX width="32px" height="32px" />
        </CloseButton>
        <Component modalData={modalData} modalState={modalState} setModalState={setModalState} />
      </Wrapper>
    </Backdrop>,
    document.getElementById("modal-root")!
  );
};
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(11, 11, 11, 0.6);
  ${flex}
  z-index: 9999;
`;
const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 30px;
  padding: 64px;
  width: 566px;
  position: relative;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
`;
