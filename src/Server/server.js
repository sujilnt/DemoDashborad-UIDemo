import express from "express";
import { connect } from "./utils/db";
import { loadGzipBundle } from "./utils/loadGzipBundle";
import userRouter from "./Resources/Login-SignUP/User.route.js";
import morgan from "morgan";
import { json, urlencoded } from "body-parser";
import cors from "cors";
const PORT_NUM = 9001;

const app = express();
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/signup", userRouter);
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
	} catch (e) {
		console.error(e);
	}
};

start();
