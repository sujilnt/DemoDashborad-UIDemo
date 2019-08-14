import { User } from "./User.model";
/*
export const CreateUser = async (request, response) => {
	try {
		const userCreation = await User.create({
			email: request.email,
			name: request.name,
			password: request.password,
		}).exec();
		response.status(200).json(userCreation);
	} catch (e) {
		response.status(400).end();
	}
};
*/
