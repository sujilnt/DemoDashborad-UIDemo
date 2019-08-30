import React, {PureComponent, Fragment} from "react";
//import PropTypes from 'prop-types'
import LoginPage from "./LoginPage";
import {authenticate} from "../../store/action";
import SignUP from "./SignUpPage";
import { Redirect, Route } from "react-router-dom";
export default class LoginPageContainer extends PureComponent {
	state = {
		logIn: true,
	};
	toggleStateSignUp = () => {
		this.setState(prevState => ({
			logIn: !prevState.logIn,
		}));
	};
	toggleRedirect = (user)=>{
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
		console.log("LoginPageContainer state",this.state,this.props);
		const {routerprops,isAuthenticated} =this.props;
		const PATH_URL = routerprops.location.state ?  routerprops.location.state.from : "/";
		const {logIn,redirect} = this.state;
		console.log(this.props.dispatch,this.props.isAuthenticated,redirect,routerprops.location.state);
		return !isAuthenticated ? (
			<Fragment>
				{/*
                    login: true, shows login Component
                    Login: false , loads signup Component
                 */
					logIn ? <LoginPage togglelogin={this.toggleStateSignUp} redirect={this.toggleRedirect}/> :
						<SignUP toggleSignup={this.toggleStateSignUp}/>}
			</Fragment>
		) : (
			<div>
				<Route>
					<Redirect
						to={{
							pathname: PATH_URL
						}}
					/>
				</Route>
			</div>
		);
	}
}
