import { useMemo, useState } from 'react';

import { useQueryParams } from '@/lib/hooks/use-query-params';
import { useTablePagination } from '@/lib/hooks/use-table-pagination';
import { useModal } from '@/lib/providers/modal';
import { useGetClientList } from '@/lib/services/api/client-services/get-list';
import { type GetClientListParams } from '@/lib/services/api/client-services/get-list/types';
import { useGetMasterDataList } from '@/lib/services/api/master-services/get-all';
import { cleanedObject } from '@/lib/utils/object/cleaned-object';

export const useClientListPage = () => {
  const { getSearchParamsValue } = useQueryParams();
  const tableMeta = useTablePagination();
  const { limit, offset } = tableMeta;

  const [selectedCaseID, setSelectedCaseID] = useState<string | null>(null);

  const { isModalOpen, handleClose, handleOpen } = useModal();

  const queryParams = useMemo<GetClientListParams>(() => {
    const filters = {
      name: getSearchParamsValue('name'),
      status: getSearchParamsValue('status'),
    };

    return {
      ...cleanedObject(filters),
      limit,
      offset,
    };
  }, [getSearchParamsValue, limit, offset]);

  const { response: masterDataList, isLoading: isLoadingMasterDataList } =
    useGetMasterDataList();

  const {
    response: clientListData,
    isLoading: isLoadingClientList,
    mutate: refreshClientList,
  } = useGetClientList({
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

  const isLoading = isLoadingClientList || isLoadingMasterDataList;

  const statusOptions = useMemo(() => {
    return (masterDataList?.user_statuses ?? []).map((item) => ({
      label: item.value,
      value: item.value,
    }));
  }, [masterDataList?.user_statuses]);

  const handleOpenModal = (caseID?: string) => {
    if (caseID) {
      setSelectedCaseID(caseID);
    }
    handleOpen();
  };

  const handleCloseModal = () => {
    setSelectedCaseID(null);
    handleClose();
  };

  return {
    data,
    total,
    isLoading,
    tableMeta,
    isModalOpen,
    statusOptions,
    handleOpenModal,
    handleCloseModal,
    selectedCaseID,
    setSelectedCaseID,
    masterDataList,
    refreshClientList,
  };
};

export type ClientListPageViewModel = ReturnType<typeof useClientListPage>;
