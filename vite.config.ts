import { defineConfig } from "@solidjs/start/config";
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
     // @ts-ignore
  plugins: [tsconfigPaths({ root: './' })],
})
