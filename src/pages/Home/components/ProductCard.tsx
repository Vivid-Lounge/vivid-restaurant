'use client'

import type { FC } from 'react'
import type { Product } from '../../../shared/types'
import { Stack, Typography, useTheme, useMediaQuery } from '@mui/material'
import { SERVE_IMAGES_URL } from '../../../shared/routing/api'
import React from 'react'

type Props = {
	product: Product
}

const ProductCard: FC<Props> = ({ product }) => {
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
	const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

	return (
		<Stack
			direction={isMobile ? 'column' : 'row'}
			sx={{
				height: isMobile ? 'auto' : '220px',
				width: '100%',
				borderRadius: '12px',
				position: 'relative',
				background:
					'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(0,0,0,0.15) 100%)',
				boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
				transition: 'transform 0.3s ease, box-shadow 0.3s ease',
				overflow: 'hidden',
				'&:hover': {
					transform: 'scale(1.02)',
					boxShadow: '0px 8px 25px rgba(0,0,0,0.3)',
					'& .product-image': {
						transform: 'scale(1.03)',
					},
				},
			}}
		>
			<Stack
				sx={{
					width: isMobile ? '100%' : '30%',
					height: isMobile ? 'auto' : '100%',
					p: 2,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						width: '100%',
						height: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						overflow: 'hidden',
						borderRadius: '10px',
					}}
				>
					<img
						src={`${SERVE_IMAGES_URL}${product.imageUrl}`}
						alt={product.name}
						className='product-image'
						style={{
							maxWidth: '100%',
							maxHeight: '100%',
							objectFit: 'contain',
							transition: 'transform 0.3s ease',
						}}
					/>
				</div>
			</Stack>
			<Stack
				sx={{
					width: isMobile ? '100%' : '70%',
					p: 2,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				<Typography
					sx={{
						fontSize: isMobile
							? '1.5rem'
							: isTablet
							? '1.7rem'
							: '1.9rem',
						color: 'white',
						fontWeight: 'bold',
						fontFamily: 'Neue Montreal,serif',
					}}
				>
					{product.name}
				</Typography>
				<Typography
					sx={{
						color: 'secondary.main',
						fontSize: isMobile
							? '1.2rem'
							: isTablet
							? '1.3rem'
							: '1.4rem',
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
				<Typography
					sx={{
						color: '#aaa',
						fontSize: '0.9rem',
						mt: 1,
						height: 'fit-content',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						display: '-webkit-box',
						WebkitLineClamp: 3,
						WebkitBoxOrient: 'vertical',
					}}
				>
					{product.description}
				</Typography>
			</Stack>
		</Stack>
	)
}

export default ProductCard
