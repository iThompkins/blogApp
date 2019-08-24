import React from 'react'
import spitball from '../spitball_landing.png'

export default function Work(){
	return(
		<div className='body-page'>
			<div id='work-page' className='page-content'>
				<h4>Spitball.io</h4>
				<img className='img' src={spitball} />
				<p>
					A Ruby on Rails web application I developed in the Spring of 2018.
       				It is a platform designed to connect budding entreprenuers with one another
       				to form ventures over the internet!
				</p>
			</div>
		</div>
	)
}