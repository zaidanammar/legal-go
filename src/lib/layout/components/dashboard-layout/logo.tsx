import { createStyles } from 'antd-style';

import { siteConfig } from '@/lib/constants/site-config';
import { useBreakpointValue } from '@/lib/hooks/use-breakpoint-value';

import { sidebarCollapsedWidth, sidebarWidth } from './constants';
import { useLayoutStore } from './store';

const useStyles = createStyles({
  logoContainer: {
    width: `${sidebarWidth}px`,
    display: 'flex',
    alignItems: 'center',
    padding: '0 1rem',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    '@media screen and (max-width: 992px)': {
      padding: '0',
    },
  },
  logoContainerCollapsed: {
    width: `${sidebarCollapsedWidth}px`,
  },
  logoImage: {
    width: '72px',
  },
  logoImageCollapsed: {
    width: '32px',
  },
  logoOnly: {
    width: '72px',
  },
});

type LogoProps = {
  isLogoOnly?: boolean;
  className?: string;
};

export const Logo = ({ isLogoOnly, className }: LogoProps) => {
  const collapsed = useLayoutStore((state) => state.collapsed);
  const { styles, cx } = useStyles();
  const { isMobile } = useBreakpointValue();

  if (isLogoOnly) {
    return (
      <img
        alt="logo"
        src={siteConfig.logoURL}
        className={cx(styles.logoOnly)}
      />
    );
  }

  return (
    <div
      className={cx(
        styles.logoContainer,
        collapsed && !isMobile && styles.logoContainerCollapsed,
        className
      )}
    >
      <img
        alt="logo"
        src={siteConfig.logoURL}
        className={cx(
          styles.logoImage,
          collapsed && !isMobile && styles.logoImageCollapsed
        )}
      />
    </div>
  );
};
