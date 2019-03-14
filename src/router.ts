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
      path: '/login',
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
      path: '/chat/:cid',
      name: 'chat',
      component: () =>
        import(/* webpackChunkName: "chat" */ './views/Chat.vue'),
      props: true,
    },
    {
      path: '/search',
      name: 'search',
      component: () =>
        import(/* webpackChunkName: "chat" */ './views/Search.vue'),
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: () =>
        import(/* webpackChunkName: "mypage" */ './views/Me.vue'),
    },
  ],
});
