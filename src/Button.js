import React from 'react';

export default class MyButton extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			btnState: "off"
		};

		// this.handleClick = this.handleClick.bind(this);
	}	

	 handleClick(test) {
		// console.log("test");

		let newState = this.state.btnState == "off" ? "on" : "off";
		console.log(test);
		
		this.setState({
			btnState: newState
		});
	}

	render(){
		return (
				<button onClick = {() => this.handleClick("testing")}>{this.state.btnState}</button>
			);
	}
} 