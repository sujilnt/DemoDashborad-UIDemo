import mongoose from "mongoose";

const userschema = new mongoose.Schema(
	{
		email: {
			type: String,
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
			unique: true,
		},
	},
	{ timestamp: true }
);
export const User = mongoose.model("user", userschema);
