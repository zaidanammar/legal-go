import {
  type CaseAction,
  type Case,
  type Client,
} from '@/lib/services/api/case-services/upsert/types';

export type UpsertClientFormType = {
  client: Client;
  case: Case;
  case_actions: Array<CaseAction>;
};
