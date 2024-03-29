import { combineReducers } from "redux";
import  C from "./Constants.js";
import State from "./intialstate";

const user = (state = State, action) => {
	if (action.type === C.ADD_USER) {
		return action.payload;
	} else {
		return state;
	}
};

const isAuthenticated = (state = State, action) => {
	if (action.type === C.IS_AUTHENTICATED) {
		return action.payload || {};
	} else {
		return state;
	}
};
export default combineReducers({
	user,
	isAuthenticated
});
