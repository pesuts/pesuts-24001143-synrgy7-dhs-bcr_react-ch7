import { Plugin, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

function globalJquery(): Plugin {
  return {
    name: 'global-jquery',
    enforce: 'pre',
    transform(code, id) {
      if (/\.(js|ts|jsx|tsx)$/.test(id)) {
        return {
          code: `import $ from 'jquery'; import jQuery from 'jquery'; window.$ = $; window.jQuery = jQuery;\n${code}`,
          map: null,
        };
      }
      return null;
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    globalJquery(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
