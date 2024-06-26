import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SessionState {
	sessionInfo: {
		login: string | null
		token: string | null
	}
}

export const initialState: SessionState = {
	sessionInfo: {
		login: null,
		token: null,
	},
}

const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		signIn: (state, action: PayloadAction<any>) => {
			state.sessionInfo.login = action.payload.login
			state.sessionInfo.token = action.payload.token
			localStorage.setItem('token', action.payload.token)
		},
		signOut: state => {
			state.sessionInfo.login = null
			state.sessionInfo.token = null
			localStorage.removeItem('token')
		},
	},
})

export const actionsSession = sessionSlice.actions
export default sessionSlice.reducer
