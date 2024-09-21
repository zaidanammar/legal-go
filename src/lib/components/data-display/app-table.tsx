/* eslint-disable react/prop-types */
import { Flex, Table } from 'antd';
import { type TableProps } from 'antd/lib';
import { type GetRowKey } from 'antd/lib/table/interface';
import { useCallback, useMemo } from 'react';

import { useBreakpointValue } from '@/lib/hooks/use-breakpoint-value';
import { type useTablePagination } from '@/lib/hooks/use-table-pagination';
import { mapTableMetaToAntdPagination } from '@/lib/utils/table/pagination';

export type AppTableProps<TData> = {
  rowKey: keyof TData | GetRowKey<TData>;
  total?: number;
  tableMeta?: ReturnType<typeof useTablePagination>;
} & Omit<TableProps<TData>, 'pagination'>;

export const AppTable = <TData extends object>({
  columns,
  total,
  dataSource,
  rowKey,
  tableMeta,
  ...tableProps
}: AppTableProps<TData>) => {
  const { isMobile } = useBreakpointValue();

  const scrollX = useMemo(
    () => (columns && columns.length < 6 ? 'auto' : 1200),
    [columns]
  );

  const updatedColumns = useMemo(
    () =>
      columns?.map((column) => {
        if (column.fixed && isMobile) {
          return { ...column, fixed: undefined };
        }
        return column;
      }),
    [columns, isMobile]
  );

  const cursorInformation = useCallback(
    ({
      shownData,
      total,
    }: {
      shownData: ReadonlyArray<TData>;
      total: number | undefined;
    }) => {
      if ((!tableMeta && !total) || !shownData.length) {
        return null;
      }

      if (!tableMeta) {
        return `Total: ${total}`;
      }

      const indexStart = tableMeta.offset + 1;
      const currentPageActualSize = shownData.length ?? 0;
      const indexEnd =
        currentPageActualSize < tableMeta.limit
          ? tableMeta.offset + currentPageActualSize
          : tableMeta.offset + tableMeta.limit;

      return `${indexStart} - ${indexEnd} dari ${total}`;
    },
    [tableMeta]
  );

  const paginationConfig = useMemo(() => {
    if (!(tableMeta || total)) {
      return false;
    }
    if (tableMeta && total) {
      return mapTableMetaToAntdPagination({ tableMeta, total });
    }
    return { total };
  }, [tableMeta, total]);

  return (
    <Table<TData>
      rowKey={rowKey}
      columns={updatedColumns}
      dataSource={dataSource}
      scroll={{ x: scrollX }}
      pagination={paginationConfig}
      footer={(data) => (
        <Flex justify="end" gap={12}>
          {cursorInformation({ shownData: data, total })}
        </Flex>
      )}
      {...tableProps}
    />
  );
};
