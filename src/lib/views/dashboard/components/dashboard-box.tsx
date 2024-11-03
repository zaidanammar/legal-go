import { Col, Flex, Typography, type ColProps } from 'antd';
import { Image } from 'antd/lib';

import graphicUpIcon from '/images/graphic-up.svg';

import { FormatNumeric } from '@/lib/components/data-display/format-numeric';

type DashboardBoxProps = {
  title: string;
  value: number;
  counterValue?: {
    individual: number;
    corporate: number;
  };
  props?: ColProps;
};

export const DashboardBox = ({
  title,
  value,
  counterValue,
  props,
}: DashboardBoxProps) => {
  return (
    <Col
      style={{
        background: '#FFFF',
        padding: 24,
        borderRadius: 5,
        border: '2px solid #ECEEF6',
      }}
      {...props}
    >
      <Flex align="center" gap={24}>
        <Col
          style={{
            padding: 8,
            background: '#2E2F7C',
            borderRadius: 8,
          }}
        >
          <Image preview={false} src={graphicUpIcon} />
        </Col>
        <Flex vertical>
          <Typography.Title
            level={5}
            style={{
              margin: 0,
            }}
          >
            {title}
          </Typography.Title>
          <Typography.Title
            level={4}
            style={{
              color: '#2E2F7C',
              margin: 0,
            }}
          >
            <FormatNumeric value={value} />
          </Typography.Title>
        </Flex>
      </Flex>
      {counterValue && (
        <Flex style={{ marginTop: 16 }} gap={40}>
          <Typography.Text>
            Pribadi:
            <Typography.Text strong> {counterValue.individual}</Typography.Text>
          </Typography.Text>
          <Typography.Text>
            Perusahaan:
            <Typography.Text strong> {counterValue.corporate}</Typography.Text>
          </Typography.Text>
        </Flex>
      )}
    </Col>
  );
};
