import React from 'react';

export default class Form extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(event){
		console.log(event.target.value,'asd');
		this.setState({name: event.target.value});
	}

	handleSubmit(event) {
	   alert('A name was submitted: ' + this.state.name);
	   event.preventDefault();
	 }

	render(){
		return (
				<form onSubmit={this.handleSubmit}>
				        <label>
				          Name:
				          <input type="text" value={this.state.name} onChange={ this.handleChange} />
				        </label>
				        <input type="submit" value="Submit" />
				      </form>
			);
		}
}