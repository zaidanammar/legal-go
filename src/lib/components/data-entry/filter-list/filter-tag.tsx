import { CloseCircleOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import { type ReactNode } from 'react';

import { DATE_FORMAT_DD_MMM_YYYY } from '@/lib/constants/date';
import { useQueryParams } from '@/lib/hooks/use-query-params';
import { dateFormatter } from '@/lib/utils/date/date-formatter';

export type InputParams = {
  key?: string;
  label?: ReactNode;
  value?: string;
};

type FilterTagProps = {
  input: InputParams | Array<InputParams> | undefined;
  onClose: (key: string | Array<string>) => void;
};

export const FilterTag = ({ input, onClose }: FilterTagProps) => {
  const { getSearchParamsValue } = useQueryParams();

  if (!input) {
    return null;
  }

  if (input instanceof Array) {
    if (input.every((item) => !getSearchParamsValue(String(item.key)))) {
      return null;
    }

    return (
      <Tag
        onClose={() => {
          onClose([input[0].key ?? '', input[1].key ?? '']);
        }}
        style={{ fontSize: 14 }}
        closeIcon={<CloseCircleOutlined style={{ fontSize: 14 }} />}
      >
        <b>{input[0].label}</b>:{' '}
        {dateFormatter({
          date: getSearchParamsValue(String(input[0].key)),
          format: DATE_FORMAT_DD_MMM_YYYY,
        })}
        {' - '}
        {dateFormatter({
          date: getSearchParamsValue(String(input[1].key)),
          format: DATE_FORMAT_DD_MMM_YYYY,
        })}
      </Tag>
    );
  }

  if (!getSearchParamsValue(String(input?.key))) {
    return null;
  }

  return (
    <Tag
      onClose={() => onClose(String(input.key))}
      style={{ fontSize: 14 }}
      closeIcon={<CloseCircleOutlined style={{ fontSize: 14 }} />}
    >
      <b>{input.label}</b>: {String(input.value)}
    </Tag>
  );
};
