// vite.config.ts
import react from "file:///Users/dustin.jourdan/Devs/legalgo-fe/node_modules/.pnpm/@vitejs+plugin-react-swc@3.7.1_vite@5.4.10_@types+node@20.17.3_/node_modules/@vitejs/plugin-react-swc/index.mjs";
import million from "file:///Users/dustin.jourdan/Devs/legalgo-fe/node_modules/.pnpm/million@3.1.11_rollup@4.24.3_webpack-sources@3.2.3/node_modules/million/dist/packages/compiler.mjs";
import { visualizer } from "file:///Users/dustin.jourdan/Devs/legalgo-fe/node_modules/.pnpm/rollup-plugin-visualizer@5.12.0_rollup@4.24.3/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import { defineConfig } from "file:///Users/dustin.jourdan/Devs/legalgo-fe/node_modules/.pnpm/vite@5.4.10_@types+node@20.17.3/node_modules/vite/dist/node/index.js";
import checker from "file:///Users/dustin.jourdan/Devs/legalgo-fe/node_modules/.pnpm/vite-plugin-checker@0.7.2_eslint@8.57.1_optionator@0.9.4_typescript@5.5.3_vite@5.4.10_@types+node@20.17.3_/node_modules/vite-plugin-checker/dist/esm/main.js";
import tsConfigPaths from "file:///Users/dustin.jourdan/Devs/legalgo-fe/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.5.3_vite@5.4.10_@types+node@20.17.3_/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    million.vite({ auto: true }),
    react(),
    checker({
      typescript: true,
      eslint: { lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"' }
    }),
    tsConfigPaths(),
    visualizer({ template: "sunburst" })
  ],
  server: {
    open: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZHVzdGluLmpvdXJkYW4vRGV2cy9sZWdhbGdvLWZlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZHVzdGluLmpvdXJkYW4vRGV2cy9sZWdhbGdvLWZlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9kdXN0aW4uam91cmRhbi9EZXZzL2xlZ2FsZ28tZmUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJztcbmltcG9ydCBtaWxsaW9uIGZyb20gJ21pbGxpb24vY29tcGlsZXInO1xuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tdmlzdWFsaXplcic7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB0eXBlIHsgUGx1Z2luT3B0aW9uIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgY2hlY2tlciBmcm9tICd2aXRlLXBsdWdpbi1jaGVja2VyJztcbmltcG9ydCB0c0NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIG1pbGxpb24udml0ZSh7IGF1dG86IHRydWUgfSksXG4gICAgcmVhY3QoKSxcbiAgICBjaGVja2VyKHtcbiAgICAgIHR5cGVzY3JpcHQ6IHRydWUsXG4gICAgICBlc2xpbnQ6IHsgbGludENvbW1hbmQ6ICdlc2xpbnQgXCIuL3NyYy8qKi8qLntqcyxqc3gsdHMsdHN4fVwiJyB9LFxuICAgIH0pLFxuICAgIHRzQ29uZmlnUGF0aHMoKSxcbiAgICB2aXN1YWxpemVyKHsgdGVtcGxhdGU6ICdzdW5idXJzdCcgfSkgYXMgdW5rbm93biBhcyBQbHVnaW5PcHRpb24sXG4gIF0sXG4gIHNlcnZlcjoge1xuICAgIG9wZW46IHRydWUsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVMsT0FBTyxXQUFXO0FBQ25ULE9BQU8sYUFBYTtBQUNwQixTQUFTLGtCQUFrQjtBQUMzQixTQUFTLG9CQUFvQjtBQUU3QixPQUFPLGFBQWE7QUFDcEIsT0FBTyxtQkFBbUI7QUFHMUIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsUUFBUSxLQUFLLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFBQSxJQUMzQixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixZQUFZO0FBQUEsTUFDWixRQUFRLEVBQUUsYUFBYSxzQ0FBc0M7QUFBQSxJQUMvRCxDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsSUFDZCxXQUFXLEVBQUUsVUFBVSxXQUFXLENBQUM7QUFBQSxFQUNyQztBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
