import axiosInstance from '../../../utils/axiosInstance'

export const fetchRecipes = async () => {
	const response = await axiosInstance.get('/recipes')
	return response.data
}
