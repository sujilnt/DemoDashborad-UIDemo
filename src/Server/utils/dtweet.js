import dweetClient from "node-dweetio";
import { Event } from "../Resources/IOT/Event/Event.model";
import { Sensor } from "../Resources/IOT/Sensor/Sensor.model";
import fetch from "node-fetch";
const ONE = 1;
const dweetio = new dweetClient();

export const createEvent = async request => {
	await Event.create({
		...request,
	});
};

export const weatherData = async () => {
	try{
		const response = await fetch("https://fcc-weather-api.glitch.me/api/current?lat=52.746590&lon=-1.473730");
		if (response.status === 200) {
			return response.json();
		}
	}catch(e){
		console.error(e);
	}

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
	const {main} = await weatherData();
	let {temp} = main;
	//console.log(weather);
	if (!sensorid) {
		return;
	}
	console.log("sensorid", sensorid, event, "temperature oat",temp);
	await createEvent({
		time: data.temperature.updateTime,
		value: data.temperature.value,
		sid: sensorid._id,
		oat: temp,
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
