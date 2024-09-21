import { BookFilled } from '@ant-design/icons';
import { Card, Flex, Space, Tabs } from 'antd';
import { type TabsProps } from 'antd/lib';
import { type ReactNode } from 'react';

import {
  AppTable,
  type AppTableProps,
} from '@/lib/components/data-display/app-table';
import {
  FilterList,
  type FilterListProps,
} from '@/lib/components/data-entry/filter-list';

import { PageLayout } from './page-layout';

type ListPageProps<TData> = {
  pageTitle?: ReactNode;
  pure?: boolean;
  filter?: FilterListProps;
  table?: AppTableProps<TData>;
  menuIcon?: React.ReactNode;
  headerExtra?: React.ReactNode;
  footerExtra?: React.ReactNode;
  tabs?: TabsProps;
  addButton?: React.ReactNode;
};

export const ListPage = <TData extends object>({
  pageTitle,
  filter,
  table,
  pure,
  menuIcon = <BookFilled key="link" />,
  headerExtra,
  footerExtra,
  tabs,
  addButton,
}: ListPageProps<TData>) => {
  const content = (
    <Space direction="vertical" style={{ width: '100%' }} size="middle">
      {tabs && <Tabs {...tabs} />}
      <Flex gap={12} justify="end">
        {filter && <FilterList {...filter} />}
        {addButton}
      </Flex>
      {headerExtra}
      {table && <AppTable {...table} />}
      {footerExtra}
    </Space>
  );

  return pure ? (
    content
  ) : (
    <PageLayout
      pageTitle={pageTitle}
      breadCrumbItems={[
        { title: menuIcon },
        {
          title: pageTitle,
        },
      ]}
    >
      <Card>{content}</Card>
    </PageLayout>
  );
};
