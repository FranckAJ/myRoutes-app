import Login from '../layouts/Login';


export default [
  {
    name: 'login',
    path: '/login',
    component: Login,
    meta: {
      requiresAuth: false
    }
  }
]
