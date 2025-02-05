export interface Category {
	includes(arg0: Category): void
	name: string
	parent: string | null
	_id: string
}
