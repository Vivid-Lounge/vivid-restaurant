import { Box, Stack, useMediaQuery, useTheme } from '@mui/material'
import React, { FC, useEffect, useRef, useState } from 'react'
import { ArrowIcon } from '../../../shared/icons'
import axios from 'axios'
import { ROUTES } from '../../../shared/routing/api'
import { Category } from '../../../shared/types'
import { set } from 'mongoose'
import { motion } from 'framer-motion'
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
	const handleScroll = () => {
		const container = scrollContainerRef.current
		if (!container) return

		const scrollWidth = container.scrollWidth - container.clientWidth
		const progress = (container.scrollLeft / scrollWidth) * 100
		setScrollProgress(progress)
	}
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('md'))
	const [activeCategory, setActiveCategory] = useState<Category | null>(
		initialCategory
	)

	const scrollContainerRef = useRef<HTMLDivElement>(null)
	const [scrollProgress, setScrollProgress] = useState(0)
	// const [activeCategory, setActiveCategory] = useState('Appetizers')

	const scroll = (direction: 'left' | 'right') => {
		const container = scrollContainerRef.current
		if (!container) return

		const scrollAmount = 200
		const targetScroll =
			container.scrollLeft +
			(direction === 'left' ? -scrollAmount : scrollAmount)

		container.scrollTo({
			left: targetScroll,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		const container = scrollContainerRef.current
		if (container) {
			container.addEventListener('scroll', handleScroll)
			return () => container.removeEventListener('scroll', handleScroll)
		}
	}, [])
	console.log(categories)
	const parentCategories =
		categories && categories.filter((category) => category.parent === null)
	const [openDropdownId, setOpenDropdownId] = useState<string | null>(null)
	const dropdownRef = useRef<HTMLDivElement>(null)

	// Add click outside handler
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setOpenDropdownId(null)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () =>
			document.removeEventListener('mousedown', handleClickOutside)
	}, [dropdownRef])

	// Update parent category click handler
	const handleSelectParentCategory = (parent: Category) => {
		setActiveCategory(parent)
		setOpenDropdownId(openDropdownId === parent._id ? null : parent._id)
	}

	useEffect(() => {
		if (!activeCategory && categories.length > 0) {
			const parentCategories = categories.filter(
				(category) => category.parent === null
			)
			if (parentCategories.length > 0) {
				setActiveCategory(parentCategories[0])
				setCategoryToShow(parentCategories[0])
			}
		}
	}, [categories, activeCategory])

	return (
		<>
			<Box
				sx={{
					position: 'relative',
					borderBottom: '1px solid secondary.light',
					width: {
						xs: '100%',
						md: '90%',
					},
					display: !isMobile ? 'flex' : 'none',
					height: 'fit-content',
					flexDirection: 'row',
					mx: 'auto',
					justifyContent: 'center',
					color: 'white',

					mt: 5,
					py: 2,
				}}
			>
				{parentCategories &&
					parentCategories.map((item, index) => (
						<>
							<Box
								key={index}
								sx={{
									color:
										activeCategory?._id === item._id
											? 'secondary.main'
											: 'white',
									fontSize: '1.2rem',
									px: 4,
									cursor: 'pointer',
									position: 'relative',
									flexWrap: 'wrap',
									textWrap: 'nowrap',
								}}
								onClick={() => handleSelectParentCategory(item)}
							>
								{item.name}
								{openDropdownId === item._id && (
									<Box
										ref={dropdownRef}
										sx={{
											position: 'absolute',
											top: '40px',
											left: '0',
											backdropFilter: 'blur(10px)',
											textAlign: 'center',
											display:
												activeCategory?._id === item._id
													? 'flex'
													: 'none',
											width: '100%',
											flexDirection: 'column',
											overflow: 'hidden',
											borderRadius: '10px',
											zIndex: 1,
										}}
									>
										{categories &&
											categories
												.filter(
													(category) =>
														category.parent ===
														item._id
												)
												.map((subCategory, index) => (
													<motion.div
														initial={{
															opacity: 0,
															y: -10,
														}} // Start position (below and invisible)
														animate={{
															opacity: 1,
															y: 0,
														}} // Final position (normal)
														transition={{
															duration: 0.3,
															ease: 'easeOut',
														}} // Smooth effect
													>
														<Box
															key={index}
															sx={{
																color:
																	activeCategory?._id ===
																	subCategory._id
																		? 'secondary.main'
																		: 'white',
																fontSize:
																	'1rem',
																width: '100%',
																mx: 'auto',
																'&:hover': {
																	color: 'secondary.main',
																},
																py: 1,
																cursor: 'pointer',
																position:
																	'relative',
															}}
															onClick={() => {
																setActiveCategory(
																	subCategory
																)
																setCategoryToShow(
																	subCategory
																)
															}}
														>
															{subCategory.name}
														</Box>
													</motion.div>
												))}
									</Box>
								)}
							</Box>
						</>
					))}
			</Box>
			<Box
				sx={{
					position: 'relative',
					borderBottom: '1px solid secondary.light',
					width: {
						xs: '100%',
						md: '80%',
					},
					display: isMobile ? 'flex' : 'none',
					height: '50px',
					flexDirection: 'row',
					overflowX: 'hidden',
					mx: 'auto',

					color: 'white',
					mt: 3,
				}}
			>
				<Box
					sx={{
						position: 'absolute',
						bottom: 0,

						height: '2px',
						width: '50%',

						bgcolor: 'secondary.light',
						transform: `translateX(${scrollProgress}%)`,
						transition: 'transform 0.1s ease-out',
					}}
				/>

				{/* Existing Navigation */}
				<Stack
					onClick={() => scroll('left')}
					sx={{
						width: '5%',
						height: '100%',
						cursor: 'pointer',
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
					ref={scrollContainerRef}
					onScroll={handleScroll}
					sx={{
						flexDirection: 'row',
						width: '90%',
						my: 'auto',
						height: '100%',
						alignItems: 'center',
						overflowX: 'auto',
						scrollbarWidth: 'none',
						'&::-webkit-scrollbar': {
							display: 'none',
						},
					}}
				>
					{parentCategories &&
						parentCategories.map((item, index) => (
							<Box
								key={index}
								sx={{
									color:
										activeCategory?._id === item._id
											? 'secondary.main'
											: 'white',
									fontSize: '2rem',
									mx: 3,
									cursor: 'pointer',
									whiteSpace: 'nowrap',
									'&:hover': {
										color: 'secondary.main',
									},
									fontFamily: 'Carattere,serif',
								}}
								onClick={() => setActiveCategory(item)}
							>
								{item.name}
							</Box>
						))}
				</Stack>
				<Stack
					onClick={() => scroll('right')}
					sx={{
						width: '5%',
						height: '100%',
						cursor: 'pointer',
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
							transform: 'rotate(-90deg)',
						}}
					/>
				</Stack>
			</Box>
		</>
	)
}

export default ResponsiveCategoriesBar
