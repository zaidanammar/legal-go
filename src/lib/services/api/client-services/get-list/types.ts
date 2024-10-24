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
  ID: string;
  company_name: string;
  created_at: string;
  email: string;
  name: string;
  password: string;
  profile_image_url: string;
  role_id: number;
  status: string;
  status_name: string;
  tipe_pengguna: string;
  updated_at: string;
  whatsapp_number: string;
  birth_date: string;
};

export type GetClientListResponseData = APIListResponseData<ClientEntry>;
