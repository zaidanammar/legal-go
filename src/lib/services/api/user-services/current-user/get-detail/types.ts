import { type User } from '@/lib/models/api/user';

export type UseGetCurrentUserDetailParams = {
  isReady?: boolean;
};

export type GetCurrentUserDetailResponseData = User;
