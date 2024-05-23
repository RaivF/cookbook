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
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	editCardName: any
}
