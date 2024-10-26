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
    width: 60,
    dataIndex: 'idx',
  },
  {
    title: 'Nama Klien',
    width: 250,
    render: (_, { id, name }) => (
      <Flex vertical>
        <Typography.Text>{name}</Typography.Text>
        <Typography.Text type="secondary">{`ID: ${id}`}</Typography.Text>
      </Flex>
    ),
  },
  {
    title: 'Tanggal Lahir',
    width: 150,
    render: (_, { created_at }) =>
      dateFormatter({
        date: created_at,
        format: DATE_FORMAT_DD_MMM_YYYY,
        fallback: '-',
      }),
  },
  {
    title: 'Kategori',
    dataIndex: 'client_type',
    width: 150,
  },
  {
    title: 'Status',
    width: 150,
    render: (_, { status }) => (
      <Tag color={status === 'ACTIVE' ? 'green' : 'red'}>{status}</Tag>
    ),
  },
  {
    width: 230,
    fixed: 'right',
    render: (_, { id }) => (
      <Flex gap={12}>
        <Button type="primary" ghost size="small">
          <Link to={`${clientPath}/view/${id}`}>Appointment</Link>
        </Button>
        <Button type="primary" size="small">
          <Link to={`${clientPath}/view/${id}`}>Lihat detail</Link>
        </Button>
      </Flex>
    ),
  },
];
