import React, { Component } from "react";
import { Colors, InputGroup, FormGroup, Divider, Button } from "@blueprintjs/core";
import PropTypes from "prop-types";
//import styled from "styled-components";
import "./LoginPage.css";

const NUMBER_2 = 2;
export default class InputFormComponent extends Component {
	renderFormGroup = () => {
		const finalFormGroupData = [];
		const { dataProp, handlechange } = this.props;
		const formdata = dataProp() || [];
		if (formdata.length >= NUMBER_2) {
			formdata.map(r => {
				const { inpputPlaceholder, leftIcon, type, helperText, label, labelFor, labelInfor } = r;
				finalFormGroupData.push(
					<FormGroup helperText={helperText} label={label} labelFor={labelFor} labelInfor={labelInfor}>
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
		const { buttonHandleChange, buttondata } = this.props;
		const { text, intent, large } = buttondata();
		return (
			<div>
				<h3>Login Page </h3>
				<Divider vertical={"true"} />
				{this.renderFormGroup()}
				<Button text={text} intent={intent} large={large} onChange={buttonHandleChange} className="button-login" />
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
};
