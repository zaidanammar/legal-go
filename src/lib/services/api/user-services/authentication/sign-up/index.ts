import { useMutationFetcher } from '@/lib/services/api/hooks';

import {
  type SubmitSignupRequest,
  type SubmitSignupResponseData,
} from './types';

export const useSubmitSignup = () =>
  useMutationFetcher<SubmitSignupResponseData, SubmitSignupRequest>({
    path: '/auth/signup',
  });
