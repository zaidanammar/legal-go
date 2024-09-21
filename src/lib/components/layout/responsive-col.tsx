import { Col, type ColProps } from 'antd';

export type ResponsiveColProps = ColProps & {
  fullWidth?: boolean;
};

export const ResponsiveCol = ({ fullWidth, ...props }: ResponsiveColProps) => {
  return (
    <Col
      span={24}
      md={fullWidth ? undefined : 12}
      lg={fullWidth ? undefined : 8}
      xl={fullWidth ? undefined : 6}
      {...props}
    />
  );
};
