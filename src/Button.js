import React from 'react';

export default class MyButton extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			btnState: "off"
		};

		// this.handleClick = this.handleClick.bind(this);
	}	

	handleClick = () => {
		// console.log("test");

		let newState = this.state.btnState == "off" ? "on" : "off";
		console.log(newState);
		
		this.setState({
			btnState: newState
		});
	}

	render(){
		return (
				<button onClick = {this.handleClick}>{this.state.btnState}</button>
			);
	}
} 