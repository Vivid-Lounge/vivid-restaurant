export const SERVE_IMAGES_URL = import.meta.env.VITE_API_URL_IMAGES as string
export const API_URL = import.meta.env.VITE_API_URL as string

export const ROUTES = {
	categories: {
		get: () => `${API_URL}/categories`,
		getByCategory: (categoryid: string) =>
			`${API_URL}/categories/${categoryid}`,
	},
	products: {
		get: () => `${API_URL}/products`,
	},
}
