import React, { Component } from "react";
import { Button, Card, Elevation, InputGroup } from "@blueprintjs/core";
import PropTypes from "prop-types";
import InputFormComponent from "./InputFormComponent.js";
export default class LoginPageComponent extends Component {
	state = {
		loading: false,
	};

	inputHandleChange = e => {
		console.log("inputValue is changed", e.target.value);
	};
	static propTypes = {};
	render() {
		return (
			<Card interactive elevation={Elevation.TWO} className="LoginCardContainer">
				<InputFormComponent
					helperText=""
					label="User Name"
					labelFor="user-login-page"
					labelInfor="(required)"
					inpputPlaceholder="Enter your user__ID"
					leftIcon="user"
					handlechange={this.inputHandleChange}
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
