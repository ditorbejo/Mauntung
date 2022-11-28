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
      path: "profile/edit",
      name: "profile-edit",
      component: () => import("@/views/customer/EditProfileView.vue"),
      meta: {
        showNavbar: false,
        showQRScannerButton: false,
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
    {
      path: "scanner",
      name: "scanner",
      component: () => import("@/views/customer/PointCodeScannerView.vue"),
      meta: {
        showNavbar: false,
        showQRScannerButton: false,
      },
    },
    {
      path: "claim",
      name: "claim",
      component: () => import("@/views/customer/ClaimPointView.vue"),
      meta: {
        showNavbar: false,
        showQRScannerButton: false,
      },
    },
    {
      path: "code",
      name: "code",
      component: () => import("@/views/customer/CustomerCodeView.vue"),
      meta: {
        showNavbar: false,
        showQRScannerButton: false,
      },
    },
    {
      path: "redeems/:redeem",
      name: "redeems-detail",
      component: () => import("@/views/customer/RedeemDetailView.vue"),
      meta: {
        showNavbar: false,
        showQRScannerButton: false,
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
