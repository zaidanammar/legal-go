import { Navigate } from 'react-router-dom';

import { useAuth } from '@/lib/stores/auth';

type PrivateRouteProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

export const RestrictedRoute = ({
  children,
  redirectTo = '/home',
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
