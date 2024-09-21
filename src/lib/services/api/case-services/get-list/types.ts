import { type PaginatedRequest } from '@/lib/models/api/base-request';
import { type APIListResponseData } from '@/lib/models/api/base-response';

export type UseGetCaseListParams = {
  isReady?: boolean;
  queryParams?: GetCaseListParams;
};

export type GetCaseListParams = PaginatedRequest & {
  case_code?: string;
  case_name?: string;
  status?: string;
};

type CaseClient = {
  client_id: string;
  client_name: string;
};

export type CaseEntry = {
  case_id: string;
  case_code: string;
  client: CaseClient;
  case_name: string;
  category: string;
  status: string;
};

export type GetCaseListResponseData = APIListResponseData<CaseEntry>;
