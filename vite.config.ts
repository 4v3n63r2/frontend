import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: ['.loca.lt', '.lhr.life', 'localhost', '127.0.0.1']
  }
});
