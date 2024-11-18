import { Form, type FormInstance, type FormItemProps } from 'antd';
import { type StoreValue, type NamePath } from 'antd/es/form/interface';

export type AppFormItemProps<T = unknown> = {
  form?: FormInstance<T>;
  name?: NamePath<T>;
  showWhen?: { key: keyof T; value: StoreValue };
} & Omit<FormItemProps, 'name'>;

export const AppFormItem = <T = unknown,>({
  form,
  showWhen,
  name,
  ...props
}: AppFormItemProps<T>) => {
  const watch = Form.useWatch(showWhen ? [showWhen.key] : [], form);

  if (showWhen && watch !== showWhen.value) {
    return null;
  }

  return <Form.Item name={name} {...props} />;
};
