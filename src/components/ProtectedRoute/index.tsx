import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export type ProtectedRouteProps = {
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function ProtectedRoute({ authenticationPath, outlet }: ProtectedRouteProps) {
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem('isAuthenticated');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(authenticationPath);
    }
  }, [isAuthenticated, navigate, authenticationPath]);

  if (isAuthenticated) {
    return outlet;
  }
  return null;
}
