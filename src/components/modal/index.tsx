import { useState } from 'react'
import { Modal, Box, Typography, TextField, Button } from '@mui/material'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'primary.dark',
	boxShadow: 24,
	p: 4,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BasicModal = (props: any) => {
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = event => {
		setInputValue(event.target.value)
	}
	const clickHandler = () => {
		props.rename(inputValue)
		props.closeModal()
		setInputValue('')
	}

	return (
		<div className='modalEditName'>
			<Modal
				open={props.open}
				onClose={props.closeModal}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Typography id='modal-modal-title' variant='h6' component='h2'>
						Переименовать рецепт
					</Typography>

					<TextField
						id='outlined-basic'
						label='Введите текст'
						variant='outlined'
						fullWidth
						value={inputValue}
						onChange={handleInputChange}
						sx={{ mt: 2 }}
					/>
					<Button
						sx={{ bgcolor: 'text.secondary', mt: 2 }}
						onClick={() => clickHandler()}
					>
						Переименовать
					</Button>
				</Box>
			</Modal>
		</div>
	)
}
