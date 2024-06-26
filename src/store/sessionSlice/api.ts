import axiosInstance from '../../utils/axiosInstance'

export const checkUser = async (login, password) => {
	try {
		const response = await axiosInstance.post('/api/auth', {
			login: login,
			password: password,
		})
		return response.data
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		if (error.response) {
			// Сервер ответил с кодом состояния, отличным от 2xx
			console.error('Error response:', error.response.data)
			return error.response.data
		} else if (error.request) {
			// Запрос был сделан, но ответ не был получен
			console.error('Error request:', error.request)
			return { message: 'No response from server' }
		} else {
			// Произошло что-то еще при настройке запроса
			console.error('Error:', error.message)
			return { message: error.message }
		}
	}
}
