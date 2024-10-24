import { useMemo } from 'react';

import { useQueryParams } from '@/lib/hooks/use-query-params';
import { useTablePagination } from '@/lib/hooks/use-table-pagination';
import { useModal } from '@/lib/providers/modal';
import { useGetClientList } from '@/lib/services/api/client-services/get-list';
import { type GetClientListParams } from '@/lib/services/api/client-services/get-list/types';
import { cleanedObject } from '@/lib/utils/object/cleaned-object';

export const useClientListPage = () => {
  const { getSearchParamsValue } = useQueryParams();
  const tableMeta = useTablePagination();
  const { limit, offset } = tableMeta;

  const { isModalOpen, handleClose, handleOpen: handleOpenModal } = useModal();

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
      (clientListData?.rows ?? []).map((entry, index) => ({
        ...entry,
        idx: index + offset + 1,
      })),
    [offset, clientListData?.rows]
  );
  const total = clientListData?.total ?? 0;

  const isLoading = isLoadingClientList;

  return {
    data,
    total,
    isLoading,
    tableMeta,
    isModalOpen,
    handleClose,
    handleOpenModal,
  };
};

export type ClientListPageViewModel = ReturnType<typeof useClientListPage>;
