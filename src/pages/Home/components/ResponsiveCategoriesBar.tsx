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
						flexWrap: isMobile ? 'nowrap' : 'wrap',
						overflowX: isMobile ? 'auto' : 'hidden',
						lineHeight: '2',
						mt: 5,
						position: 'relative',
						py: 2,
					}}
				>
					<Stack
						sx={{
							flexDirection: 'row',

							mx: 'auto',
							justifyContent: 'start',
						}}
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
										fontSize: '1.2rem',
										display: 'flex',
										px: 1,
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
				</Box>

				<AnimatedTextV2>
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
										style={{
											display: 'flex',
											flexDirection: 'row',
											cursor: 'pointer',
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
				</AnimatedTextV2>
			</Box>
		</>
	)
}

export default ResponsiveCategoriesBar

// {openDropdownId === item._id && (
// 	<Box
// 		ref={dropdownRef}
// 		sx={{
// 			position: 'absolute',
// 			top: '40px',
// 			left: '0',
// 			backdropFilter: 'blur(10px)',
// 			textAlign: 'center',
// 			display:
// 				activeCategory?._id === item._id
// 					? 'flex'
// 					: 'none',
// 			width: '100%',
// 			flexDirection: 'column',
// 			overflow: 'hidden',
// 			borderRadius: '10px',
// 			zIndex: 1,
// 		}}
// 	>
// 		{categories &&
// 			categories
// 				.filter(
// 					(category) =>
// 						category.parent ===
// 						item._id
// 				)
// 				.map((subCategory, index) => (
// 					<motion.div
// 						initial={{
// 							opacity: 0,
// 							y: -10,
// 						}} // Start position (below and invisible)
// 						animate={{
// 							opacity: 1,
// 							y: 0,
// 						}} // Final position (normal)
// 						transition={{
// 							duration: 0.3,
// 							ease: 'easeOut',
// 						}} // Smooth effect
// 					>
// 						<Box
// 							key={index}
// 							sx={{
// 								color:
// 									activeCategory?._id ===
// 									subCategory._id
// 										? 'secondary.main'
// 										: 'white',
// 								fontSize:
// 									'1rem',
// 								width: '100%',
// 								mx: 'auto',
// 								'&:hover': {
// 									color: 'secondary.main',
// 								},
// 								py: 1,
// 								cursor: 'pointer',
// 								position:
// 									'relative',
// 							}}
// 							onClick={() => {
// 								setActiveCategory(
// 									subCategory
// 								)

// 								setCategoryToShow(
// 									subCategory
// 								)
// 							}}
// 						>
// 							<AnimatedTextV2>
// 								{
// 									subCategory.name
// 								}
// 							</AnimatedTextV2>
// 						</Box>
// 					</motion.div>
// 				))}
// 	</Box>
// )}
