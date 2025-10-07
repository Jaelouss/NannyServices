import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ModalStore {
  modalType: string | null;
  modalData: Record<string, unknown> | null;
  modalState: Record<string, unknown> | null;

  setModal: (type: string, data?: Record<string, unknown>) => void;
  setModalState: (state: Record<string, unknown>) => void;
  clearModalState: () => void;
  clearModal: () => void;
}

export const useModalStore = create<ModalStore>()(
  persist(
    (set) => ({
      modalType: null,
      modalData: null,
      modalState: null,

      setModal: (type, data = undefined) =>
        set({ modalType: type, modalData: data, modalState: null }),
      setModalState: (state) => set({ modalState: state }),
      clearModalState: () => set({ modalState: null }),
      clearModal: () => set({ modalType: null, modalData: null, modalState: null }),
    }),
    {
      name: "modal-store",
    }
  )
);
