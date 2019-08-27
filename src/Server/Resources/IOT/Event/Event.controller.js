import { Controller } from "../../CrudController.js";
import { Event } from "./Event.model.js";
import { Types } from "mongoose";
export const getEvents = async (request, response) => {
	const { params, query } = request;
	console.log("from ", request.query, request.params);
	let id = params.sensorid;
	let { start, end } = query;
	console.log("date", start, end);
	try {
		const eventdata = await Event.find({
			sid: Types.ObjectId(id),
			time: {
				$gt: start,
				$lt: end,
			},
		})
			.sort({ time: 1 })
			.lean()
			.exec();
		if (!eventdata) {
			response.status(400).end();
		}
		response.status(200).json(eventdata);
	} catch (error) {
		console.log(error);
		response.status(401).end();
	}
};
export default Controller(Event);
