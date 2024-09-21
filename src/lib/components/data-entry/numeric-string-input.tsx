import { Input, type InputProps } from 'antd';
import type React from 'react';

type NumericStringInputProps = InputProps;

export const NumericStringInput = (props: NumericStringInputProps) => {
  const preventWheelScrollingNumberInput = (e: React.SyntheticEvent) =>
    (e.target as HTMLElement).blur();

  return (
    <Input
      type="number"
      onWheel={preventWheelScrollingNumberInput}
      {...props}
    />
  );
};
