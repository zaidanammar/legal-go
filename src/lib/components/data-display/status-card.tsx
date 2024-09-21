import { Card, Typography, Tag, Flex } from 'antd';
import startCase from 'lodash/startCase';

import { useBreakpointValue } from '@/lib/hooks/use-breakpoint-value';

type StatusItemProps = {
  title: string;
  color: string;
  text: string;
};

type StatusCardProps = {
  statusItems: Array<StatusItemProps>;
};

export const StatusCard = ({ statusItems }: StatusCardProps) => {
  const { isMobile } = useBreakpointValue();
  const StatusItem = ({ title, color, text }: StatusItemProps) => (
    <Flex justify="flex-start" align="center" gap={12}>
      <Typography.Text strong>{title}</Typography.Text>
      <Tag color={color}>{startCase(text.toLowerCase())}</Tag>
    </Flex>
  );

  return (
    <Card title="Status" style={{ bottom: !isMobile ? 30 : 0 }}>
      <Flex vertical gap={12}>
        {statusItems.map((item) => (
          <StatusItem
            key={item.title}
            title={item.title}
            color={item.color}
            text={item.text}
          />
        ))}
      </Flex>
    </Card>
  );
};
