import { type PaginatedRequest } from '@/lib/models/api/base-request';
import { type APIListResponseData } from '@/lib/models/api/base-response';
import { type User } from '@/lib/models/api/user';

export type UseGetClientListParams = {
  isReady?: boolean;
  queryParams?: GetClientListParams;
};

export type GetClientListParams = PaginatedRequest & {
  name?: string;
  status?: string;
};

export type ClientEntry = User & {
  case_id: string;
  submission_status: 'Submitted' | 'Draft';
};

export type GetClientListResponseData = APIListResponseData<ClientEntry>;
