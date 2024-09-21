import { type DefaultOptionType } from 'antd/lib/select';

export const filterSelectOption = (
  inputValue: string,
  option?: DefaultOptionType | undefined
) =>
  String(option?.label ?? '')
    .toLowerCase()
    .includes(inputValue.toLowerCase());
