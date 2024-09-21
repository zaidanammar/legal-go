import { useMutationFetcher } from '@/lib/services/api/hooks';

import { type SubmitLoginRequest, type SubmitLoginResponseData } from './types';

export const useSubmitLogin = () =>
  useMutationFetcher<SubmitLoginResponseData, SubmitLoginRequest>({
    path: '/user/login',
  });
