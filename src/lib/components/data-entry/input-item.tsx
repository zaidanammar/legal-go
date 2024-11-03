import {
  ResponsiveCol,
  type ResponsiveColProps,
} from '@/lib/components/layout/responsive-col';

import { AppFormItem, type AppFormItemProps } from './app-form-item';

export type InputItemProps<T = unknown> = AppFormItemProps<T> &
  Pick<ResponsiveColProps, 'fullWidth'> & {
    wrapperProps?: Omit<ResponsiveColProps, 'fullWidth'>;
  };

export const InputItem = <T = unknown,>({
  children,
  wrapperProps,
  fullWidth,
  ...props
}: InputItemProps<T>) => {
  return (
    <ResponsiveCol fullWidth={fullWidth} {...wrapperProps}>
      <AppFormItem {...props}>{children}</AppFormItem>
    </ResponsiveCol>
  );
};
