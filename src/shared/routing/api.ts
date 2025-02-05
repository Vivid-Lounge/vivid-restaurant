export const API_URI = 'http://192.168.1.203:4000/api'

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
