import { Column } from '@ant-design/plots';
import { DatePicker, Flex, Typography } from 'antd';

import { InputItem } from '@/lib/components/data-entry/input-item';

const data = [
  {
    percentage: 100,
    month: 'January',
  },
  {
    percentage: 80,
    month: 'February',
  },
  {
    percentage: 60,
    month: 'March',
  },
  {
    percentage: 40,
    month: 'April',
  },
  {
    percentage: 20,
    month: 'May',
  },
  {
    percentage: 10,
    month: 'June',
  },
  {
    percentage: 20,
    month: 'July',
  },
  {
    percentage: 40,
    month: 'August',
  },
  {
    percentage: 60,
    month: 'September',
  },
  {
    percentage: 80,
    month: 'October',
  },
  {
    percentage: 100,
    month: 'November',
  },
  {
    percentage: 80,
    month: 'December',
  },
];

export const TargetSellingBarChart = () => {
  return (
    <div
      style={{
        background: '#FFFF',
        padding: 24,
        borderRadius: 5,
        border: '2px solid #ECEEF6',
      }}
    >
      <Flex align="center" justify="space-between" style={{ marginBottom: 16 }}>
        <Typography.Title level={4}>Target Penjualan</Typography.Title>
        <InputItem>
          <DatePicker picker="month" />
        </InputItem>
      </Flex>
      <Column
        height={193}
        color="#2E2F7C"
        data={data}
        xField="month"
        yField="percentage"
        label={false}
        legend={false}
        yAxis={{
          label: {
            formatter: (v) => `${v}%`,
          },
        }}
        xAxis={{
          label: {
            formatter: (v) => v.substring(0, 3),
          },
        }}
      />
    </div>
  );
};
