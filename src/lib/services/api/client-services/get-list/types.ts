import { type PaginatedRequest } from '@/lib/models/api/base-request';
import { type APIListResponseData } from '@/lib/models/api/base-response';

export type UseGetClientListParams = {
  isReady?: boolean;
  queryParams?: GetClientListParams;
};

export type GetClientListParams = PaginatedRequest & {
  client_code?: string;
  client_name?: string;
  status?: string;
};

export type ClientEntry = {
  client_id: string;
  client_name: string;
  birth_date: string;
  category: string;
  status: string;
};

export type GetClientListResponseData = APIListResponseData<ClientEntry>;
