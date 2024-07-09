import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        viteCompression({
            verbose: true,
            disable: false,
            deleteOriginFile: false,
            threshold: 10240,
            algorithm: 'gzip',
            ext: '.gz',
        }),
    ],
    esbuild: {
        loader: 'tsx', // TypeScript + JSX를 처리하도록 설정
        include: /src\/.*\.[tj]sx?$/, // .ts, .tsx, .js, .jsx 파일을 모두 포함
        exclude: /node_modules/, // 제외
    },
    build: {
        minify: 'terser', // terser를 사용하여 빌드된 파일을 최소화
        terserOptions: {
            compress: {
                drop_console: true, // 콘솔 로그를 제거
                drop_debugger: true, // 디버거 구문을 제거
            },
            output: {
                comments: false, // 모든 주석을 제거
            },
        },
    },
    server: {
        port: 3000,
    },
});
