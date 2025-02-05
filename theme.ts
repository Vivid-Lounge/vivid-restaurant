import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#D95D39',
			light: '#FFFFFF',
			dark: '#0B0B0B',
		},
		secondary: {
			main: '#D95D39',
			light: '#EEBF79',
		},
	},
	typography: {
		fontFamily: '"Neue Montreal", Roboto, sans-serif',
		h1: {
			fontFamily: '"Neue Montreal", sans-serif',
			fontWeight: 700,
		},
		h2: {
			fontFamily: '"Neue Montreal", sans-serif',
			fontWeight: 700,
		},
		h3: {
			fontFamily: '"Neue Montreal", sans-serif',
			fontWeight: 500,
		},
		body1: {
			fontFamily: '"Neue Montreal", sans-serif',
			fontWeight: 400,
		},
		body2: {
			fontFamily: '"Neue Montreal", sans-serif',
			fontWeight: 300,
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
})

export default theme
