import React, { useEffect } from 'react'
import Alert from '@mui/material/Alert'

import Card from '../Card'
import './style.css'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { thunks } from '../../store/mainSlice'

import { AlertTitle } from '@mui/material'

export const CardList: React.FC = () => {
	const dispatch = useAppDispatch()
	const { list, isLoading, loadingErrorState } = useAppSelector(
		state => state.main
	)
	useEffect(() => {
		dispatch(thunks.getData())
	}, [])

	if (isLoading) {
		return <span>loading....</span>
	} else {
		if (loadingErrorState) {
			return (
				<Alert severity='error'>
					<AlertTitle>Error</AlertTitle>
					This is an error Alert with a scary title.
				</Alert>
			)
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
}
export default CardList
