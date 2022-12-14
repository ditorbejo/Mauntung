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
      path: ":membership",
      name: "membership-detail",
      component: () => import("@/views/customer/membership/DetailView.vue"),
      meta: {
        showNavbar: true,
        showQRScannerButton: false,
      },
    },
    {
      path: ":membership/rewards",
      name: "membership-rewards",
      component: () => import("@/views/customer/membership/RewardsView.vue"),
      meta: {
        showNavbar: true,
        showQRScannerButton: false,
      },
    },
    {
      path: ":membership/redeems",
      name: "membership-redeems",
      component: () => import("@/views/customer/RewardsView.vue"),
      meta: {
        showNavbar: true,
        showQRScannerButton: false,
      },
    },
    {
      path: ":membership/rewards/:reward",
      name: "membership-rewards-detail",
      component: () => import("@/views/customer/RewardDetailView.vue"),
      meta: {
        showNavbar: false,
        showQRScannerButton: false,
      },
    },
    {
      path: ":membership/join",
      name: "membership-join",
      component: () => import("@/views/customer/membership/JoinView.vue"),
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
