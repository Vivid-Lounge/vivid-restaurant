import React, { FC, useEffect, useState } from 'react'
import { Category, Product } from '../../../shared/types'
import axios from 'axios'
import { ROUTES } from '../../../shared/routing/api'
import { Grid2, Stack, Typography } from '@mui/material'
import ProductCard from './ProductCard'
import AnimatedText from '../../../components/AnimatedText'
import AnimatedTextV2 from '../../../components/AnimatedTextV2'
type Props = {
	category: Category | null
}
const ProductsContainer: FC<Props> = ({ category }) => {
	const [products, setProducts] = useState<Product[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (!category) return
				const productsResponse = await axios.get(
					ROUTES.categories.getByCategory(category._id)
				)
				setProducts(productsResponse.data)
			} catch (error) {
				console.error(error)
			}
		}
		fetchData()
	}, [category])

	const groupedProducts = products.reduce((acc, product) => {
		const childCatId = product.childCategory?._id
		if (childCatId) {
			if (!acc[childCatId]) {
				acc[childCatId] = []
			}
			acc[childCatId].push(product)
		}
		return acc
	}, {} as { [key: string]: Product[] })

	return (
		<Grid2
			container
			sx={{ mt: 2, flexDirection: 'column', alignItems: 'center' }}
		>
			<Grid2 size={{ xs: 12, sm: 8, md: 6 }}>
				{Object.entries(groupedProducts).map(
					([childCatId, productsGroup]) => (
						<Grid2 key={childCatId} sx={{ width: '100%' }}>
							<Typography
								sx={{
									color: 'secondary.main',
									fontFamily: 'Carattere, sans-serif',

									fontSize: { xs: '2.5rem', md: '3rem' },
									lineHeight: '1',
								}}
							>
								{productsGroup[0].childCategory?.name}
							</Typography>

							{productsGroup.map((product) => (
								<Grid2
									key={product._id}
									sx={{
										mt: 2,

										width: '100%',
									}}
								>
									<AnimatedTextV2>
										<ProductCard product={product} />
									</AnimatedTextV2>
								</Grid2>
							))}
						</Grid2>
					)
				)}
			</Grid2>
		</Grid2>
	)
}

export default ProductsContainer
