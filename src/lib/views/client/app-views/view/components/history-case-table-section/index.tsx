import { Card, Flex, Typography } from 'antd';

import { ListPage } from '@/lib/components/layout/list-page';
import { historyCaseListColumns } from '@/lib/views/client/app-views/view/components/history-case-table-section/columns';
import { useHistoryCaseTableSection } from '@/lib/views/client/app-views/view/components/history-case-table-section/hooks';

export const HistoryCaseTableSection = () => {
  const { tableMeta, data, isLoadingCaseList, total } =
    useHistoryCaseTableSection();

  return (
    <Card>
      <Flex justify="space-between" align="center">
        <Typography.Title level={4} style={{ color: '#4C5CA0' }}>
          Sejarah Kasus
        </Typography.Title>
      </Flex>

      <ListPage
        pure
        table={{
          rowKey: 'case_id',
          columns: historyCaseListColumns,
          dataSource: data,
          loading: isLoadingCaseList,
          tableMeta,
          total: total,
        }}
      />
    </Card>
  );
};
