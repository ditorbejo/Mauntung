import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "api-client":
          process.env.VITE_API_CLIENT === "mock"
            ? fileURLToPath(new URL("./src/api/mock", import.meta.url))
            : fileURLToPath(new URL("./src/api/server", import.meta.url)),
      },
    },
    server: {
      port: 3000,
    },
  });
};
