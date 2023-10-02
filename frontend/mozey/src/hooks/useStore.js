import { create } from "zustand";

// 예시

// export const textChannelsState = create(set => ({
//     textChannels: [],
//     setTextChannels: data => set(state => ({ textChannels: data })),
// }))

export const candiChangeState = create((set) => ({
  isCandiChangeOpen: false,
  toggleCandiChangeOpen: () =>
    set((state) => ({ isCandiChangeOpen: !state.isCandiChangeOpen })),
}));
