import { lazy } from 'react';
import type { PathRouteProps } from 'react-router-dom';

import {
  casePath,
  clientPath,
  homePath,
  loginPath,
  orderPath,
  registerPath,
} from '@/lib/constants/routes';

const LoginPage = lazy(() => import('@/lib/views/login'));
const RegisterPage = lazy(() => import('@/lib/views/register'));
const HomePage = lazy(() => import('@/lib/views/home'));
const ClientPage = lazy(() => import('@/lib/views/client'));
const CasePage = lazy(() => import('@/lib/views/case'));
const OrderPage = lazy(() => import('@/lib/views/order'));

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
    element: <ClientPage />,
  },
  {
    path: casePath,
    element: <CasePage />,
  },
  {
    path: orderPath,
    element: <OrderPage />,
  },
];
