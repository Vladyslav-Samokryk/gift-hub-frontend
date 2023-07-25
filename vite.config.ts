import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path";

const publicDir = resolve(__dirname, "./public");

const root = resolve(__dirname, "./src");

const appDir = resolve(root, "./app");
const pagesDir = resolve(root, "./pages");
const sharedDir = resolve(root, "./shared");
const assetsDir = resolve(sharedDir, "./assets");

// https://vitejs.dev/config/
export default defineConfig({
  publicDir,
  plugins: [react()],
  resolve: {
    alias: {
      "@src": root,
      "@app": appDir,
      "@assets": assetsDir,
      "@shared": sharedDir,
      "@pages": pagesDir,
    },
  },
  // dev new port
  server: {
    port: 3000,
  },
  // prod new port
  preview: {
    port: 3000,
  },
})
