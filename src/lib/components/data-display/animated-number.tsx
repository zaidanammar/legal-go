import MotionNumber, { type MotionNumberProps } from 'motion-number';

type AnimatedNumberProps = MotionNumberProps & {
  fallback?: number | bigint | string;
  showZero?: boolean;
};

export const AnimatedNumber = (props: AnimatedNumberProps) => {
  const fallbackValue =
    !props.value && (props.showZero ? props.value == null : true)
      ? props.fallback
      : undefined;
  const value = props.value ?? fallbackValue;

  return <MotionNumber locales="id-ID" {...props} value={value} />;
};
