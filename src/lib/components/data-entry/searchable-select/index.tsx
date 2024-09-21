import { Select, type SelectProps } from 'antd';
import React from 'react';

import { filterSelectOption } from './utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, react/display-name
export const SearchableSelect = React.forwardRef<any, SelectProps>(
  (props, ref) => (
    <Select
      ref={ref}
      showSearch
      allowClear
      filterOption={filterSelectOption}
      optionFilterProp="label"
      dropdownStyle={{
        minWidth: 240,
      }}
      {...props}
    />
  )
);
