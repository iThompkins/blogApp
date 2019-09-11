import React from 'react'

export default function Work(props){
	return(
		<div className='body-page'>
			<div id='work-page' className='page-content'>
				<div>
					<h4 style={styles.title}>{props.title}</h4> <a style={styles.title} class='site-link' href={props.link} target='_blank'>&#8599;</a>
				</div>
				<div>
					<img className='img' src={props.img} />
					<p>
						{props.blurb}
					</p>
				</div>
			</div>
		</div>
	)
}
const styles = {
	title:{
		display: 'inline-block'
	}
}