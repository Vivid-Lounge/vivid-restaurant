import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { Category } from '../../../shared/types'
import axios from 'axios'
import { ROUTES } from '../../../shared/routing/api'

import ProductsContainer from '../components/ProductsContainer'
import ResponsiveCategoriesBar from '../components/ResponsiveCategoriesBar'
import AnimatedOnScroll from '../../../components/AnimatedOnScroll'
const MenuSection = () => {
	const [categories, setCategories] = useState<Category[]>([])
	const [loadedCategories, setLoadedCategories] = useState(false)
	const [categoryShow, setCategorytoShow] = useState<Category | null>(null)
	useEffect(() => {
		console.log(categoryShow?.name, 'category to Show')
	}, [categoryShow])
	useEffect(() => {
		if (loadedCategories) return
		console.log(categories)
		const fetchCategories = async () => {
			try {
				const response = await axios.get(ROUTES.categories.get())
				if (response.status !== 200)
					throw new Error('Failed to fetch categories')
				setCategories(response.data)
				// Set initial category after fetching
				const parentCategories = response.data.filter(
					(category: Category) => category.parent === null
				)
				if (parentCategories.length > 0) {
					setCategorytoShow(parentCategories[0])
				}
				setLoadedCategories(true)
			} catch (error) {
				console.error(error)
			}
		}
		fetchCategories()
	}, [categories, loadedCategories])

	return (
		<Box
			sx={{
				minHeight: '100vh',
				width: '100%',
				borderInlineRadius: '30px',
				boxShadow: 'inset 0px 0px 500px 160px rgba(0, 0, 0, 1)',
			}}
		>
			<AnimatedOnScroll>
				<ResponsiveCategoriesBar
					categories={categories}
					setCategoryToShow={setCategorytoShow}
				/>
			</AnimatedOnScroll>

			<ProductsContainer category={categoryShow} />
		</Box>
	)
}

export default MenuSection
