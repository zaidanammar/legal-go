import {
  type DatePickerProps,
  type InputProps,
  Row,
  type RowProps,
  type SelectProps,
} from 'antd';
import { type RangePickerProps } from 'antd/es/date-picker';
import { Suspense, lazy } from 'react';

import { InputItem, type InputItemProps } from './input-item';
import { type NumericFormatInputProps } from './numeric-format-input';

const Input = lazy(() =>
  import('antd').then((module) => ({ default: module.Input }))
);
const Select = lazy(() =>
  import('./searchable-select').then((module) => ({
    default: module.SearchableSelect,
  }))
);
const DatePicker = lazy(() =>
  import('antd').then((module) => ({ default: module.DatePicker }))
);
const RangePicker = lazy(() =>
  import('antd').then((module) => ({ default: module.DatePicker.RangePicker }))
);
const NumericFormatInput = lazy(() =>
  import('./numeric-format-input').then((module) => ({
    default: module.NumericFormatInput,
  }))
);

const inputComponentMap = {
  text: Input,
  select: Select,
  datePicker: DatePicker,
  dateRangePicker: RangePicker,
  numeric: NumericFormatInput,
} as const;

export type TextInputProps = {
  inputType: 'text';
} & InputProps;

export type SelectInputProps = {
  inputType: 'select';
} & SelectProps;

export type DatePickerInputProps = {
  inputType: 'datePicker';
} & DatePickerProps;

export type DateRangePickerInputProps = {
  inputType: 'dateRangePicker';
} & RangePickerProps;

export type NumericInputProps = {
  inputType: 'numeric';
} & NumericFormatInputProps;

type WithFilter = {
  isFilter?: true;
  paramKey?: string | Array<string>;
};

type WithoutFilter = {
  isFilter?: false;
};

type InputFilterDefinition = WithFilter | WithoutFilter;

export type InputDefinition = {
  inputProps:
    | TextInputProps
    | SelectInputProps
    | DatePickerInputProps
    | DateRangePickerInputProps
    | NumericInputProps;
} & InputItemProps &
  InputFilterDefinition;

export type InputGridProps = {
  rowProps?: RowProps & {
    columns?: {
      xs?: number;
      md?: number;
      lg?: number;
      xl?: number;
    };
  };
  inputs: Array<InputDefinition>;
};

export const InputGrid = ({ inputs, rowProps }: InputGridProps) => {
  const { columns } = rowProps ?? {};

  return (
    <Row gutter={16} {...rowProps}>
      {inputs.map(
        ({
          inputProps: { inputType, ...inputProps },
          fullWidth,
          ...formItemProps
        }) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const Component = inputComponentMap[inputType] as any;

          return (
            <InputItem
              wrapperProps={{
                xs: 24 / (columns?.xs || 1),
                md: 24 / (columns?.md || 2),
                lg: 24 / (columns?.lg || 3),
                xl: 24 / (columns?.xl || 4),
              }}
              key={formItemProps.label ?? formItemProps.name}
              fullWidth={fullWidth ?? true}
              {...formItemProps}
            >
              <Suspense>
                <Component {...inputProps} />
              </Suspense>
            </InputItem>
          );
        }
      )}
    </Row>
  );
};
