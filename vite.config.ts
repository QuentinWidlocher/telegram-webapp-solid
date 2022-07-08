import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

const baseConfig = {
  plugins: [solidPlugin()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
};

export default defineConfig(({ mode }) => {
  console.log("mode:", mode);

  if (mode == "production") {
    return {
      ...baseConfig,
      build: {
        ...baseConfig.build,
        lib: {
          entry: "src/index.ts",
          name: "telegram-webapp-solid",
        },
        rollupOptions: {
          external: ["solidJs"],
        },
      },
    };
  } else {
    return baseConfig;
  }
});
