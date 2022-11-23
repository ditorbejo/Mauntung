import membershipRoutes from "./membership";

let routes = {
  path: "/customer",
  children: [
    {
      path: "",
      name: "home",
      component: () => import("@/views/customer/HomeView.vue"),
      meta: {
        showNavbar: true,
        showQRScannerButton: true,
      },
    },
    {
      path: "history",
      name: "history",
      component: () => import("@/views/customer/HistoryView.vue"),
      meta: {
        showNavbar: true,
        showQRScannerButton: true,
      },
    },
    {
      path: "profile",
      name: "profile",
      component: () => import("@/views/customer/ProfileView.vue"),
      meta: {
        showNavbar: true,
        showQRScannerButton: true,
      },
    },
    {
      path: "rewards",
      name: "rewards",
      component: () => import("@/views/customer/RewardsView.vue"),
      meta: {
        showNavbar: true,
        showQRScannerButton: true,
      },
    },
    membershipRoutes,
  ],
  meta: {
    role: "customer",
  },
};

routes.children = routes.children.map(
  ({ path, name, component, children, meta }) => {
    return {
      path,
      name: "customer-" + name,
      component,
      meta: {
        ...meta,
        role: "customer",
      },
      children,
    };
  }
);

export default routes;
