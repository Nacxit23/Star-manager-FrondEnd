import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const vueRouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes: [
    {
      name: 'singUp',
      path: '/singUp',
      component: () => import('@/views/SingUp' /* webpackChunkName: "SingUp"*/),
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/Login' /* webpackChunkName: "Login"*/),
    },
    {
      name: 'home',
      path: '/home',
      component: () => import('@/views/home' /* webpackChunkName: "home"*/),

      children: [
        {
          name: 'starManager',
          path: '/home/star-manager',
          component: () =>
            import('./views/StarManager' /*webpackChunkName: "starlist" */),
        },
        {
          name: 'NoPaidStars',
          path: '/home/no-paid-stars-list/:status',
          component: () =>
            import('./views/StarManager' /*webpackChunkName: "starlist" */),
        },
        {
          name: 'PaidStarList',
          path: '/home/paid-stars-list/:status',
          component: () =>
            import('./views/PaidStar' /*webpackChunkName: "PaidStar" */),
        },
        {
          name: 'AssignStar',
          path: '/home/assign-star',
          component: () =>
            import('@/views/AssignStar' /* webpackChunkName: "CreateStar" */),
        },
        {
          path: '/home/events',
          name: 'events',
          component: () =>
            import(/*webpackChunkName: "events" */ '@/views/Events'),
        },
        {
          path: '/home/events/:id',
          name: 'event',
          component: () =>
            import(/*webpackChunkName: "comments" */ '@/views/Comments'),
        },
        {
          name: 'adminUsers',
          path: '/home/admin-users',
          component: () =>
            import('@/views/AdminUsers' /* webpackChunkName: "AdminUsers" */),
        },
      ],
    },
    {
      path: '*',
      redirect: '/login',
    },
  ],
});

vueRouter.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token');
  if (to.fullPath === '/login') {
    if (token) {
      next('/home/star-manager');
    }
  }
  if (to.fullPath === '/home') {
    if (!token) {
      next('/login');
    }
  }
  next();
});

export default vueRouter;
