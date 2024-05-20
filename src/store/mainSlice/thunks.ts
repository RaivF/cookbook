import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { actions } from '.'

export const getData = createAsyncThunk<void, void>(
	'getDataForRecipes',
	async (_, { dispatch }) => {
		dispatch(actions.setIsLoading(true))

		try {
			const response = await axios.get(
				'https://663b10d9fee6744a6ea02cea.mockapi.io/cookbook/v1/recipes'
			)
			dispatch(actions.getData(response.data))

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			console.log(error)
			dispatch(
				actions.setError({
					code: error.response.status,
					message: error.message,
				})
			)
		} finally {
			dispatch(actions.setIsLoading(false))
		}
	}
)
