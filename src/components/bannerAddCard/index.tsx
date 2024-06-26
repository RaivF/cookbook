import './style.css'

const BannerAddCard = props => {
	return (
		<div className='banner-add-card' onClick={props.clickHandlerAddCard}>
			Добавить рецепт
		</div>
	)
}

export default BannerAddCard
