/**
 * @note
 * for hook alternative of route element composition:
 * - https://reactrouter.com/docs/en/v6/upgrading/v5#use-useroutes-instead-of-react-router-config
 * - https://reactrouter.com/docs/en/v6/examples/route-objects
 *
 * might need to take notes on:
 * - https://reactrouter.com/docs/en/v6/upgrading/v5#note-on-link-to-values
 */

import { Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import { isInMaintenanceMode } from '@/lib/constants/env';
import { homePath, loginPath } from '@/lib/constants/routes';
import { PageSkeleton } from '@/lib/layout/components/page-skeleton';
import { RequireAuth } from '@/lib/router/require-auth';
import { RestrictedRoute } from '@/lib/router/restricted-route';
import { useAuth } from '@/lib/stores/auth';
import { Page404 } from '@/lib/views/404';
import InMaintenanceMode from '@/lib/views/maintenance-mode';

import { privateRoutes, restrictedRoutes } from './routes';

export const Routings = () => {
  const location = useLocation();
  const { token: isLoggedIn } = useAuth();

  if (isInMaintenanceMode) {
    return (
      <Routes>
        <Route path="*" element={<InMaintenanceMode />} />
      </Routes>
    );
  }

  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        {restrictedRoutes.map(({ element, ...routeProps }) => (
          <Route
            {...routeProps}
            element={<RestrictedRoute>{element}</RestrictedRoute>}
            key={routeProps.path as string}
          />
        ))}
        {privateRoutes.map(({ element, ...privateRouteProps }) => (
          <Route
            element={
              <RequireAuth
                redirectTo={`${loginPath}?redirectTo=${location.pathname}`}
              >
                {element}
              </RequireAuth>
            }
            {...privateRouteProps}
            key={`privateRoute-${privateRouteProps.path}`}
          />
        ))}
        <Route path="/" element={<Navigate replace to={homePath} />} />
        <Route
          path="*"
          element={
            isLoggedIn ? <Page404 /> : <Navigate replace to={loginPath} />
          }
        />
      </Routes>
    </Suspense>
  );
};
