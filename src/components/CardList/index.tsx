import React, { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert'

import Card from '../Card'
import './style.css'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { actions, thunks } from '../../store/mainSlice'

import { AlertTitle } from '@mui/material'
import { BasicModal } from '../modal'

export const CardList: React.FC = () => {
	const [open, setOpen] = useState(false)
	const [currentId, setCurrentId] = useState('0')
	const dispatch = useAppDispatch()
	const { list, isLoading, IError } = useAppSelector(state => state.main)
	useEffect(() => {
		dispatch(thunks.getData())
	}, [])

	const handleEditName = (id: string, newName: string) => {
		dispatch(actions.editCardName({ id, newName }))
	}

	const clickHandler = id => {
		setCurrentId(id)
		openModal()
	}
	const openModal = () => {
		setOpen(true)
	}
	const closeModal = () => {
		setOpen(false)
	}
	const rename = name => {
		handleEditName(currentId, name)
	}

	if (isLoading) {
		return <span>loading....</span>
	} else {
		if (IError !== null) {
			return (
				<Alert severity='error'>
					<AlertTitle>Error</AlertTitle>
					This is an error Alert with a scary title.
				</Alert>
			)
		} else {
			return (
				<div className='container'>
					<BasicModal
						open={open}
						closeModal={() => closeModal()}
						rename={rename}
					/>
					{list.map(data => (
						<Card
							key={data.id}
							data={data}
							clickHandler={() => clickHandler(data.id)}
						/>
					))}
				</div>
			)
		}
	}
}
export default CardList
