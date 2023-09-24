import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const ASSET_URL = process.env.ASSET_URL || "";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/social_media_app",
  base: `${ASSET_URL}/`,
});
