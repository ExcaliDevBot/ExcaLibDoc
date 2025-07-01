import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    sbuild: {
        loader: 'jsx',
        include: /src\/.*\.js$/,
    },

    server: {
        historyApiFallback: true,
    }
})