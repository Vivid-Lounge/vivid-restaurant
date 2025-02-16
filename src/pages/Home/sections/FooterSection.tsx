import { Box, Stack, Typography } from '@mui/material'
import { VividLogoIcon } from '../../../shared/icons'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
const FooterSection = () => {
	return (
		<Box
			sx={{
				background: 'black',
				height: '40vh',
				position: 'relative',
				width: '100vdw',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
			}}
		>
			<Stack></Stack>
			<Stack
				sx={{
					width: '100%',
					height: '60%',
					flexDirection: 'row',
					borderTop: '1px solid white',
					borderBottom: '1px solid white',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Stack
					sx={{
						width: '20%',
					}}
				>
					<VividLogoIcon
						sx={{ height: '100px', width: '200px', fill: 'white' }}
					/>
				</Stack>
				<Stack
					sx={{
						color: 'white',
						flexDirection: 'column',
						width: '60%',
					}}
				>
					<Typography
						sx={{
							textWrap: 'wrap',
							fill: 'white',

							textTransform: 'uppercase',
							letterSpacing: '2px',
							wordSpacing: '3px',
							textAlign: 'center',
							color: 'grey',
						}}
					>
						Follow Us On
						<br /> Social Media
					</Typography>
					<Stack
						sx={{
							flexDirection: 'row',
							width: '100%',

							justifyContent: 'center',
							gap: '10px',
						}}
					>
						<FacebookIcon
							onClick={() =>
								(window.location.href =
									'https://www.facebook.com/vividclubiasi')
							}
							sx={{
								cursor: 'pointer',
								height: '50px',
								width: '50px',
								fill: 'grey',
							}}
						/>

						<InstagramIcon
							onClick={() =>
								(window.location.href =
									'https://www.instagram.com/vividclubiasi/')
							}
							sx={{
								cursor: 'pointer',
								height: '50px',
								width: '50px',
								fill: 'grey',
							}}
						/>
					</Stack>
				</Stack>
				<Stack
					sx={{
						width: '20%',
						flexDirection: 'row',
						justifyContent: 'end',
					}}
					fontWeight={1200}
				>
					<Stack
						sx={{
							borderRadius: '30px',
							border: '2px solid rgb(220, 220, 220)',

							width: 'fit-content',
							color: 'white',

							px: 4,
							fontSize: '1.1rem',
							flexWrap: 'wrap',
							fontWeight: 'bold',
							flexDirection: 'row',
							'&:hover': {
								backgroundColor: 'rgb(220, 220, 220)',
								color: 'black',
								cursor: 'pointer',
							},
						}}
					>
						GET IN <br />
						TOUCH
					</Stack>
				</Stack>
			</Stack>
			<Stack
				sx={{
					position: 'absolute',
					bottom: 0,
					width: '100%',
					color: 'rgba(255,255,255,0.5)',
					justifyContent: 'center',
					flexDirection: 'row',
				}}
			>
				@VividLounge & Club 2025
			</Stack>
		</Box>
	)
}

export default FooterSection
