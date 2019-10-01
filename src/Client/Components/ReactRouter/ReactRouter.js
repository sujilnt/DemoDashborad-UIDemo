import React, { PureComponent } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./PrivateRoute/PrivateRoute";
import DashboardContainer from "../Dashboard/DashboardContainer";
import Loadable from "react-loadable";
import Loader from "../Loader/Loader";
import PropTypes from "prop-types";
// splitting the bundle
const Home = Loadable({
	loader:()=>import("../Analysis/AnalysisContainer"),
	loading: Loader

});
// splitting the bundle
const Login = Loadable({
	loader: ()=>import("../Login-Page/LoginPageContainer"),
	loading:Loader
});

export default class ReactRouter extends PureComponent {
	render() {
		const {dispatchFunc,store} = this.props;
		const auth_prop = this.props.isAuthenticated;
		return (
			<div>
				<HashRouter>
					<Switch>
						<ProtectedRoute
							exact={true}
							path="/home"
							isAuthenticated={auth_prop}
							component={(props)=><Home store={store} routerprops={props}/>}
						/>
						<ProtectedRoute
							exact={true}
							path="/"
							isAuthenticated={auth_prop}
							component={(props)=> <DashboardContainer store={store} routerprops={props}/>}
						/>
						<Route
							exact
							path="/login"
							render={(props) => {
								return <Login
									dispatch ={dispatchFunc}
									routerprops={props}
									isAuthenticated={auth_prop}/>;
							}}
						/>
					</Switch>
				</HashRouter>
			</div>
		);
	}
}

ReactRouter.propTypes={
	dispatchFunc: PropTypes.func,
	isAuthenticated:PropTypes.object,
	store: PropTypes.object
};