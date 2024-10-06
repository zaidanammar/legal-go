export type APIResponseHeaderData = {
  success: boolean;
  response_code: string;
  message: string;
};

export type APIResponse<Data = unknown> = {
  meta: APIResponseHeaderData;
  data?: Data;
};

export type APIListResponseData<EntryType = unknown> = {
  rows: Array<EntryType>;
  total: number;
};
