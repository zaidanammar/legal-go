import { type FormProps } from 'antd';

export const validateMessages: FormProps['validateMessages'] = {
  // eslint-disable-next-line no-template-curly-in-string
  required: '${label} harus diisi terlebih dahulu.',
};
