import { create } from "zustand";

export const useTelegramStore = create((set) => ({
  tg: null,
  userId: null,
  avatar: null,
  setTg: (tg: any) =>
    set(() => ({
      tg: tg,
      //userId: tg?.initDataUnsafe?.user?.id,
      userId: "315854463", //9292,
      avatar: null,
    })),
  removeTg: () => set({ tg: null }),
  removeUserId: () => set({ userId: null }),
}));
