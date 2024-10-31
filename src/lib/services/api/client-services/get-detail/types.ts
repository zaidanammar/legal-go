import { type User } from '@/lib/models/api/user';

export type UseGetClientDetailParams = {
  clientID: string;
  isReady?: boolean;
};

export type GetClientDetailResponseData = User;
