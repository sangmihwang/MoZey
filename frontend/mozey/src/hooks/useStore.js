import { create } from "zustand";

export const candiChangeState = create((set) => ({
  isCandiChangeOpen: false,
  toggleCandiChangeOpen: () =>
    set((state) => ({ isCandiChangeOpen: !state.isCandiChangeOpen })),
}));
