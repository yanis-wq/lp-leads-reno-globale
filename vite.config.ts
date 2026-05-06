import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  plugins: [componentTagger()],
  vite: {
    server: {
      host: "::",
      port: 8080,
      hmr: { overlay: false },
    },
  },
});
