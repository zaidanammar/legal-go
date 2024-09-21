import { useMemo } from 'react';

import { useQueryParams } from '@/lib/hooks/use-query-params';
import { useTablePagination } from '@/lib/hooks/use-table-pagination';
import { useGetClientList } from '@/lib/services/api/client-services/get-list';
import { type GetClientListParams } from '@/lib/services/api/client-services/get-list/types';
import { cleanedObject } from '@/lib/utils/object/cleaned-object';

const dummyData = [
  {
    client_id: 'CL001',
    client_name: 'John Doe',
    birth_date: '1990-01-01',
    category: 'Karyawan',
    status: 'active',
  },
];

export const useClientListPage = () => {
  const { getSearchParamsValue } = useQueryParams();
  const tableMeta = useTablePagination();
  const { limit, offset } = tableMeta;

  const queryParams = useMemo<GetClientListParams>(() => {
    const filters = {
      client_code: getSearchParamsValue('client_code'),
      client_name: getSearchParamsValue('client_name'),
      client_status: getSearchParamsValue('client_status'),
    };

    return {
      ...cleanedObject(filters),
      limit,
      offset,
    };
  }, [getSearchParamsValue, limit, offset]);

  const { response: clientListData, isLoading: isLoadingClientList } =
    useGetClientList({
      queryParams,
    });

  const data = useMemo(
    () =>
      (clientListData?.rows ?? dummyData).map((entry, index) => ({
        ...entry,
        idx: index + offset + 1,
      })),
    [offset, clientListData?.rows]
  );
  const total = clientListData?.count ?? dummyData.length;

  const isLoading = isLoadingClientList;

  return {
    data,
    total,
    isLoading,
    tableMeta,
  };
};

export type ClientListPageViewModel = ReturnType<typeof useClientListPage>;
