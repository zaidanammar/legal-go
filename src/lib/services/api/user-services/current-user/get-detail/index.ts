import { API_ROOT_PATH } from '@/lib/constants/api';
import { useFetcher } from '@/lib/services/api/hooks';

import {
  type GetCurrentUserDetailResponseData,
  type UseGetCurrentUserDetailParams,
} from './types';

export const useGetCurrentUserDetail = (
  params?: UseGetCurrentUserDetailParams
) =>
  useFetcher<GetCurrentUserDetailResponseData>({
    rootPath: API_ROOT_PATH,
    path: '/profile',
    isReady: params?.isReady,
  });
