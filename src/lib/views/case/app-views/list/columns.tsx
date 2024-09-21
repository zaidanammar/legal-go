import { Button, Flex, Tag, Typography } from 'antd';
import { type TableColumnsType } from 'antd';
import { Link } from 'react-router-dom';

import { casePath } from '@/lib/constants/routes';
import { type CaseEntry } from '@/lib/services/api/case-services/get-list/types';

export const caseListColumns: TableColumnsType<CaseEntry> = [
  {
    title: 'No.',
    width: 80,
    dataIndex: 'idx',
  },
  {
    title: 'No, Kasus',
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
    title: 'Kasus',
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
    render: (_, { case_id }) => (
      <Button type="primary" size="small">
        <Link to={`${casePath}/view/${case_id}`}>Lihat detail</Link>
      </Button>
    ),
  },
];
