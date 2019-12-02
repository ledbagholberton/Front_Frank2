import React from 'react'
import exerciseImg from '../images/exercise.jpeg'

class Card extends React.Component {
    render() {
	return(
		<div>
			<div>
				<img src = {exerciseImg} />
			</div>
			<div>
				<h1>Primer encabezado</h1>
				<p>Un parrafo con info</p>
			</div>
	    </div>
		)
	}
}
export default Card

