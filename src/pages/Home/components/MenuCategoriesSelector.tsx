import React, { FC } from 'react'
import { Category } from '../../../shared/types'
import { Box } from '@mui/material'
type Props = {
	categories: Category[]
}
const MenuCategoriesSelector: FC<Props> = ({ category }) => {
	return (
		<Box>
			<h1>MenuCategoriesSelector</h1>
		</Box>
	)
}

export default MenuCategoriesSelector
