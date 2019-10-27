import React from 'react'

export default function Contact(){
	let state = {

	}
	return (
		<div style={styles.container}>
			<div style={styles.card}>
				<form>
					<div>
						<input />
					</div>
					<div>
						<input />
					</div>
					<div>
						<input />
					</div>								
				</form>
			</div>
		</div>
	)
}

const styles = {
	container: {
		width: '100vw',
		height: '100vh',
		alignItems: 'center',
		justifyContent: 'center'
	},
	card: {
		backgroundColor: 'white',
		borderRadius: 20,
		width: '50%',
		margin: 'auto',
		alignItems: 'center',
		justifyContent: 'center'
	}
}