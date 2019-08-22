import mongoose from "mongoose";
const sensorSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		sensortype: {
			type: String,
			enum: ["Temperature", "Proximity", "Touch", "Battery"],
			required: true,
		},
		sensordt: {
			type: String,
			required: true,
		},
		createdBy: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: "user",
			required: true,
		},
		sensor: {
			type: Boolean,
			default: true,
		},
	},
	{ timetamp: true }
);
sensorSchema.index({ user: 1, sensordt: 1 }, { unique: true });
export const Sensor = mongoose.model("sensor", sensorSchema);
