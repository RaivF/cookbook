import './style.css'
import { CardList } from '../CardList/index'
import { useState } from 'react'
import { ModalLogin } from '../modalLogin'
import { Header } from '../Header'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { actionsSession } from '../../store/sessionSlice/index'
import { Alert, AlertTitle } from '@mui/material'

const currentLogin = 'user'
const currentPass = '1234'

const HomePage = () => {
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
	const [login, setLogin] = useState('')
	const [pass, setPass] = useState('')
	const [error, setError] = useState(false)
	const [success, setSuccess] = useState(false)
	const { sessionInfo } = useAppSelector(state => state.session)
	const dispatch = useAppDispatch()

	const closeLoginModal = () => {
		setIsLoginModalOpen(false)
	}

	const openLoginModal = () => {
		setIsLoginModalOpen(true)
	}

	const signOut = () => {
		dispatch(actionsSession.signOut())
	}

	const hideInfo = () => {
		setError(false)
		setSuccess(false)
	}

	const handleLogin = () => {
		if (login === currentLogin && pass === currentPass) {
			setSuccess(true)
			dispatch(actionsSession.signIn(login))
		} else {
			setError(true)
			console.log('пользователь', login, 'не найден')
		}
		setTimeout(hideInfo, 3000)
	}

	return (
		<div>
			<div className={error ? 'errorAlert show' : 'errorAlert'}>
				<Alert severity='error'>
					<AlertTitle>Ошибка</AlertTitle>
					Неправильный логин или пароль
				</Alert>
			</div>
			<div className={success ? 'successAlert show' : 'successAlert'}>
				<Alert severity='success'>
					<AlertTitle>Добро пожаловать</AlertTitle>
					Вы вошли
				</Alert>
			</div>
			<Header
				sessionInfo={sessionInfo}
				openLoginModal={openLoginModal}
				signOut={signOut}
			/>
			<ModalLogin
				open={isLoginModalOpen}
				closeModal={closeLoginModal}
				setLogin={setLogin}
				setPass={setPass}
				handleLogin={handleLogin}
			/>
			<CardList />
		</div>
	)
}

export default HomePage
