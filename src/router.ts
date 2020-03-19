import Vue from 'vue';
import Router from 'vue-router';
import MainLayout from './views/MainLayout.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'login' },
    },
    {
      path: '/',
      component: MainLayout,
      redirect: { name: 'home-prize' },
      // children: [
      //   require('./views/Home/router').default,
      //   require('./views/Market/router').default,
      //   require('./views/Channel/router').default,
      //   // require('./views/Transport/router').default,
      //   require('./views/Customer/router').default,
      //   require('./views/Management/router').default,
      // ],
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
