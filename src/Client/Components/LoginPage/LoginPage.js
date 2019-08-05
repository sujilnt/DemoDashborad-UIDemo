import React, { Component } from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import PropTypes from "prop-types";
import InputFormComponent from "./InputFormComponent.js";
import "./LoginPage.css";
import { loginPageConfigSignIN, forgetPasswordConfig, loginPageConfigSignUP } from "./data.js";
/**
	 Configuraton there are 2 types of configuration SignUp and SignIn. All configuartion can be seen in data.js . 
	 Components : 
		 InputFormComponent => InputFormComponent component render forms for signIn or SingUp based on data Configuration.
		 { Card , Button } => Library components from React-Blueprint.js
*/
export default class LoginPageComponent extends Component {
	state = {
		loading: false,
		signUp: false,
		forgetPassword: false,
	};

	inputHandleChange = e => {
		console.log("inputValue is changeds", e.target.value);
	};
	buttonHandleChange = () => {
		console.log("button  is clicked");
	};
	toggleStateSignUp = () => {
		this.setState(prevState => ({
			signUp: !prevState.signUp,
			forgetPassword: false,
		}));
	};
	toggleForgetPassword = () => {
		console.log("called toggle Forgetpasword");
		this.setState(prevState => ({
			forgetPassword: !prevState.forgetPassword,
		}));
	};
	static propTypes = {};
	render() {
		const { signUp, forgetPassword } = this.state;
		// data configuration for signIn or singUp.
		const configuration = signUp
			? loginPageConfigSignUP()
			: forgetPassword
			? forgetPasswordConfig()
			: loginPageConfigSignIN();
		const { pageSelctionData, pageHeader, buttonSelectionData, classNames, textNames } = configuration;
		return (
			<Card interactive className={classNames} elevation={Elevation.TWO} key={"0"}>
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
						signUpProp={signUp}
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
	logIn: PropTypes.bool,
};
