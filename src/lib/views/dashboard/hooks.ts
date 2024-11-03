import { useMemo } from 'react';

import { useQueryParams } from '@/lib/hooks/use-query-params';
import { useGetDashboardSummary } from '@/lib/services/api/dashboard-services/get-summary';
import { type GetDashboardSummaryQueryParams } from '@/lib/services/api/dashboard-services/get-summary/types';
import { cleanedObject } from '@/lib/utils/object/cleaned-object';

export const useDashboardPage = () => {
  const { getSearchParamsValue, handleUpdateSearchParams } = useQueryParams();

  const queryParams = useMemo<GetDashboardSummaryQueryParams>(() => {
    const filters = {
      start_date: getSearchParamsValue('start_date'),
      end_date: getSearchParamsValue('end_date'),
    };

    return {
      ...cleanedObject(filters),
    };
  }, [getSearchParamsValue]);

  const { response: dashboardData, isLoading: isLoadingDashboardData } =
    useGetDashboardSummary({
      queryParams,
    });

  return {
    dashboardData,
    isLoadingDashboardData,
    getSearchParamsValue,
    handleUpdateSearchParams,
  };
};

export type DashboardPageViewModel = ReturnType<typeof useDashboardPage>;
