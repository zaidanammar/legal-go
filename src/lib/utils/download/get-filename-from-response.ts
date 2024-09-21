import { type AxiosResponse } from 'axios';

export const getFileNameFromResponse = (response?: AxiosResponse) => {
  /**
   * @note accessing response headers rely on existence
   * of `Access-Control-Expose-Headers` being set to
   * appropriate value (* or `Content-Disposition`, etc),
   * make sure the API (through gateway or handler) to expose this header
   * @references https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers
   */
  const responseHeaders = new Headers(response?.headers as HeadersInit);
  const contentDisposition = responseHeaders.get('Content-Disposition');
  const match = contentDisposition?.match(/filename="([^"]+)"/);

  return match ? match[1] : 'unknown_filename';
};
