import { Col, type ColProps } from 'antd';

export type ResponsiveColProps = ColProps & {
  fullWidth?: boolean;
};

export const ResponsiveCol = ({ fullWidth, ...props }: ResponsiveColProps) => {
  return (
    <Col
      span={fullWidth ? 24 : props.span}
      // md={fullWidth ? undefined : (props.md ?? 12)}
      // lg={fullWidth ? undefined : (props.lg ?? 8)}
      // xl={fullWidth ? undefined : (props.xl ?? 6)}
      {...props}
    />
  );
};
