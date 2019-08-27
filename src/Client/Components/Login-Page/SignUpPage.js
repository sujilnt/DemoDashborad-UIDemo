import React, { Component } from "react";
import { Button, Card, Elevation, H3 } from "@blueprintjs/core";
import PropTypes from "prop-types";
import InputFormComponent from "./InputFormComponent.js";
import "./LoginPage.css";
import { loginPageConfigSignUP } from "./data.js";

export default class SignUP extends Component {
	state = {
		loading: false,
		signUp: false,
		email: "",
		password: "",
		name: "",
	};

	inputHandleChange = e => {
		const { name, value } = e.target;
		this.setState(() => ({
			[name]: value,
		}));
		console.log("inputValue is changeds", e.target.value, e.target.name, this.state);
	};
	buttonHandleChange = async () => {
		const { email, password, name } = this.state;
		if (email && password && name) {
			try {
				let body = await JSON.stringify({ email, password, name });
				let response = await fetch("http://localhost:9001/signup", {
					method: "POST",
					headers: {
						"Accept": "application/json",
						"Content-Type": "application/json",
					},
					body: [body],
				});
				// expecting a token from the server
				let user = await response.json();
				console.log(user);
				localStorage.setItem(
					"USER_ID",
					JSON.stringify({
						token: user.token,
						name: "test",
					})
				);
				return user;
			} catch (e) {
				console.error(e);
			}
		}

		console.log("button is clicked");
	};

	static propTypes = {};
	render() {
		const { signUp } = this.state;
		// data configuration for signIn or singUp.
		const configuration = loginPageConfigSignUP();
		const { pageSelctionData, pageHeader, buttonSelectionData, classNames, textNames } = configuration;
		return (
			<Card className={classNames} elevation={Elevation.TWO} key={"0"}>
				<div className="text-information-button">
					<H3>{textNames.text}</H3>
					<Button text={textNames.buttonText} intent="success" large={"true"} onClick={this.props.toggleSignup} />
				</div>
				<Card interactive={true} className="form-information-button" elevation={Elevation.THREE}>
					<InputFormComponent
						dataProp={pageSelctionData}
						handlechange={this.inputHandleChange}
						buttonHandleChange={this.buttonHandleChange}
						buttondata={buttonSelectionData}
						pageHeader={pageHeader}
						forgetPassword={true}
						signUpProp={signUp}
						handlechangepassword={() => "nothing"}
					/>
				</Card>
			</Card>
		);
	}
}

SignUP.propTypes = {
	toggleSignup: PropTypes.func.isRequired,
};
