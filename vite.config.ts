import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

const baseConfig = {
  plugins: [
    solidPlugin({
      dev: true,
    }),
  ],
  build: {
    target: 'ESNEXT',
    minify: false,
    polyfillDynamicImport: false,
  },
}

export default defineConfig(({ mode }) => {
  if (mode == 'production') {
    return {
      ...baseConfig,
      build: {
        ...baseConfig.build,
        lib: {
          entry: 'src/index.ts',
          name: 'telegram-webapp-solid',
          formats: ['es'],
        },
        sourcemap: true,

        rollupOptions: {
          external: ['solid-js'],
          output: {
            globals: {
              'solid-js': 'solid-js',
            },
          },
        },
      },
    }
  } else {
    return baseConfig
  }
})
