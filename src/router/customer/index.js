let routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../../views/customer/HomeView.vue"),
  },
  {
    path: "/history",
    name: "history",
    component: () => import("../../views/customer/HistoryView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../../views/customer/ProfileView.vue"),
  },
  {
    path: "/rewards",
    name: "rewards",
    component: () => import("../../views/customer/RewardsView.vue"),
  },
];

routes = routes.map(({ path, name, component }) => {
  return {
    path: "/customer" + path,
    name: "customer-" + name,
    component,
  };
});

export default routes;
