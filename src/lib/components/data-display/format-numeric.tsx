import type React from 'react';
import { NumericFormat, type NumericFormatProps } from 'react-number-format';

export type FormatNumericProps = NumericFormatProps & {
  fallback?: React.ReactNode;
  showZero?: boolean;
};

export const FormatNumeric = (props: FormatNumericProps) => {
  if (
    !props.value &&
    (props.showZero ? props.value == null : true) &&
    props.fallback
  ) {
    return props.fallback as React.JSX.Element;
  }

  return (
    <NumericFormat
      thousandSeparator
      displayType="text"
      decimalScale={2}
      {...props}
    />
  );
};
