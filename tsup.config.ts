import { defineConfig, type Options } from 'tsup';
import fs from 'node:fs';

const banner = `/**
 * @license MIT
 *
 * Copyright (c) YEAR REPLACE_ME_PLEASE
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */`;

const DEFAULT_OPTIONS: Options = {
  entry: [],
  banner: {
    js: banner,
  },
  clean: true,
  outDir: './dist',
  splitting: false,
  sourcemap: false,
  format: [],
  target: 'esnext',
  platform: 'browser',
  treeshake: true,
  dts: true,
  minify: false,
  env: {
    NODE_ENV: process.env.NODE_ENV ?? 'development',
    VERSION: JSON.parse(fs.readFileSync('package.json', 'utf8')).version,
  },
  external: [],
};

export default defineConfig([
  {
    ...DEFAULT_OPTIONS,
    format: ['esm', 'cjs'],
    entry: ['./src/index.ts'],
  },
  {
    ...DEFAULT_OPTIONS,
    format: ['iife'],
    outDir: './dist',
    minify: process.env.NODE_ENV === 'production' ? 'terser' : false,
    globalName: 'REPLACE_ME_PLEASE',
    entry: ['./src/index.ts'],
  },
]);
