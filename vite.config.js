import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/electripedia-frontend/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // The template + Decanter SCSS (public/assets/scss) predates modern
        // sass; resolve bare imports from node_modules and silence legacy
        // deprecation noise so build output stays readable.
        loadPaths: ['node_modules'],
        quietDeps: true,
        silenceDeprecations: [
          'import',
          'global-builtin',
          'color-functions',
          'slash-div',
          'mixed-decls',
          'legacy-js-api',
          'abs-percent',
          'function-units',
        ],
      },
    },
  },
})
