export type Recipe = {
	id: string
	name: string
	img: string
	description: string
	createdAt: string
}

export type IErrorType = {
	message: string
	code: number
}
export interface InitialState {
	list: Recipe[]
	isLoading: boolean
	IError: IErrorType | null
}
