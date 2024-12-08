import { type UploadFileStatus } from 'antd/es/upload/interface';

import { type UploadInputValue } from '@/lib/models/form/upload';
import { getMultipleFile } from '@/lib/services/api/file-services/get-file';
import { type FileReference } from '@/lib/services/api/file-services/types';

type ConvertDocRefsToUploadInputValues = {
  references: Array<FileReference>;
};

export const convertDocRefsToUploadInputValues = async ({
  references,
}: ConvertDocRefsToUploadInputValues): Promise<Array<UploadInputValue>> => {
  const documents = await getMultipleFile({ references });

  return references
    .map((item, index) => ({
      name: item?.id ?? '',
      url: documents[index]?.url ?? '',
      status: 'done' as UploadFileStatus,
      uid: item?.id ?? '',
      thumbUrl: documents[index]?.url ?? '',
    }))
    .filter((item) => !!item.url);
};
