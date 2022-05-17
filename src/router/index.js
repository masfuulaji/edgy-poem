import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Default",
    component: () => import("@/components/layouts/App.vue"),
    // children: [
    //   {
    //     path: "",
    //     name: "Home",
    //     component: () => import("@/views/dashboard/index.vue"),
    //   },
    // ],
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("@/views/error/404.vue"),
    meta: { NotFound: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
