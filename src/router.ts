import Vue from 'vue';
import Router from 'vue-router';
import api from './utils/api';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/Home.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "login" */ './views/Login.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () =>
        import(/* webpackChunkName: "signup" */ './views/Signup.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () =>
        import(/* webpackChunkName: "user" */ './views/User.vue'),
      props: true,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/chat',
      name: 'chat',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/Chat.vue'),
      props: (route) => ({
        cid: String(route.params.cid),
      }),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/search',
      name: 'search',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/Search.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/request',
      name: 'request',
      component: () =>
        import(/* webpackChunkName: "request" */ './views/Request.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: () =>
        import(/* webpackChunkName: "mypage" */ './views/Me.vue'),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     api
//       .getMe()
//       .then(() => {
//         next();
//       })
//       .catch(() => {
//         next('/');
//       });
//   } else {
//     next();
//   }
// });

export default router;
