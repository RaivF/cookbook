export type Recipe = {
	id: string
	name: string
	img: string
	description: string
	createdAt: string
}
export type userLoginType = {
	isLogged: boolean
	login: string
}

export type IError = {
	message: string
	code: number
}
export interface InitialState {
	list: Recipe[]
	isLoading: boolean
	error: IError | null
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	editCardName: any
}
