import { type PaginationProps } from 'antd';
import debounce from 'lodash/debounce';
import React from 'react';

import { useQueryParams } from '@/lib/hooks/use-query-params';

const defaultLimit = 10;
const debounceDuration = 500;

export const useTablePagination = () => {
  const { searchParams, handleUpdateSearchParams } = useQueryParams();

  const limit = React.useMemo(() => {
    return Number(searchParams.get('pageSize') ?? defaultLimit);
  }, [searchParams]);

  const offset = React.useMemo(() => {
    return (Number(searchParams.get('page') ?? 1) - 1) * limit;
  }, [limit, searchParams]);

  const current = React.useMemo(
    () => Math.ceil((offset + 1) / limit),
    [limit, offset]
  );

  const handleChangePage: PaginationProps['onChange'] = (page, pageSize) => {
    const isPageSizeUnchanged = pageSize === limit;
    const updatedPage = isPageSizeUnchanged ? page : 1;
    handleUpdateSearchParams({ page: updatedPage, pageSize });
  };

  const handleUpdateFilter = debounce<typeof handleUpdateSearchParams>(
    (changes, options) =>
      handleUpdateSearchParams({ ...changes, page: 1 }, options),
    debounceDuration
  );

  return {
    limit,
    offset,
    current,
    handleChangePage,
    handleUpdateFilter,
  };
};
