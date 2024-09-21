import { Button } from 'antd';

import { ListPage } from '@/lib/components/layout/list-page';
import { clientMenuLabel } from '@/lib/constants/menu-label';
import { clientListColumns } from '@/lib/views/client/app-views/list/columns';
import { useClientListPage } from '@/lib/views/client/app-views/list/hooks';

const ClientListPage = () => {
  const { tableMeta, data, total, isLoading } = useClientListPage();

  return (
    <ListPage
      pageTitle={clientMenuLabel}
      addButton={
        <Button type="primary" size="small">
          Buat Klien
        </Button>
      }
      filter={{
        handleUpdateFilter: tableMeta.handleUpdateFilter,
        inputs: [
          {
            label: 'Cari Klien',
            inputProps: {
              placeholder: 'Cari ID Klien',
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
        rowKey: 'client_id',
        columns: clientListColumns,
        dataSource: data,
        loading: isLoading,
        tableMeta,
        total: total,
      }}
    />
  );
};

export default ClientListPage;
