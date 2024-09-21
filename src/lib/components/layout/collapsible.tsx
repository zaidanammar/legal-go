import { Collapse, type CollapseProps, Divider, Typography } from 'antd';
import React, { type ReactNode, type FunctionComponent } from 'react';

type CollapsibleProps = CollapseProps & {
  title: ReactNode;
  children: ReactNode;
  defaultActiveKey?: string;
};

export const Collapsible: FunctionComponent<CollapsibleProps> = ({
  title,
  children,
  defaultActiveKey = '1',
  ...props
}) => {
  return (
    <Collapse
      ghost
      expandIconPosition="end"
      defaultActiveKey={defaultActiveKey}
      className="custom-collapse"
      {...props}
    >
      <Collapse.Panel
        key="1"
        header={
          <>
            {React.isValidElement(title) ? (
              title
            ) : (
              <Typography.Title level={4}>{title}</Typography.Title>
            )}

            <Divider style={{ margin: 0 }} />
          </>
        }
      >
        {children}
      </Collapse.Panel>
    </Collapse>
  );
};
