import { Input, type InputProps } from 'antd';
import type React from 'react';
import {
  NumericFormat,
  type NumberFormatValues,
  type NumericFormatProps,
} from 'react-number-format';

export type NumericFormatInputProps = {
  onChange?: (value: number | undefined) => void;
} & NumericFormatProps &
  InputProps;

export const NumericFormatInput = ({
  onChange,
  ...props
}: NumericFormatInputProps) => {
  const handleValueChange = (values: NumberFormatValues) => {
    if (onChange) {
      onChange(values.floatValue);
    }
  };

  return (
    <NumericFormat
      customInput={Input as React.ComponentType}
      thousandSeparator
      onValueChange={handleValueChange}
      {...props}
    />
  );
};
