import { API_ROOT_PATH } from '@/lib/constants/api';
import { useMutationFetcher } from '@/lib/services/api/hooks';

import {
  type UseSubmitUpdateClientParams,
  type SubmitUpdateClientRequest,
} from './types';

export const useSubmitUpdateClient = ({
  clientID,
}: UseSubmitUpdateClientParams) =>
  useMutationFetcher<unknown, SubmitUpdateClientRequest>({
    rootPath: API_ROOT_PATH,
    path: `/clients/${clientID}`,
    config: {
      method: 'PUT',
    },
  });
