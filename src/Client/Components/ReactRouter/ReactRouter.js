import React, { PureComponent } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

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
								return <div d={props}>Main page</div>;
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
