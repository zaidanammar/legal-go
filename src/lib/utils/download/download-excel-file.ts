import { type AxiosResponse } from 'axios';

import { getFileNameFromResponse } from './get-filename-from-response';

export const downloadExcelFile = (response?: AxiosResponse<Blob>) => {
  if (!response?.data) {
    console.error('No Data found');
    return;
  }

  const fileName = getFileNameFromResponse(response);
  downloadXlsx(fileName, response?.data);
};

const downloadXlsx = (filename: string, data: Blob) => {
  const url = URL.createObjectURL(new Blob([data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
};
