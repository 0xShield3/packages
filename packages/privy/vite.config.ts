import { defineConfig } from "vite";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  base: "./",
  plugins: [dts({ rollupTypes: true })],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "privy",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
  },
});
