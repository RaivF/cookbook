import React, { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

import Card from '../Card'
import './style.css'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { actionsCard, thunks } from '../../store/mainSlice/cards'
import { BasicModal } from '../Modal'
import BannerAddCard from '../BannerAddCard'
import { ModalAddCard } from '../ModalAddCard'

export const CardList: React.FC = () => {
	const [openRenameModal, setOpenRenameModal] = useState(false)
	const [openAddModal, setOpenAddModal] = useState(false)
	const [currentId, setCurrentId] = useState('')
	const [currentName, setCurrentName] = useState('')

	const dispatch = useAppDispatch()
	const { list, isLoading } = useAppSelector(state => state.main)

	useEffect(() => {
		dispatch(thunks.getData())
	}, [dispatch])

	const handleDelete = (id: string) => {
		dispatch(actionsCard.deleteCard({ id }))
	}

	const handleClickAddCard = () => {
		setOpenAddModal(true)
	}

	const handleClickRename = (id: string, name: string) => {
		setCurrentId(id)
		setCurrentName(name)
		setOpenRenameModal(true)
	}

	const handleClickDelete = (id: string) => {
		setCurrentId(id)
		handleDelete(id)
	}

	const handleCloseRenameModal = () => {
		setOpenRenameModal(false)
	}

	const handleCloseAddModal = () => {
		setOpenAddModal(false)
	}

	const handleRename = (newName: string) => {
		dispatch(actionsCard.editCardName({ id: currentId, newName }))
	}

	const handleAddCard = (name: string) => {
		const newCard = {
			name: name,
			id: `${list.length + 1}`, // Генерируем уникальный ID на основе текущего времени
			img: '1',
			description: '1',
			createdAt: `${new Date()}`,
		}

		dispatch(actionsCard.addCard(newCard))
	}

	if (isLoading) {
		return <span>loading....</span>
	}

	return (
		<div className='containerCardList'>
			<BasicModal
				open={openRenameModal}
				closeModal={handleCloseRenameModal}
				rename={handleRename}
				currentName={currentName}
			/>
			<ModalAddCard
				open={openAddModal}
				closeModal={handleCloseAddModal}
				newCardName={handleAddCard}
			/>
			{list !== undefined ? (
				<BannerAddCard clickHandlerAddCard={handleClickAddCard} />
			) : (
				<Alert severity='error'>
					<AlertTitle>Error</AlertTitle>
					ошибка получения данных с сервера
				</Alert>
			)}

			{list?.map(data => (
				<Card
					key={data.id}
					data={data}
					clickHandlerRename={() => handleClickRename(data.id, data.name)}
					clickHandlerDelete={() => handleClickDelete(data.id)}
				/>
			))}
		</div>
	)
}

export default CardList
