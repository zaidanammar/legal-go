import { Card, Collapse, Typography } from 'antd';
import type React from 'react';

type CollapsibleCardProps = {
  title: string;
  children: React.ReactNode;
  defaultActiveKey?: string;
  bodyStyle?: React.CSSProperties;
};

export const CollapsibleCard = ({
  title,
  children,
  defaultActiveKey = '1',
  bodyStyle,
}: CollapsibleCardProps) => {
  return (
    <Card bodyStyle={bodyStyle}>
      <Collapse
        ghost
        expandIconPosition="end"
        defaultActiveKey={defaultActiveKey}
      >
        <Collapse.Panel
          key="1"
          header={
            <Typography.Title
              style={{
                marginBottom: 0,
              }}
              level={4}
            >
              {title}
            </Typography.Title>
          }
        >
          {children}
        </Collapse.Panel>
      </Collapse>
    </Card>
  );
};
