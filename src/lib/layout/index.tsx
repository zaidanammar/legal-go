import type React from 'react';
import { useMemo } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import { isInMaintenanceMode } from '@/lib/constants/env';
import { authRoutes, globalRoutes } from '@/lib/constants/routes';
import { PageSkeleton } from '@/lib/layout/components/page-skeleton';
import { useInitializeUserStore } from '@/lib/layout/hooks/use-initialize-user-store';

import { DashboardLayout } from './components/dashboard-layout';
import { useScrollToTop } from './hooks/use-scroll-to-top';

export const RootLayout = ({ children }: React.PropsWithChildren) => {
  const location = useLocation();
  const pure =
    !![...authRoutes, ...globalRoutes].find((route) =>
      matchPath(route, location.pathname)
    ) || isInMaintenanceMode;

  useScrollToTop();

  const { isLoading } = useInitializeUserStore();

  const content = useMemo(() => {
    if (isLoading) {
      return <PageSkeleton />;
    }
    return children;
  }, [children, isLoading]);

  if (pure) {
    return children;
  }

  return <DashboardLayout>{content}</DashboardLayout>;
};
