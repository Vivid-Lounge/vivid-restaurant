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
		fontFamily: 'Roboto',
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
