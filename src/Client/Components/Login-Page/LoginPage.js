import React, { Component } from "react";
import { Button, Card, Elevation, H3 } from "@blueprintjs/core";
import PropTypes from "prop-types";
import InputFormComponent from "./InputFormComponent";
import { loginPageConfigSignIN, forgetPasswordConfig, loginPageConfigSignUP } from "./data.js";
export default class LoginPageComponent extends Component {
	state = {
		loading: false,
		signIN: true,
		forgetPassword: false,
	};

	inputHandleChange = e => {
		console.log("inputValue is changeds", e.target.value);
	};
	buttonHandleChange = () => {
		console.log("button is clicked");
	};

	toggleForgetPassword = () => {
		console.log("called toggle Forgetpasword");
		this.setState(prevState => ({
			forgetPassword: !prevState.forgetPassword,
		}));
	};
	static propTypes = {};
	render() {
		const { signIN, forgetPassword } = this.state;
		// data configuration for signIn or singUp.
		const configuration = signIN ? (forgetPassword ? forgetPasswordConfig() : loginPageConfigSignIN()) : "";
		const { pageSelctionData, buttonSelectionData, pageHeader } = configuration;
		return (
			<Card className={"LoginCardContainer"} elevation={Elevation.TWO} key={"0"}>
				<div className="text-information-button">
					<H3>Dont have an accont ? Create one now !</H3>
					<Button text={"Sign Up"} intent="success" large={"true"} onClick={this.props.togglelogin} />
				</div>
				<Card interactive={true} className="form-information-button" elevation={Elevation.THREE}>
					<InputFormComponent
						dataProp={pageSelctionData}
						handlechange={this.inputHandleChange}
						buttonHandleChange={this.buttonHandleChange}
						buttondata={buttonSelectionData}
						pageHeader={pageHeader}
						forgetPassword={forgetPassword}
						signUpProp={false}
						handlechangepassword={this.toggleForgetPassword}
					/>
				</Card>
			</Card>
		);
	}
}

LoginPageComponent.defaultProps = {
	logIn: true,
	forgetPassword: false,
};
LoginPageComponent.propTypes = {
	togglelogin: PropTypes.func.isRequired,
};
