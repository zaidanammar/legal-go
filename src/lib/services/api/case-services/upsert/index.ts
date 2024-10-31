import { API_ROOT_PATH } from '@/lib/constants/api';
import { useMutationFetcher } from '@/lib/services/api/hooks';

import {
  type SubmitUpsertCaseRequest,
  type SubmitUpsertCaseResponseData,
} from './types';

export const useSubmitUpsertCase = () =>
  useMutationFetcher<SubmitUpsertCaseResponseData, SubmitUpsertCaseRequest>({
    rootPath: API_ROOT_PATH,
    path: '/cases',
  });
