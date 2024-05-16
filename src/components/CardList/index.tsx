import React, { useEffect } from 'react'

import Card from '../Card'
import './style.css'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { thunks } from '../../store/mainSlice'

export const CardList: React.FC = () => {
	const dispatch = useAppDispatch()
	const { list, isLoading } = useAppSelector(state => state.main)
	useEffect(() => {
		dispatch(thunks.getData())
	}, [])

	if (isLoading) {
		return <span>loading....</span>
	} else {
		return (
			<div className='container'>
				{list.map(data => (
					<Card key={data.id} data={data} />
				))}
			</div>
		)
	}
}
export default CardList
