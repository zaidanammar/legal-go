import tsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      include: ['src/lib/utils/**/**.{ts,tsx,js,jsx}'],
    },
  },
  plugins: [tsConfigPaths()],
});
