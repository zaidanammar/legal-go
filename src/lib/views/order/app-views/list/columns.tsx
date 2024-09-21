import { Button, Flex, Tag, Typography } from 'antd';
import { type TableColumnsType } from 'antd';
import { Link } from 'react-router-dom';

import { orderPath } from '@/lib/constants/routes';
import { type OrderEntry } from '@/lib/services/api/order-services/get-list/types';

export const orderListColumns: TableColumnsType<OrderEntry> = [
  {
    title: 'No.',
    width: 80,
    dataIndex: 'idx',
  },
  {
    title: 'No, Pesanan',
    dataIndex: 'case_code',
  },
  {
    title: 'Nama Klien',
    render: (_, { client: { client_name, client_id } }) => (
      <Flex vertical>
        <Typography.Text>{client_name}</Typography.Text>
        <Typography.Text type="secondary">{`ID: ${client_id}`}</Typography.Text>
      </Flex>
    ),
  },
  {
    title: 'Pesanan',
    dataIndex: 'case_name',
  },
  {
    title: 'Kategori',
    dataIndex: 'category',
  },
  {
    title: 'Status',
    render: (_, { status }) => (
      <Tag color={status === 'active' ? 'green' : 'red'}>{status}</Tag>
    ),
  },
  {
    width: 120,
    fixed: 'right',
    render: (_, { order_id }) => (
      <Button type="primary" size="small">
        <Link to={`${orderPath}/view/${order_id}`}>Lihat detail</Link>
      </Button>
    ),
  },
];
