import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IErrorType, InitialState, Recipe } from './types'
import { getData } from './thunks'

export const initialState: InitialState = {
	list: [],
	isLoading: false,
	IError: null,
	editCardName: '',
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
		editCardName: (
			state: InitialState,
			action: PayloadAction<{ id: string; newName: string }>
		) => {
			const { id, newName } = action.payload
			const card = state.list.find(card => card.id === id)
			if (card) {
				card.name = newName
			}
		},
	},
})

// Action creators are generated for each case reducer function
export const actions = mainSlice.actions
export const thunks = { getData }

export default mainSlice.reducer
