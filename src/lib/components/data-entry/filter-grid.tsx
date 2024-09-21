import dayjs, { type Dayjs } from 'dayjs';
import { type ChangeEvent } from 'react';

import { useQueryParams } from '@/lib/hooks/use-query-params';
import { type useTablePagination } from '@/lib/hooks/use-table-pagination';
import { dateFormatter } from '@/lib/utils/date/date-formatter';

import {
  InputGrid,
  type DatePickerInputProps,
  type DateRangePickerInputProps,
  type InputDefinition,
  type InputGridProps,
  type SelectInputProps,
  type TextInputProps,
  type NumericInputProps,
} from './input-grid';

type FilterTextInputProps = TextInputProps & {
  paramKey: string;
};

type FilterSelectInputProps = SelectInputProps & {
  paramKey: string;
};

type FilterDatePickerInputProps = DatePickerInputProps & {
  paramKey: string;
};

type FilterDateRangePickerInputProps = DateRangePickerInputProps & {
  paramKey: [string, string];
};

type FilterNumericInputProps = NumericInputProps & {
  paramKey: string;
};

export type FilterInputDefinition = Omit<InputDefinition, 'inputProps'> & {
  inputProps:
    | FilterTextInputProps
    | FilterNumericInputProps
    | FilterSelectInputProps
    | FilterDatePickerInputProps
    | FilterDateRangePickerInputProps;
};

export type FilterGridProps = Omit<InputGridProps, 'inputs'> & {
  inputs: Array<FilterInputDefinition>;
  handleUpdateFilter: ReturnType<
    typeof useTablePagination
  >['handleUpdateFilter'];
};

export const FilterGrid = ({
  inputs,
  handleUpdateFilter,
  ...props
}: FilterGridProps) => {
  const { getSearchParamsValue } = useQueryParams();

  const getFilterDefaultValue = (inputItem: FilterInputDefinition) => {
    switch (inputItem.inputProps.inputType) {
      case 'dateRangePicker':
        return [
          getSearchParamsValue(inputItem?.inputProps.paramKey?.[0])
            ? dayjs(getSearchParamsValue(inputItem?.inputProps.paramKey?.[0]))
            : null,
          getSearchParamsValue(inputItem?.inputProps.paramKey?.[1])
            ? dayjs(getSearchParamsValue(inputItem.inputProps.paramKey?.[1]))
            : null,
        ];
      case 'datePicker':
        return getSearchParamsValue(inputItem?.inputProps.paramKey)
          ? dayjs(getSearchParamsValue(inputItem.inputProps.paramKey))
          : null;
      default:
        return getSearchParamsValue(inputItem.inputProps.paramKey);
    }
  };

  const getFilterOnChange = (inputItem: FilterInputDefinition) => {
    switch (inputItem.inputProps.inputType) {
      case 'dateRangePicker':
        return (
          dateValue: [Dayjs | null | undefined, Dayjs | null | undefined]
        ) => {
          handleUpdateFilter({
            [inputItem.inputProps.paramKey?.[0] ?? '']: dateFormatter({
              date: dateValue?.[0],
              fallback: '',
            }),
            [inputItem.inputProps.paramKey?.[1] ?? '']: dateFormatter({
              date: dateValue?.[1],
              fallback: '',
            }),
          });
        };
      case 'datePicker':
        return (dateValue: Dayjs | null | undefined) => {
          handleUpdateFilter({
            [(inputItem.inputProps.paramKey as string) ?? '']: dateFormatter({
              date: dateValue,
              fallback: '',
            }),
          });
        };
      case 'select':
        return (value: string) =>
          handleUpdateFilter({
            [(inputItem.inputProps.paramKey as string) ?? '']: value,
          });
      case 'numeric':
        return (value: number | undefined) =>
          handleUpdateFilter({
            [(inputItem.inputProps.paramKey as string) ?? '']: value,
          });
      default:
        return (event: ChangeEvent<HTMLInputElement>) => {
          handleUpdateFilter({
            [(inputItem.inputProps.paramKey as string) ?? '']:
              event.target.value,
          });
        };
    }
  };

  const filterInputs = inputs.map(
    (inputItem) =>
      ({
        ...inputItem,
        inputProps: {
          ...inputItem?.inputProps,
          defaultValue: getFilterDefaultValue(inputItem),
          onChange: getFilterOnChange(inputItem),
        },
      }) as InputDefinition
  );

  return <InputGrid {...props} inputs={filterInputs} />;
};
