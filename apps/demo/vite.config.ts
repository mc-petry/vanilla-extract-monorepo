import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(async ({ command }) => {
  return {
    plugins: [react(), vanillaExtractPlugin()],
    resolve: {
      alias: [
        {
          // Resolve local packages
          find: /^@pkg\/(.+)$/,
          replacement: `${path.resolve(
            __dirname,
            "../../packages"
          )}/$1/src/index.ts`,
        },
      ],
    },
  };
});
