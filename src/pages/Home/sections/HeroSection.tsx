'use client'

import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { FC } from 'react'
import InteractiveSelector from '../../../components/InteractiveSelector'
import Background from './../../../shared/images/hero-restaurant.png'

import Handwritten from '../components/Handwritten'
import { motion } from 'framer-motion'

const HeroSection: FC = () => {
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				height: '100vh',
				background: `linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%,rgba(0, 0, 0,0.2) 100% ), url(${Background})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				color: 'white',
				textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
				position: 'relative',
				textAlign: 'center',
				px: 2,
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100%',
					width: '100%',
				}}
			>
				<motion.div
					initial={{ opacity: 0, y: -5 }} // Start position (below and invisible)
					animate={{ opacity: 1, y: 0 }} // Final position (normal)
					transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }} // Smooth effect
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							ml: 5,
							mb: { xs: 1, md: 2 },
						}}
					>
						<Typography
							sx={{
								fontFamily: 'Carattere, serif',
								color: theme.palette.secondary.main,
								fontSize: isMobile ? '3.25rem' : '5rem',
								lineHeight: '.7',
							}}
						>
							Experience
						</Typography>
						<Box
							sx={{
								width: isMobile ? '130px' : '200px',
								transform: 'translateY(5px)',

								left: '-10px',
								position: 'relative',
							}}
						>
							<Handwritten
								text='Vivid'
								color={theme.palette.secondary.main}
								duration={2}
							/>
						</Box>
					</Box>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: -5 }} // Start position (below and invisible)
					animate={{ opacity: 1, y: 0 }} // Final position (normal)
					transition={{ duration: 0.8, ease: 'easeIn', delay: 0.4 }}
				>
					<Typography
						variant='h2'
						sx={{
							fontFamily: 'Antic Didone, serif',
							fontSize: {
								xs: '2rem',
								sm: '2.5rem',
								md: '3rem',
								lg: '3.5rem',
							},
							lineHeight: '1.2',
						}}
					>
						The place of vibrant flavors
					</Typography>
				</motion.div>

				<Typography
					sx={{
						textAlign: 'center',
						width: { xs: '90%', sm: '80%', md: '70%' },
						fontSize: {
							xs: '1rem',
							sm: '1.2rem',
							md: '1.4rem',
						},
						lineHeight: '1.6',
						mt: 2,
					}}
				>
					<Typography
						sx={{
							color: 'secondary.main',
							display: 'inline',
							fontSize: {
								xs: '1rem',
								sm: '1.2rem',
								md: '1.3rem',
							},
							fontWeight: '500',
						}}
					>
						At Vivid
					</Typography>
					, every dish is crafted to perfection, blending bold flavors
					with creative presentation for an unforgettable dining
					experience.
				</Typography>
			</Box>
			<Box
				sx={{
					width: '100%',
					bottom: 0,
					height: '10%',
					display: 'flex',
				}}
			>
				<InteractiveSelector />
			</Box>
		</Box>
	)
}

export default HeroSection
