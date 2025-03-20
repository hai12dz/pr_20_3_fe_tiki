import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";

import dns from 'dns'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/server-options.html#server-options
dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: Number(process.env.PORT) || 3000, // Đọc cổng từ biến môi trường
    host: "0.0.0.0", // Để lắng nghe trên tất cả địa chỉ mạng
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern"
        silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import']
      }
    }
  }
})

