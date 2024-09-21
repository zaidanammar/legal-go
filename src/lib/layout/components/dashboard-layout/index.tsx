import { FloatButton, Layout } from 'antd';
import { createStyles } from 'antd-style';

import { sidebarCollapsedWidth, sidebarWidth } from './constants';
import { ContentWrapper } from './content-wrapper';
import { Footer } from './footer';
import { MobileMenu } from './mobile-menu';
import { SidebarMenu } from './sidebar-menu';
import { useLayoutStore } from './store';

const useStyles = createStyles(({ css, responsive }) => ({
  contentLayout: css`
    ${responsive.tablet} {
      padding-left: 0;
    }
    padding-left: ${sidebarWidth}px;
    transition: 0.3s all ease;
  `,
  contentCollapsed: {
    paddingLeft: sidebarCollapsedWidth,
  },
}));

export const DashboardLayout = ({ children }: React.PropsWithChildren) => {
  const { collapsed } = useLayoutStore();
  const { styles, cx } = useStyles();

  return (
    <Layout>
      <SidebarMenu />
      <Layout
        className={cx(
          styles.contentLayout,
          collapsed && styles.contentCollapsed
        )}
      >
        <ContentWrapper>{children}</ContentWrapper>
        <Footer />
      </Layout>
      <MobileMenu />
      <FloatButton.BackTop />
    </Layout>
  );
};
