import { API_ROOT_PATH } from '@/lib/constants/api';
import { fetcher } from '@/lib/services/api/fetcher';
import { useFetcher } from '@/lib/services/api/hooks';

import {
  type GetFileParams,
  type GetFileResponseData,
  type GetMultipleFileParams,
  type UseOnLoadGetFileParams,
  type UseOnLoadGetMultipleFileParams,
} from './types';

export const getFile = async ({ requestBody }: GetFileParams) =>
  fetcher<GetFileResponseData>({
    rootPath: API_ROOT_PATH,
    path: `/file/${requestBody?.id}`,
  });

export const getMultipleFile = async ({
  references = [],
}: GetMultipleFileParams) => {
  const getFilePromises = references.map((entry) => {
    if (entry === '' || !entry || typeof entry === 'string') {
      return undefined;
    }

    if (!entry.id) {
      return undefined;
    }

    return getFile({
      requestBody: {
        id: entry.id,
      },
    });
  });

  return await Promise.all(getFilePromises);
};

export const useOnLoadGetFileOSS = ({
  requestBody,
  isReady,
}: UseOnLoadGetFileParams) =>
  useFetcher({
    path: `get-file-oss-${requestBody?.id}`,
    customFetcher: () => getFile({ requestBody }),
    isReady,
  });

export const useOnLoadGetMultipleFileOss = ({
  references,
  isReady,
}: UseOnLoadGetMultipleFileParams) =>
  useFetcher({
    path: `get-multiple-file-oss-with-references-${JSON.stringify(references)}`,
    customFetcher: () => getMultipleFile({ references }),
    isReady,
  });
