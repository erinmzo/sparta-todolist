import { create } from "zustand";

type User = {
  nickname: string;
  avatar: string;
};

type userAuthStoreType = {
  user: User | null;
  saveUser: (userInfo: User | null) => void;
};

export const useAuthStore = create<userAuthStoreType>((set) => ({
  user: null,
  saveUser: (userInfo) => set({ user: userInfo }),
}));
