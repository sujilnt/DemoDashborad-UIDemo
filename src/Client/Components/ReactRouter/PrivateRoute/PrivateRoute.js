import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
const PrivateRoute = ({ component: Component, isAuthenticated = true, ...rest }) => {
	const { routeState } = { ...rest };
	return (
		<Route
			{...rest}
			render={props => {
				return isAuthenticated ? (
					<Component {...{ ...props, ...routeState }} />
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: props.location.pathname },
						}}
					/>
				);
			}}
		/>
	);
};
PrivateRoute.propTypes={
	component: PropTypes.elementType.isRequired,
	isAuthenticated:PropTypes.object,
	location:PropTypes.object,
};
export default PrivateRoute;
