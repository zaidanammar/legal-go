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
    path: '/client/get-list',
    config: {
      params: queryParams,
    },
    isReady,
  });
