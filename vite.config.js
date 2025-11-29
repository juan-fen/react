// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace 'your-repository-name' with the EXACT name of your GitHub repo
const repoName = "/react/";

export default defineConfig({
  plugins: [react()],
  // 💡 THIS LINE FIXES THE 404 ASSET ISSUE
  base: repoName,
});
