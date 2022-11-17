let routes = {
  path: "membership",
  children: [
    {
      path: "",
      name: "membership-index",
      component: () => import("@/views/customer/membership/IndexView.vue"),
    },
  ],
};

routes.children = routes.children.map(({ path, name, component }) => {
  return {
    path,
    name: "customer-" + name,
    component,
    meta: {
      role: "customer",
    },
  };
});

export default routes;
