import { useFetcher } from '@/lib/services/api/hooks';

import {
  type GetCurrentUserDetailResponseData,
  type UseGetCurrentUserDetailParams,
} from './types';

export const useGetCurrentUserDetail = (
  params?: UseGetCurrentUserDetailParams
) =>
  useFetcher<GetCurrentUserDetailResponseData>({
    path: '/user/get',
    isReady: params?.isReady,
  });
