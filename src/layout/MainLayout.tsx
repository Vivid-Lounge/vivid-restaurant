import React, { FC } from 'react'
import NavBar from './Navbar'
import { Box } from '@mui/material'
import FooterSection from '../pages/Home/sections/FooterSection'
type Props = {
	Component: React.ComponentType
}
const MainLayout: FC<Props> = ({ Component }) => {
	return (
		<Box
			sx={{
				fontFamily: 'Roboto, sans-serif',
				backgroundColor: '#181614',

				// backgroundColor: '#111111',
			}}
		>
			<NavBar />
			<Component />
			<FooterSection />
		</Box>
	)
}

export default MainLayout
