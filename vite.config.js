import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'
import { compression } from 'vite-plugin-compression2'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), compression({
		algorithm: 'gzip', // Options: 'gzip', 'brotliCompress', 'deflate'
		threshold: 10240,  // Only compress files larger than 10KB (in bytes)
		deleteOriginalAssets: false // Keep original uncompressed files
	}),],
	build: {
		// Change 'build-folder-name' to whatever you want your directory to be called
		outDir: 'web',
	},
	server: {
		port: 3001, // Replace 3000 with your desired port
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
