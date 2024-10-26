import { type PaginatedRequest } from '@/lib/models/api/base-request';
import { type APIListResponseData } from '@/lib/models/api/base-response';

export type UseGetCaseListParams = {
  isReady?: boolean;
  isOrder?: boolean;
  queryParams?: GetCaseListParams;
};

export type GetCaseListParams = PaginatedRequest & {
  name?: string;
  status?: string;
};

export type CaseEntry = {
  case_id: string;
  case_unique_id: string;
  case: string;
  type: string;
  category: string;
  status: string;
  summary: string;
  submission_status: string;
  started_at: string;
  case_actions: Array<string>;
  payment: Payment;
  user_id: string;
  user: User;
  pic_id: string;
  pic: Pic;
};

export type Payment = {
  id: number;
  case_id: string;
  payment_term: string;
  payment_method_id: string;
  sub_total: number;
  discount: number;
  schedule_at: string;
  sub_payments: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  whatsapp_number: string;
  address: string;
  status: string;
  created_at: string;
  updated_at: string;
  role: string;
  client_type: string;
  company_name: string;
  lead_channels: string;
};

export type Pic = {
  id: string;
  name: string;
  email: string;
  password: string;
  whatsapp_number: string;
  address: string;
  status: string;
  created_at: string;
  updated_at: string;
  role: string;
  client_type: string;
  company_name: string;
  lead_channels: string;
};

export type GetCaseListResponseData = APIListResponseData<CaseEntry>;
