import { type FormItemProps } from 'antd';

export const singleFile: FormItemProps['getValueFromEvent'] = (e) => {
  let file = undefined;
  if (Array.isArray(e)) file = e;
  if (e?.fileList?.length) file = [e.fileList[e.fileList.length - 1]];
  return file;
};

export const multiFile: FormItemProps['getValueFromEvent'] = (e) => {
  let file = undefined;
  if (Array.isArray(e)) file = e;
  if (e?.fileList?.length) file = e.fileList;
  return file;
};
