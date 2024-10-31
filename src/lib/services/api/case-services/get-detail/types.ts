import { type CaseEntry } from '@/lib/services/api/case-services/types';

export type UseGetCaseDetailParams = {
  caseID: string;
  isReady?: boolean;
};

export type GetCaseDetailResponseData = CaseEntry;
