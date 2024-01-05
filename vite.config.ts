import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/foo/bar': {
				target: 'http://127.0.0.1:3000',
				changeOrigin: true,
				secure: false,
				// ws: true
			},
			'/api': 'http://127.0.0.1:3000',
			'/user': {
				target: 'http://127.0.0.1:3000',
				secure: false,
				changeOrigin: true,
			}
		}
	}
});
