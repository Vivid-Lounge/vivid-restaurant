import { Box, Stack, useMediaQuery, useTheme } from '@mui/material'
import React, { FC, useEffect, useRef, useState } from 'react'
import { ArrowIcon } from '../../../shared/icons'

import { Category } from '../../../shared/types'

type Props = {
	categories: Category[]
	setCategoryToShow: React.Dispatch<React.SetStateAction<Category | null>>
}
const ResponsiveCategoriesBar: FC<Props> = ({
	categories,
	setCategoryToShow,
}) => {
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

	// console.log(categories)
	const parentCategories =
		categories && categories.filter((category) => category.parent === null)

	const [parentCategory, setParentCategory] = useState<Category>(
		{} as Category
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
		setParentCategory(parent)
		setCategoryToShow(parent)
	}

	useEffect(() => {
		if (categories.length > 0) {
			const parentCategories = categories.filter(
				(category) => category.parent === null
			)
			if (parentCategories.length > 0) {
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
	}, [categories])

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
						background:
							'linear-gradient(135deg, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.15) 100%)',
						boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
						transition: 'transform 0.3s ease, box-shadow 0.3s ease',
						borderRadius: '12px',
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
			</Box>
		</>
	)
}

export default ResponsiveCategoriesBar
// {parentCategories &&
// 	parentCategories.map(
// 		(parent, index) =>
// 			openDropdownId === parent._id && (
// 				<Box
// 					ref={dropdownRef}
// 					key={parent._id}
// 					sx={{
// 						width: {
// 							xs: '250px',
// 							sm: '300px',
// 							md: '350px',
// 							// Added height to make it scrollable
// 							// height: '100%',
// 						},
// 						height: {
// 							xs: '300px',
// 							sm: '350px',
// 							md: '400px',
// 						},
// 						position: 'fixed',
// 						zIndex: 5,
// 						left: '50%',
// 						top: '50%',
// 						fontSize: '2rem',
// 						display: 'flex',
// 						flexDirection: 'column',
// 						alignItems: 'center',

// 						borderRadius: '12px',
// 						transform: 'translate(-50%, -50%)',
// 						// border: '1px solid red',
// 						backdropFilter: 'blur(30px)',
// 						color: 'secondary.main',
// 						fontFamily: 'Carattere,serif',
// 					}}
// 				>
// 					<Typography
// 						sx={{
// 							fontFamily: 'inherit',
// 							fontSize: '2rem',
// 							mb: 0.5,
// 							my: 1,
// 						}}
// 					>
// 						{parent.name}
// 					</Typography>
// 					<Divider
// 						variant='middle'
// 						flexItem
// 						sx={{
// 							backgroundColor: 'secondary.main',
// 							stroke: 'secondary.main',
// 						}}
// 					/>
// 					<Box
// 						sx={{
// 							textAlign: 'center',
// 							height: '100%',
// 							width: '100%',
// 							display: 'flex',
// 							justifyContent: 'center',
// 							flexDirection: 'column',
// 							alignItems: 'center',
// 							fontSize: '2.5rem',
// 						}}
// 					>
// 						{categories
// 							.filter(
// 								(child) =>
// 									child.parent === parent._id
// 							)
// 							.map((child, index) => (
// 								<Typography
// 									sx={{
// 										mt: '4px',
// 										fontSize: 'inherit',
// 										fontFamily:
// 											'Carattere,serif',
// 										cursor: 'pointer',
// 									}}
// 								>
// 									<motion.div
// 										key={child._id}
// 										initial={{
// 											opacity: 0,
// 											y: 0,
// 											x: -20,
// 										}}
// 										animate={{
// 											opacity: 1,
// 											y: 0,
// 											x: 0,
// 										}}
// 										transition={{
// 											delay: index * 0.1,
// 										}}
// 										onClick={() =>
// 											handleSelectSubCategory(
// 												child
// 											)
// 										}
// 									>
// 										{child.name}
// 									</motion.div>
// 								</Typography>
// 							))}
// 					</Box>
// 				</Box>
// 			)
// 	)}
