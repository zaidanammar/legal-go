import { useMemo } from 'react';

import { useQueryParams } from '@/lib/hooks/use-query-params';
import { useTablePagination } from '@/lib/hooks/use-table-pagination';
import { useGetOrderList } from '@/lib/services/api/order-services/get-list';
import { type GetOrderListParams } from '@/lib/services/api/order-services/get-list/types';
import { cleanedObject } from '@/lib/utils/object/cleaned-object';

const dummyData = [
  {
    order_id: 'CL001',
    case_code: 'CL001',
    case_name: 'John Doe',
    category: 'Karyawan',
    status: 'active',
    client: {
      client_id: 'CL001',
      client_name: 'John Doe',
    },
  },
];

export const useOrderListPage = () => {
  const { getSearchParamsValue } = useQueryParams();
  const tableMeta = useTablePagination();
  const { limit, offset } = tableMeta;

  const queryParams = useMemo<GetOrderListParams>(() => {
    const filters = {
      order_code: getSearchParamsValue('order_code'),
      order_name: getSearchParamsValue('order_name'),
      order_status: getSearchParamsValue('order_status'),
    };

    return {
      ...cleanedObject(filters),
      limit,
      offset,
    };
  }, [getSearchParamsValue, limit, offset]);

  const { response: orderListData, isLoading: isLoadingOrderList } =
    useGetOrderList({
      queryParams,
    });

  const data = useMemo(
    () =>
      (orderListData?.rows ?? dummyData).map((entry, index) => ({
        ...entry,
        idx: index + offset + 1,
      })),
    [offset, orderListData?.rows]
  );
  const total = orderListData?.count ?? dummyData.length;

  const isLoading = isLoadingOrderList;

  return {
    data,
    total,
    isLoading,
    tableMeta,
  };
};

export type OrderListPageViewModel = ReturnType<typeof useOrderListPage>;
