import paths from 'routing/Paths';
import Login from './Login';

const AppRoutes = [
  {
    path: paths.auth.login,
    exact: false,
    component: Login,
  },
];
export default AppRoutes;
