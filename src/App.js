import React from 'react';
import './App.css';
import Header from './components/Header'
import Body from './components/Body'

class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			scrollY: 0
		}
		this.handleScroll = this.handleScroll.bind(this)
	}

	componentDidMount(){
		this.setState({
			scrollY: window.scrollY
		})
		window.addEventListener('scroll', this.handleScroll)
	}

	handleScroll(){
		console.log(this.state)
		this.setState({
			scrollY: window.scrollY
		})
	}

  render(){
  	return (
      <div className="App" onscroll={this.handleScroll}>
        {this.state.scrollY >= 350 && <Header />}
        <Body scrollY={this.scrollY}/>
      </div>
    );}
}

export default App;
