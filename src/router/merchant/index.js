let routes = {
  path: "/merchant",
  children: [
    {
      path: "",
      name: "home",
      component: () => import("@/views/merchant/HomeView.vue"),
    },
    {
      path: "history",
      name: "history",
      component: () => import("@/views/merchant/HistoryView.vue"),
    },
    {
      path: "profile",
      name: "profile",
      component: () => import("@/views/merchant/ProfileView.vue"),
    },
    {
      path: "report",
      name: "report",
      component: () => import("@/views/merchant/ReportView.vue"),
    },
  ],
  meta: {
    role: "merchant",
  },
};

routes.children = routes.children.map(({ path, name, component }) => {
  return {
    path,
    name: "merchant-" + name,
    component,
    meta: {
      role: "merchant",
    },
  };
});

export default routes;
