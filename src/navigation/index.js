import { Article, Home, Navigation } from '@mui/icons-material';
import paths from 'routing/Paths';

const navigation = [
  { header: 'Layout' },
  {
    id: 'home',
    title: 'Home',
    icon: <Home />,
    url: '/app/home',
  },
  {
    id: 'navigation',
    title: 'Navigation',
    icon: <Navigation />,
    url: '/app/navigation',
  },
  {
    id: 'blog',
    title: 'Blog',
    icon: <Article />,
    children: [
      {
        id: 'blogCreate',
        title: 'Create',
        url: paths.app.blog.create,
        exact: false,
      },
      {
        id: 'blogBrowse',
        title: 'Browse',
        url: paths.app.blog.browse,
        exact: true,
      },
    ],
  },
];

export default navigation;
