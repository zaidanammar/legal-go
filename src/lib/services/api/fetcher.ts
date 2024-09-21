import { type AxiosRequestConfig } from 'axios';

import { type APIResponse } from '@/lib/models/api/base-response';

import { service } from './fetcher-config';

export type APIFetcherOriginRespParams = {
  path: string;
  config?: AxiosRequestConfig;
};

export const fetcherOriginResp = async <ResponseDataType>({
  path,
  config,
}: APIFetcherOriginRespParams) => service<ResponseDataType>(path, config);

export type APIFetcherParams = APIFetcherOriginRespParams;

export const fetcher = async <ResponseDataType>({
  path,
  config,
}: APIFetcherParams) =>
  fetcherOriginResp<APIResponse<ResponseDataType>>({
    path,
    config,
  }).then((res) => res.data.data);
