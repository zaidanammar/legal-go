import { MenuRouteWrapper } from '@/lib/components/layout/menu-route-wrapper';

import { clientPages } from './routes';

const ClientPage = () => {
  return <MenuRouteWrapper routes={clientPages} />;
};

export default ClientPage;
