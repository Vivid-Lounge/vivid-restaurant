import React, { FC, useEffect, useState } from 'react'
import { Category, Product } from '../../../shared/types'
import axios from 'axios'
import { ROUTES } from '../../../shared/routing/api'
import { Grid2, Stack, Typography } from '@mui/material'
import ProductCard from './ProductCard'
import AnimatedText from '../../../components/AnimatedText'
import AnimatedTextV2 from '../../../components/AnimatedTextV2'
import { motion } from 'framer-motion'
type Props = {
	category: Category | null
}
const ProductsContainer: FC<Props> = ({ category }) => {
	const [products, setProducts] = useState<Product[]>([])
	console.log(category?.name, 'category')
	console.log(
		products.forEach((p) => console.log(p.name)),
		'products'
	)
	useEffect(() => {
		const fetchData = async () => {
			try {
				if (!category) return
				const productsResponse = await axios.get(
					ROUTES.categories.getByCategory(category._id)
				)
				if (productsResponse.status === 200)
					setProducts(productsResponse.data)
			} catch (error) {
				console.error(error)
			}
		}
		fetchData()
	}, [category])

	const groupedProducts = products.reduce((acc, product) => {
		if (!product.childCategory) {
			if (!acc['uncategorized']) {
				acc['uncategorized'] = []
			}
			acc['uncategorized'].push(product)
		} else {
			const childCatId = product.childCategory._id
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
			sx={{ mt: 6, flexDirection: 'column', alignItems: 'center' }}
		>
			<Grid2 size={{ xs: 10, sm: 8, md: 6 }}>
				{/* Render uncategorized products first */}
				{groupedProducts['uncategorized'] && (
					<Grid2 sx={{ width: '100%', mb: 4 }}>
						<Typography
							sx={{
								color: 'secondary.main',
								fontFamily: 'Carattere, sans-serif',
								fontSize: { xs: '2.5rem', md: '3rem' },
								lineHeight: '1',
								mb: 2,
							}}
						>
							{category?.name}
						</Typography>
						{groupedProducts['uncategorized'].map(
							(product, index) => (
								<Grid2
									key={product._id}
									sx={{ mt: 2, width: '100%' }}
								>
									<motion.div
										key={product._id}
										initial={{
											opacity: 0,
											y: 0,
											x: -50,
										}}
										animate={{
											opacity: 1,
											y: 0,
											x: 0,
										}}
										transition={{
											duration: 0.5, // Animation duration in seconds
											delay: index * 0.1, // Stagger delay between items
											ease: 'easeOut', // Easing function
											type: 'spring', // Animation type
											stiffness: 100, // Spring stiffness
											damping: 10, // Spring damping
										}}
									>
										<ProductCard product={product} />
									</motion.div>
								</Grid2>
							)
						)}
					</Grid2>
				)}

				{/* Render categorized products */}
				{Object.entries(groupedProducts)
					.filter(([key]) => key !== 'uncategorized')
					.map(([childCatId, productsGroup]) => (
						<Grid2 key={childCatId} sx={{ width: '100%', mb: 4 }}>
							<Typography
								sx={{
									color: 'secondary.main',
									fontFamily: 'Carattere, sans-serif',
									fontSize: { xs: '2.5rem', md: '3rem' },
									lineHeight: '1',
									mb: 2,
								}}
							>
								{productsGroup[0].childCategory?.name}
							</Typography>
							{productsGroup.map((product, index) => (
								<Grid2
									key={product._id}
									sx={{ mt: 2, width: '100%' }}
								>
									<motion.div
										key={product._id}
										initial={{
											opacity: 0,
											y: 0,
											x: -40,
										}}
										animate={{
											opacity: 1,
											y: 0,
											x: -20,
										}}
										whileInView={{
											opacity: 1,
											x: 0,
										}}
										viewport={{
											once: false,
											amount: 0.3,
										}}
										transition={{
											duration: 0.6, // Animation duration in seconds
											delay: index * 0.1, // Stagger delay between items
											ease: 'easeOut', // Easing function
											// Animation type
											type: 'spring',
											stiffness: 100, // Spring stiffness
											damping: 20, // Spring damping
										}}
									>
										<ProductCard product={product} />
									</motion.div>
								</Grid2>
							))}
						</Grid2>
					))}
			</Grid2>
		</Grid2>
	)
}

export default ProductsContainer
