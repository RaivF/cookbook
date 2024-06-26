import './style.css'
type hraderPropsType = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	openLoginModal: any
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	sessionInfo: any
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	signOut: any
}
export const Header = (props: hraderPropsType) => {
	const handlerOpenLoginModal = () => {
		props.openLoginModal()
	}
	const handlerSingOut = () => {
		props.signOut()
	}

	const btn1 = props.sessionInfo.token ? 'btn1 hide' : 'btn1'
	const btn2 = props.sessionInfo.token ? 'btn1' : 'btn1 hide'
	return (
		<div className='head'>
			<span>{`${
				props.sessionInfo.isLogged === false || props.sessionInfo.login === null
					? ''
					: 'Привет ' + props.sessionInfo.login
			}`}</span>
			<div className='buttons'>
				<button className={btn1} onClick={handlerOpenLoginModal}>
					Войти
				</button>
				<button className={btn2} onClick={handlerSingOut}>
					Выйти
				</button>
			</div>
		</div>
	)
}
