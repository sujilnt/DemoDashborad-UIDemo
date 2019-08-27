import React, { Component } from "react";
import { Button, Card, Elevation, H3 } from "@blueprintjs/core";
import PropTypes from "prop-types";
import InputFormComponent from "./InputFormComponent";
import { loginPageConfigSignIN, forgetPasswordConfig } from "./data.js";
const LOGIN_PATH = "http://localhost:9001/api/user";
export default class LoginComponent extends Component {
	state = {
		loading: false,
		signIN: true,
		forgetPassword: false,
		email: "",
		password: "",
	};

	inputHandleChange = e => {
		const { name, value } = e.target;
		this.setState(() => ({
			[name]: value,
		}));
		console.log("inputValue is changeds", e.target.value);
	};
	buttonHandleChange = async () => {
		const { email, password } = this.state;
		try {
			if (!email || !password) {
				throw new Error(" form fields can't be empty");
			}
			// fetch token from the local storgage
			let body = await JSON.stringify({ email, password });
			let USER_ID = await JSON.parse(localStorage.getItem("USER_ID"));
			let response = await fetch(LOGIN_PATH, {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
					"Authorization": `Bearer ${USER_ID.token}`,
				},
				body: [body],
			});
			// expecting a token from the server
			let user = await response.json();
			localStorage.setItem(
				"USER_ID",
				JSON.stringify({
					token: user.token,
					name: USER_ID.name,
				})
			);
			return user;
		} catch (e) {
			console.error(e);
		}
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

LoginComponent.propTypes = {
	togglelogin: PropTypes.func.isRequired,
};
