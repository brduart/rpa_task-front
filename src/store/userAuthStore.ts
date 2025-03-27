import { create } from "zustand";

interface AuthState {
  token: string | null;
  login: (token: string) => void;
  register: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem("token") || null,

  login: (token) => {
    localStorage.setItem("token", token);
    set({ token });
  },

  register: () => {},

  logout: () => {
    localStorage.removeItem("token");
    set({ token: null });
  },
}));
