import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: { postcss: { plugins: [tailwindcss()] } },
  server: {
    proxy: {
      "/api": "https://moneyfulpublicpolicy.co.kr",
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          todo: ["./src/components/todo/Todo"],
          todos: ["./src/components/todos/Todos"],
        },
      },
    },
  },
});
