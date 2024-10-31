import { useFetcher } from '@/lib/services/api/hooks';

import {
  type UseGetMasterDataListParams,
  type GetMasterDataListResponseData,
} from './types';

export const useGetMasterDataList = (params?: UseGetMasterDataListParams) =>
  useFetcher<GetMasterDataListResponseData>({
    path: '/master-data',
    isReady: params?.isReady,
  });
