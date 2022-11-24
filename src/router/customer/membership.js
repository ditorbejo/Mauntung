let routes = {
  path: "membership",
  children: [
    {
      path: "",
      name: "membership-index",
      component: () => import("@/views/customer/membership/IndexView.vue"),
      meta: {
        showNavbar: true,
        showQRScannerButton: false,
      },
    },
    {
      path: ":id",
      name: "membership-detail",
      component: () => import("@/views/customer/membership/DetailView.vue"),
      meta: {
        showNavbar: true,
        showQRScannerButton: false,
      },
    },
    {
      path: ":id/rewards",
      name: "membership-rewards",
      component: () => import("@/views/customer/membership/RewardsView.vue"),
      meta: {
        showNavbar: true,
        showQRScannerButton: false,
      },
    },
    {
      path: ":id/redeems",
      name: "membership-redeems",
      component: () => import("@/views/customer/RewardsView.vue"),
      meta: {
        showNavbar: true,
        showQRScannerButton: false,
      },
    },
  ],
};

routes.children = routes.children.map(({ path, name, component, meta }) => {
  return {
    path,
    name: "customer-" + name,
    component,
    meta: {
      ...meta,
      role: "customer",
    },
  };
});

export default routes;
