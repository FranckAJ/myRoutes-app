import Trips from '../layouts/Trips';

export default [
  {
    name: 'trips',
    path: '/trips',
    component: Trips,
    meta: {
      isPublic: false,
      requiresAuth: true
    }
  }
]
