import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";
import { ManifestV3Export, crx } from "@crxjs/vite-plugin";
import manifestJson from "./public/manifest.json";
import eslint from 'vite-plugin-eslint';



const manifest = manifestJson as ManifestV3Export;




// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(),
     react(),
      eslint(),
      crx({ manifest }),
     ]
      ,
  build: {
    rollupOptions: {
      input: {
        popup: './index.html',
      
      }
    }
  }
});
