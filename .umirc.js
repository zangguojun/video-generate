export default {
  npmClient: 'pnpm',
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7000/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '视频模板',
      path: '/video-template',
      component: './VideoTemplate',
    },
  ],
};
