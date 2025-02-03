import { Box, Stack, useMediaQuery } from '@mui/material'
import React, { useRef, useEffect, useState } from 'react'
import { ArrowIcon } from '../../../shared/icons'
import { Category } from '../../../shared/types'
import axios from 'axios'
import { ROUTES } from '../../../shared/routing/api'
import { useTheme } from '@mui/material'

import ProductsContainer from '../components/ProductsContainer'
import ResponsiveCategoriesBar from '../components/ResponsiveCategoriesBar'
const MenuSection = () => {
	const [categories, setCategories] = useState<Category[]>([])
	const [loadedCategories, setLoadedCategories] = useState(false)
	const [categoryShow, setCategorytoShow] = useState<Category | null>(null)

	useEffect(() => {
		if (loadedCategories) return
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
	}, [loadedCategories])

	return (
		<Box sx={{ height: '100vh', width: '100%' }}>
			<ResponsiveCategoriesBar
				categories={categories}
				setCategoryToShow={setCategorytoShow}
				initialCategory={categoryShow}
			/>
			<ProductsContainer category={categoryShow} />
		</Box>
	)
}

export default MenuSection
