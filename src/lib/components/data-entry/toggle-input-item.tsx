import { InputItem, type InputItemProps } from './input-item';

type ToggleInputItemProps = InputItemProps;

export const ToggleInputItem = ({
  wrapperProps,
  ...props
}: ToggleInputItemProps) => {
  return (
    <InputItem
      wrapperProps={{
        span: 12,
        md: 6,
        ...wrapperProps,
      }}
      {...props}
    />
  );
};
