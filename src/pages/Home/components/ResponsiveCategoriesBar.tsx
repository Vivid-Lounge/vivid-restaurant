import { Box, Stack } from '@mui/material'
import React from 'react'
import { type FC, useEffect, useRef, useState } from 'react'
import { ArrowIcon } from '../../../shared/icons'
import type { Category } from '../../../shared/types'

type Props = {
	categories: Category[]
	setCategoryToShow: React.Dispatch<React.SetStateAction<Category | null>>
}

const ResponsiveCategoriesBar: FC<Props> = ({
	categories,
	setCategoryToShow,
}) => {
	const parentCategories =
		categories && categories.filter((category) => category.parent === null)

	const [parentCategory, setParentCategory] = useState<Category>(
		{} as Category
	)

	const scrollableRef = useRef<HTMLDivElement>(null)
	const [hasOverflow, setHasOverflow] = useState(false)
	const [scrollPosition, setScrollPosition] = useState(0)
	const [visibleWidth, setVisibleWidth] = useState(0)

	const handleScroll = (direction: 'left' | 'right') => {
		if (scrollableRef.current) {
			const scrollAmount = 200
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
		const checkOverflowAndSetInitialValues = () => {
			if (scrollableRef.current) {
				const { scrollWidth, clientWidth } = scrollableRef.current
				const hasHorizontalOverflow = scrollWidth > clientWidth
				setHasOverflow(hasHorizontalOverflow)
				setVisibleWidth(clientWidth)
				setScrollPosition(0)
			}
		}

		checkOverflowAndSetInitialValues()

		const handleScrollPosition = () => {
			if (scrollableRef.current) {
				const { scrollLeft } = scrollableRef.current
				setScrollPosition(scrollLeft)
			}
		}

		const currentRef = scrollableRef.current
		currentRef?.addEventListener('scroll', handleScrollPosition)
		window.addEventListener('resize', checkOverflowAndSetInitialValues)

		return () => {
			currentRef?.removeEventListener('scroll', handleScrollPosition)
			window.removeEventListener(
				'resize',
				checkOverflowAndSetInitialValues
			)
		}
	}, [])

	const totalWidth = scrollableRef.current?.scrollWidth || 568
	const containerWidth = visibleWidth
	const indicatorWidth = (containerWidth / totalWidth) * 100
	const indicatorPosition =
		(scrollPosition / (totalWidth - containerWidth)) *
		(100 - indicatorWidth)

	return (
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
						overflowX: 'auto',
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
									fontFamily: '"Neue Montreal", Roboto',
									fontWeight: '300',
									
								}}
								onClick={() => handleSelectParentCategory(item)}
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
			{
				<Box
					sx={{
						width: {
							xs: '90%',
							sm: '80%',
							md: '70%',
							lg: 'auto',
						},
						maxWidth: '100%',
						height: '4px',
						backgroundColor: 'rgba(255, 255, 255, 0.2)',
						mt: 1,
						borderRadius: '2px',
						position: 'relative',
						overflow: 'hidden',
						display: {
							xs: 'block',
						},
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							left: indicatorPosition
								? `${indicatorPosition}%`
								: 0,
							width: indicatorWidth
								? `${indicatorWidth}%`
								: '80px',
							height: '100%',
							backgroundColor: 'secondary.main',
							borderRadius: '2px',
							transition:
								'left 0.1s ease-out, width 0.1s ease-out',
						}}
					/>
				</Box>
			}
		</Box>
	)
}

export default ResponsiveCategoriesBar
