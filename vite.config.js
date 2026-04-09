import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["0740-2406-b400-b4-1636-c1e0-ebbb-6ea1-dba1.ngrok-free.app"],
  },
});
