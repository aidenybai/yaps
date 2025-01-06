import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  resolve:
    process.env.NODE_ENV === 'production'
      ? {}
      : {
          alias: {
            ['REPLACE_ME_PLEASE']: path.resolve(__dirname, '..'),
          },
        },
});
