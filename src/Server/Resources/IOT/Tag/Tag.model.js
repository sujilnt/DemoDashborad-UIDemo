import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
	name: {
		type: String,
		default: "point",
	},
	sid: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "sensor",
		required: true,
	},
});

export const Tag = mongoose.model("tag", tagSchema);
