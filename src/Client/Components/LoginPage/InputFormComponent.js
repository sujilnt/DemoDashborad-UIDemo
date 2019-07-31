import React, { Component } from "react";
import { Colors, InputGroup, FormGroup } from "@blueprintjs/core";
import PropTypes from "prop-types";
//import styled from "styled-components";

export default class InputFormComponent extends Component {
	render() {
		const { helperText, leftIcon, label, labelFor, labelInfor, inpputPlaceholder, handlechange } = this.props;
		return (
			<div>
				<FormGroup helperText={helperText} label={label} labelFor={labelFor} labelInfor={labelInfor}>
					<InputGroup
						disabled={false}
						large={false}
						onChange={handlechange}
						placeholder={inpputPlaceholder}
						leftIcon={leftIcon}
					/>
				</FormGroup>
			</div>
		);
	}
}
InputFormComponent.defaultProps = {
	helperText: " ",
	label: "default prop name",
	labelFor: "default prop for label",
	labelInfor: "Default - Enter the label infor",
	inpputPlaceholder: "UserName",
	leftIcon: "filter",
};
InputFormComponent.prototypes = {
	helperText: PropTypes.string,
	label: PropTypes.string.isRequired,
	labelFor: PropTypes.string,
	labelInfor: PropTypes.string,
	inpputPlaceholder: PropTypes.string,
	leftIcon: PropTypes.string,
	handlechange: PropTypes.func.isRequired,
};
