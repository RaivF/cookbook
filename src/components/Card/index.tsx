import './style.css'
type CardProp = {
	data: {
		name: string
		img: string
		id: string
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	clickHandlerRename: any
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	clickHandlerDelete: any
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
}

const Card = (props: CardProp) => {
	const srcImg = `/photo_2018-06-22_14-35-09.jpg`

	return (
		<div className='card'>
			<img src={srcImg} alt={props.data.name} />
			<div className='card-info'>{props.data.name}</div>
			<button className='btnChangeName' onClick={props.clickHandlerRename}>
				Изменить название
			</button>
			<button className='delete' onClick={props.clickHandlerDelete}>
				удалить
			</button>
		</div>
	)
}

export default Card
