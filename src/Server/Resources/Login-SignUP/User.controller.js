import { User } from "./User.model";

import { newToken } from "../../utils/auth";
// CreateUser => A controller that creates user in the Database.
export const CreateUser = async (request, response) => {
	console.log(request.body);
	try {
		const { email, password, name } = request.body;
		console.log("request", email, password, request.body);
		if (email && password && name) {
			let u = await User.create({
				email,
				password,
				name,
			});
			let token = await newToken(u);
			response.status(200).json({ token, u });
		} else {
			response.status(400).json({ error: "user or password not passed !" });
		}
	} catch (e) {
		console.log(e);
		response.status(400).end();
	}
};

export const signIn = async (request, response) => {
	const invalid = { message: "Invalid email and passoword combination" };
	try {
		const { email, password } = request.body;
		if (email && password) {
			const user = await User.findOne({ email: email })
				.select("email password name")
				.exec();
			let name = user._doc.name;
			if (!user) {
				return response.status(400).send(invalid);
			}
			const match = user.checkPassword(password);
			if (!match) {
				return response.return(400).send(invalid);
			}
			const token = newToken(user);
			return response.status(201).send({ token, name });
		} else {
			response.statu(400).send({ message: "cgeck your email and password" });
		}
	} catch (e) {
		console.error(e);
	}
};
/*
 */
export const getUser = async (request, response) => {
	response.status(200).json({ data: request.user });
};
