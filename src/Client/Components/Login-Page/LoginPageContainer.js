import React, {Component, Fragment} from "react";
//import PropTypes from 'prop-types'
import LoginPage from "./LoginPage";
import {authenticate} from "../../store/action";
import SignUP from "./SignUpPage";
export default class LoginPageContainer extends Component {
	state = {
		logIn: true,
		redirect:false
	};
	toggleStateSignUp = () => {
		this.setState(prevState => ({
			logIn: !prevState.logIn,
		}));
	};
	toggleRedirect = async (user)=>{
		await this.setState(prevState =>({
			redirect: !prevState.redirect
		}));
		localStorage.setItem(
			"USER_ID",
			JSON.stringify({user: user, isAuthenticated : this.state.redirect })

		);
		// Redux Depatched to change the App change
		this.props.dispatch(authenticate(true));
	};

	static propTypes = {};

	render() {
		console.log("%c LoginPageContainer ", "background: #222; color: #bada55");
		console.log("LoginPageContainer state",this.state);
		const {logIn} = this.state;
		console.log(this.props.dispatch,authenticate);
		return !this.state.redirect ? (
			<Fragment>
				{/*
                    login: true, shows login Component
                    Login: false , loads signup Component
                 */
					logIn ? <LoginPage togglelogin={this.toggleStateSignUp} redirect={this.toggleRedirect} /> :
						<SignUP toggleSignup={this.toggleStateSignUp}/>}
			</Fragment>
		) : <div>Login page missing </div>;



	}
}
