import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/Home.vue'),
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
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () =>
        import(/* webpackChunkName: "user" */ './views/User.vue'),
      props: true,
    },
    {
      path: '/chat',
      name: 'chat',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/Chat.vue'),
      props: (route) => ({
        cid: String(route.params.cid),
      }),
    },
    {
      path: '/search',
      name: 'search',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/Search.vue'),
    },
    {
      path: '/request',
      name: 'request',
      component: () =>
        import(/* webpackChunkName: "request" */ './views/Request.vue'),
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: () =>
        import(/* webpackChunkName: "mypage" */ './views/Me.vue'),
    },
  ],
});
