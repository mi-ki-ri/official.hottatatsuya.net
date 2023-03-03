import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "top",
    component: async () => {
      const top = await import("../pages/Top.vue");
      return top;
    },
  },
  {
    path: "/filter/:id",
    component: async () => {
      const top = await import("../pages/Top.vue");
      return top;
    },
  },
  {
    path: "/article/:id",
    component: async () => {
      const single = await import("../pages/Article.vue");
      return single;
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
