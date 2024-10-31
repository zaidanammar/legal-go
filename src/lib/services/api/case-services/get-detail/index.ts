import { API_ROOT_PATH } from '@/lib/constants/api';
import { useFetcher } from '@/lib/services/api/hooks';

import {
  type GetCaseDetailResponseData,
  type UseGetCaseDetailParams,
} from './types';

export const useGetCaseDetail = ({ caseID, isReady }: UseGetCaseDetailParams) =>
  useFetcher<GetCaseDetailResponseData>({
    rootPath: API_ROOT_PATH,
    path: `/cases/${caseID}`,
    isReady,
  });
