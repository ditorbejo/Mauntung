import membershipRoutes from "./membership";

let routes = {
  path: "/customer",
  children: [
    {
      path: "",
      name: "home",
      component: () => import("@/views/customer/HomeView.vue"),
    },
    {
      path: "history",
      name: "history",
      component: () => import("@/views/customer/HistoryView.vue"),
    },
    {
      path: "profile",
      name: "profile",
      component: () => import("@/views/customer/ProfileView.vue"),
    },
    {
      path: "rewards",
      name: "rewards",
      component: () => import("@/views/customer/RewardsView.vue"),
    },
    membershipRoutes,
  ],
  meta: {
    role: "customer",
  },
};

routes.children = routes.children.map(({ path, name, component, children }) => {
  return {
    path,
    name: "customer-" + name,
    component,
    meta: {
      role: "customer",
    },
    children,
  };
});

export default routes;
