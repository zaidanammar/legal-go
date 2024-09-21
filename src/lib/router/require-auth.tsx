import { Navigate } from 'react-router-dom';

import { loginPath } from '@/lib/constants/routes';
import { useAuth } from '@/lib/stores/auth';

type PrivateRouteProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

export const RequireAuth = ({
  children,
  redirectTo = loginPath,
}: PrivateRouteProps) => {
  // add your own authentication logic here
  const token = useAuth((state) => state.token);
  const isAuthenticated = !!token?.length;

  return isAuthenticated ? (
    (children as React.ReactElement)
  ) : (
    <Navigate to={redirectTo} />
  );
};
