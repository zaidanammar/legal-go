/* eslint-disable @typescript-eslint/naming-convention */
import { API_ROOT_PATH } from '@/lib/constants/api';
import { fetcher } from '@/lib/services/api/fetcher';
import { type FileReference } from '@/lib/services/api/file-services/types';

import { type UploadFileParams } from './types';

export const uploadFile = async ({ requestBody }: UploadFileParams) => {
  const formData = new FormData();
  formData.append('file', requestBody.files);

  return fetcher<FileReference>({
    rootPath: API_ROOT_PATH,
    path: '/file',
    config: {
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  });
};
