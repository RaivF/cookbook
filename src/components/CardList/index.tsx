import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Card'
import './style.css'

type Recipe = {
	id: string
	name: string
	img: string
	description: string
	createdAt: string
}

export const CardList: React.FC = () => {
	const [recipes, setRecipes] = useState<Recipe[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		// Функция для загрузки рецептов
		const fetchRecipes = async () => {
			try {
				const response = await axios.get(
					'https://663b10d9fee6744a6ea02cea.mockapi.io/cookbook/v1/recipes'
				)
				setRecipes(response.data)

				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (error: any) {
				setError(error.message)
				setIsLoading(false)
			}
		}

		fetchRecipes()
	}, [])
	if (isLoading) {
		return (
			<div className='container'>
				{recipes.map(data => (
					<Card key={data.id} data={data} />
				))}
			</div>
		)
	} else {
		console.log(error)
	}
}
export default CardList
