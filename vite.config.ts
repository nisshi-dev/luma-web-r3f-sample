import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === "production"
      ? "/luma-web-r3f-sample/"
      : "/",
    plugins: [react()],
  }
});
