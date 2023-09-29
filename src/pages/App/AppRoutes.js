import paths from 'routing/Paths';
import Home from './Home';
import BlogRoutes from './Blog';

const AppRoutes = [
  {
    path: paths.app.home,
    component: Home,
  },
  {
    path: paths.app.navigation,
    component: Home,
  },

  ...BlogRoutes,
];
export default AppRoutes;
