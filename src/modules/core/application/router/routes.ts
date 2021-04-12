import Home from '../../presentation/pages/Home.vue';
import { counterRoutes } from '../../../counter/application/router';

export const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  ...counterRoutes
];
