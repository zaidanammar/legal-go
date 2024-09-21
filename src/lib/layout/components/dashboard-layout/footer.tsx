import { Layout, Typography } from 'antd';
import { createStyles } from 'antd-style';

import { siteConfig } from '@/lib/constants/site-config';
import { useBreakpointValue } from '@/lib/hooks/use-breakpoint-value';

const useStyles = createStyles({
  footerMobile: {
    textAlign: 'center',
    transform: 'scale(0.8)',
  },
});

export const Footer = () => {
  const { styles, cx } = useStyles();
  const { isMobile } = useBreakpointValue();

  return (
    <Layout.Footer className={cx(isMobile && styles.footerMobile)}>
      &copy; {new Date().getFullYear()}{' '}
      <Typography.Text strong>{siteConfig.copyrightName}</Typography.Text>
    </Layout.Footer>
  );
};
