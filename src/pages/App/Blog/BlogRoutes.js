import paths from 'routing/Paths';
import Browse from './Browse';
import Create from './Create';

const BlogRoutes = [
  {
    path: paths.app.blog.create,
    component: Create,
    exact: true,
  },
  {
    path: paths.app.blog.browse,
    component: Browse,
    exact: true,
  },
];
export default BlogRoutes;
