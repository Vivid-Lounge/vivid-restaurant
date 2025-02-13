import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true, // Listen on all network interfaces
		port: 3001, // You can change the port if needed
	},
	// server: {
	// 	allowedHosts: ['8dfb-81-180-218-54.ngrok-free.app'], // Add your ngrok host here
	// },
})
