import React, { Component } from "react";
//import PropTypes from 'prop-types'
import LoginPage from "./LoginPage";

export default class LoginPageContainer extends Component {
	state = {
		logIn: true,
		signUP: false,
		forgetPassword: false,
	};

	static propTypes = {};
	render() {
		const { signIn, signOut, forgetPassword } = this.state;
		return (
			<div>
				<LoginPage signIn={signIn} signOut={signOut} forgetPassword={forgetPassword} />
			</div>
		);
	}
}
