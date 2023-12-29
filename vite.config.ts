import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === "production"
      ? "/luma-three-testbed/"
      : "/",
    plugins: [react()],
  }
});
