import React, { FC } from 'react'
import { Product } from '../../../shared/types'
import { Stack, Typography } from '@mui/material'
type Props = {
	product: Product
}
const ProductCard: FC<Props> = ({ product }) => {
	return (
		<>
			<Stack
				sx={{
					minHeight: '120px',
					height: '100%',
					width: '100%',
					border: '1px solid red',
					flexDirection: 'row',
				}}
			>
				<Stack
					sx={{
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						width: '20%',
						mx: 2,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<img
						src={product.imageUrl}
						alt={product.name}
						className='product-image'
						style={{
							borderRadius: '10px',
							width: '80%',
							height: '70%',
							objectFit: 'cover',
							objectPosition: 'center',
							aspectRatio: '1/1',
							border: '1px solid #fff',
							margin: '5px 0 5px 0',
							transition: 'transform 0.3s ease',
						}}
					/>
				</Stack>
				<Stack
					sx={{
						width: '80%',

						border: '1px solid #fff',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<Stack
						sx={{
							mr: 1,
							flexDirection: 'row',
							mb: 2,
							justifyContent: 'space-between',
							position: 'relative',
						}}
					>
						<Typography
							sx={{
								fontSize: '1.2rem',
								ml: 1,
								color: 'white',
							}}
						>
							{product.name}
						</Typography>
						<Typography
							sx={{
								color: 'white',
								fontSize: '1.2rem',
							}}
						>
							{product.price + ' '} RON
						</Typography>
					</Stack>
					<Stack
						sx={{
							mr: 1,
							height: 'fit-content',

							fontSize: '0.9rem',
							border: '1px solid red',

							color: '#888888',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							mb: 2,
							WebkitLineClamp: 2,
							WebkitBoxOrient: 'vertical',
							lineHeight: '1.2em',
							wordWrap: 'break-word',
						}}
					>
						{product.description +
							'dwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'}
					</Stack>
					<Stack
						sx={{
							height: '20px',
							width: '100%',
							color: '#888888',
							fontSize: '0.8rem',
						}}
					>
						Alergeni: pula mea
					</Stack>
				</Stack>
			</Stack>
		</>
	)
}

export default ProductCard
