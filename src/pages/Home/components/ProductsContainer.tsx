import React, { FC, useEffect, useState } from 'react'
import { Category, Product } from '../../../shared/types'
import axios from 'axios'
import { ROUTES } from '../../../shared/routing/api'
import { Grid2, Stack, Typography } from '@mui/material'
import ProductCard from './ProductCard'
type Props = {
	category: Category | null
}
const ProductsContainer: FC<Props> = ({ category }) => {
	const [products, setProducts] = useState<Product[]>([])
	const [loadedProducts, setLoadedProducts] = useState(false)
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				/*{
                    get products by category
                }*/
				if (!category) return
				const response = await axios.get(
					ROUTES.categories.getByCategory(category._id)
				)
				if (response && response.status !== 200)
					throw new Error('Failed to fetch products')
				else {
					setProducts(response?.data)
					setLoadedProducts(true)
				}
			} catch (error) {
				console.error(error)
			}
		}
		fetchProducts()
	}, [category])
	return (
		<>
			<Grid2
				container
				sx={{
					mt: 2,
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Grid2
					size={{
						xs: 12,
						sm: 6,
						md: 5,
					}}
					sx={{
						display: 'flex',
						width: '100%',
						flexDirection: 'column',
					}}
				>
					{category && (
						<Typography
							sx={{
								color: 'secondary.main',
								fontFamily: 'Carattere, sans-serif',
								border: '1px solid #fff',
								fontSize: {
									xs: '2.5rem',
									md: '3rem',
								},
								lineHeight: '1',
							}}
						>
							{category.name}
						</Typography>
					)}
				</Grid2>
				{products &&
					products.map((product) => (
						<Grid2
							size={{
								xs: 12,
								sm: 6,
								md: 5,
							}}
							sx={{
								mt: 2,
								border: '1px solid #fff',
								width: '100%',
							}}
							key={product._id}
						>
							<ProductCard product={product} />
						</Grid2>
					))}
			</Grid2>
		</>
	)
}

export default ProductsContainer
