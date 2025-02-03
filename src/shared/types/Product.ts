import { Category } from './Category'

export interface Product {
	name: string
	description: string
	price: number
	quantityInGrams: number
	imageUrl: string
	isVisible: boolean
	parentCategory: Category | null
	childCategory: Category | null
	_id?: string
}
