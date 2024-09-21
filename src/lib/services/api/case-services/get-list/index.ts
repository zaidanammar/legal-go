import { useFetcher } from '@/lib/services/api/hooks';

import {
  type GetCaseListResponseData,
  type UseGetCaseListParams,
} from './types';

export const useGetCaseList = ({
  isReady,
  queryParams,
}: UseGetCaseListParams) =>
  useFetcher<GetCaseListResponseData>({
    path: '/case/get-list',
    config: {
      params: queryParams,
    },
    isReady,
  });
