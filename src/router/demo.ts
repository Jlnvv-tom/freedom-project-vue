export const demoRoutes = [
  {
    path: "/demo/highlight",
    name: "demo.highlight",
    meta: { title: "搜索关键字高亮显示示例页" },
    component: import("@/views/demo/highlight/index.vue"),
  },
  {
    path: "/demo/select",
    name: "demo.select",
    meta: { title: "多选状态选中示例页" },
    component: import("@/views/demo/select/index.vue"),
  },
  {
    path: "/demo/heart",
    name: "demo.heart",
    meta: { title: "心脏跳动页面" },
    component: import("@/views/demo/heart/index.vue"),
  },
];
