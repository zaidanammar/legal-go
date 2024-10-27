import { ListPage } from '@/lib/components/layout/list-page';
import { caseMenuLabel } from '@/lib/constants/menu-label';
import { caseListColumns } from '@/lib/views/case/app-views/list/columns';
import { useCaseListPage } from '@/lib/views/case/app-views/list/hooks';

const CaseListPage = () => {
  const { tableMeta, data, total, isLoading, statusOptions } =
    useCaseListPage();

  return (
    <ListPage
      pageTitle={caseMenuLabel}
      filter={{
        handleUpdateFilter: tableMeta.handleUpdateFilter,
        inputs: [
          {
            label: 'Kasus',
            inputProps: {
              placeholder: 'Cari Kasus',
              inputType: 'text',
              paramKey: 'name',
              allowClear: true,
            },
          },
          {
            label: 'Status',
            inputProps: {
              placeholder: 'Pilih Status',
              inputType: 'select',
              paramKey: 'status',
              options: statusOptions,
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
