import React, { PureComponent } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "../NavBar/NavBarComponent.js";
import LoginPageContainer from "../Login-Page/LoginPageContainer";
import ProtectedRoute from "./PrivateRoute/PrivateRoute";
import App from "../../App.js";

export default class ReactRouter extends PureComponent {
	render() {
		const {dispatchFunc,isAuthenticated} = this.props;
		console.log("what is ",dispatchFunc,isAuthenticated);
		return (
			<div>
				<HashRouter>
					<Switch>
						<ProtectedRoute
							exact={true}
							path="/home"
							isAuthenticated={isAuthenticated}
							component={Navbar}
						/>
						<Route
							exact
							path="/login"
							render={(props) => {
								return <LoginPageContainer dispatch ={dispatchFunc} routerprops={props} isAuthenticated={isAuthenticated}/>;
							}}
						/>
					</Switch>
				</HashRouter>
			</div>
		);
	}
}
