import type React from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import { isInMaintenanceMode } from '@/lib/constants/env';
import { authRoutes } from '@/lib/constants/routes';

import { DashboardLayout } from './components/dashboard-layout';
import { useScrollToTop } from './hooks/use-scroll-to-top';

export const RootLayout = ({ children }: React.PropsWithChildren) => {
  const location = useLocation();
  const pure =
    !!authRoutes.find((route) => matchPath(route, location.pathname)) ||
    isInMaintenanceMode;

  useScrollToTop();

  if (pure) {
    return children;
  }

  return <DashboardLayout>{children}</DashboardLayout>;
};
