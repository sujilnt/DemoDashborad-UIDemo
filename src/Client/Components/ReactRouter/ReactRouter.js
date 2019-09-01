import React, { PureComponent } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "../NavBar/NavBarComponent.js";
import LoginPageContainer from "../Login-Page/LoginPageContainer";
import ProtectedRoute from "./PrivateRoute/PrivateRoute";
import Page from "../Page/PageComponent";
import SideBar from "../SideBar/SideBar";
import DashboardContainer from "../Dashboard/DashboardContainer";

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
						<ProtectedRoute
							exact={true}
							path="/"
							isAuthenticated={isAuthenticated}
							component={DashboardContainer}
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
