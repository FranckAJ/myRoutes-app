import Home from '../layouts/Home';

export default [
  {
    name: 'home',
    path: '/home',
    component: Home,
    meta: {
      isPublic: true,
      requiresAuth: true
    }
  }
]
