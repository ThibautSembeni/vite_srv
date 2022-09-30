import { defineConfig } from "vite"
import { resolve } from "path"
import { createHtmlPlugin } from 'vite-plugin-html'


export default defineConfig({
    root: resolve("src"),
    server: {
        port: 8000,
        host: "0.0.0.0"
    },
    css: {
        preprocessorOptions: {
            scss: {
                quietDeps: true
            },
        }
    },
    plugins: [
        createHtmlPlugin({
            minify: true,
            inject: {
              data: {
                title: 'index',
                injectScript: `<script type="module" src="./js/index.js" prefer></script>`,
              },
            },
          }),
    ],
})