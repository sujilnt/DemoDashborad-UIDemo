import mongoose from "mongoose";
import { hash, compare } from "bcryptjs";

const salt_number = 4;
const validateEmail = function(email) {
	let re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
	return re.test(email);
};
const userschema = new mongoose.Schema(
	{
		email: {
			type: String,
			unique: true,
			required: true,
			trim: true,
			validate: [validateEmail, "Please fill a valid email address"],
			match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
		},
		password: {
			type: String,
			required: true,
		},
		uid: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
	},
	{ timestamp: true }
);
userschema.pre("save", async function(next) {
	if (!this.isModified("password")) {
		next();
	}
	let pass_hash = await hash(this.password, salt_number);
	this.password = pass_hash;
	next();
});

userschema.methods.checkPassword = function(password) {
	const hash_password = this.password;
	return new Promise((resolve, reject) => {
		compare(password, hash_password, (err, match) => {
			if (err) {
				return reject(err);
			}
			console.log("match", true);
			resolve(match);
		});
	});
};
export const User = mongoose.model("user", userschema);
