import { Route, Routes } from 'react-router-dom';

import { Page404 } from '@/lib/views/404';

import { type PageRoutes } from './types';

type MenuRouteWrapperProps = {
  routes: PageRoutes;
};

export const MenuRouteWrapper = ({ routes }: MenuRouteWrapperProps) => {
  return (
    <Routes>
      {/* TODO: filter by access key */}
      {routes.map((item, index) => (
        <Route key={index} path={item.path} element={item.element} />
      ))}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
