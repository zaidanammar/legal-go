import { MenuRouteWrapper } from '@/lib/components/layout/menu-route-wrapper';

import { orderPages } from './routes';

const OrderPage = () => {
  return <MenuRouteWrapper routes={orderPages} />;
};

export default OrderPage;
