import { createRouter, createWebHistory } from "vue-router";
import merchantRoutes from "./merchant";
import customerRoutes from "./customer";

const landingPageRoute = {
  path: "",
  name: "landing",
  component: () => import("@/views/LandingPage.vue"),
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [landingPageRoute, merchantRoutes, customerRoutes],
  scrollBehavior: () => {
    return { top: 0 };
  },
});

export default router;
