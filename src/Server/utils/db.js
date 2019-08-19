// import mongoose and setting up connection to mongoDB
import mongoose from "mongoose";
const mongoDB_URL = "mongodb://localhost:27017/Dashboadv2";
export const connect = () => {
	return mongoose.connect(mongoDB_URL, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
	});
};
