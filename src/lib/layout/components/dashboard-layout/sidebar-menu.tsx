/* eslint-disable @typescript-eslint/naming-convention */
import { Divider, Layout } from 'antd';
import { createStyles, css } from 'antd-style';

import { useBreakpointValue } from '@/lib/hooks/use-breakpoint-value';

import { sidebarCollapsedWidth, sidebarWidth } from './constants';
import { Logo } from './logo';
import { MenuContent } from './menu-content';
import { useLayoutStore } from './store';

const useStyles = createStyles({
  sidebarLogo: {
    marginTop: '12px',
    paddingTop: '12px',
    display: 'flex',
    justifyContent: 'center',
  },
  siderForcePosition: css`
    position: fixed !important;
  `,
  sider: {
    boxShadow: 'var(--ant-box-shadow)',
    zIndex: 5,
    overflow: 'auto',
    width: sidebarWidth,
    height: '100dvh',
    '::-webkit-scrollbar': {
      opacity: 0,
      width: '0.5rem',
    },
    ':hover': {
      '::-webkit-scrollbar': {
        opacity: 1,
      },
      '::-webkit-scrollbar-thumb': {
        background: '#bbb',
        borderRadius: '6px',
      },
      '::-webkit-scrollbar-thumb:horizontal': {
        display: 'none',
      },
    },
  },
});

export const SidebarMenu = () => {
  const { styles, cx } = useStyles();
  const collapsed = useLayoutStore((state) => state.collapsed);
  const { isMobile } = useBreakpointValue();

  if (isMobile) {
    return null;
  }

  return (
    <Layout.Sider
      collapsed={collapsed}
      width={sidebarWidth}
      collapsible
      trigger={null}
      collapsedWidth={sidebarCollapsedWidth}
      className={cx(styles.siderForcePosition, styles.sider)}
    >
      {!isMobile ? <Logo className={styles.sidebarLogo} /> : null}
      <Divider />
      <MenuContent />
    </Layout.Sider>
  );
};
