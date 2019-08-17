import { User } from "./User.model";
import uniquid from "uniqid";
import { newToken } from "../../utils/auth";
// CreateUser => A controller that creates user in the Database.
export const CreateUser = async (request, response) => {
	try {
		const { email, password } = request.body;
		let uid = uniquid();
		if (email && password) {
			let token = await newToken(uid);
			console.log(uid, typeof uid, token);
			const user = await User.create({
				uid,
				email,
				password,
			});
			response.status(200).json({ user });
		} else {
			response.status(400).json({ error: "user or password not passed !" });
		}
	} catch (e) {
		console.log(e);
		response.status(400).end();
	}
};
/*
 */
export const getUser = async (request, response) => {
	await console.log(request, response);
};
