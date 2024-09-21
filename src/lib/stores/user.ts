import { createWithEqualityFn } from 'zustand/traditional';

import { type PartialAccessMenuMap } from '@/lib/services/api/access-menu-services/types';
import { type GetCurrentUserDetailResponseData } from '@/lib/services/api/user-services/current-user/get-detail/types';

type UserStoreState = {
  userDetail: GetCurrentUserDetailResponseData | null;
  accessMenu: PartialAccessMenuMap;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  notificationAccessMenu: any;
};

const INITIAL_USER_STORE_VALUE: UserStoreState = {
  userDetail: null,
  accessMenu: {},
  notificationAccessMenu: null,
};

type UserStoreActions = {
  setUserDetail: (userDetail: GetCurrentUserDetailResponseData) => void;
  setAccessMenu: (accessMenuV2: PartialAccessMenuMap) => void;
  setNotificationAccessMenu: (notificationAccessMenu: unknown) => void;
};

type UserStore = UserStoreState & UserStoreActions;

export const useUserStore = createWithEqualityFn<UserStore>((set) => ({
  ...INITIAL_USER_STORE_VALUE,
  setUserDetail: (userDetail) => set({ userDetail }),
  setAccessMenu: (accessMenu) => set({ accessMenu }),
  setNotificationAccessMenu: (notificationAccessMenu) =>
    set({ notificationAccessMenu }),
}));
