const paths = {
  auth: {
    login: '/login',
  },
  app: {
    home: '/app/home',
    navigation: '/app/navigation',
    blog: {
      browse: '/app/blog',
      create: '/app/blog/create',
    },
  },
  errors: {
    notAuthorized: '/not-authorized',
    notAuthorizedLogged: '/app/not-authorized',
    error: '/error',
  },
};

export default paths;
