import { LoginModal, RegisterModal } from "@modals";

interface ModalProps {
  modalData: Record<string, unknown> | null;
  modalState: Record<string, unknown> | null;
  setModalState: (state: Record<string, unknown>) => void;
}

export const modalRegistry: Record<string, React.FC<ModalProps>> = {
  LOGIN: LoginModal,
  REGISTER: RegisterModal,
};
