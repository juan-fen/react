// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 🚨 You must replace 'your-repository-name' with the EXACT name
// of your GitHub repository. It must start and end with a slash!
const repoName = "/react/";

export default defineConfig({
  plugins: [react()],
  // Use the repository name as the base path
  base: repoName,
});
