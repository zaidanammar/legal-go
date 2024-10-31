import { API_ROOT_PATH } from '@/lib/constants/api';
import { useFetcher } from '@/lib/services/api/hooks';

import {
  type GetClientDetailResponseData,
  type UseGetClientDetailParams,
} from './types';

export const useGetClientDetail = ({
  clientID,
  isReady,
}: UseGetClientDetailParams) =>
  useFetcher<GetClientDetailResponseData>({
    rootPath: API_ROOT_PATH,
    path: `/clients/${clientID}`,
    isReady,
  });
