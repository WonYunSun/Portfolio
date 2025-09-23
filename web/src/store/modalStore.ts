import { ProjectDetail } from "@/lib/sanity-queries";
import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  project?: ProjectDetail;
  openModal: (project: ProjectDetail) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  project: undefined,
  openModal: (project) => set({ isOpen: true, project }),
  closeModal: () => set({ isOpen: false, project: undefined }),
}));
