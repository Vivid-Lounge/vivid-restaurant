import {
	Box,
	Grid,
	Typography,
	useTheme,
	useMediaQuery,
	Grid2,
} from '@mui/material'
import { LocationOn, Phone, Email } from '@mui/icons-material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
	{
		text: 'Amazing atmosphere and delicious food. One of the best places in Iași!',
		author: 'Maria D.',
	},
	{
		text: 'Perfect place for a night out. The service is impeccable!',
		author: 'Alexandru P.',
	},
	{
		text: 'Great cocktails and wonderful ambiance. Will definitely return!',
		author: 'Elena M.',
	},
]

const LocationTestimonialsSection = () => {
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

	return (
		<Box
			sx={{
				minHeight: '80vh',
				width: '100%',
				background: 'black',
				position: 'relative',
				py: { xs: 6, md: 8 },
				px: { xs: 2, md: 4 },
			}}
		>
			<style>
				{`
          .swiper-pagination-bullet {
            background-color: #808080 !important;
            opacity: 1 !important;
          }
          .swiper-pagination-bullet-active {
            background-color: #D95D39 !important;
          }
        `}
			</style>
			<Grid2 container spacing={4}>
				{/* Testimonials Section */}
				<Grid2
					size={{
						xs: 12,
						md: 6,
					}}
				>
					<Box
						sx={{
							mb: 6,
							textAlign: 'center',
						}}
					>
						<Typography
							variant='h3'
							sx={{
								color: 'secondary.main',
								fontFamily: 'Carattere, serif',
								mb: 1,
							}}
						>
							Testimonials
						</Typography>
						<Typography
							variant='h4'
							sx={{
								color: 'white',
								fontWeight: 'bold',
								mb: 4,
							}}
						>
							What Our Guests Say
						</Typography>
					</Box>

					<Box sx={{ px: { xs: 2, md: 4 } }}>
						<Swiper
							modules={[Autoplay, Pagination]}
							spaceBetween={30}
							slidesPerView={1}
							autoplay={{
								delay: 5000,
								disableOnInteraction: false,
							}}
							pagination={{
								clickable: true,
							}}
							style={{ paddingBottom: '50px' }}
						>
							{testimonials.map((testimonial, index) => (
								<SwiperSlide key={index}>
									<Box
										sx={{
											backgroundColor:
												'rgba(255, 255, 255, 0.05)',
											borderRadius: '12px',
											p: 4,
											minHeight: '200px',
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'center',
										}}
									>
										<Typography
											sx={{
												color: 'white',
												fontSize: '1.1rem',
												mb: 2,
												fontStyle: 'italic',
											}}
										>
											"{testimonial.text}"
										</Typography>
										<Typography
											sx={{
												color: 'secondary.main',
												fontWeight: 'bold',
											}}
										>
											{testimonial.author}
										</Typography>
									</Box>
								</SwiperSlide>
							))}
						</Swiper>
					</Box>
				</Grid2>

				{/* Location Section */}
				<Grid2
					size={{
						xs: 12,
						md: 6,
					}}
				>
					<Box
						sx={{
							mb: 6,
							textAlign: 'center',
						}}
					>
						<Typography
							variant='h3'
							sx={{
								color: 'secondary.main',
								fontFamily: 'Carattere, serif',
								mb: 1,
							}}
						>
							Unde ne găsiți
						</Typography>
						<Typography
							variant='h4'
							sx={{
								color: 'white',
								fontWeight: 'bold',
								mb: 4,
							}}
						>
							Location & Contact
						</Typography>
					</Box>

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: 3,
							alignItems: 'center',
						}}
					>
						{/* Map */}
						<Box
							sx={{
								width: '100%',
								height: '300px',
								borderRadius: '12px',
								overflow: 'hidden',
							}}
						>
							<iframe
								src='https://maps.google.com/maps?q=47.15619133623297,27.60296029695679&z=15&output=embed'
								width='100%'
								height='450'
								style={{ border: 0 }}
								allowFullScreen
								loading='lazy'
								// referrerpolicy='no-referrer-when-downgrade'
							></iframe>
						</Box>

						{/* Contact Info */}
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								gap: 2,
								width: '100%',
								maxWidth: '400px',
								letterSpacing: '.5px',
							}}
						>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: 2,
									backgroundColor:
										'rgba(255, 255, 255, 0.05)',
									p: 2,
									borderRadius: '12px',
								}}
							>
								<LocationOn sx={{ color: 'secondary.main' }} />
								<Typography sx={{ color: 'white' }}>
									Bld Profesor Dimitrie Mangeron Nr. 71, Iasi
								</Typography>
							</Box>

							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: 2,
									backgroundColor:
										'rgba(255, 255, 255, 0.08)',
									p: 2,
									borderRadius: '12px',
									textDecoration: 'none',
								}}
								component={'a'}
								href='tel:0755 334 826'
							>
								<Phone sx={{ color: 'secondary.main' }} />
								<Typography sx={{ color: 'white' }}>
									0755334826
								</Typography>
							</Box>

							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: 2,
									backgroundColor:
										'rgba(255, 255, 255, 0.05)',
									p: 2,
									borderRadius: '12px',
								}}
							>
								<Email sx={{ color: 'secondary.main' }} />
								<Typography sx={{ color: 'white' }}>
									vividclubiasi@gmail.com
								</Typography>
							</Box>
						</Box>
					</Box>
				</Grid2>
			</Grid2>
		</Box>
	)
}

export default LocationTestimonialsSection
