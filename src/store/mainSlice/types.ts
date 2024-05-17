export type Recipe = {
	id: string
	name: string
	img: string
	description: string
	createdAt: string
}

export interface InitialState {
	list: Recipe[]
	isLoading: boolean
	loadingErrorState: boolean
}
