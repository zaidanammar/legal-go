import { API_ROOT_PATH } from '@/lib/constants/api';
import { useFetcher } from '@/lib/services/api/hooks';

import {
  type GetDashboardSummaryResponseData,
  type UseGetDashboardSummaryParams,
} from './types';

export const useGetDashboardSummary = (params?: UseGetDashboardSummaryParams) =>
  useFetcher<GetDashboardSummaryResponseData>({
    rootPath: API_ROOT_PATH,
    path: `/dashboard`,
    config: {
      params: params?.queryParams,
    },
    isReady: params?.isReady,
  });
