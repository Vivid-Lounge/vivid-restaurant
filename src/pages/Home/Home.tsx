import { Box } from '@mui/material'
import React, { FC } from 'react'
import HeroSection from './sections/HeroSection'
import ContactSection from './sections/ContactSection'
import MenuSection from './sections/MenuSection'

const Home: FC = () => {
	return (
		<>
			<Box id='hero'>
				<HeroSection />
			</Box>
			<Box id='menu'>
				<MenuSection />
			</Box>
			<Box id='contact'>
				<ContactSection />
			</Box>
		</>
	)
}

export default Home
