import { type Dayjs } from 'dayjs';

import { type User } from '@/lib/models/api/user';
import { type Signature } from '@/lib/services/api/case-services/upsert/types';
import { type FileReference } from '@/lib/services/api/file-services/types';

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
  case_actions: Array<CaseAction>;
  payment: Payment;
  user_id: string;
  user: User;
  pic_id: string;
  pic: User;
  invoice: string;
  files: Array<FileReference>;
  signatures: Array<Signature>;
};

type CaseAction = {
  case_action_id: string;
  case_id: string;
  service_name: string;
  service_type: string;
  pic_id: string;
  pic: User;
  scheduled_at: Dayjs;
};

type Payment = {
  id: string;
  case_id: string;
  payment_term: string;
  payment_method_id: string;
  sub_total: number;
  discount: number;
  sub_payments: Array<string>;
};
