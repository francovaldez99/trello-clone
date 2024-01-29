import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import SpinLoading from '../SpinLoading/SpinLoading';

function ProtectedRoute() {
  const { isAuthenticated } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fakeAuthCheck = async () => {
      
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    fakeAuthCheck();
  }, []);

  if (loading) {

    return <SpinLoading isLoading={loading}/>;
  }

  if (!isAuthenticated) {

    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
