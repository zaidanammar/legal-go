import {
  type AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios';
import useSWR, { type SWRConfiguration } from 'swr';
import useSWRMutation from 'swr/mutation';

import { type APIFetcherParams, fetcher, fetcherOriginResp } from './fetcher';

const swrOptions: SWRConfiguration = {
  shouldRetryOnError: false,
  revalidateOnMount: true,
  revalidateOnReconnect: false,
  revalidateOnFocus: false,
  revalidateIfStale: true,
};

type UseFetcherParams<ResDataType> = APIFetcherParams & {
  isReady?: boolean;
  refreshInterval?: number;
  customFetcher?: (params: APIFetcherParams) => Promise<ResDataType>;
};

/**
 * @notes default to [GET] method, will return `data` from backend response
 */
export const useFetcher = <ResDataType>({
  path,
  config,
  isReady = true,
  customFetcher,
  refreshInterval,
}: UseFetcherParams<ResDataType>) => {
  const { data, isLoading, isValidating, error, mutate } = useSWR(
    isReady ? [path, config] : null,
    ([path, config]) => {
      if (customFetcher) {
        return customFetcher({
          path,
          config,
        });
      }

      return fetcher<ResDataType>({
        path,
        config,
      });
    },
    { ...swrOptions, refreshInterval }
  );

  return {
    response: data,
    isLoading,
    isValidating,
    error,
    mutate,
  };
};

type UseMutationFetcherParams<ResDataType> = APIFetcherParams & {
  customFetcher?: (params: APIFetcherParams) => Promise<ResDataType>;
};

/**
 * @notes default to [POST] method
 */
export const useMutationFetcher = <ResDataType = unknown, ReqType = unknown>({
  path,
  config,
  customFetcher,
}: UseMutationFetcherParams<ResDataType>) => {
  const { data, trigger, isMutating, reset } = useSWRMutation<
    ResDataType | undefined,
    AxiosError,
    string,
    ReqType
  >(path, (_, { arg }) => {
    const fetcherConfig: AxiosRequestConfig<ReqType> = {
      method: 'POST',
      data: arg,
      ...config,
    };

    if (customFetcher) {
      return customFetcher({
        path,
        config: fetcherConfig,
      });
    }

    return fetcher<ResDataType>({
      path,
      config: fetcherConfig,
    });
  });

  return { response: data, trigger, isMutating, reset };
};

type UseMutationFetcherOriginRespParams<ResDataType> = APIFetcherParams & {
  customFetcher?: (
    params: APIFetcherParams
  ) => Promise<AxiosResponse<ResDataType>>;
  isResponseBlobFile?: boolean;
};

/**
 * @notes default to [GET] method, will return original response. Can be used for getting non-JSON response (blob)
 */
export const useMutationFetcherOriginResp = <
  ResDataType = unknown,
  ReqType = unknown,
>({
  path,
  config,
  customFetcher,
  isResponseBlobFile,
}: UseMutationFetcherOriginRespParams<ResDataType>) => {
  const { data, trigger, isMutating, reset } = useSWRMutation<
    AxiosResponse<ResDataType> | undefined,
    AxiosError,
    string,
    ReqType
  >(path, (_, { arg }) => {
    const fetcherConfig: AxiosRequestConfig<ReqType> = {
      data: arg,
      ...(isResponseBlobFile ? { responseType: 'blob' } : {}),
      ...config,
    };

    if (customFetcher) {
      return customFetcher({
        path,
        config: fetcherConfig,
      });
    }

    return fetcherOriginResp<ResDataType>({
      path,
      config: fetcherConfig,
    });
  });

  return { response: data, trigger, isMutating, reset };
};
