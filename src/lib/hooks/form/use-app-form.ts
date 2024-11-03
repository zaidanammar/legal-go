import { Form } from 'antd';

export const useAppForm = <T = never>() => {
  const [form] = Form.useForm<T>();

  return {
    form,
  };
};
