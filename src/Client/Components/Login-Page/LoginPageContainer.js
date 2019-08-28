import React, { Component } from "react";
//import PropTypes from 'prop-types'
import LoginPage from "./LoginPage";
import SignUP from "./SignUpPage";
export default class LoginPageContainer extends Component {
	state = {
		logIn: true,
	};
	toggleStateSignUp = () => {
		this.setState(prevState => ({
			logIn: !prevState.logIn,
		}));
	};
	static propTypes = {};
	render() {
		console.log("%c LoginPageContainer ", "background: #222; color: #bada55");
		const { logIn } = this.state;
		return (
			<div>
				{/*
                    login: true, shows login Component 
                    Login: false , loads signup Component
                 */
				logIn ? <LoginPage togglelogin={this.toggleStateSignUp} /> : <SignUP toggleSignup={this.toggleStateSignUp} />}
			</div>
		);
	}
}
