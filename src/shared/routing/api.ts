export const API_URI = 'http://localhost:3000/api'

export const ROUTES = {
	categories: {
		get: () => `${API_URI}/categories`,
		getByCategory: (categoryid: string) =>
			`${API_URI}/categories/${categoryid}`,
	},
	products: {
		get: () => `${API_URI}/products`,
	},
}
