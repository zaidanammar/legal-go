import React from 'react';

import { type PageRoutes } from '@/lib/components/layout/menu-route-wrapper/types';

const CaseListPage = React.lazy(() => import('./app-views/list'));

export const casePages: PageRoutes = [
  {
    path: '/',
    element: <CaseListPage />,
    accessKey: 'BORROWER',
  },
];
