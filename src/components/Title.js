import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Title(){
	return(
		<div className='body-page'>
			<div id='title-page'>
				<h1>
					Hello, I'm Isaiah Thompkins
				</h1>
				<p style={{fontSize: '20px'}}>
					A full-stack web developer
				</p>
				<p>
					<a id='github-link' href='https://github.com/iThompkins' target='_blank'><FontAwesomeIcon icon={ faGithub } size={'2x'}/></a>
				</p>
			</div>
		</div>
	)
}