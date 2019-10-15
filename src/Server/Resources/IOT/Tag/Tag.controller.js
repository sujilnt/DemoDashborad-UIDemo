import { Controller } from "../../CrudController.js";
import { Tag } from "./Tag.model";

export const getAllTags = async (request, response) => {
	try {
		const docs = await Tag
			.find({ tag:true })
			.lean()
			.exec();
		response.status(200).json({ data: docs });
	} catch (e) {
		console.error(e);
		response.status(400).end();
	}
};
export const getTagofEachSensor = async(request,response)=>{
	console.log("id", request.params.id);
  try{
      const docs = await Tag
          .find({tag:true, sensorId: request.params.id})
          .lean()
          .exec();
      response.status(200).json({ data:docs });
  }  catch (e) {
      response.status(400).end();
  }
};
export const createManyTag = async (request, response) => {
	try {
		const { body, params, user } = request;
		const { data } = body || [];
		if (data.length <= 0) {
			return response.status(500).end();
		}
		const dataMap = data.map(row => {
			console.log(row, "this is a row",params);
			return {
				name: row,
				sensorId: params.id, // Objectid,
			};
		});
		const createManyModel = await Tag.insertMany(dataMap);
		response
			.status(200)
			.json({ data: createManyModel })
			.end();
	} catch (e) {
		console.error(e);
		response.status(400).end();
	}
};

export const removeOneTag = async (request, response) => {
	console.log("called");
	try {
		const { user, params, body } = request;
		const removed = await Tag.findOneAndRemove({
			sensorId: params.id,
			name: body.data,
		})
			.lean()
			.exec();
		console.log(removed);
		if (!removed) {
			return response.status(400).end();
		}

		return response.status(200).json({ data: removed });
	} catch (e) {
		console.error(e);
		response.status(400).end();
	}
};

export default Controller(Tag);
