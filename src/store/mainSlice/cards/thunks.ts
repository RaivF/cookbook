// src/store/cards/thunks.ts

import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchRecipes } from './api'
import { actionsCard } from '.'

export const getData = createAsyncThunk<void, void>(
	'getDataForRecipes',
	async (_, { dispatch }) => {
		dispatch(actionsCard.setIsLoading(true))

		try {
			const data = await fetchRecipes()

			dispatch(actionsCard.getData(data))
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			dispatch(
				actionsCard.setError({
					code: error.response?.status,
					message: error.message,
				})
			)
		} finally {
			dispatch(actionsCard.setIsLoading(false))
		}
	}
)
