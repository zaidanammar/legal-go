import { Flex, Tag, Typography } from 'antd';
import { type TableColumnsType } from 'antd';

import { DATE_FORMAT_DD_MMM_YYYY } from '@/lib/constants/date';
import { type ClientEntry } from '@/lib/services/api/client-services/get-list/types';
import { dateFormatter } from '@/lib/utils/date/date-formatter';
import { UpsertClientCTAAction } from '@/lib/views/client/app-views/list/components/cta-actions';

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
    render: (_, { birth_date }) =>
      dateFormatter({
        date: birth_date,
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
    width: 100,
    render: (_, { status }) => (
      <Tag color={status === 'ACTIVE' ? 'green' : 'red'}>{status}</Tag>
    ),
  },
  {
    title: 'Aksi',
    width: 200,
    fixed: 'right',
    align: 'center',
    render: (_, { id, case_id, submission_status }) => (
      <UpsertClientCTAAction
        clientID={id}
        caseID={case_id}
        submissionStatus={submission_status}
      />
    ),
  },
];
