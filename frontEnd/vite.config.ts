import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    esbuild: {
        loader: 'tsx', // TypeScript + JSX를 처리하도록 설정
        include: /src\/.*\.[tj]sx?$/, // .ts, .tsx, .js, .jsx 파일을 모두 포함
        exclude: /node_modules/, //제외
    },
    server: {
        port: 3000,
    },
});
