import { type UploadFile } from 'antd';

type UploadInputValue = UploadFile & {
  originFileObj?: Blob;
};

/**
 * @note always use UploadInputValues as UploadInput value type,
 * as it always return array no matter set as multiple or not
 */
export type UploadInputValues = Array<UploadInputValue>;
