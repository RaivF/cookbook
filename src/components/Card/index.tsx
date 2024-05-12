import './style.css'
type CardProp = {
	data: {
		name: string
		img: string
	}
}
const srcImg =
	'https://img.freepik.com/free-photo/top-view-meat-meal-along-with-vegetables-inside-white-plate-on-the-brown-desk-and-dark-surface_140725-14557.jpg?w=1480&t=st=1715220833~exp=1715221433~hmac=17ce0c1b2a482004f5b531a5899095cc5eb47a411fd04785efcd5a5c4a162cc2'

const Card = ({ data }: CardProp) => {
	return (
		<div className='card'>
			<img src={srcImg} alt={data.name} />
			<div className='card-info'>{data.name}</div>
		</div>
	)
}

export default Card
