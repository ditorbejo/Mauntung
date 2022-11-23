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
