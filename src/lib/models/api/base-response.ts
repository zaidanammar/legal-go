export type APIResponseHeaderData = {
  status: string;
  message: string;
  status_code: number;
  error_code: number;
  trace_id: string;
  detail?: string;
};

export type APIResponse<Data = unknown> = {
  message?: string;
  header?: APIResponseHeaderData;
  data?: Data;
};

export type APIListResponseData<EntryType = unknown> = {
  rows: Array<EntryType>;
  count: number;
};
