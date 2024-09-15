import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		VitePWA({
			injectRegister: null,
			registerType: 'autoUpdate',
			workbox: {
				globPatterns: ['**/*{js,html,wasm,css}'],
				maximumFileSizeToCacheInBytes: 5000000,
				cleanupOutdatedCaches: false,
			},
			menifest: {
				name: 'Apoc Authoring Tool',
				short_name: 'Apoc',
				description: 'Interactive XR content platform that empowers world to bridge the experiential gap in Metaverse',
				theme_color: '#8601E7',
				icons: [
					{
						src: '/assets/favicon/apple-icon-57x57.png',
						sizes: '57x57',
						type: 'image/png',
					},
					{
						src: '/assets/favicon/apple-icon-60x60.png',
						sizes: '60x60',
						type: 'image/png',
					},
					{
						src: '/assets/favicon/apple-icon-72x72.png',
						sizes: '72x72',
						type: 'image/png',
					},
					{
						src: '/assets/favicon/apple-icon-76x76.png',
						sizes: '76x76',
						type: 'image/png',
					},
					{
						src: '/assets/favicon/apple-icon-114x114.png',
						sizes: '114x114',
						type: 'image/png',
					},
					{
						src: '/assets/favicon/apple-icon-120x120.png',
						sizes: '120x120',
						type: 'image/png',
					},
					{
						src: '/assets/favicon/apple-icon-144x144.png',
						sizes: '144x144',
						type: 'image/png',
					},
					{
						src: '/assets/favicon/apple-icon-152x152.png',
						sizes: '152x152',
						type: 'image/png',
					},
					{
						src: '/assets/favicon/apple-icon-180x180.png',
						sizes: '180x180',
						type: 'image/png',
					},
					{
						src: '/assets/favicon/apple-icon-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/assets/favicon/apple-icon-192x192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
		}),
	],
	ssgOptions: {
		script: 'async',
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
