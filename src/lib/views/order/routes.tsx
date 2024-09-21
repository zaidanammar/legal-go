import React from 'react';

import { type PageRoutes } from '@/lib/components/layout/menu-route-wrapper/types';

const OrderListPage = React.lazy(() => import('./app-views/list'));

export const orderPages: PageRoutes = [
  {
    path: '/',
    element: <OrderListPage />,
    accessKey: 'BORROWER',
  },
];
