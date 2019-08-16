import { User } from "./User.model";
import uniquid from "uniqid";
// CreateUser => A controller that creates user in the Database.
export const CreateUser = async (request, response) => {
	try {
		const { email, password } = request.body;
		let uid = uniquid();
		console.log(uid, typeof uid);
		if (email && password) {
			const user = await User.create({
				email,
				password,
				uid,
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
	await console.log(request);
};
