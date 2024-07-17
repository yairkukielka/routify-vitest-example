import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import routify from "@roxi/routify/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), routify({})],
  test: {
    environment: "jsdom",
    // setupFiles: ["./vitest-setup.js"],
    // pool: "forks", // this will be the default in Vitest 2.0
    globals: true,
  },
});
