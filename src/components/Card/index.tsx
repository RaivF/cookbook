import './style.css'
type CardProp = {
	data: {
		name: string
		img: string
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	clickHandler: any
}
const srcImg =
	'https://img.freepik.com/free-photo/top-view-meat-meal-along-with-vegetables-inside-white-plate-on-the-brown-desk-and-dark-surface_140725-14557.jpg?w=1480&t=st=1715220833~exp=1715221433~hmac=17ce0c1b2a482004f5b531a5899095cc5eb47a411fd04785efcd5a5c4a162cc2'

const Card = (props: CardProp) => {
	return (
		<div className='card'>
			<img src={srcImg} alt={props.data.name} />
			<div className='card-info'>{props.data.name}</div>
			<button className='btnChangeName' onClick={props.clickHandler}>
				Изменить имя
			</button>
		</div>
	)
}

export default Card
