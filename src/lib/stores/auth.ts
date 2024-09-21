import dayjs from 'dayjs';
import Cookies from 'universal-cookie';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

export const authKey = import.meta.env.VITE_AUTH_COOKIE_KEY || 'auth';

export type AuthStoreState = {
  token?: string;
};

const cookies = new Cookies();

type AuthStoreActions = {
  setToken: (token: string) => void;
  clearAuth: () => void;
};

type AuthStore = AuthStoreState & AuthStoreActions;

export const useAuth = createWithEqualityFn<AuthStore>(
  (set) => ({
    token: cookies.get(authKey) || undefined,
    setToken: (token) => {
      set({ token });
      // TODO: remove this when ready, cookie will be set from BOS
      cookies.set(authKey, token, {
        expires: dayjs().add(1, 'day').toDate(),
      });
    },
    clearAuth: () => {
      set({
        token: undefined,
      });
      cookies.remove(authKey);
    },
  }),
  shallow
);
