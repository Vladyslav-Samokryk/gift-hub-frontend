import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";

const publicDir = resolve(__dirname, "./public");

// https://vitejs.dev/config/
export default defineConfig({
  publicDir,
  plugins: [react(), tsconfigPaths()],
  // dev new port
  server: {
    port: 3000,
  },
  // prod new port
  preview: {
    port: 3000,
  },
});
