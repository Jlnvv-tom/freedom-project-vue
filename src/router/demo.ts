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
  {
    path: "/demo/1024-game",
    name: "demo.1024-game",
    meta: { title: "2048小游戏页面" },
    component: import("@/views/demo/1024-game/index.vue"),
  },
  {
    path: "/test-page/tree",
    name: "test-page.tree",
    meta: { title: "拖拽树测试示例" },
    component: import("@/views/test-page/tree/index.vue"),
  },
  {
    path: "/demo/ground-glass",
    name: "demo.ground-glass",
    meta: { title: "毛玻璃示例" },
    component: import("@/views/demo/css-collect/ground-glass.vue"),
  },
  {
    path: "/demo/ground-glass-2",
    name: "demo.ground-glass-2",
    meta: { title: "毛玻璃示例2" },
    component: import("@/views/demo/css-collect/ground-glass-2.vue"),
  },
  {
    path: "/demo/flex-layout",
    name: "demo.flex-layout",
    meta: { title: "flex布局" },
    component: import("@/views/demo/css-collect/flex/index.vue"),
  },
  {
    path: "/demo/transition-transform",
    name: "demo.transition.transform",
    meta: { title: "transition" },
    component: import(
      "@/views/demo/css-collect/transition-transform/index.vue"
    ),
  },
  {
    path: "/test-page/custom-event",
    name: "test-page.custom-event",
    meta: { title: "拖拽树测试示例" },
    component: import("@/views/test-page/event/index.vue"),
  },
];
