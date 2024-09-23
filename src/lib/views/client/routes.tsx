import React from 'react';

import { type PageRoutes } from '@/lib/components/layout/menu-route-wrapper/types';
import { ModalProvider } from '@/lib/providers/modal';

const ClientListPage = React.lazy(() => import('./app-views/list'));

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
];
