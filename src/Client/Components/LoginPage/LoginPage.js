import React, { Component } from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import PropTypes from "prop-types";
import InputFormComponent from "./InputFormComponent.js";
import { loginPageConfigSignIN, forgetPasswordConfig, loginPageConfigSignUP } from "./data.js";
export default class LoginPageComponent extends Component {
	state = {
		loading: false,
		signUp: false,
		forgetPassword: false,
	};

	inputHandleChange = e => {
		console.log("inputValue is changed", e.target.value);
	};
	buttonHandleChange = () => {
		console.log("button  is clicked");
	};
	toggleStateSignUp = () => {
		console.log("called toggle");
		this.setState(prevState => ({
			signUp: !prevState.signUp,
			forgetPassword: true,
		}));
	};
	toggleForgetPassword = () => {
		console.log("called toggle");
		this.setState(prevState => ({
			forgetPassword: !prevState.forgetPassword,
		}));
	};
	static propTypes = {};
	render() {
		const { signUp, forgetPassword } = this.state;
		const configuration = signUp
			? loginPageConfigSignUP()
			: forgetPassword
			? forgetPasswordConfig()
			: loginPageConfigSignIN();
		const { pageSelctionData, pageHeader, buttonSelectionData, rowStyles, textNames } = configuration;
		console.log("configuration data", forgetPassword);
		return (
			<Card interactive className="LoginCardContainer" style={rowStyles} elevation={Elevation.TWO}>
				<div className="text-information-button">
					<h1>{textNames.text}</h1>
					<Button text={textNames.buttonText} intent="success" large={"true"} onClick={this.toggleStateSignUp} />
				</div>
				<div className="form-information-button">
					<InputFormComponent
						dataProp={pageSelctionData}
						handlechange={this.inputHandleChange}
						buttonHandleChange={this.buttonHandleChange}
						buttondata={buttonSelectionData}
						pageHeader={pageHeader}
						forgetPassword={forgetPassword}
						handlechangepassword={this.toggleForgetPassword}
					/>
				</div>
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
