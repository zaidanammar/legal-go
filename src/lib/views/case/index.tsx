import { MenuRouteWrapper } from '@/lib/components/layout/menu-route-wrapper';

import { casePages } from './routes';

const CasePage = () => {
  return <MenuRouteWrapper routes={casePages} />;
};

export default CasePage;
