import Vue from 'vue'
import VueRouter from 'vue-router'
import appRoutes from './routes'

Vue.use(VueRouter);

const routes = [
  {
    name: 'home',
    path: '/',
    redirect: {
      name: 'login'
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
  next();
});


export default router
