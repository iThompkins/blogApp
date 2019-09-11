import React from 'react'
import Title from './Title'
import Work from './Work'
import spitball from '../spitball_landing.png'
import hartley6 from '../Hartley6.png'

export default function Body(){
	const WORKS = [
		{
			title: 'Spitball.io',
			blurb: 'A Ruby on Rails web application I developed in the Spring of 2018. It is a platform designed to connect budding entreprenuers with one another to form ventures over the internet!',
			img: spitball,
			link: 'https://spitball.io',
		},
		{
			title: 'Hartley6 Event Planner',
			blurb: `A freelance project completed for a residence hall at Columbia University. It functions as an event aggregator so that residents can stay up-to-date on campus events.`,
			img: hartley6,
			link: 'https://hartley6.netlify.com',
		},
	]
	return(
		<div>
			<Title />
			{WORKS.map((work) => {
				return (
					<Work
					title={work.title}
					blurb={work.blurb}
					img={work.img}
					link={work.link}
					/>
				)
			})}
		</div>
	)
}