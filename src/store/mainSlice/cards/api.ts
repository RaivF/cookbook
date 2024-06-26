import axiosInstance from '../../../utils/axiosInstance'

export const fetchRecipes = async () => {
	try {
		const response = await axiosInstance.get('/recipes')
		return response.data
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		if (error.response) {
			console.error('Error response:', error.response.data)
		}
	}
}
