import { lazy } from 'react';
import type { PathRouteProps } from 'react-router-dom';

import {
  clientPath,
  homePath,
  loginPath,
  registerPath,
} from '@/lib/constants/routes';

const HomePage = lazy(() => import('@/lib/views/home'));
const ClietPage = lazy(() => import('@/lib/views/client'));
const LoginPage = lazy(() => import('@/lib/views/login'));
const RegisterPage = lazy(() => import('@/lib/views/register'));

export const restrictedRoutes: Array<PathRouteProps> = [
  {
    path: loginPath,
    element: <LoginPage />,
  },
  {
    path: registerPath,
    element: <RegisterPage />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [
  {
    path: homePath,
    element: <HomePage />,
  },
  {
    path: clientPath,
    element: <ClietPage />,
  },
];
