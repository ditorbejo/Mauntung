import { createRouter, createWebHistory } from "vue-router";
import merchantRoutes from "./merchant";
import customerRoutes from "./customer";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [merchantRoutes, customerRoutes],
});

export default router;
