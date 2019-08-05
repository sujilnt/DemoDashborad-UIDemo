import React, { Component } from "react";
import { InputGroup, FormGroup, Divider, Button } from "@blueprintjs/core";
import PropTypes from "prop-types";
import "./LoginPage.css";

const NUMBER_1 = 1;
export default class InputFormComponent extends Component {
	renderFormGroup = () => {
		const finalFormGroupData = [];
		const { dataProp, handlechange } = this.props;
		const formdata = dataProp() || [];
		if (formdata.length >= NUMBER_1) {
			formdata.map((r, key) => {
				const { inpputPlaceholder, leftIcon, type, helperText, label, labelFor, labelInfor } = r;
				finalFormGroupData.push(
					<FormGroup
						helperText={helperText}
						label={label}
						labelFor={labelFor}
						labelInfor={labelInfor}
						key={`formdata${key}`}
					>
						<InputGroup
							disabled={false}
							large={true}
							onChange={handlechange}
							placeholder={inpputPlaceholder}
							leftIcon={leftIcon}
							className="input-sign"
							type={type}
						/>
					</FormGroup>
				);
			});
		}
		return finalFormGroupData;
	};
	render() {
		const { buttonHandleChange, buttondata, pageHeader, forgetPassword, handlechangepassword, signUpProp } = this.props;
		console.log(this.props.forgetPassword, "get all props");
		const { text, intent, large } = buttondata();
		return (
			<div>
				<h3>{pageHeader}</h3>
				<Divider vertical={"true"} />
				{this.renderFormGroup()}
				<div>
					<Button text={text} intent={intent} large={large} onClick={buttonHandleChange} className="button-login" />
					{/**
					Forget password button only display when signUp  and forgetpassword props is false  
					*/}
					{!forgetPassword && !signUpProp ? (
						<Button
							text={!forgetPassword ? "forgetPassword" : "Sign In"}
							intent={intent}
							large={large}
							onClick={handlechangepassword}
							className="button-login"
						/>
					) : (
						""
					)}
				</div>
			</div>
		);
	}
}
InputFormComponent.defaultProps = {
	dataProp: console.log("handle change function is not added"),
	buttonHandleChange: console.log("Button onchange function not handled properly"),
	handlechange: console.log("handle change function is not added"),
};
InputFormComponent.propTypes = {
	dataProp: PropTypes.func.isRequired,
	buttonHandleChange: PropTypes.func.isRequired,
	handlechange: PropTypes.func.isRequired,
	buttondata: PropTypes.func.isRequired,
	pageHeader: PropTypes.string.isRequired,
	forgetPassword: PropTypes.bool.isRequired,
	signUpProp: PropTypes.bool.isRequired,
	handlechangepassword: PropTypes.func.isRequired,
};
