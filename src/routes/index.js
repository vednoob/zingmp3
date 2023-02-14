// Lauouts
import { PersonalManageLayout } from '~/components/Layout';

import Explore from '~/pages/Explore';
import Personal from '~/pages/Personal';
import ZingChart from '~/pages/Zingchart';
import PersonalManage from '~/pages/PersonalManage';

// Public Routes
const publicRoutes = [
  {
    path: '/',
    conponents: Personal,
  },
  {
    path: '/zingchart',
    conponents: ZingChart,
  },
  {
    path: '/explore',
    conponents: Explore,
  },
  {
    path: '/personalmanage',
    conponents: PersonalManage,
    layout: PersonalManageLayout,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
