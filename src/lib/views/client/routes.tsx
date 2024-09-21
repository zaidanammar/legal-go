import React from 'react';

import { type PageRoutes } from '@/lib/components/layout/menu-route-wrapper/types';

const ClientListPage = React.lazy(() => import('./app-views/list'));

export const clientPages: PageRoutes = [
  {
    path: '/',
    element: <ClientListPage />,
    accessKey: 'BORROWER',
  },
];
