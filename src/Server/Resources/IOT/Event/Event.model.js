import mongoose from "mongoose";
const eventSchema = new mongoose.Schema({
	time: {
		type: Date,
	},
	value: {
		type: String,
	},
	sid: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "sensor",
		required: true,
	},
});
eventSchema.index({ sensor: 1, time: 1 }, { unique: true });
export const Event = mongoose.model("event", eventSchema);
