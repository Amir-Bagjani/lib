/// <reference types="vite/client" />
import path, { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { globSync } from 'glob'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      insertTypesEntry: true,
      outDir: 'dist/',
      tsconfigPath: './tsconfig.app.json',
      exclude: ['**/*.stories.tsx', 'src/test', '**/*.test.tsx'],
    }),
  ],
  build: {
    cssCodeSplit: true, 
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        // button: resolve(__dirname, 'src/components/button/index.ts')
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      input: Object.fromEntries(
        globSync(['src/components/**/index.tsx', 'src/index.ts']).map((file) => {
          const entryName = path.relative(
            'src',
            file.slice(0, file.length - path.extname(file).length)
          )
          const entryUrl = fileURLToPath(new URL(file, import.meta.url))
          return [entryName, entryUrl]
        })
      ),
      output: {
        chunkFileNames: 'chunks/[name].[hash].js',
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name][extname]',
        preserveModules: false,
        globals: {
          react: 'React',
          'react-dom': 'React-dom',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
})
