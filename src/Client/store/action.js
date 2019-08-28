import C from "./Constants";

const addUser = (data = {}) => ({
	type: C.ADD_USER,
	payload: data,
});
