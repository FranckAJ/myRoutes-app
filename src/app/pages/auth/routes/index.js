import Register from '../layouts/Register';
import Login from '../layouts/Login';

export default [
  {
    name: 'login',
    path: '/login',
    component: Login,
    meta: {
      requiresAuth: false
    }
  },

  {
    name: 'register',
    path: '/register',
    component: Register,
    meta: {
      requiresAuth: false
    }
  }
]
