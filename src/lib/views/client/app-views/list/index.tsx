import { Button } from 'antd';

import { ListPage } from '@/lib/components/layout/list-page';
import { clientMenuLabel } from '@/lib/constants/menu-label';
import { ViewModelProvider } from '@/lib/providers/view-model';
import { clientListColumns } from '@/lib/views/client/app-views/list/columns';
import { UpsertClientForm } from '@/lib/views/client/app-views/list/components/upsert-client-form';
import { useClientListPage } from '@/lib/views/client/app-views/list/hooks';

const ClientListPage = () => {
  const viewModel = useClientListPage();
  const { tableMeta, data, total, isLoading, handleOpenModal } = viewModel;

  return (
    <ViewModelProvider {...viewModel}>
      <ListPage
        pageTitle={clientMenuLabel}
        addButton={
          <Button type="primary" size="small" onClick={handleOpenModal}>
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
      <UpsertClientForm />
    </ViewModelProvider>
  );
};

export default ClientListPage;
