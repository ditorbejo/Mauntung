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
      path: "profile/edit",
      name: "profile-edit",
      component: () => import("@/views/merchant/EditProfileView.vue"),
      meta: {
        showNavbar: false,
        showQRScannerButton: false,
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
    {
      path: "membership/create",
      name: "membership-create",
      component: () => import("@/views/merchant/membership/CreateView.vue"),
    },
    {
      path: "register",
      name: "register",
      component: () => import("@/views/merchant/RegisterView.vue"),
    },
    {
      path: "login",
      name: "login",
      component: () => import("@/views/merchant/LoginView.vue"),
    },
    {
      path: "scanner",
      name: "scanner",
      component: () => import("@/views/merchant/CustomerCodeScannerView.vue"),
    },
    {
      path: "topup-point",
      name: "topup-point",
      component: () => import("@/views/merchant/TopupPointView.vue"),
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
