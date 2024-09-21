import { Divider, Flex, Space, Typography } from 'antd';
import type React from 'react';

type SectionWrapperProps = React.PropsWithChildren<{
  title?: string;
  titleExtra?: React.ReactNode;
}>;

export const SectionWrapper = ({
  title,
  titleExtra,
  children,
}: SectionWrapperProps) => {
  return (
    <Space size="small" direction="vertical">
      {title ? (
        <>
          <Flex justify="space-between" align="center" wrap="wrap">
            <Typography.Title
              level={4}
              style={{
                margin: 0,
              }}
            >
              {title}
            </Typography.Title>
            {titleExtra}
          </Flex>
          <Divider
            style={{
              margin: '0 0 8px',
            }}
          />
        </>
      ) : null}
      {children}
    </Space>
  );
};
