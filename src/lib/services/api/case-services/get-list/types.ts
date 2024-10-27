import { type PaginatedRequest } from '@/lib/models/api/base-request';
import { type APIListResponseData } from '@/lib/models/api/base-response';
import { type User } from '@/lib/models/api/user';

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
  pic: User;
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

export type GetCaseListResponseData = APIListResponseData<CaseEntry>;
