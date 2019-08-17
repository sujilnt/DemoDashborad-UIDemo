import jwt from "jsonwebtoken";
import { DEV_jwt, DEV_jwtExp } from "babel-dotenv";
const secrets = {
	jwt: DEV_jwt,
	jwtExp: DEV_jwtExp,
};
export const newToken = user => {
	return jwt.sign({ user }, secrets.jwt, {
		expiresIn: secrets.jwtExp,
	});
};

export const verifyToken = token =>
	new Promise((resolve, reject) => {
		jwt.verify(token, secrets.jwt, (err, payload) => {
			if (err) return reject(err);
			resolve(payload);
		});
	});
