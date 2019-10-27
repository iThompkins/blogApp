import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export default function Work(props){
	return(
		<div className='body-page'>
			<div id='work-page' className='page-content'>
				<div>
					<h2 style={styles.title}>{props.title}</h2> <a style={styles.title} class='site-link' href={props.githubLink} target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
				</div>
				<div>
					<a href={props.link} target="_blank"><img className='img' src={props.img} /></a>
					<p style={styles.paragraph}>
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
	},
	paragraph: {
		fontSize: '20px'
	}
}