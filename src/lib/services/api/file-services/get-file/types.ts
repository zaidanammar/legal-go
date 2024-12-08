import { type FileReference } from '@/lib/services/api/file-services/types';

export type GetFileResponseData = {
  url: string;
};

export type GetFileParams = {
  requestBody: FileReference | undefined;
};

export type GetMultipleFileParams = {
  references?: Array<FileReference | undefined | string>;
};

export type UseOnLoadGetFileParams = GetFileParams & {
  isReady: boolean;
};

export type UseOnLoadGetMultipleFileParams = GetMultipleFileParams & {
  isReady?: boolean;
};
