import { type TablePaginationConfig } from 'antd';
import uniq from 'lodash/uniq';

import { type useTablePagination } from '@/lib/hooks/use-table-pagination';

const defaultPageSizeOptions = [5, 10, 20, 50, 100];

type MapTableMetaToAntdPaginationType = {
  tableMeta: ReturnType<typeof useTablePagination>;
  total: number;
  defaultPageSize?: number;
};

export const mapTableMetaToAntdPagination = ({
  tableMeta,
  total,
  defaultPageSize,
}: MapTableMetaToAntdPaginationType): TablePaginationConfig => {
  const pageSizeOptions = uniq([
    ...defaultPageSizeOptions,
    ...(defaultPageSize ? [defaultPageSize] : []),
  ]).sort((a, b) => a - b);

  return {
    total,
    showSizeChanger: true,
    pageSize: tableMeta.limit,
    pageSizeOptions,
    hideOnSinglePage: false,
    current: tableMeta.current,
    onChange: tableMeta.handleChangePage,
  };
};
