import imageCompression, { type Options } from 'browser-image-compression';

import { imageOnlyFileTypes } from '@/lib/constants/data/fileTypes';

const compressOptions: Options = {
  maxSizeMB: 5,
  maxWidthOrHeight: 2400,
  useWebWorker: true,
  preserveExif: true,
};

export const compressImage = async (file: File): Promise<File> => {
  if (!imageOnlyFileTypes.includes(file.type)) return file;

  try {
    return await imageCompression(file, compressOptions);
  } catch (error) {
    console.error('Error compressing the image:', error);
    throw error;
  }
};
