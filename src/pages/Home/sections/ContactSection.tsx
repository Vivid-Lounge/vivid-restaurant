import {
	Box,
	TextField,
	Typography,
	Button,
	useMediaQuery,
	useTheme,
	Stack,
	InputLabel,
} from '@mui/material'
import Grid2 from '@mui/material/Grid2'
import React from 'react'
import Background from '../../../shared/images/contact.png'

const ContactSection = () => {
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

	return (
		<Grid2
			container
			sx={{
				minHeight: '100vh',
				width: '100vw',
				mt: 5,
			}}
		>
			{/* Left Side - Background and Opening Hours */}
			<Grid2
				sx={{
					background: `url(${Background})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'relative',
					height: '100vh',
					mb: isMobile ? 5 : 0,
				}}
				size={{ xs: 12, md: 6 }}
			>
				<Box
					sx={{
						textAlign: 'center',
						position: 'absolute',
						bottom: '15%',
					}}
				>
					<Typography
						variant='h3'
						sx={{
							color: 'secondary.main',
							fontFamily: 'Carattere, serif',
						}}
					>
						Contact
					</Typography>
					<Typography
						variant='h4'
						sx={{ fontWeight: 'bold', color: 'white' }}
					>
						Get in Touch
					</Typography>
					<Box
						sx={{
							mt: 4,
							p: 2,
							borderRadius: '10px',
							background: 'rgba(255, 255, 255, 0.9)',
							width: '280px',
						}}
					>
						<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
							Opening Hours
						</Typography>
						<Typography>Mon - Closed</Typography>
						<Typography>Tue - Fri: 4pm - 8pm</Typography>
						<Typography>Sat - Sun: 5pm - 11pm</Typography>
					</Box>
				</Box>
			</Grid2>

			{/* Right Side - Contact Form */}
			<Grid2
				sx={{
					flexDirection: 'column',
					height: '100vh',

					color: 'white',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					p: isMobile ? 3 : 6,
				}}
				size={{ xs: 12, md: 6 }}
			>
				<Box
					gap={1}
					display={'flex'}
					flexDirection={'column'}
					sx={{ maxWidth: '500px', width: '100%' }}
				>
					<Typography
						variant='body1'
						sx={{
							mb: 3,
							textAlign: 'center',
							border: '1px solid #D95D39',
							borderRadius: '12px',
							px: 1,
							py: 1,
							lineHeight: '1.5',
						}}
					>
						Reserve your favorite table at{' '}
						<span style={{ color: '#D95D39', lineHeight: '1.5' }}>
							Vivid Lounge
						</span>{' '}
						and enjoy an
						<span style={{ color: '#D95D39' }}>
							{' '}
							unique dining experience in a relaxing ambiance
						</span>
						. Fill in your details below, and we’ll take care of the
						rest!
					</Typography>
					<InputLabel>
						<Typography>Name</Typography>
					</InputLabel>
					<TextField
						fullWidth
						variant='outlined'
						sx={{
							mb: 2,
							background: 'black',
							borderRadius: '12px',
						}}
					/>
					<InputLabel>
						<Typography>Email</Typography>
					</InputLabel>
					<TextField
						fullWidth
						variant='outlined'
						sx={{
							mb: 2,
							background: 'black',
						}}
					/>
					<InputLabel>
						<Typography>Message</Typography>
					</InputLabel>
					<TextField
						fullWidth
						variant='outlined'
						multiline
						rows={4}
						sx={{ mb: 3, background: 'black', borderRadius: '5px' }}
					/>

					<Button
						fullWidth
						variant='contained'
						sx={{
							backgroundColor: 'secondary.main',
							color: 'black',
							fontWeight: 'bold',
						}}
					>
						GET IN TOUCH
					</Button>
				</Box>
			</Grid2>
		</Grid2>
	)
}

export default ContactSection
