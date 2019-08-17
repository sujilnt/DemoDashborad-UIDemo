import mongoose from "mongoose";
import { hash } from "bcryptjs";
const salt_number = 4;
const userschema = new mongoose.Schema(
	{
		email: {
			type: String,
			unique: true,
			required: true,
			trim: true,
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
export const User = mongoose.model("user", userschema);
