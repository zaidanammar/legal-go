import { type DescriptionsProps, Card, Divider } from 'antd';
import type React from 'react';

import {
  DetailGridSection,
  type DetailGridItemProps,
} from '@/lib/components/data-display/detail-grid-section';

export type SummaryCardProps = Omit<DescriptionsProps, 'items'> & {
  title?: React.ReactNode;
  detailItems: Array<DetailGridItemProps>;
  summaryItems: Array<DetailGridItemProps>;
};

export const SummaryCard = ({
  title,
  detailItems,
  summaryItems,
}: SummaryCardProps) => {
  return (
    <Card title={title}>
      <DetailGridSection
        column={1}
        layout="horizontal"
        items={detailItems.map((item) => ({
          ...item,
          contentStyle: {
            justifyContent: 'flex-end',
          },
        }))}
      />
      <Divider />

      <DetailGridSection
        column={1}
        layout="horizontal"
        items={summaryItems.map((item) => ({
          ...item,
          contentStyle: {
            justifyContent: 'flex-end',
          },
        }))}
      />
    </Card>
  );
};
