import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
export default defineConfig({
  plugins: [solidPlugin(), vanillaExtractPlugin({ identifiers: "debug" })],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
