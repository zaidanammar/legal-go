import { useMemo } from 'react';

import { useQueryParams } from '@/lib/hooks/use-query-params';
import { useTablePagination } from '@/lib/hooks/use-table-pagination';
import { useGetCaseList } from '@/lib/services/api/case-services/get-list';
import { type GetCaseListParams } from '@/lib/services/api/case-services/get-list/types';
import { cleanedObject } from '@/lib/utils/object/cleaned-object';

const dummyData = [
  {
    case_id: 'CL001',
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

export const useCaseListPage = () => {
  const { getSearchParamsValue } = useQueryParams();
  const tableMeta = useTablePagination();
  const { limit, offset } = tableMeta;

  const queryParams = useMemo<GetCaseListParams>(() => {
    const filters = {
      case_code: getSearchParamsValue('case_code'),
      case_name: getSearchParamsValue('case_name'),
      case_status: getSearchParamsValue('case_status'),
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

  const data = useMemo(
    () =>
      (caseListData?.rows ?? dummyData).map((entry, index) => ({
        ...entry,
        idx: index + offset + 1,
      })),
    [offset, caseListData?.rows]
  );
  const total = caseListData?.count ?? dummyData.length;

  const isLoading = isLoadingCaseList;

  return {
    data,
    total,
    isLoading,
    tableMeta,
  };
};

export type CaseListPageViewModel = ReturnType<typeof useCaseListPage>;
