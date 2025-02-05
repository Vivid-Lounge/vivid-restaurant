import { Box, Stack, useMediaQuery, useTheme } from '@mui/material'
import React, { FC, useEffect, useRef, useState } from 'react'
import { ArrowIcon } from '../../../shared/icons'
import axios from 'axios'
import { ROUTES } from '../../../shared/routing/api'
import { Category } from '../../../shared/types'
import { set } from 'mongoose'
import { motion } from 'framer-motion'
import AnimatedOnScroll from '../../../components/AnimatedOnScroll'
import AnimatedTextV2 from '../../../components/AnimatedTextV2'
import AnimatedText from '../../../components/AnimatedText'
type Props = {
	categories: Category[]
	setCategoryToShow: React.Dispatch<React.SetStateAction<Category | null>>
	initialCategory: Category | null
}
const ResponsiveCategoriesBar: FC<Props> = ({
	categories,
	setCategoryToShow,
	initialCategory,
}) => {
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
	const [activeCategory, setActiveCategory] = useState<Category | null>(
		initialCategory
	)
	// console.log(categories)
	const parentCategories =
		categories && categories.filter((category) => category.parent === null)
	const [openDropdownId, setOpenDropdownId] = useState<string | null>(null)

	const [parentCategory, setParentCategory] = useState<Category>(
		{} as Category
	)
	const [activeSubCategory, setActiveSubCategory] = useState<Category | null>(
		null
	)
	const scrollableRef = useRef<HTMLDivElement>(null)

	const [hasOverflow, setHasOverflow] = useState(false)

	const handleScroll = (direction: 'left' | 'right') => {
		if (scrollableRef.current) {
			const scrollAmount = 200 // Adjust this value as needed
			const newScrollPosition =
				scrollableRef.current.scrollLeft +
				(direction === 'left' ? -scrollAmount : scrollAmount)

			scrollableRef.current.scrollTo({
				left: newScrollPosition,
				behavior: 'smooth',
			})
		}
	}

	const handleSelectParentCategory = (parent: Category) => {
		setActiveCategory(parent)
		setParentCategory(parent)
		setCategoryToShow(parent)

		setActiveSubCategory(null)
		setOpenDropdownId(openDropdownId === parent._id ? null : parent._id)
	}

	const handleSelectSubCategory = (subCat: Category) => {
		setActiveCategory(subCat)
		setCategoryToShow(subCat)
		setActiveSubCategory(subCat)
	}

	useEffect(() => {
		if (categories.length > 0) {
			const parentCategories = categories.filter(
				(category) => category.parent === null
			)
			if (parentCategories.length > 0) {
				setActiveCategory(parentCategories[0])
				setCategoryToShow(parentCategories[0])
				setParentCategory(parentCategories[0])
			}
		}
	}, [categories, setCategoryToShow])

	useEffect(() => {
		const checkOverflow = () => {
			if (scrollableRef.current) {
				const hasHorizontalOverflow =
					scrollableRef.current.scrollWidth >
					scrollableRef.current.clientWidth
				setHasOverflow(hasHorizontalOverflow)
			}
		}

		checkOverflow()
		window.addEventListener('resize', checkOverflow)

		return () => window.removeEventListener('resize', checkOverflow)
	}, [categories]) // Re-check when categories change

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					width: '100%',
					flexDirection: 'column',
					alignItems: 'center',
					mx: 'auto',
				}}
			>
				<Box
					sx={{
						borderBottom: '1px solid secondary.light',

						display: 'flex',
						width: {
							xs: '90%',
							sm: '80%',
							md: '70%',
						},
						height: 'fit-content',
						flexDirection: 'row',
						justifyContent: 'initial',
						color: 'white',
						flexWrap: 'nowrap',

						lineHeight: '2',
						mt: 5,
						alignItems: 'center',
						position: 'relative',
						py: 2,
					}}
				>
					<Stack
						onClick={() => handleScroll('left')}
						sx={{
							width: '5%',
							height: '100%',
							cursor: 'pointer',

							display: hasOverflow ? 'flex' : 'none',
							'&:hover': {
								opacity: 0.8,
							},
						}}
					>
						<ArrowIcon
							sx={{
								my: 'auto',
								mx: 'auto',
								fill: 'white',
								stroke: 'black',
								transform: 'rotate(90deg)',
							}}
						/>
					</Stack>
					<Stack
						sx={{
							flexDirection: 'row',
							overflowX: isMobile ? 'scroll' : 'hidden',
							'&::-webkit-scrollbar': {
								display: 'none',
							},
							mx: 'auto',
							justifyContent: 'start',
						}}
						ref={scrollableRef}
					>
						{parentCategories &&
							parentCategories.map((item, index) => (
								<Box
									key={index}
									sx={{
										color:
											parentCategory?._id === item._id
												? 'secondary.main'
												: 'white',
										fontSize: '1.75rem',
										display: 'flex',
										px: 1,

										mx: 2,
										flexWrap: 'nowrap',
										cursor: 'pointer',
										position: 'relative',
										textWrap: 'nowrap',
									}}
									onClick={() =>
										handleSelectParentCategory(item)
									}
								>
									{item.name}
								</Box>
							))}
					</Stack>
					<Stack
						onClick={() => handleScroll('right')}
						sx={{
							width: '5%',
							height: '100%',
							cursor: 'pointer',
							ml: 1,
							bg: 'transparent',
							display: hasOverflow ? 'flex' : 'none',
							'&:hover': {
								opacity: 0.8,
							},
						}}
					>
						<ArrowIcon
							sx={{
								my: 'auto',
								mx: 'auto',
								fill: 'white',
								stroke: 'black',
								transform: 'rotate(270deg)',
							}}
						/>
					</Stack>
				</Box>

				<AnimatedText>
					<Stack
						sx={{
							display: parentCategory ? 'flex' : 'none',
							color: 'white',
							minHeight: '30px',
							height: 'fit-content',
							width: '50%',
							mx: 'auto',
							mt: 1,

							justifyContent: 'center',
							gap: 5,

							flexDirection: 'row',
						}}
					>
						{parentCategory &&
							categories
								.filter(
									(cat) => cat.parent === parentCategory._id
								)
								.map((subCat, index) => (
									<Stack
										key={index}
										sx={{
											display: 'flex',
											flexDirection: 'row',
											cursor: 'pointer',
											fontSize: {
												xs: '1.2rem',
												md: '1.4rem',
												lg: '1.5rem',
											},
											color:
												activeSubCategory === subCat
													? 'orange'
													: 'white',
										}}
										onClick={() =>
											handleSelectSubCategory(subCat)
										}
									>
										{subCat.name}
									</Stack>
								))}
					</Stack>
				</AnimatedText>
			</Box>
		</>
	)
}

export default ResponsiveCategoriesBar
