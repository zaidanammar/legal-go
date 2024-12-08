import { type UploadInputValues } from '@/lib/models/form/upload';
import {
  type CaseAction,
  type Case,
  type Client,
  type Payment,
  type Signature,
} from '@/lib/services/api/case-services/upsert/types';

export type UpsertClientFormType = {
  client: Client;
  case: Case;
  case_actions: Array<CaseAction>;
  payment: Payment;
  invoice: string;
  attachments: UploadInputValues;
  signatures: Array<Signature>;
};
