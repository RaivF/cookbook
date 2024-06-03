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
export const ModalLogin = (props: any) => {
	const handleInputChangeLogin = event => {
		props.setLogin(event.target.value)
	}
	const handleInputChangePass = event => {
		props.setPass(event.target.value)
	}
	const clickHandler = () => {
		props.handleLogin()
		props.closeModal()
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
						Вход
					</Typography>

					<TextField
						id='outlined-basic'
						label='Login'
						variant='outlined'
						fullWidth
						onChange={handleInputChangeLogin}
						sx={{ mt: 2 }}
					/>
					<TextField
						id='outlined-basic'
						label='Пароль'
						variant='outlined'
						fullWidth
						onChange={handleInputChangePass}
						sx={{ mt: 2 }}
					/>
					<Button
						sx={{ bgcolor: 'text.secondary', mt: 2 }}
						onClick={() => clickHandler()}
					>
						Войти
					</Button>
				</Box>
			</Modal>
		</div>
	)
}
