import { type UploadInputValues } from '@/lib/models/form/upload';
import { type FileReference } from '@/lib/services/api/file-services/types';
import { uploadFile } from '@/lib/services/api/file-services/upload';

import { compressImage } from './compress-image';

type ConvertUploadInputValuesToDocRefs = {
  inputValues: UploadInputValues;
  storedDocRefs?: Array<FileReference>;
};

export const convertUploadInputValuesToDocRefs = async ({
  inputValues,
  storedDocRefs,
}: ConvertUploadInputValuesToDocRefs) => {
  const documentPromises = inputValues.map(async (item, index) => {
    if (!item) {
      return undefined;
    }

    if (!item.originFileObj) {
      return storedDocRefs?.[index];
    }

    const compressedFile = await compressImage(item.originFileObj);

    const file = new File([compressedFile], item.name, { type: item.type });

    const response = await uploadFile({
      requestBody: {
        files: file,
      },
    });

    return {
      id: response?.id,
    } as FileReference;
  });

  const documentReferences = await Promise.all(documentPromises);

  return documentReferences.filter((value) => !!value) as Array<FileReference>;
};
