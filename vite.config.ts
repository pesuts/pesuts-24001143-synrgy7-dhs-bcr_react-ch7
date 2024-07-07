import {
  // Plugin,
  defineConfig
} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import commonjs from 'vite-plugin-commonjs';
// import legacy from '@vitejs/plugin-legacy';
// import externalGlobals from 'vite-plugin-externals';
import commonjs from '@rollup/plugin-commonjs';
// import externalGlobals from 'vite-plugin-externals';

// function globalJquery(): Plugin {
//   return {
//     name: 'global-jquery',
//     enforce: 'pre',
//     transform(code, id) {
//       if (/\.(js|ts|jsx|tsx)$/.test(id)) {
//         return {
//           code: `import $ from 'jquery'; import jQuery from 'jquery'; window.$ = $; window.jQuery = jQuery;\n${code}`,
//           map: null,
//         };
//       }
//       return null;
//     },
//   };
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // legacy({
    //   targets: ['defaults', 'not IE 11'],
    // }),
    // commonjs(),
    // commonjs({
    //   include: 'node_modules/**',
    //   transformMixedEsModules: true,
    //   // Ini membantu menangani modul yang berisi campuran CommonJS dan ESM
    // }),
    {
      ...commonjs({
        include: /node_modules/,
        transformMixedEsModules: true,
      }),
      apply: 'build'
    },
    // commonjs(),
    // globalJquery(),
    // externalGlobals({
    //   jquery: '$' // atau gunakan 'jQuery' jika Anda ingin
    // })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
