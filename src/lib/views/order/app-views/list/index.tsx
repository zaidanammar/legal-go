import { Button } from 'antd';

import { ListPage } from '@/lib/components/layout/list-page';
import { orderMenuLabel } from '@/lib/constants/menu-label';
import { orderListColumns } from '@/lib/views/order/app-views/list/columns';
import { useOrderListPage } from '@/lib/views/order/app-views/list/hooks';

const OrderListPage = () => {
  const { tableMeta, data, total, isLoading } = useOrderListPage();

  return (
    <ListPage
      pageTitle={orderMenuLabel}
      addButton={
        <Button type="primary" size="small">
          Buat Pesanan
        </Button>
      }
      filter={{
        handleUpdateFilter: tableMeta.handleUpdateFilter,
        inputs: [
          {
            label: 'Cari Pesanan',
            inputProps: {
              placeholder: 'Cari ID Pesanan',
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
        rowKey: 'order_id',
        columns: orderListColumns,
        dataSource: data,
        loading: isLoading,
        tableMeta,
        total: total,
      }}
    />
  );
};

export default OrderListPage;
