import { create } from "zustand";

export const candiChangeState = create((set) => ({
  isCandiChangeOpen: false,
  toggleCandiChangeOpen: () =>
    set((state) => ({ isCandiChangeOpen: !state.isCandiChangeOpen })),
}));

export const msgFindoutState = create((set) => ({
  isMsgFindoutOpen: false,
  toggleMsgFindoutOpen: () =>
    set((state) => ({ isMsgFindoutOpen: !state.isMsgFindoutOpen })),
}));
