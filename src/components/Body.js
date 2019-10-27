import React from 'react'
import Title from './Title'
import Work from './Work'
import Contact from './Contact'

import Fade from 'react-reveal/Fade';

import spitball from '../spitball_landing.png'
import hartley6 from '../Hartley6.png'

export default class Body extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			scrollY: 0
		}
	}


	render(){	
		return(
			<div onscroll={() => this.setState({scrollY: window.scrollY})}>
				<Title />
				<Fade bottom>
				{WORKS.map((work, i) => {
					return (
						<Work
						key={i}
						title={work.title}
						blurb={work.blurb}
						img={work.img}
						githubLink={work.githubLink}
						link={work.link}
						/>
					)
				})}
				</Fade>
				<Contact />
			</div>
		)}
}
const WORKS = [
		{
			title: 'Spitball.io',
			blurb: 'A Ruby on Rails web application I developed in the Spring of 2018. It is a platform designed to connect budding entreprenuers with one another to form ventures over the internet!',
			img: spitball,
			link: 'https://spitball.io',
			githubLink: 'https://github.com/1Don/Spitball',
		},
		{
			title: 'Hartley6 Event Planner',
			blurb: `A freelance project completed for a residence hall at Columbia University. It functions as an event aggregator so that residents can stay up-to-date on campus events.`,
			img: hartley6,
			link: 'https://hartley6.netlify.com',
			githubLink: 'https://github.com/iThompkins/hartley6App'
		},
	]