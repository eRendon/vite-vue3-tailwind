import { RouteRecordRaw } from 'vue-router';

// layouts

// views for Admin layout

import Dashboard from '@/views/admin/Dashboard/Dashboard.vue';
import Settings from '@/views/admin/settings/Settings.vue';
import Tables from '@/views/admin/tables/Tables.vue';
import Maps from '@/views/admin/Maps.vue';

// views for Auth layout

import Login from '@/views/auth/login/Login.vue';
import Register from '@/views/auth/register/Register.vue';

// views without layouts

import Landing from '@/views/Landing.vue';
import Profile from '@/views/Profile.vue';
import Index from '@/views/Index.vue';
import Auth from '../layout/Auth.vue';
import Admin from '../layout/Admin.vue';
import Home from '../views/home/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'index',
    component: Index,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../layout/MainLayout/MainLayout.vue'),
  },
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    component: Admin,
    children: [
      {
        path: '/admin/dashboard',
        name: 'DashBoard',
        component: Dashboard,
      },
      {
        path: '/admin/settings',
        component: Settings,
      },
      {
        path: '/admin/tables',
        component: Tables,
      },
      {
        path: '/admin/maps',
        component: Maps,
      },
      {
        path: '/admin/pos',
        name: 'pos',
        component: Home,
      },
    ],
  },
  {
    path: '/auth',
    redirect: '/auth/login',
    component: Auth,
    children: [
      {
        path: '/auth/login',
        component: Login,
      },
      {
        path: '/auth/register',
        component: Register,
      },
    ],
  },
  {
    path: '/landing',
    component: Landing,
  },
  {
    path: '/profile',
    component: Profile,
  },
  { path: '/:pathMatch(.*)*', redirect: '/auth/login' },
];

export default routes;
