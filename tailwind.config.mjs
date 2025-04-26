/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#e6eaf0',
					100: '#c2cee0',
					200: '#9baed0',
					300: '#738fc0',
					400: '#5677b0',
					500: '#3860a1',
					600: '#2a4780',
					700: '#1c305f',
					800: '#0e1a3e',
					900: '#012265',
				},
				secondary: {
					50: '#fbf8e8',
					100: '#f5edc6',
					200: '#f0e2a4',
					300: '#ebd782',
					400: '#e7cd60',
					500: '#e2c33e',
					600: '#d4af37',
					700: '#ab8c2c',
					800: '#826921',
					900: '#594716',
				},
				accent: {
					50: '#eef8ff',
					100: '#d9eeff',
					200: '#bce2ff',
					300: '#8ad1ff',
					400: '#50b8ff',
					500: '#2a9dff',
					600: '#0e7ff5',
					700: '#0c65da',
					800: '#1453b1',
					900: '#17488c',
				}
			},
			fontFamily: {
				sans: ['Inter Variable', 'Inter', 'sans-serif'],
				mono: ['Menlo', 'Monaco', 'Consolas', 'monospace'],
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-in': 'slideIn 0.3s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideIn: {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
		},
	},
	plugins: [],
}