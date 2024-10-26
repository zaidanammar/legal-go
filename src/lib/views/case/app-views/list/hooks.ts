import { useMemo } from 'react';

import { useQueryParams } from '@/lib/hooks/use-query-params';
import { useTablePagination } from '@/lib/hooks/use-table-pagination';
import { useGetCaseList } from '@/lib/services/api/case-services/get-list';
import { type GetCaseListParams } from '@/lib/services/api/case-services/get-list/types';
import { useGetMasterDataList } from '@/lib/services/api/master-services/get-all';
import { cleanedObject } from '@/lib/utils/object/cleaned-object';

export const useCaseListPage = () => {
  const { getSearchParamsValue } = useQueryParams();
  const tableMeta = useTablePagination();
  const { limit, offset } = tableMeta;

  const queryParams = useMemo<GetCaseListParams>(() => {
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

  const { response: caseListData, isLoading: isLoadingCaseList } =
    useGetCaseList({
      queryParams,
    });

  const { response: masterDataList, isLoading: isLoadingMasterDataList } =
    useGetMasterDataList();

  const data = useMemo(
    () =>
      (caseListData?.rows ?? []).map((entry, index) => ({
        ...entry,
        idx: index + offset + 1,
      })),
    [offset, caseListData?.rows]
  );
  const total = caseListData?.total ?? 0;

  const isLoading = isLoadingCaseList || isLoadingMasterDataList;

  const statusOptions = useMemo(() => {
    return (masterDataList?.user_statuses ?? []).map((item) => ({
      label: item.value,
      value: item.value,
    }));
  }, [masterDataList?.user_statuses]);

  return {
    data,
    total,
    isLoading,
    tableMeta,
    statusOptions,
  };
};

export type CaseListPageViewModel = ReturnType<typeof useCaseListPage>;
