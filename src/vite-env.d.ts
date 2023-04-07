/// <reference types="vite/client" />
declare interface Window {
  fakeStorage: any;
}

// ts只支持导出导入模块，但是vue不是模块，我们需要申明一下vue是个模块，
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
