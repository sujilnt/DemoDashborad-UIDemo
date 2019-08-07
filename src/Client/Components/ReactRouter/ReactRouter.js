import React, { PureComponent } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "../NavBar/NavBarComponent.js";
import App from "../../App.js";

export default class ReactRouter extends PureComponent {
	render() {
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
										<Navbar />
										this is a header
									</div>
								);
							}}
						/>
						<Route
							exact
							path="/login"
							render={() => {
								return <App />;
							}}
						/>
					</Switch>
				</HashRouter>
			</div>
		);
	}
}
