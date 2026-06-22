import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

export default function ProtectedRoute({ children, reqRole }: { children: React.ReactNode, reqRole?: string }) {
  const { userRole } = useShop();
  const location = useLocation();

  if (!userRole) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (reqRole && userRole !== reqRole) {
    // If trying to access admin but logged in as user, go to shop and vice versa
    return <Navigate to={userRole === 'admin' ? '/admin' : '/'} replace />;
  }

  return <>{children}</>;
}
