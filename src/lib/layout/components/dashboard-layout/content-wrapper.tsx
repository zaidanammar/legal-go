import { Layout } from 'antd';
import type React from 'react';

export const ContentWrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <Layout.Content style={{ minHeight: '90dvh' }}>{children}</Layout.Content>
  );
};
