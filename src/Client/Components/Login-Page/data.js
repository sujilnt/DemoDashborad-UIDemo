//All the data for the login Page Page Component
/**
 * getDataforSignPage => type -> function
 * That returns form Input data like label,icon
 */

const getDataforSignPage = () => {
	return [
		{
			label: "Email",
			name: "email",
			labelFor: "user-login-page",
			labelInfor: "(required)",
			inpputPlaceholder: "Enter your Email",
			leftIcon: "user",
			type: "text",
		},
		{
			label: "Password",
			name: "password",
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
			name: "name",
			labelFor: "user-signup-page",
			labelInfor: "(required)",
			inpputPlaceholder: "Enter your Name",
			leftIcon: "user",
			type: "text",
		},
		{
			label: "Email",
			name: "email",
			labelFor: "user-signup-page",
			labelInfor: "(required)",
			inpputPlaceholder: "Enter your Email",
			leftIcon: "user",
			type: "text",
		},
		{
			label: "Password",
			name: "password",
			labelFor: "user-signup-page",
			labelInfor: "(required)",
			inpputPlaceholder: "Enter your Password",
			leftIcon: "lock",
			type: "password",
		},
	];
};

/**
 * getDataforgetPassword => type -> function
 * That returns form Input data like label,icon for forget passoword configuration
 */

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
		fetchurl: "http://localhost:9001/api/user",
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
		fetchurl: "http://localhost:9001/signup",
	};
};

// ButtonForgetPassword => Forget passowrd data configuration
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

// loginPageConfigSignUP => main configuartion  for the Signup page.
const loginPageConfigSignUP = () => {
	return {
		pageHeader: "Create an Account", // header of the page
		pageSelctionData: getDataforSigUPPage, // form data
		buttonSelectionData: ButtonForSignUp, // button texts
		rowStyles: { flexDirection: "row-reverse" },
		classNames: "LoginCardContainerInverse",
		textNames: {
			text: "Have an account ? then ...",
			buttonText: "Log In",
		},
	};
};

// loginPageConfigSignUP => main configuartion for the login page.
const loginPageConfigSignIN = () => {
	return {
		pageHeader: "Login",
		pageSelctionData: getDataforSignPage,
		buttonSelectionData: ButtonForSignIn,
		rowStyles: { flexDirection: "row" },
		classNames: "LoginCardContainer",
		textNames: {
			text: "Dont have an accont ? Create one now !",
			buttonText: "Sign Up",
		},
	};
};

// loginPageConfigSignUP => main configuartion for the forget password page.
const forgetPasswordConfig = () => {
	return {
		pageHeader: "Forgot password",
		buttonSelectionData: ButtonForgetPassword,
		pageSelctionData: getDataforgetPassword,
		rowStyles: { flexDirection: "row" },
		classNames: "LoginCardContainer",
		textNames: {
			text: "Dont have an accont ? Create one now !",
			buttonText: "Sign Up",
		},
	};
};

export {
	ButtonForSignUp,
	ButtonForSignIn,
	loginPageConfigSignIN,
	loginPageConfigSignUP,
	getDataforSignPage,
	getDataforSigUPPage,
	forgetPasswordConfig,
};
