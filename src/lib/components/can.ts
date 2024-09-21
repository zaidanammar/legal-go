import type React from 'react';

import { type AccessMenuKey } from '@/lib/services/api/access-menu-services/types';
import { useUserStore } from '@/lib/stores/user';

type CanProps = React.PropsWithChildren<{
  access: AccessMenuKey;
}>;

export const Can = ({ access, children }: CanProps) => {
  const { accessMenu } = useUserStore();

  const hasAccess = !!accessMenu[access];

  if (!hasAccess) {
    return null;
  }
  return children as JSX.Element;
};
