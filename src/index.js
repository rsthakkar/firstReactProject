import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import Form from './Form';
import MyButton from './Button';
import Calculator from './Calculator';
import reportWebVitals from './reportWebVitals';


const user = {
	"name": "Rudra",
	"surname": "Thakkar" 
};

const name = 'Rudra';
const element = (
		<h1>
			{formatName(user)} is here
		</h1>
	);

function formatName(user){
	return user.name + " " + user.surname;
}

//different ways of creating and using a react components
function Welcome(props) {
	return (
		<div>
			<h1>
				Testing is going on 
			</h1> 
			<Clock />
			<Form />
			<MyButton/>
			<Calculator/>
			{element}
		</div>
		);
}




ReactDOM.render(
 	<Welcome/>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
