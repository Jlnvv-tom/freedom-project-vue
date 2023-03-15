import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    meta: { title: "首页" },
    component: import("@/views/home/index.vue"),
  },
  {
    path: "/show",
    name: "show",
    meta: { title: "展示页" },
    component: import("@/views/home/show.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
