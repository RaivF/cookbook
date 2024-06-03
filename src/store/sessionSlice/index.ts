import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SessionState {
	sessionInfo: {
		isLogged: boolean
		login: string | null
	}
}

const initialState: SessionState = {
	sessionInfo: {
		isLogged: false,
		login: null,
	},
}

const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		signIn: (state, action: PayloadAction<string>) => {
			state.sessionInfo.isLogged = true
			state.sessionInfo.login = action.payload
		},
		signOut: state => {
			state.sessionInfo.isLogged = false
			state.sessionInfo.login = null
		},
	},
})

export const actionsSession = sessionSlice.actions
export default sessionSlice.reducer
