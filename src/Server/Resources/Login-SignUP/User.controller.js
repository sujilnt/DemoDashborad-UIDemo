import { User } from "./User.model";

import { newToken } from "../../utils/auth";
// CreateUser => A controller that creates user in the Database.
export const CreateUser = async (request, response) => {
	try {
		const { email, password } = request.body;
		if (email && password) {
			let u = await User.create({
				email,
				password,
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
				.select("email password")
				.exec();
			if (!user) {
				return response.status(400).send(invalid);
			}
			const match = user.checkPassword(password);
			if (!match) {
				return response.return(400).send(invalid);
			}
			const token = newToken(user);
			return response.status(201).send({ token });
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
