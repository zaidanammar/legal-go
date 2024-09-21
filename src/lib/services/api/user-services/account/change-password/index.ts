import { useMutationFetcher } from '@/lib/services/api/hooks';
import { type ChangeUserAccountPasswordRequest } from '@/lib/services/api/user-services/account/change-password/types';

export const useChangeUserAccountPassword = () =>
  useMutationFetcher<unknown, ChangeUserAccountPasswordRequest>({
    path: '/user/change-password',
  });
