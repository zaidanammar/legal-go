import { API_ROOT_PATH } from '@/lib/constants/api';
import { useFetcher } from '@/lib/services/api/hooks';

import {
  type GetCaseListResponseData,
  type UseGetCaseListParams,
} from './types';

export const useGetCaseList = ({
  isReady,
  isOrder,
  queryParams,
}: UseGetCaseListParams) =>
  useFetcher<GetCaseListResponseData>({
    rootPath: API_ROOT_PATH,
    path: isOrder ? '/cases/order' : '/cases',
    config: {
      params: queryParams,
    },
    isReady,
  });
