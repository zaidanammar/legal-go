import { type Dayjs } from 'dayjs';

import { type GetCaseDetailResponseData } from '@/lib/services/api/case-services/get-detail/types';

export type SubmitUpsertCaseRequest = {
  client?: Client;
  case?: Partial<Case>;
  case_actions?: Array<CaseAction>;
  payment?: Payment;
};

export type Client = {
  client_name: string;
  whatsapp_number: string;
  email: string;
  company_name: string;
  address: string;
  client_type: string;
};

export type Case = {
  case_id: string;
  case_unique_id: string;
  pic_id: string;
  type: string;
  case: string;
  category: string;
  summary: string;
  started_at: Dayjs;
};

export type CaseAction = {
  case_id: string;
  service_name: string;
  service_type: string;
  pic_id: string;
  scheduled_at: string;
};

export type Payment = {
  case_id?: string;
  payment_term: string;
  payment_method_id: string;
  discount: number;
  sub_payments: Array<Subpayment>;
  sub_total: number;
  is_send_email: boolean;
};

type Subpayment = {
  case_action_id: string;
  price: number;
  delivery_date: string;
};

export type SubmitUpsertCaseResponseData = GetCaseDetailResponseData;
