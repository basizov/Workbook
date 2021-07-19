import { createRouter, createWebHistory, RouteRecordRaw, RouterHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/components/routes/TheHome.vue')
  }
];

const history: RouterHistory = createWebHistory(process.env.BASE_URL);

const router = createRouter({
  history,
  routes
});

export default  router;
