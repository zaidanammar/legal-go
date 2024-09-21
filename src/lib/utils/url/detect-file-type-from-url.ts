const imageExtensions = [
  '.jpg',
  '.jpeg',
  '.png',
  '.gif',
  '.bmp',
  '.tif',
  '.tiff',
];

const documentExtensions = [
  '.pdf',
  '.doc',
  '.docx',
  '.ppt',
  '.pptx',
  '.xls',
  '.xlsx',
];

export const detectFileTypeFromUrl = (url: string) => {
  const fileExtension = url
    .split('?')?.[0]
    ?.substring(url.lastIndexOf('.'))
    .toLowerCase();

  if (imageExtensions.includes(fileExtension)) {
    return 'image';
  }

  if (documentExtensions.includes(fileExtension)) {
    return 'document';
  }

  return 'unknown';
};
