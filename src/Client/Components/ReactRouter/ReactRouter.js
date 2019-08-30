import React, { PureComponent } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "../NavBar/NavBarComponent.js";
import LoginPageContainer from "../Login-Page/LoginPageContainer";
import App from "../../App.js";

export default class ReactRouter extends PureComponent {
	render() {
		const {dispatchFunc} = this.props;
		console.log("what is ",dispatchFunc);
		return (
			<div>
				<HashRouter>
					<Switch>
						<Route
							exact
							path="/"
							render={props => {
								return (
									<div d={props}>
										<Navbar/>
									</div>
								);
							}}
						/>
						<Route
							exact
							path="/login"
							render={(props) => {
								return <LoginPageContainer dispatch ={dispatchFunc} routerprops={props} />;
							}}
						/>
					</Switch>
				</HashRouter>
			</div>
		);
	}
}
