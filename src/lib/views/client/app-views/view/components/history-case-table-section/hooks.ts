import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useTablePagination } from '@/lib/hooks/use-table-pagination';
import { useGetCaseList } from '@/lib/services/api/case-services/get-list';
import { type GetCaseListParams } from '@/lib/services/api/case-services/get-list/types';

export const useHistoryCaseTableSection = () => {
  const { id } = useParams();
  const tableMeta = useTablePagination();
  const { limit, offset } = tableMeta;

  const queryParams = useMemo<GetCaseListParams>(() => {
    return {
      client_id: id,
      limit,
      offset,
    };
  }, [id, limit, offset]);

  const { response: caseListData, isLoading: isLoadingCaseList } =
    useGetCaseList({
      queryParams,
    });

  const data = useMemo(
    () =>
      (caseListData?.rows ?? []).map((entry, index) => ({
        ...entry,
        idx: index + offset + 1,
      })),
    [offset, caseListData?.rows]
  );
  const total = caseListData?.total ?? 0;

  return { tableMeta, data, isLoadingCaseList, total };
};
