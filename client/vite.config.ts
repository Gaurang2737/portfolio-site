import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "../shared"), // adjust if shared is still outside
    },
  },
  build: {
    outDir: "dist",
  emptyOutDir: true,
  },
});
