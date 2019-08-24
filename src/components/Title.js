import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Title(){
	return(
		<div className='body-page'>
			<div id='title-page' className='page-content'>
				<h3>
					Hello, I'm Isaiah Thompkins
				</h3>
				<p>
					A full-stack web developer
				</p>
				<p>
					<a id='github-link' href='https://github.com/iThompkins' target='_blank'><FontAwesomeIcon icon={ faGithub } /></a>
				</p>
			</div>
		</div>
	)
}