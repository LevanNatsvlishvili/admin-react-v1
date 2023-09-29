import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import React from 'react';
import { UserProvider } from 'context/userContext';
import AuthGuard from 'routing/AuthGuard';
import { AppRoutes, GuestRoutes } from 'pages';

function Routing() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route element={<AuthGuard />}>
            {AppRoutes.map((route, i) => (
              <Route
                exact={route.exact}
                path={route.path}
                element={<route.component />}
                key={i}
              />
            ))}
          </Route>
          <Route path="/" exact element={<Navigate to="/login" />} />

          {GuestRoutes.map((route, i) => (
            <Route
              key={i}
              exact={route.exact}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default Routing;
