import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer"; // 依赖库体积分析插件
function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /\@\//, // @/xxxx => src/xxxx
        replacement: pathResolve("src") + "/",
      },
    ],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  server: {
    open: true,
  },
  plugins: [vue(), visualizer({ open: true })],
});
