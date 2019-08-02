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
			label: "Password",
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

const loginPageConfigSignUP = () => {
	return {
		pageHeader: "Create an Account",
		pageSelctionData: getDataforSigUPPage,
		buttonSelectionData: ButtonForSignUp,
		rowStyles: { flexDirection: "row-reverse" },
		textNames: {
			text: "have an account ? then ...",
			buttonText: "Log In",
		},
	};
};

const loginPageConfigSignIN = () => {
	return {
		pageHeader: "Login",
		pageSelctionData: getDataforSignPage,
		buttonSelectionData: ButtonForSignIn,
		rowStyles: { flexDirection: "row" },
		textNames: {
			text: "Dont have an accont ? Create one now !",
			buttonText: "Sign Up",
		},
	};
};

const ButtonForgetPassword = () => {
	return {
		text: "send mail",
		intent: "primary",
		large: "true",
		className: "button-login",
		rowStyles: { flexDirection: "row" },
		textNames: {
			text: "Dont have an accont ? Create one now !",
			buttonText: "Sign Up",
		},
	};
};

const getDataforgetPassword = () => {
	return [
		{
			label: "Email",
			labelFor: "user-forget-page",
			labelInfor: "(required)",
			inpputPlaceholder: "Enter your email",
			leftIcon: "user",
			type: "text",
		},
	];
};
const forgetPasswordConfig = () => {
	return {
		pageHeader: "forgot password",
		buttonSelectionData: ButtonForgetPassword,
		pageSelctionData: getDataforgetPassword,
		rowStyles: { flexDirection: "row" },
		textNames: {
			text: "Dont have an accont ? Create one now !",
			buttonText: "Sign Up",
		},
	};
};

export {
	loginPageConfigSignIN,
	loginPageConfigSignUP,
	getDataforSignPage,
	getDataforSigUPPage,
	ButtonForSignUp,
	ButtonForSignIn,
	forgetPasswordConfig,
};
