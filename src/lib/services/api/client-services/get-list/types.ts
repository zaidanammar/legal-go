import { type PaginatedRequest } from '@/lib/models/api/base-request';
import { type APIListResponseData } from '@/lib/models/api/base-response';

export type UseGetClientListParams = {
  isReady?: boolean;
  queryParams?: GetClientListParams;
};

export type GetClientListParams = PaginatedRequest & {
  name?: string;
  status?: string;
};

export type ClientEntry = {
  id: string;
  name: string;
  email: string;
  password: string;
  whatsapp_number: string;
  status: string;
  created_at: string;
  updated_at: string;
  role: string;
  client_type: string;
  company_name: string;
  lead_channels: string;
};

export type GetClientListResponseData = APIListResponseData<ClientEntry>;
