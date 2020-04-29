import { amendRouter } from '@/helpers/utils';

const rs = {
  path: 'home',
  name: 'home',
  component: () => import(/* webpackChunkName: "home" */ './container.vue'),
  children: [
    {
      path: '/',
      meta: { txt: 'Dashboard', keepAlive: true, isBack: true },
      component: () => import(/* webpackChunkName: "home" */'./index.vue')
    },
    {
      path: "forms",
      name: "forms",
      meta: {txt: 'forms',sub:true},
      children: [
        {
          path: 'formBasic',
          name: 'formBasic',
          meta: { txt: 'formBasic'},
          component: () => import(/* webpackChunkName: "home" */'../forms/formBasic.vue')
        },
        {
          path: 'formWizard',
          name: 'formWizard',
          meta: { txt: 'formWizard', },
          component: () => import(/* webpackChunkName: "home" */'../forms/formWizard.vue')
        },
      ]
    },
  ],
};

export default amendRouter(rs);
