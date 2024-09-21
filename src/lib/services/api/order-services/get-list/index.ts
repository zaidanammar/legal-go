import { useFetcher } from '@/lib/services/api/hooks';

import {
  type GetOrderListResponseData,
  type UseGetOrderListParams,
} from './types';

export const useGetOrderList = ({
  isReady,
  queryParams,
}: UseGetOrderListParams) =>
  useFetcher<GetOrderListResponseData>({
    path: '/order/get-list',
    config: {
      params: queryParams,
    },
    isReady,
  });
