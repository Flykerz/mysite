import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Remplacez par le nom de votre dépôt GitHub
const repoName = "mysite";

export default defineConfig({
  base: `/${repoName}/`, // Base URL pour GitHub Pages
  plugins: [react()],
});
