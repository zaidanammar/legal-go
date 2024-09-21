import { Descriptions, type DescriptionsProps } from 'antd';
import { type IterableElement } from 'type-fest';

export type DetailGridItemProps = {
  show?: boolean;
} & IterableElement<DescriptionsProps['items']>;

export type DetailGridSectionProps = Omit<DescriptionsProps, 'items'> & {
  items: Array<DetailGridItemProps>;
};

export const DetailGridSection = ({
  items,
  ...props
}: DetailGridSectionProps) => {
  return (
    <Descriptions
      layout="vertical"
      colon={false}
      column={{ lg: 4, xl: 4, xxl: 4 }}
      items={items.filter((item) => item.show !== false)}
      {...props}
    />
  );
};
