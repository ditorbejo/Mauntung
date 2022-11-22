let routes = {
  path: "/merchant",
  children: [
    {
      path: "",
      name: "home",
      component: () => import("@/views/merchant/HomeView.vue"),
      meta: {
        showNavbar: true,
        showQRScannerButton: true,
      },
    },
    {
      path: "history",
      name: "history",
      component: () => import("@/views/merchant/HistoryView.vue"),
      meta: {
        showNavbar: true,
        showQRScannerButton: true,
      },
    },
    {
      path: "profile",
      name: "profile",
      component: () => import("@/views/merchant/ProfileView.vue"),
      meta: {
        showNavbar: true,
        showQRScannerButton: true,
      },
    },
    {
      path: "report",
      name: "report",
      component: () => import("@/views/merchant/ReportView.vue"),
      meta: {
        showNavbar: true,
        showQRScannerButton: true,
      },
    },
    {
      path: "generate-code",
      name: "generate-code",
      component: () => import("@/views/merchant/GeneratePointCodeView.vue"),
      meta: {
        showNavbar: false,
        showQRScannerButton: false,
      },
    },
  ],
  meta: {
    role: "merchant",
  },
};

routes.children = routes.children.map(({ path, name, component, meta }) => {
  return {
    path,
    name: "merchant-" + name,
    component,
    meta: {
      ...meta,
      role: "merchant",
    },
  };
});

export default routes;
