import {
  defineConfig
} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  plugins: [
    react(),
    {
      ...commonjs({
        include: /node_modules/,
        transformMixedEsModules: true,
      }),
      apply: 'build'
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
