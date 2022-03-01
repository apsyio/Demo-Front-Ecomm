import type {StateCreator} from 'zustand';

export type AuthState = {
  token: string;
  userId: number;
  isUserLoggedIn: boolean;

  setToken: (token: string) => void;
  setUserId: (userId: number) => void;
  setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
};

export const createAuthSlice: StateCreator<AuthState> = set => ({
  token: '',
  userId: 0,
  isUserLoggedIn: false,

  setToken: (token: string) => set({token}),
  setUserId: (userId: number) => set({userId}),
  setIsUserLoggedIn: (isUserLoggedIn: boolean) => set({isUserLoggedIn}),
});

export default createAuthSlice;
