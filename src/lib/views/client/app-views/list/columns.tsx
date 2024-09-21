import { Button, Flex, Tag, Typography } from 'antd';
import { type TableColumnsType } from 'antd';
import { Link } from 'react-router-dom';

import { DATE_FORMAT_DD_MMM_YYYY } from '@/lib/constants/date';
import { clientPath } from '@/lib/constants/routes';
import { type ClientEntry } from '@/lib/services/api/client-services/get-list/types';
import { dateFormatter } from '@/lib/utils/date/date-formatter';

export const clientListColumns: TableColumnsType<ClientEntry> = [
  {
    title: 'No.',
    width: 80,
    dataIndex: 'idx',
  },
  {
    title: 'Nama Klien',
    render: (_, { client_name, client_id }) => (
      <Flex vertical>
        <Typography.Text>{client_name}</Typography.Text>
        <Typography.Text type="secondary">{`ID: ${client_id}`}</Typography.Text>
      </Flex>
    ),
  },
  {
    title: 'Tanggal Lahir',
    render: (_, { birth_date }) =>
      dateFormatter({
        date: birth_date,
        format: DATE_FORMAT_DD_MMM_YYYY,
        fallback: '-',
      }),
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
    width: 250,
    fixed: 'right',
    render: (_, { client_id }) => (
      <Flex gap={12}>
        <Button type="primary" ghost size="small">
          <Link to={`${clientPath}/view/${client_id}`}>Appointment</Link>
        </Button>
        <Button type="primary" size="small">
          <Link to={`${clientPath}/view/${client_id}`}>Lihat detail</Link>
        </Button>
      </Flex>
    ),
  },
];
