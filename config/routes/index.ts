import homeRoutes from './Home';
import groupsRoutes from './Groups';

export default [
  { path: '/', redirect: 'dashboard' },
  { path: '/', component: '@/layouts/Basic', routes: homeRoutes },
  groupsRoutes,
];
