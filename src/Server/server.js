import express from "express";
import { connect } from "./utils/db";
import { loadGzipBundle } from "./utils/loadGzipBundle";
import signUP_Router from "./Resources/Login-SignUP/Sigup.route.js";
import signIn_Router from "./Resources/Login-SignUP/Login.route.js";
import sensor_Router from "./Resources/IOT/Sensor/Sensor.route";
import event_Router from "./Resources/IOT/Event/Event.route";
import tag_Router from "./Resources/IOT/Tag/Tag.route";
import morgan from "morgan";
import { json, urlencoded } from "body-parser";
import { protect } from "./utils/auth";
import { realtime } from "./utils/dtweet";
import cors from "cors";
const PORT_NUM = 9001;

const app = express();
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/signup", signUP_Router);
// app.use('/signin', signIn_Router)
// protected route starts !
app.use("/api", protect);
app.use("/user", signIn_Router);
app.use("/api/sensor", sensor_Router);
app.use("/api/sensor/tag/", tag_Router);
app.use("/api/sensor/events/", event_Router); // sensorid

// loadGzipBundle func => loading all gzip client bundles
loadGzipBundle(app);

/**
 * start => server starting asybchronous function.
 * connect() => connecting to the database
 * app is listening to Port number , default 9001
 */
export const start = async () => {
	try {
		await connect(); // connecting to the database.
		app.listen(PORT_NUM, () => {
			console.log(`App started at port number ${PORT_NUM}`);
		});
		//realtime();
	} catch (e) {
		console.error(e);
	}
};

start();
