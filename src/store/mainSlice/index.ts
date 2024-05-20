import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IErrorType, InitialState, Recipe } from './types'
import { getData } from './thunks'

export const initialState: InitialState = {
	list: [],
	isLoading: false,
	IError: null,
}
export const mainSlice = createSlice({
	name: 'main',
	initialState: initialState,
	reducers: {
		getData: (state: InitialState, action: PayloadAction<Recipe[]>) => {
			return { ...state, list: action.payload }
		},
		setIsLoading: (state: InitialState, action: PayloadAction<boolean>) => {
			return { ...state, isLoading: action.payload }
		},
		setError: (
			state: InitialState,
			action: PayloadAction<IErrorType | null>
		) => {
			return { ...state, IError: action.payload }
		},
	},
})

// Action creators are generated for each case reducer function
export const actions = mainSlice.actions
export const thunks = { getData }

export default mainSlice.reducer
