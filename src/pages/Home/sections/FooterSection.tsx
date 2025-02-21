import { Box, Link, Stack, Typography } from '@mui/material'
import { VividLogoIcon } from '../../../shared/icons'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Navigate, useNavigate } from 'react-router-dom'

const FooterSection = () => {
	const navigate = useNavigate()
	return (
		<Box
			sx={{
				background: 'black',
				minHeight: '300px', // More reliable than vh
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				position: 'relative',
				pb: 8, // Space for copyright text
			}}
		>
			<Stack
				sx={{
					width: '100%',
					py: { xs: 4, md: 6 },
					px: { xs: 2, md: 4 },
					borderTop: '1px solid rgba(255, 255, 255, 0.4)',
					borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' },
					alignItems: 'center',
					gap: { xs: 4, md: 0 },
				}}
			>
				{/* Logo Section */}
				<Stack
					sx={{
						width: { xs: '100%', md: '20%' },
						alignItems: { xs: 'center', md: 'flex-start' },
					}}
				>
					<VividLogoIcon
						sx={{
							height: { xs: '60px', md: '80px' },
							width: 'auto',
							fill: 'white',
						}}
					/>
				</Stack>

				{/* Social Media Section */}
				<Stack
					sx={{
						width: { xs: '100%', md: '60%' },
						alignItems: 'center',
						gap: 2,
					}}
				>
					<Typography
						variant='subtitle1'
						sx={{
							color: 'grey.400',
							textTransform: 'uppercase',
							letterSpacing: '2px',
							textAlign: 'center',
							fontWeight: 500,
						}}
					>
						Follow Us On
						<br />
						Social Media
					</Typography>

					<Stack
						direction='row'
						spacing={2}
						sx={{
							justifyContent: 'center',
						}}
					>
						<FacebookIcon
							onClick={() =>
								window.open(
									'https://www.facebook.com/vividclubiasi',
									'_blank'
								)
							}
							sx={{
								fontSize: 40,
								color: 'grey.400',
								cursor: 'pointer',
								transition: 'color 0.2s ease',
								'&:hover': {
									color: 'white',
								},
							}}
						/>
						<InstagramIcon
							onClick={() =>
								window.open(
									'https://www.instagram.com/vividclubiasi/',
									'_blank'
								)
							}
							sx={{
								fontSize: 40,
								color: 'grey.400',
								cursor: 'pointer',
								transition: 'color 0.2s ease',
								'&:hover': {
									color: 'white',
								},
							}}
						/>
					</Stack>
					<Stack
						sx={{
							textAlign: 'center',
							mb: -3,
							mt: 1,
							fontSize: '0.8rem',
						}}
					>
						<Box>
							<Typography
								variant='body1'
								sx={{
									fontWeight: 600,
									color: 'rgba(255,255,255,0.5)',
									'&:hover': {
										cursor: 'pointer',
										color: 'primary.main',
									},
								}}
							>
								Valori nutritionale
							</Typography>
							<Typography
								variant='body1'
								sx={{
									fontWeight: 600,
									color: 'rgba(255,255,255,0.5)',
									'&:hover': {
										cursor: 'pointer',
										color: 'primary.main',
									},
								}}
								onClick={() => navigate('/legal')}
							>
								Politica de Confidentialitate
							</Typography>
						</Box>

						<Box
							sx={{
								gap: 4,
								display: 'flex',
								justifyContent: 'center',
								mt: 2,
								fontWeight: 600,
								mb: { xs: 2, md: 0 },
								'& a': {
									'&:hover': {
										color: 'secondary.main',
									},
								},
							}}
						>
							<Link
								variant='body1'
								sx={{
									fontWeight: 600,
									textDecoration: 'none',
									color: 'rgba(255,255,255,0.5)',
								}}
								href='/#home'
							>
								Home
							</Link>
							<Link
								variant='body1'
								sx={{
									fontWeight: 600,
									textDecoration: 'none',
									color: 'rgba(255,255,255,0.5)',
								}}
								href='/#home'
							>
								Meniu
							</Link>
							<Link
								variant='body1'
								sx={{
									fontWeight: 600,
									textDecoration: 'none',
									color: 'rgba(255,255,255,0.5)',
								}}
								href='/#home'
							>
								Contact
							</Link>
						</Box>
					</Stack>
				</Stack>

				{/* Contact Button Section */}
				<Stack
					sx={{
						width: { xs: '100%', md: '20%' },
						alignItems: { xs: 'center', md: 'flex-end' },
					}}
				>
					<Box
						sx={{
							borderRadius: '32px',
							border: '1px solid rgb(220, 220, 220)',
							px: 3,
							py: 2,
							color: 'white',
							fontSize: { xs: '0.9rem', md: '1rem' },
							fontWeight: 600,
							transition: 'all 0.2s ease',
							'&:hover': {
								backgroundColor: 'rgb(220, 220, 220)',
								color: 'black',
								cursor: 'pointer',
							},
						}}
					>
						CONTACT US
					</Box>
				</Stack>
			</Stack>
			<Stack
				sx={{
					width: '100%',
					textAlign: 'start',
				}}
			></Stack>
			{/* Copyright Section */}
			<Stack
				sx={{
					position: 'absolute',
					bottom: 0,
					width: '100%',
					py: 2,
					alignItems: 'center',
					gap: 1,
				}}
			>
				<Typography
					variant='body2'
					sx={{
						color: 'rgba(255,255,255,0.5)',
						textAlign: 'center',
						fontFamily: 'Neue Montreal',
					}}
				>
					VividLounge & Club 2025
					<br />
					@2025 Toate drepturile rezervate
				</Typography>
			</Stack>
		</Box>
	)
}

export default FooterSection
