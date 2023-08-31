// import react from '@vitejs/plugin-react';
import react from '@vitejs/plugin-react-swc';
// import jotaiDebugLabel from 'jotai/babel/plugin-debug-label';
// import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh';
import path from 'path';
import UnoCSS from 'unocss/vite';
import { AliasOptions, defineConfig } from 'vite';

const alias: AliasOptions = {
  '@/': path.resolve(__dirname, 'src').concat('/'),
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias,
  },
  plugins: [
    react({
      /*babel: {
        plugins: [jotaiDebugLabel, jotaiReactRefresh],
      },*/
      plugins: [
        ['@swc-jotai/react-refresh', {}],
        ['@swc-jotai/debug-label', {}],
      ],
    }),
    UnoCSS(),
  ],
});
