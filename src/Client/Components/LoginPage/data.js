//All the data for the login Page Page Component
/**
 * getDataforSignPage => type -> function
 * That returns form Input data like label,icon
 */

const getDataforSignPage = () => {
	return [
		{
			label: "Email",
			labelFor: "user-login-page",
			labelInfor: "(required)",
			inpputPlaceholder: "Enter your Email",
			leftIcon: "user",
			type: "text",
		},
		{
			label: "Password",
			labelFor: "user-login-page",
			labelInfor: "(required)",
			inpputPlaceholder: "Enter your Password",
			leftIcon: "lock",
			type: "password",
		},
	];
};

/**
 * getDataforSigUPPage => type -> function
 * That returns form Input data like label,icon for SignUp
 */

const getDataforSigUPPage = () => {
	return [
		{
			label: "Name",
			labelFor: "user-signup-page",
			labelInfor: "(required)",
			inpputPlaceholder: "Enter your Name",
			leftIcon: "user",
			type: "text",
		},
		{
			label: "Email",
			labelFor: "user-signup-page",
			labelInfor: "(required)",
			inpputPlaceholder: "Enter your Email",
			leftIcon: "user",
			type: "text",
		},
		{
			label: "Passoword",
			labelFor: "user-signup-page",
			labelInfor: "(required)",
			inpputPlaceholder: "Enter your Password",
			leftIcon: "lock",
			type: "password",
		},
	];
};
/**
 * ButtonForSignIn => type -> function
 * That returns form Button data like name,classname or other configurations,
 * for Sign in.
 */
const ButtonForSignIn = () => {
	return {
		text: "Login In",
		intent: "primary",
		large: "true",
		className: "button-login",
	};
};

/**
 * ButtonForSignUp => type -> function
 * That returns form Button data like name,classname or other configurations,
 *  for signup.
 *
 */

const ButtonForSignUp = () => {
	return {
		text: "Sign Up",
		intent: "primary",
		large: "true",
		className: "button-login",
	};
};
export { getDataforSignPage, getDataforSigUPPage, ButtonForSignUp, ButtonForSignIn };
