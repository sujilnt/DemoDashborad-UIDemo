import mongoose from "mongoose";
const eventSchema = new mongoose.Schema({
	time: {
		type: "Date",
	},
	value: {
		type: "String",
	},
	sid: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "sensor",
		required: true,
	},
});
export const Event = mongoose.model("event", eventSchema);
