import { defineConfig } from 'vite';
import testPlugin from '../../src/index';
import ViteRestart from 'vite-plugin-restart';

export default defineConfig({
  plugins: [
    testPlugin(),
    ViteRestart({
      restart: ['../../src/index.ts', '../../src/inject_template.ts'],
    }),
  ],
  server: {
    host: '127.0.0.1',
  },
});
