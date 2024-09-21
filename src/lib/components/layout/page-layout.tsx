import { Breadcrumb, type BreadcrumbProps, Flex, Typography } from 'antd';
import { type CSSObject, type ResponsiveUtil, createStyles } from 'antd-style';
import type React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import { ProfileBox } from '@/lib/layout/components/dashboard-layout/profile-box';
import { SidebarCollapseTriggerButton } from '@/lib/layout/components/dashboard-layout/sidebar-collapse-trigger-button';

const wrapperConstraints = (responsive: ResponsiveUtil): CSSObject => ({
  [responsive.mobile]: {
    padding: '1rem',
  },
});

const useStyles = createStyles(({ responsive, token }) => ({
  header: {
    padding: '1.5rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 4,
    transition: 'background-color 0.3s, box-shadow 0.3s',
  },
  headerScrolled: {
    backgroundColor: 'rgba(255,255,255, 0.85)',
    backdropFilter: 'blur(12px)',
    boxShadow: token.boxShadow,
  },
  pageContentWrapper: wrapperConstraints(responsive),
  container: {
    margin: '0 auto',
    padding: '0 1.5rem',
    [responsive.laptop]: {
      maxWidth: 960,
    },
    [responsive.xl]: {
      maxWidth: 1380,
    },
    [responsive.desktop]: {
      maxWidth: 1500,
    },
  },
  pageTitle: {
    margin: '0 !important',
    fontWeight: '700 !important',
  },
}));

type PageLayoutProps = {
  pageTitle?: React.ReactNode;
  breadCrumbItems?: BreadcrumbProps['items'];
  children: React.ReactNode;
};

export const PageLayout = ({
  pageTitle,
  breadCrumbItems,
  children,
}: PageLayoutProps) => {
  const [scrolled, setScrolled] = useState(false);
  const { styles, cx } = useStyles();

  const handleScroll = useCallback(() => {
    if (window.scrollY > 32) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <Flex
        align="center"
        gap={12}
        className={cx(
          styles.header,
          scrolled ? styles.headerScrolled : undefined
        )}
      >
        <Helmet>
          <title>Legal Go {pageTitle ? `- ${pageTitle}` : ''}</title>
        </Helmet>
        <SidebarCollapseTriggerButton />
        {pageTitle || breadCrumbItems?.length ? (
          <Flex vertical>
            {pageTitle ? (
              <Typography.Title level={3} className={styles.pageTitle}>
                {pageTitle}
              </Typography.Title>
            ) : null}
            {breadCrumbItems?.length ? (
              <Breadcrumb items={breadCrumbItems} />
            ) : null}
          </Flex>
        ) : null}
        <ProfileBox />
      </Flex>

      <div className={cx(styles.pageContentWrapper, styles.container)}>
        {children}
      </div>
    </>
  );
};
