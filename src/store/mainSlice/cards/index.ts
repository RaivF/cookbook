import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IError, InitialState, Recipe } from '../../types'
import { getData } from './thunks'

export const initialState: InitialState = {
	list: [],
	isLoading: false,
	error: null,
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
		setError: (state: InitialState, action: PayloadAction<IError | null>) => {
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
		deleteCard: (
			state: InitialState,
			action: PayloadAction<{ id: string }>
		) => {
			const { id } = action.payload
			const filterCardArray = state.list.filter(card => card.id !== id)
			if (filterCardArray) {
				state.list = filterCardArray
			}
		},
		addCard: (
			state: InitialState,
			action: PayloadAction<{
				name: string
				id: string
				img: string
				description: string
				createdAt: string
			}>
		) => {
			const newCard = action.payload

			if (newCard.name !== '') {
				state.list.push(newCard)
			}
		},
	},
})

// Action creators are generated for each case reducer function
export const actionsCard = mainSlice.actions
export const thunks = { getData }

export default mainSlice.reducer
