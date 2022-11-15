let routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../../views/merchant/HomeView.vue"),
  },
  {
    path: "/history",
    name: "history",
    component: () => import("../../views/merchant/HistoryView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../../views/merchant/ProfileView.vue"),
  },
  {
    path: "/report",
    name: "report",
    component: () => import("../../views/merchant/ReportView.vue"),
  },
];

routes = routes.map(({ path, name, component }) => {
  return {
    path: "/merchant" + path,
    name: "merchant-" + name,
    component,
  };
});

export default routes;
