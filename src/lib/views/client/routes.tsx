import React from 'react';

import { type PageRoutes } from '@/lib/components/layout/menu-route-wrapper/types';
import { ModalProvider } from '@/lib/providers/modal';

const ClientListPage = React.lazy(() => import('./app-views/list'));
const ClientDetailPage = React.lazy(() => import('./app-views/view'));

export const clientPages: PageRoutes = [
  {
    path: '/',
    element: (
      <ModalProvider>
        <ClientListPage />
      </ModalProvider>
    ),
    accessKey: 'BORROWER',
  },
  {
    path: '/view/:id',
    element: <ClientDetailPage />,
    accessKey: 'BORROWER',
  },
];
