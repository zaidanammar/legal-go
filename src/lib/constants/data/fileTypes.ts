export const imageOnlyFileTypes = [
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/webp',
  'image/heif',
  'image/heic',
];
export const pdfOnlyFileTypes = ['application/pdf'] as const;
export const imageFileTypes = [...imageOnlyFileTypes, ...pdfOnlyFileTypes];
export const zipFile = 'application/zip';
