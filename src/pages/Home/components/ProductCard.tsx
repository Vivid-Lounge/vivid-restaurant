import React, { FC } from 'react'
import { Product } from '../../../shared/types'
import { Stack, Typography } from '@mui/material'
import { SERVE_IMAGES_URL } from '../../../shared/routing/api'
type Props = {
	product: Product
}
const ProductCard: FC<Props> = ({ product }) => {
	return (
		<>
			<Stack
				sx={{
					height: '220px',
					width: '100%',
					borderRadius: '12px',
					display: 'flex',
					flexDirection: 'row',
					position: 'relative',
					background:
						'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.15) 100%)',
					boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
					transition: 'transform 0.3s ease, box-shadow 0.3s ease',
					'&:hover': {
						transform: 'scale(1.05)',
						boxShadow: '0px 8px 25px rgba(0,0,0,0.3)',
						'& .product-image': {
							transform: 'scale(1.15)',
						},
					},
				}}
			>
				<Stack
					sx={{
						position: 'absolute',
						zIndex: -2,

						boxShadow:
							'0px 0px 500px 2w0px rgba(255, 255, 255, 0.2)',
						left: '50%',
						top: '50%',
						rotate: '0deg',
						transform: 'translate(-50%, -50%)',
						scale: 1.3,
						width: '500px',

						background: 'transparent',
					}}
				></Stack>
				<Stack
					sx={{
						width: '30%',
						height: '100%',
						mx: 2,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					{/* <img
						src={`${SERVE_IMAGES_URL}${product.imageUrl}`}
						alt={product.name}
						className='product-image'
						style={{
							borderRadius: '10px',
							width: '90%',
							height: '90%',
							objectFit: 'cover',
							transition: 'transform 0.3s ease',
						}}
					/> */}
				</Stack>
				<Stack
					sx={{
						width: '65%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<Typography
						sx={{
							fontSize: '1.9rem',
							color: 'white',
							fontWeight: 'bold',
							fontFamily: 'Neue Montreal,serif',
						}}
					>
						{product.name}
						<Typography
							sx={{
								color: 'secondary.main',
								fontSize: '1.4rem',
								fontWeight: 'bold',
								mt: 1,
								mb: 1,
							}}
						>
							{product.price} RON
						</Typography>
						<Typography
							sx={{
								fontWeight: '400',
								fontSize: '1rem',
								color: '#ddd',
							}}
						>
							({product.quantityInGrams} g)
						</Typography>
					</Typography>

					<Typography
						sx={{
							color: '#aaa',
							fontSize: '0.9rem',
							mt: 1,
							height: 'fit-content',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							WebkitLineClamp: 2,
							WebkitBoxOrient: 'vertical',
						}}
					>
						{product.description}
					</Typography>
				</Stack>
			</Stack>
		</>
	)
}
export default ProductCard
