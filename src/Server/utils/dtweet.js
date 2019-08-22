import dweetClient from "node-dweetio";
import { Event } from "../Resources/IOT/Event/Event.model";
import { Sensor } from "../Resources/IOT/Sensor/Sensor.model";
const ONE = 1;
const dweetio = new dweetClient();

export const createEvent = async request => {
	await Event.create({
		...request,
	});
};

const getsensorID = async targetName => {
	const splittargetName = targetName.split("/");
	const devicesIndex = splittargetName.indexOf("devices") + ONE;
	const sensorInformation = await Sensor.findOne({
		sensordt: splittargetName[devicesIndex],
	})
		.lean()
		.exec();

	return sensorInformation;
};

const addTemperature = async event => {
	const { data, targetName } = event;
	const sensorid = await getsensorID(targetName);
	if (!sensorid) {
		return;
	}
	console.log("sensorid", sensorid, event);
	await createEvent({
		time: data.updateTime,
		value: data.value,
		id: sensorid._id,
	});
};

export const realtime = () => {
	console.log("realtime working......");
	dweetio.listen_for("OptimisedBuildings", dweet => {
		const { event } = dweet.content;
		switch (event.eventType) {
			case "temperature":
				addTemperature(event);
				break;
			case "batteryStatus":
				console.log("battery Status", event.eventType);
				break;
			default:
				console.log(event.data);
		}
		//console.log("dweet.io is called ", dweet, "background: #222; color: #bada55");
	});
};
