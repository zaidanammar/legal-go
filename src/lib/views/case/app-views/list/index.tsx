import { Button } from 'antd';

import { ListPage } from '@/lib/components/layout/list-page';
import { caseMenuLabel } from '@/lib/constants/menu-label';
import { caseListColumns } from '@/lib/views/case/app-views/list/columns';
import { useCaseListPage } from '@/lib/views/case/app-views/list/hooks';

const CaseListPage = () => {
  const { tableMeta, data, total, isLoading } = useCaseListPage();

  return (
    <ListPage
      pageTitle={caseMenuLabel}
      addButton={
        <Button type="primary" size="small">
          Buat Kasus
        </Button>
      }
      filter={{
        handleUpdateFilter: tableMeta.handleUpdateFilter,
        inputs: [
          {
            label: 'Cari Kasus',
            inputProps: {
              placeholder: 'Cari ID Kasus',
              inputType: 'text',
              paramKey: 'client_code',
              allowClear: true,
            },
          },
          {
            label: 'Status',
            inputProps: {
              placeholder: 'Pilih Status',
              inputType: 'select',
              paramKey: 'status',
              options: [],
              allowClear: true,
            },
          },
        ],
      }}
      table={{
        rowKey: 'case_id',
        columns: caseListColumns,
        dataSource: data,
        loading: isLoading,
        tableMeta,
        total: total,
      }}
    />
  );
};

export default CaseListPage;
