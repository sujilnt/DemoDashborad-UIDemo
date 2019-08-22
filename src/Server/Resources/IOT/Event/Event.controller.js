import { Controller } from "../../CrudController.js";
import { Event } from "./Event.model.js";

export const getEvents = async (request, response) => {
	const { params, user } = request;
	console.log("from ", request.query);
	const data = await Event.find({
		time: { $gte: params.start, $lte: params.finish },
	})
		.sort({ time: 1 })
		.lean()
		.exec();
};
export default Controller(Event);
