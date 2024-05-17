import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { actions } from '.'

export const getData = createAsyncThunk<void, void>(
	'getDataForRecipes',
	async (_, { dispatch }) => {
		dispatch(actions.setIsLoading(true))
		dispatch(actions.setError(false))
		try {
			const response = await axios.get(
				'https://663b10d9fee6744a6ea02cea.mockapi.io/cookbook/v1/recipe'
			)
			dispatch(actions.getData(response.data))
		} catch (error: unknown) {
			dispatch(actions.setError(true))
		} finally {
			dispatch(actions.setIsLoading(false))
		}
	}
)
