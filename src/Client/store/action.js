import C from "./Constants";

export const addUser = (data = {}) => ({
	type: C.ADD_USER,
	payload: data,
});

export const authenticate = (data = false) => (({
	type: C.ADD_USER,
	payload: data,
}));
