import { type PaginatedRequest } from '@/lib/models/api/base-request';
import { type APIListResponseData } from '@/lib/models/api/base-response';
import { type CaseEntry } from '@/lib/services/api/case-services/types';

export type UseGetCaseListParams = {
  isReady?: boolean;
  isOrder?: boolean;
  queryParams?: GetCaseListParams;
};

export type GetCaseListParams = PaginatedRequest & {
  name?: string;
  status?: string;
  client_id?: string;
};

export type GetCaseListResponseData = APIListResponseData<CaseEntry>;
