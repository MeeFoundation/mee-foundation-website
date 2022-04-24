import * as path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from "vite-plugin-svgr";
import checker from "vite-plugin-checker";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
          files: ["./src"],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    }),
    visualizer({ gzipSize: true }),
    svgrPlugin(),
  ],
  resolve: {
    alias: [{ find: "src", replacement: path.resolve(__dirname, "src") }],
  },
})
