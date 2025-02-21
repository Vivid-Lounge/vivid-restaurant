import {
	Box,
	TextField,
	Typography,
	Button,
	useMediaQuery,
	useTheme,
	InputLabel,
} from '@mui/material'
import Grid2 from '@mui/material/Grid2'
import Background from './../../../shared/images/contact.png'
import { ClockIcon } from '../../../shared/icons/ClockIcon'
import InteractiveSelector from '../../../components/InteractiveSelector'

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
				position: 'relative',
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
					alignItems: 'left',
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
						bottom: {
							md: '40%',
							xs: '30%',
						},
						scale: {
							xs: 1,
							sm: 1.1,
							md: 1.2,
						},
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
							textAlign: 'left',
							boxShadow: '0px 5px 50px 2px rgba(37, 36, 36, 0.7)',
						}}
					>
						<ClockIcon sx={{ fontSize: '20px' }} />
						<Typography variant='h6'>Opening Hours</Typography>

						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<Typography>Mon</Typography>
							<Typography>Closed</Typography>
						</Box>

						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<Typography>Tue - Fri</Typography>
							<Typography>4pm - 8pm</Typography>
						</Box>

						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<Typography>Sat - Sun</Typography>
							<Typography>5pm - 11pm</Typography>
						</Box>
					</Box>
				</Box>
			</Grid2>

			{/* Right Side - Contact Form */}
			<Grid2
				sx={{
					position: 'relative',

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
							mb: {
								xs: 20,
								md: 0,
							},
						}}
					>
						GET IN TOUCH
					</Button>
				</Box>
			</Grid2>
			<Box
				sx={{
					width: '100%',
					bottom: {
						xs: '-6%',
						md: '-3%',
					},
					height: '10%',
					display: 'flex',
					position: 'absolute',
					mb: 1,
				}}
			>
				<InteractiveSelector />
			</Box>
		</Grid2>
	)
}

export default ContactSection
