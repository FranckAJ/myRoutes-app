import {routes as auth} from '../pages/auth'
import {routes as home} from '../pages/home'
import {routes as trips} from "../pages/trip";

export default [
  ...auth,
  ...home,
  ...trips
]
