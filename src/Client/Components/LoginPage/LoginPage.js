import React, { Component } from "react";
import { Button, Card, Elevation, InputGroup } from "@blueprintjs/core";
import PropTypes from "prop-types";
import InputFormComponent from "./InputFormComponent.js";
import { getDataforSigUPPage, getDataforSignPage, ButtonForSignUp, ButtonForSignIn } from "./data.js";
export default class LoginPageComponent extends Component {
	state = {
		loading: false,
		signUp: true,
	};

	inputHandleChange = e => {
		console.log("inputValue is changed", e.target.value);
	};
	buttonHandleChange = () => {
		console.log("button  is clicked");
	};
	static propTypes = {};
	render() {
		const { signUp } = this.state;
		const pageSelctionData = signUp ? getDataforSigUPPage : getDataforSignPage;
		const buttonSelectionData = signUp ? ButtonForSignUp : ButtonForSignIn;
		return (
			<Card interactive elevation={Elevation.TWO} className="LoginCardContainer">
				<InputFormComponent
					dataProp={pageSelctionData}
					handlechange={this.inputHandleChange}
					buttonHandleChange={this.buttonHandleChange}
					buttondata={buttonSelectionData}
				/>
			</Card>
		);
	}
}
LoginPageComponent.defaultProps = {
	logIn: true,
	signUp: false,
	forgetPassword: false,
};
LoginPageComponent.propTypes = {
	signIn: PropTypes.bool,
	signUp: PropTypes.bool,
	forgetPassword: PropTypes.bool,
};
