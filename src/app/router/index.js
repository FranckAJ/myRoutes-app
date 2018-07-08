import Vue from 'vue'
import VueRouter from 'vue-router'
import appRoutes from './routes'
import authService from './../services/Auth'

Vue.use(VueRouter);

const routes = [
  {
    name: 'base',
    path: '/',
    redirect: '/home',
    meta: {
      isPublic: true,
      requiresAuth: true
    }
  },
  ...appRoutes
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: '/'
})

router.beforeEach((to, from, next) => {
  let requiresAuth = to.meta.requiresAuth;
  authService.getUserConnected()
    .then((user) => {
      if (requiresAuth) {
        if (user) {
          next();
        } else {
          next({path: '/login'});
        }
      } else {
        next();
      }
    });
});


export default router
