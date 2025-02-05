import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'
import InteractiveSelector from '../../../components/InteractiveSelector'
import { motion } from 'framer-motion'
import AnimatedText from '../../../components/AnimatedText'
import Background from '../../../shared/images/hero-restaurant.png'
const HeroSection: FC = () => {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					height: '100vh',
					background: `linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%,rgba(0, 0, 0,0.1) 1% ), url(${Background})`,

					backgroundSize: 'cover',
					backgroundPosition: 'center',
					color: 'white',
					textShadow: '1px 1px 1px rgba(0,0,0,0.8)',
					fontSize: '2rem',
					fontWeight: 'bold',
					position: 'relative',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						height: '100%',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						flexWrap: 'wrap',
						textAlign: 'center',
					}}
				>
					<AnimatedText>
						<Typography
							sx={{
								fontFamily: 'Carattere,serif',
								color: 'secondary.main',
								fontSize: {
									xs: '3.5rem',

									md: '4.5rem',
								},
								lineHeight: '1',
							}}
						>
							Experience Vivid
						</Typography>
					</AnimatedText>
					<AnimatedText>
						<Typography
							variant='h2'
							sx={{
								fontFamily: 'Antic Didone,serif',
								lineHeight: '.9',
							}}
						>
							The place of vibrant Flavours
						</Typography>
					</AnimatedText>
					<Typography
						sx={{
							textAlign: 'center',
							width: '70%',
							justifySelf: 'center',
							lineHeight: '2',
							fontSizeAdjust: '0.5',
							mt: 2,
						}}
					>
						<Typography
							sx={{
								color: 'secondary.main',
								display: 'inline',
								fontWeight: 'bold',
							}}
						>
							At Vivid
						</Typography>
						, every dish is crafted to perfection, blending bold
						flavors with creative presentation for an unforgettable
						dining experience.
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
		</>
	)
}

export default HeroSection
