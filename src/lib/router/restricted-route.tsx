import { Navigate } from 'react-router-dom';

import { homePath } from '@/lib/constants/routes';
import { useAuth } from '@/lib/stores/auth';

type PrivateRouteProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

export const RestrictedRoute = ({
  children,
  redirectTo = homePath,
}: PrivateRouteProps) => {
  // add your own authentication logic here
  const token = useAuth((state) => state.token);
  const isAuthenticated = !!token?.length;

  return !isAuthenticated ? (
    (children as React.ReactElement)
  ) : (
    <Navigate to={redirectTo} />
  );
};
