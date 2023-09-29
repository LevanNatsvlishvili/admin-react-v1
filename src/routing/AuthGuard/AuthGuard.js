import { useAuth } from 'context/userContext';
import Layout from 'layout';
import React, { useEffect } from 'react';
import { useLocation, Navigate, Outlet, useNavigate } from 'react-router-dom';
import paths from 'routing/Paths';
import Cookies from 'js-cookie';
import parseJWT from 'utils/parseJWT';
import { enableInterceptors } from 'utils/axios';
import { removeAuthTokens } from 'utils/authTokens';
import { refreshToken } from 'services/Auth';

const getToken = () => Cookies.get('token');
const role = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';

function AuthGuard() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleUnauthorizedRequest = () => {
      removeAuthTokens();
      navigate('/login');
    };
    const token = getToken();
    const decodedToken = parseJWT(token);
    // refreshToken({ refreshToken: token });
    // console.log(decodedToken.exp < Date.now() / 1000);
    if (token) {
      // console.log(location);

      setUser({
        name: decodedToken['given_name'],
        role: decodedToken[role],
      });
      enableInterceptors({
        handleUnauthorized: handleUnauthorizedRequest,
        refreshToken,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  if (user)
    return (
      <Layout>
        <Outlet />
      </Layout>
    );

  return <Navigate to={paths.auth.login} state={{ from: location }} replace />;
}

export default AuthGuard;
