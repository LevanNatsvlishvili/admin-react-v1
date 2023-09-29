import { useAuth } from 'context/userContext';
import Layout from 'layout';
import React, { useEffect } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import paths from 'routing/Paths';
import isEmpty from 'lodash/isEmpty';
import Cookies from 'js-cookie';
import parseJWT from 'utils/parseJWT';

const getToken = () => Cookies.get('token');
const role = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';

function AuthGuard() {
  const { user, setUser } = useAuth();
  const location = useLocation();

  useEffect(() => {
    getToken();

    const token = getToken();
    const decodedToken = parseJWT(token);
    setUser({
      name: decodedToken['given_name'],
      role: decodedToken[role],
    });
    console.log(decodedToken);
  }, [location]);

  if (!isEmpty(user))
    return (
      <Layout>
        <Outlet />
      </Layout>
    );

  return <Navigate to={paths.auth.login} state={{ from: location }} replace />;
}

export default AuthGuard;
