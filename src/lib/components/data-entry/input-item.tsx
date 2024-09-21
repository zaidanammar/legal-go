import { Form, type FormItemProps } from 'antd';
import { type ReactNode } from 'react';

import {
  ResponsiveCol,
  type ResponsiveColProps,
} from '@/lib/components/layout/responsive-col';

export type InputItemProps = FormItemProps &
  Pick<ResponsiveColProps, 'fullWidth'> & {
    wrapperProps?: Omit<ResponsiveColProps, 'fullWidth'>;
    extra?: ReactNode;
  };

export const InputItem = ({
  children,
  wrapperProps,
  fullWidth,
  extra,
  ...props
}: InputItemProps) => {
  return (
    <ResponsiveCol fullWidth={fullWidth} {...wrapperProps}>
      <Form.Item
        {...props}
        style={{
          marginBottom: 0,
        }}
      >
        {children}
      </Form.Item>
      {extra}
    </ResponsiveCol>
  );
};
