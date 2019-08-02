import React, { Component } from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import PropTypes from "prop-types";
import InputFormComponent from "./InputFormComponent.js";
import { loginPageConfigSignIN, loginPageConfigSignUP } from "./data.js";
export default class LoginPageComponent extends Component {
	state = {
		loading: false,
		signUp: false,
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
		}));
	};
	static propTypes = {};
	render() {
		const { signUp } = this.state;
		const configuration = signUp ? loginPageConfigSignUP() : loginPageConfigSignIN();
		const { pageSelctionData, pageHeader, buttonSelectionData, rowStyles, textNames } = configuration;
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
