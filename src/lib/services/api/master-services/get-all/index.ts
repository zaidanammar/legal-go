import { useFetcher } from '@/lib/services/api/hooks';

import { type GetMasterDataListResponseData } from './types';

export const useGetMasterDataList = () =>
  useFetcher<GetMasterDataListResponseData>({
    path: '/master-data',
  });
