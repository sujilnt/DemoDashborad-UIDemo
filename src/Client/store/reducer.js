import { combineReducers } from "redux";
import { C } from "./Constants.js";
import State from "./intialstate";
export const user = (state = State, action) => {
	if (action.type === C.ADD_USER) {
		return action.payload;
	} else {
		return state.user;
	}
};
export default combineReducers({
	user,
});
