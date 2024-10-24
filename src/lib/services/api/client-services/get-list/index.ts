import { API_ROOT_PATH } from '@/lib/constants/api';
import { useFetcher } from '@/lib/services/api/hooks';

import {
  type GetClientListResponseData,
  type UseGetClientListParams,
} from './types';

export const useGetClientList = ({
  isReady,
  queryParams,
}: UseGetClientListParams) =>
  useFetcher<GetClientListResponseData>({
    rootPath: API_ROOT_PATH,
    path: '/clients',
    config: {
      params: queryParams,
    },
    isReady,
  });
