import { Button, Flex, Tag, Typography } from 'antd';
import { type TableColumnsType } from 'antd';
import { Link } from 'react-router-dom';

import { casePath } from '@/lib/constants/routes';
import { type CaseEntry } from '@/lib/services/api/case-services/types';

export const caseListColumns: TableColumnsType<CaseEntry> = [
  {
    title: 'No.',
    width: 60,
    dataIndex: 'idx',
  },
  {
    title: 'No. Kasus',
    dataIndex: 'case_unique_id',
    width: 150,
  },
  {
    title: 'Nama Klien',
    width: 250,
    render: (_, { user }) => (
      <Flex vertical>
        <Typography.Text>{user?.name}</Typography.Text>
        <Typography.Text type="secondary">{`ID: ${user?.id}`}</Typography.Text>
      </Flex>
    ),
  },
  {
    title: 'Kasus',
    width: 200,
    dataIndex: 'case',
  },
  {
    title: 'Kategori',
    width: 150,
    dataIndex: 'category',
  },
  {
    title: 'Status',
    width: 150,
    render: (_, { status }) => (
      <Tag color={status === 'ACTIVE' ? 'green' : 'red'}>{status}</Tag>
    ),
  },
  {
    title: 'Aksi',
    width: 120,
    fixed: 'right',
    align: 'center',
    render: (_, { case_id }) => (
      <Button type="primary" size="small">
        <Link to={`${casePath}/view/${case_id}`}>Lihat detail</Link>
      </Button>
    ),
  },
];
